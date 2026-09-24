import os
import subprocess
import time
import json
import cv2

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = os.path.abspath("public/projects")
os.makedirs(OUTPUT_DIR, exist_ok=True)

projects = [
    {
        "id": "asis-ai",
        "title": "ASIS-AI",
        "url": "https://asis-ai.vercel.app",
        "github": "https://github.com/sanskritigupta312-jpg/ASIS-AI",
        "filename": "asis-ai.png"
    },
    {
        "id": "modern-shoe",
        "title": "Modern Shoe UI",
        "url": "https://modern-shoe-web-ui-react.vercel.app/",
        "github": "https://github.com/sanskritigupta312-jpg/modern-shoe-web-UI-react",
        "filename": "modern-shoe.png"
    },
    {
        "id": "coffee",
        "title": "Coffee Artisans",
        "url": "https://coffee-sage-three.vercel.app",
        "github": "https://github.com/sanskritigupta312-jpg/Coffee",
        "filename": "coffee.png"
    },
    {
        "id": "market-minds",
        "title": "MarketMinds",
        "url": "https://market-minds-phi.vercel.app",
        "github": "https://github.com/sanskritigupta312-jpg/MarketMinds",
        "filename": "market-minds.png"
    },
    {
        "id": "pixelgo",
        "title": "PixelGo Studio",
        "url": "https://pixelgo-sage.vercel.app",
        "github": "https://github.com/sanskritigupta312-jpg/pixelgo",
        "filename": "pixelgo.png"
    },
    {
        "id": "pixelgo-landing",
        "title": "PixelGo Landing Page",
        "url": "https://pixel-go-landing-page.vercel.app",
        "github": "https://github.com/sanskritigupta312-jpg/PixelGo-LandingPage",
        "filename": "pixelgo-landing.png"
    },
    {
        "id": "vasera-society",
        "title": "Vasera Society Web",
        "url": "https://vasera-society-web.vercel.app",
        "github": "https://github.com/sanskritigupta312-jpg/Vasera-Society-Web",
        "filename": "vasera-society.png"
    },
    {
        "id": "neetu-lg",
        "title": "Neetu Luxury Goods",
        "url": "https://neetu-lg.vercel.app",
        "github": "https://github.com/sanskritigupta312-jpg/Neetu-LG",
        "filename": "neetu-lg.png"
    },
    {
        "id": "dhruv-portfolio",
        "title": "Dhruv Portfolio",
        "url": "https://dhruv-portfolio-one-tau.vercel.app",
        "github": "https://github.com/sanskritigupta312-jpg/Dhruv-Portfolio",
        "filename": "dhruv-portfolio.png"
    },
    {
        "id": "sanskriti-portfolio-v1",
        "title": "My Portfolio (V1)",
        "url": "https://my-portfolio-psi-liard-97.vercel.app/",
        "github": "https://github.com/sanskritigupta312-jpg/My-Portfolio",
        "filename": "my-portfolio-v1.png"
    },
    {
        "id": "amazon-clone",
        "title": "Amazon Web Clone",
        "url": "https://sanskritigupta312-jpg.github.io/Amazon-clone/",
        "github": "https://github.com/sanskritigupta312-jpg/Amazon-clone",
        "filename": "amazon-clone.png"
    },
    {
        "id": "amazon-designing",
        "title": "Amazon Architecture UI",
        "url": "https://github.com/sanskritigupta312-jpg/Amazon-Clone-Designing-Website",
        "github": "https://github.com/sanskritigupta312-jpg/Amazon-Clone-Designing-Website",
        "filename": "amazon-designing.png"
    },
    {
        "id": "flipkart-clone",
        "title": "Flipkart Desktop Clone",
        "url": "https://sanskritigupta312-jpg.github.io/Flipkart-Clone-Designing-Web/",
        "github": "https://github.com/sanskritigupta312-jpg/Flipkart-Clone-Designing-Web",
        "filename": "flipkart-clone.png"
    },
    {
        "id": "typing-test",
        "title": "Speed Typing Test",
        "url": "https://sanskritigupta312-jpg.github.io/Typing-Test/",
        "github": "https://github.com/sanskritigupta312-jpg/Typing-Test",
        "filename": "typing-test.png"
    },
    {
        "id": "tic-tac-toe",
        "title": "Tic Tac Toe Game",
        "url": "https://sanskritigupta312-jpg.github.io/Tic-Tac-Toe/",
        "github": "https://github.com/sanskritigupta312-jpg/Tic-Tac-Toe",
        "filename": "tic-tac-toe.png"
    },
    {
        "id": "rock-paper-scissors",
        "title": "Rock Paper Scissors",
        "url": "https://sanskritigupta312-jpg.github.io/Rock-Paper-Scissors/",
        "github": "https://github.com/sanskritigupta312-jpg/Rock-Paper-Scissors",
        "filename": "rock-paper-scissors.png"
    },
    {
        "id": "insta-automation",
        "title": "Insta Post Automation",
        "url": "https://github.com/sanskritigupta312-jpg/Insta-Post-Automation",
        "github": "https://github.com/sanskritigupta312-jpg/Insta-Post-Automation",
        "filename": "insta-automation.png"
    },
    {
        "id": "portfolio-master",
        "title": "Interactive 3D Portfolio",
        "url": "https://portfolio-ten-pearl-nxwqcavy9t.vercel.app",
        "github": "https://github.com/sanskritigupta312-jpg/Portfolio",
        "filename": "portfolio-master.png"
    }
]

print(f"Starting screenshot capture for {len(projects)} projects...")

for p in projects:
    dest = os.path.join(OUTPUT_DIR, p["filename"])
    target_url = p["url"] or p["github"]
    print(f"Capturing [{p['title']}] from {target_url} -> {p['filename']}...")
    
    cmd = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,900",
        "--virtual-time-budget=3500",
        "--run-all-compositor-stages-before-draw",
        f"--screenshot={dest}",
        target_url
    ]
    try:
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=25)
        if os.path.exists(dest) and os.path.getsize(dest) > 1000:
            print(f"  OK: {p['filename']} ({os.path.getsize(dest)} bytes)")
        else:
            print(f"  FAIL or small: attempting fallback with github url...")
            cmd[-1] = p["github"]
            subprocess.run(cmd, capture_output=True, text=True, timeout=25)
            print(f"  Result fallback size: {os.path.getsize(dest) if os.path.exists(dest) else 'NOT FOUND'}")
    except Exception as e:
        print(f"  Error on {p['title']}: {e}")

print("Screenshot capture process finished!")
