import http.server
import socketserver
import urllib.request, urllib.parse, http.cookiejar, ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

cj = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx), urllib.request.HTTPCookieProcessor(cj))
opener.addheaders = [('User-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36')]
urllib.request.install_opener(opener)

# Global crumb cache
cached_crumb = None

def get_crumb():
    global cached_crumb
    if cached_crumb:
        return cached_crumb
    try:
        urllib.request.urlopen("https://fc.yahoo.com", timeout=3)
    except:
        pass
    try:
        rsp = urllib.request.urlopen('https://query1.finance.yahoo.com/v1/test/getcrumb', timeout=3)
        cached_crumb = rsp.read().decode('utf-8')
        return cached_crumb
    except Exception:
        return ""

class ProxyHandler(http.server.BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.end_headers()

    def do_GET(self):
        if not self.path.startswith('/?url='):
            self.send_response(400)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(b"Invalid proxy URL format. It should be /?url=URL")
            return
            
        url_to_fetch = urllib.parse.unquote(self.path[6:])
        
        crumb = get_crumb()
        if crumb:
            if '?' in url_to_fetch:
                url_to_fetch += f"&crumb={crumb}"
            else:
                url_to_fetch += f"?crumb={crumb}"

        try:
            req = urllib.request.Request(url_to_fetch)
            req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
            response = urllib.request.urlopen(req, timeout=8)
            data = response.read()
            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(data)
        except Exception as e:
            print("Error proxying:", e)
            self.send_response(500)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(str(e).encode())

class ThreadedHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True

with ThreadedHTTPServer(("", 5005), ProxyHandler) as httpd:
    print("Multi-threaded CORS Proxy running on port 5005...")
    httpd.serve_forever()
