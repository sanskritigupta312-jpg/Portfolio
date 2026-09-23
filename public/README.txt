ASSETS

1. Add your generated character animation as:
   public/character.mp4

2. Run:
   npm run extract

3. The script creates 64 WebP frames in:
   public/frames/

4. Put your actual resume PDF at:
   public/Sanskriti_Resume.pdf

5. Replace the email/GitHub/LinkedIn placeholders in src/main.jsx.

The reference workflow recommends pre-extracting frames rather than seeking
the MP4 at runtime, because browser video seeking can introduce lag.
