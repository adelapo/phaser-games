"""
This will be a GUI program that will enable us to start and restart
the server with buttons rather than having to close and re-run the
normal program.
"""

# https://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python

import sys
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

HandlerClass = SimpleHTTPRequestHandler
ServerClass = BaseHTTPServer.HTTPServer
Protocol = "HTTP/1.0"

if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 8080
server_address = ('127.0.0.1', port)

HandlerClass.protocol_version = Protocol
httpd = ServerClass(server_address, HandlerClass)

sa = httpd.socket.getsockname()
print "Keep this window open!"
print "Your game is running on %s:%s" % (sa[0], sa[1])
httpd.serve_forever()

print "Hello!"
