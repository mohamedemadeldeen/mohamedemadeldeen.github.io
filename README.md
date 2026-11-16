# mohamedemadeldeen.github.io

Personal portfolio of Mohamed Emad. Plain HTML, CSS and JS: no build step.

## Edit the content

All text is in `data/portfolio.js`: about, stats, experience, projects, skills, education.

| What | Where |
| --- | --- |
| Profile photo | `assets/images/profile.jpg` (square, about 600×600) |
| CV download | `assets/Mohamed-Emad-CV.pdf` |
| Project video | `assets/videos/<name>.mp4`, set `video:` on the project |
| Video thumbnail | `assets/images/<name>.jpg`, set `poster:` on the project |
| Large video (over ~50 MB) | upload to YouTube (unlisted is fine), put its id in `youtube:` |

A project with no video file shows a titled placeholder, so the site works before the videos are ready.

Compress a screen recording before adding it:

```bash
ffmpeg -i demo.mov -vf "scale=1280:-2" -c:v libx264 -preset veryfast -crf 28 -an demo.mp4
```

(drop `-an` if the demo needs its audio, e.g. Baleegh calls)

## Preview locally

```bash
python -m http.server 8000   # then open http://localhost:8000
```

## Publish on GitHub Pages

1. Create a public repo named exactly `mohamedemadeldeen.github.io`.
2. Push this folder to its `main` branch.
3. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The site is live at https://mohamedemadeldeen.github.io within a minute or two.
