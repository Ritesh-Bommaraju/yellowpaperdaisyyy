# For Mahi

A small, personal corner of the internet — built with HTML, CSS, and vanilla JavaScript. No build step required.

## Quick start

1. Open `index.html` in any modern browser, or serve locally:

```bash
cd mahi-corner
python3 -m http.server 8080
```

Then visit `http://localhost:8080`

2. **Music (Spotify — no MP3 upload needed):** in `script.js`, each record uses `spotifyTrackId`. Copy the ID from the Spotify track URL:
   - `open.spotify.com/track/3hRV0jL4v55rGHXGioz9UK` → `spotifyTrackId: "3hRV0jL4v55rGHXGioz9UK"`
   - Or use local MP3s: set `file: "songs/your-song.mp3"` and leave `spotifyTrackId` empty.

3. Add photos (optional): set `goaPhoto` in CONFIG, star map is already in `images/chapora-stars.png`.

## Personalization

Edit the **CONFIG** block at the top of `script.js`:

- `herName`, `nickname`
- `firstMeetingDate`, `firstMeetingPlace`, `cafe`, `bar`
- `goaPhoto` — one real photo path, e.g. `"images/goa.jpg"`
- `recordCollection` — SIDE A / SIDE B (`spotifyTrackId` or `file` for MP3)
- `museumItems` — Mahi Museum exhibits
- `thingsToDo` — little things section
- `behaviorPromises` — things you can actually promise
- `goaMapMessages` — tap messages for the Goa map
- `universeItems` — her interests and handwritten notes
- `quizQuestions` — quiz content
- `secretLoves` — scroll-reveal list
- `catOpinions` — cat button responses
- `photoMemories` / `gardenPhotos` — optional image paths

## Deploy

### GitHub Pages

1. Push this repo to GitHub
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Your site will be at `https://<username>.github.io/<repo-name>/`

### Netlify

Drag and drop the folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo.

### Vercel

```bash
npx vercel
```

## File structure

```
mahi-corner/
├── index.html
├── styles.css
├── script.js
├── README.md
├── assets/
├── songs/          ← optional local MP3 fallback
└── images/         ← add photos here (optional)
```

## Notes

- Works offline once opened (except Google Fonts — fallbacks provided)
- Mobile-first, accessible, respects `prefers-reduced-motion`
- No copyrighted audio is included — add your own local files
