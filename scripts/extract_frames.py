"""
Pre-extract 64 circular WebP frames and center neutral pose from the character video.
Adheres strictly to guide.pdf (Page 9: Step 03 - Master Prompt):
- 8 compass directions mapped smoothly around 360-degree circular trajectory
- High-quality WebP frames (frame-00.webp ... frame-63.webp)
- Neutral direct camera-facing pose (center.webp)
"""

import cv2
import os
import sys
import argparse

def inspect_video(video_path):
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error: Could not open '{video_path}'")
        return None

    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    duration = total_frames / fps if fps > 0 else 0
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    print("\n" + "=" * 55)
    print(" VIDEO INSPECTION")
    print("=" * 55)
    print(f" Source:     {video_path}")
    print(f" Resolution: {width} x {height}")
    print(f" Total:      {total_frames} frames")
    print(f" FPS:        {fps:.2f}")
    print(f" Duration:   {duration:.2f} seconds")
    print("=" * 55 + "\n")

    cap.release()
    return total_frames, fps

def extract_frames(video_path, output_dir):
    if not os.path.exists(video_path):
        print(f"Error: Video file '{video_path}' not found.")
        return False

    os.makedirs(output_dir, exist_ok=True)
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error: Failed to open '{video_path}' with OpenCV.")
        return False

    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    print(f"Processing '{video_path}' ({total_frames} frames @ {fps:.1f} fps)...")

    # 8 compass directions mapped clockwise around circular trajectory:
    # 0 deg: RIGHT, 45 deg: DOWN-RIGHT, 90 deg: DOWN, 135 deg: DOWN-LEFT,
    # 180 deg: LEFT, 225 deg: UP-LEFT, 270 deg: UP, 315 deg: UP-RIGHT, 360 deg: RIGHT
    anchors = [
        (0,   145), # RIGHT
        (45,  125), # DOWN-RIGHT
        (90,  105), # DOWN
        (135, 85),  # DOWN-LEFT
        (180, 60),  # LEFT
        (225, 45),  # UP-LEFT
        (270, 32),  # UP
        (315, 8),   # UP-RIGHT
        (360, 145)  # Loop back to RIGHT
    ]

    print("Extracting 64 high-quality directional WebP frames...")
    for i in range(64):
        deg = (i / 64.0) * 360.0

        if deg >= 315:
            t = (deg - 315) / 45.0
            if t < 0.5:
                v_frame = round(8 - t * 2 * 8)
            else:
                v_frame = round(150 - (t - 0.5) * 2 * 5)
        else:
            for seg in range(len(anchors) - 2):
                a1, f1 = anchors[seg]
                a2, f2 = anchors[seg + 1]
                if a1 <= deg <= a2:
                    t = (deg - a1) / (a2 - a1)
                    v_frame = round(f1 + t * (f2 - f1))
                    break

        cap.set(cv2.CAP_PROP_POS_FRAMES, v_frame)
        ok, frame = cap.read()
        if ok:
            out_path = os.path.join(output_dir, f"frame-{i:02d}.webp")
            cv2.imwrite(out_path, frame, [cv2.IMWRITE_WEBP_QUALITY, 95])

    print(f"Saved 64 directional frames to '{output_dir}'.")

    # Extract center neutral pose (looking directly at camera)
    center_frame_pos = min(total_frames - 1, 191)
    cap.set(cv2.CAP_PROP_POS_FRAMES, center_frame_pos)
    ok, center_frame = cap.read()
    if ok:
        center_path = os.path.join(output_dir, "center.webp")
        cv2.imwrite(center_path, center_frame, [cv2.IMWRITE_WEBP_QUALITY, 96])
        print(f"Saved neutral eye-contact frame to '{center_path}'.")

    cap.release()
    print("Done! Frames ready for zero-ghosting canvas renderer.")
    return True

def main():
    parser = argparse.ArgumentParser(description="Extract 64 directional frames + center pose.")
    parser.add_argument("input", nargs="?", default="public/character.mp4")
    parser.add_argument("output", nargs="?", default="public/frames")
    parser.add_argument("--inspect", action="store_true")
    args = parser.parse_args()

    if args.inspect:
        inspect_video(args.input)
    else:
        extract_frames(args.input, args.output)

if __name__ == "__main__":
    main()
