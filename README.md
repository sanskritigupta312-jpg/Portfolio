# Sanskriti — Cursor Tracking Portfolio

A React/Vite portfolio inspired by the uploaded cursor-tracking portfolio
reference and its 3-step workflow.

## Run

```bash
npm install
npm run dev
```

## Add the character animation

Place the generated directional animation at:

`public/character.mp4`

Then install OpenCV for Python and run:

```bash
npm run extract
```

This creates 64 WebP frames in `public/frames/`.

## Personalize

Edit `src/main.jsx` for:
- email
- LinkedIn
- GitHub
- project links
- project descriptions

Add your resume as:

`public/Sanskriti_Resume.pdf`

## Important

The hero intentionally uses preloaded WebP frames and a canvas renderer,
rather than runtime MP4 seeking. This follows the technical approach in the
uploaded guide.


## Temporary character

A generated placeholder character is already included as:
`public/character-placeholder.png`

So you can run the portfolio now and see the character. Later, replace it
with your own character and generate directional frames for real cursor tracking.


## Ready-to-run temporary character

This package already contains a generated temporary 3D character at
`public/character-placeholder.png`, so the hero renders immediately.
The final personalized character can replace it later.
