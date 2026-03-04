#!/usr/bin/env python3
"""
Generate Keystrike Zoom Waiting Room Wallpaper
Creates PNG and JPG versions at 1920x1080 and optional 4K
"""

import os
import sys
from pathlib import Path

try:
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from PIL import Image
    import time
except ImportError:
    print("Required packages not installed. Install with:")
    print("pip install selenium pillow")
    print("Also need Chrome/Chromium browser installed")
    sys.exit(1)

def setup_chrome_driver():
    """Setup headless Chrome driver for screenshot"""
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--window-size=1920,1080")
    chrome_options.add_argument("--force-device-scale-factor=1")
    
    try:
        driver = webdriver.Chrome(options=chrome_options)
        return driver
    except Exception as e:
        print(f"Error setting up Chrome driver: {e}")
        print("Make sure Chrome/Chromium is installed")
        return None

def generate_images():
    """Generate the waiting room images"""
    script_dir = Path(__file__).parent
    html_file = script_dir / "public" / "zoom-waiting-room.html"
    
    if not html_file.exists():
        print(f"HTML file not found: {html_file}")
        return False
    
    print("Setting up Chrome driver...")
    driver = setup_chrome_driver()
    if not driver:
        return False
    
    try:
        # Load the HTML file
        file_url = f"file://{html_file.absolute()}"
        print(f"Loading: {file_url}")
        driver.get(file_url)
        
        # Wait for page to load
        time.sleep(3)
        
        # Set window size for 1920x1080
        driver.set_window_size(1920, 1080)
        time.sleep(1)
        
        # Take screenshot for 1920x1080
        print("Generating 1920x1080 images...")
        screenshot_1080 = driver.get_screenshot_as_png()
        
        # Save PNG version
        png_1080_path = script_dir / "Keystrike_ZoomWaitingRoom_RecipeForResilience_1920x1080.png"
        with open(png_1080_path, "wb") as f:
            f.write(screenshot_1080)
        print(f"✓ Created: {png_1080_path}")
        
        # Convert to JPG
        jpg_1080_path = script_dir / "Keystrike_ZoomWaitingRoom_RecipeForResilience_1920x1080.jpg"
        img = Image.open(png_1080_path)
        # Convert RGBA to RGB for JPG
        if img.mode == 'RGBA':
            rgb_img = Image.new('RGB', img.size, (15, 20, 25))  # Dark background
            rgb_img.paste(img, mask=img.split()[-1])  # Use alpha as mask
            rgb_img.save(jpg_1080_path, "JPEG", quality=95)
        else:
            img.save(jpg_1080_path, "JPEG", quality=95)
        print(f"✓ Created: {jpg_1080_path}")
        
        # Generate 4K version (optional)
        print("Generating 4K (3840x2160) version...")
        driver.set_window_size(3840, 2160)
        time.sleep(2)
        
        screenshot_4k = driver.get_screenshot_as_png()
        
        # Save 4K PNG
        png_4k_path = script_dir / "Keystrike_ZoomWaitingRoom_RecipeForResilience_3840x2160.png"
        with open(png_4k_path, "wb") as f:
            f.write(screenshot_4k)
        print(f"✓ Created: {png_4k_path}")
        
        print("\n🎉 All images generated successfully!")
        print("\nFiles created:")
        print(f"  • {png_1080_path.name}")
        print(f"  • {jpg_1080_path.name}")
        print(f"  • {png_4k_path.name}")
        print(f"  • {html_file.name} (editable source)")
        
        return True
        
    except Exception as e:
        print(f"Error generating images: {e}")
        return False
    
    finally:
        driver.quit()

if __name__ == "__main__":
    print("🎨 Keystrike Zoom Waiting Room Generator")
    print("=" * 50)
    
    success = generate_images()
    
    if success:
        print("\n✅ Generation complete!")
        print("\nNext steps:")
        print("1. Review the generated images")
        print("2. Test in Zoom to ensure proper display")
        print("3. Use the HTML file for future edits")
    else:
        print("\n❌ Generation failed!")
        print("Check error messages above and ensure all dependencies are installed.")