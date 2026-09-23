import glob
import os
import cv2

frames_dir = "public/frames"
files = glob.glob(os.path.join(frames_dir, "*.webp"))
files = [f for f in files if not f.endswith("test_center.webp")]

print(f"Found {len(files)} WebP files in {frames_dir}...")

total_orig = 0
total_new = 0

for file_path in files:
    total_orig += os.path.getsize(file_path)
    img = cv2.imread(file_path)
    if img is None:
        print(f"Warning: Could not read {file_path}")
        continue
    h, w = img.shape[:2]
    new_w, new_h = w // 2, h // 2
    resized = cv2.resize(img, (new_w, new_h), interpolation=cv2.INTER_AREA)
    cv2.imwrite(file_path, resized, [cv2.IMWRITE_WEBP_QUALITY, 85])
    total_new += os.path.getsize(file_path)

if os.path.exists("public/frames/test_center.webp"):
    os.remove("public/frames/test_center.webp")

print(f"Original total size: {total_orig / (1024*1024):.2f} MB")
print(f"Optimized total size: {total_new / (1024*1024):.2f} MB")
print(f"Reduction: {(1 - total_new/total_orig)*100:.1f}%")
