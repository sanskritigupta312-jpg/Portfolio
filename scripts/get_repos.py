import urllib.request
import json

url = 'https://api.github.com/users/sanskritigupta312-jpg/repos?per_page=100&sort=updated'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        repos = json.loads(resp.read().decode())
        print(f"Total repos found via API: {len(repos)}")
        with open('github_repos.json', 'w', encoding='utf-8') as f:
            json.dump(repos, f, indent=2)
        for r in repos:
            print(f"- {r['name']}: {r.get('description')} | Live: {r.get('homepage')} | Lang: {r.get('language')}")
except Exception as e:
    print("API Error:", e)
