#!/usr/bin/env python3
"""
Custom HTTP server with image upload support for the presentation.
Run this instead of 'python -m http.server 8000' to enable drag-and-drop image saving.

Usage:  python server.py
"""
import http.server
import os
import json


class PresentationHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path.startswith('/upload'):
            content_length = int(self.headers.get('Content-Length', 0))
            filename = self.headers.get('X-Filename', 'uploaded_image.jpg')
            filename = os.path.basename(filename)  # Security: strip path

            body = self.rfile.read(content_length)
            os.makedirs('Media', exist_ok=True)
            filepath = os.path.join('Media', filename)

            with open(filepath, 'wb') as f:
                f.write(body)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = json.dumps({
                'success': True,
                'path': f'Media/{filename}',
                'filename': filename
            })
            self.wfile.write(response.encode())
            print(f"  ✅ Saved: {filepath} ({len(body)} bytes)")
        else:
            self.send_error(404, 'Not found')

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'X-Filename, Content-Type')
        self.end_headers()


if __name__ == '__main__':
    PORT = 8000
    print(f"🚀 Presentation server running on http://localhost:{PORT}")
    print(f"📁 Serving files from: {os.getcwd()}")
    print(f"📤 Image uploads will be saved to: {os.path.join(os.getcwd(), 'Media')}")
    print(f"   Drag & drop images onto gallery slides to upload")
    print()
    server = http.server.HTTPServer(('', PORT), PresentationHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Server stopped.")
