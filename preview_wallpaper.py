#!/usr/bin/env python3
"""
Simple preview server for Keystrike Zoom Waiting Room Wallpaper
Run this to preview the design before generating final images
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

def start_preview():
    """Start a local server to preview the waiting room design"""
    
    # Change to the project directory
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Set up the server
    PORT = 8080
    handler = http.server.SimpleHTTPRequestHandler
    
    # Find an available port
    for port in range(8080, 8090):
        try:
            httpd = socketserver.TCPServer(("", port), handler)
            PORT = port
            break
        except OSError:
            continue
    else:
        print("❌ Could not find an available port")
        return
    
    print("🎨 Keystrike Zoom Wallpaper Preview")
    print("=" * 40)
    print(f"🚀 Starting server on port {PORT}")
    print(f"🔗 Preview URL: http://localhost:{PORT}/public/zoom-waiting-room.html")
    print("\n📋 Preview Instructions:")
    print("1. The page will open in your browser")
    print("2. Set browser zoom to 100%")  
    print("3. For accurate preview, resize browser to 1920x1080")
    print("4. Press F11 for fullscreen view")
    print("5. Press Ctrl+C to stop the server")
    print("\n🔧 To take screenshot:")
    print("- Use browser dev tools (F12)")
    print("- Set device emulation to 1920x1080")
    print("- Take screenshot for final image")
    
    try:
        # Try to open browser automatically
        url = f"http://localhost:{PORT}/public/zoom-waiting-room.html"
        webbrowser.open(url)
        print(f"\n✅ Opening browser to: {url}")
    except:
        print(f"\n⚠️  Please manually open: http://localhost:{PORT}/public/zoom-waiting-room.html")
    
    try:
        print("\n🔄 Server running... (Press Ctrl+C to stop)")
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n🛑 Server stopped")
        httpd.shutdown()

if __name__ == "__main__":
    start_preview()