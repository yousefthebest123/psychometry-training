# Psychometry Trainer Hub

A static, dark-mode, Vercel-ready study site with:

- **English UI** across the site
- **Hebrew math content** for geometry memorization
- **English vocabulary cards** with simple English + Arabic meaning
- Local progress saved in the browser with `localStorage`

## Files

- `index.html` - main application shell
- `styles.css` - full visual design and responsive layout
- `app.js` - app logic, flashcards, drills, theme, and storage
- `data/mathCards.js` - Hebrew geometry deck based on the uploaded geometry summary
- `data/vocabWords.js` - starter vocabulary deck seeded from the uploaded English psychometry tests
- `vercel.json` - static-friendly Vercel config

## Run locally

### Easiest
Open `index.html` directly in your browser.

### Optional local server
If you prefer a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`

## Deploy on Vercel

1. Upload this folder to a Git repository or drag it into Vercel.
2. In Vercel, choose **Other** / **Static site**.
3. No build command is required.
4. No output directory is required.
5. Deploy.

Because the project is plain static HTML/CSS/JS, Vercel can host it directly.

## Editing the math deck

Open `data/mathCards.js`.
Each card looks like this:

```js
{
  id: "equilateral_area",
  topic: "Triangles & Similarity",
  front: "שטח משולש שווה צלעות",
  back: "a²√3 / 4",
  backShort: "a²√3 / 4",
  explain: "כאשר כל הצלעות שוות לאורך a.",
  trap: "לא לבלבל עם בסיס × גובה / 2 בלי לדעת את הגובה.",
  helper: "equilateral area"
}
```

## Editing the vocabulary deck

Open `data/vocabWords.js`.
Each entry looks like this:

```js
{
  word: "ambiguous",
  simple: "having more than one possible meaning",
  arabic: "غامض / ملتبس",
  sentence: "The sentence was ambiguous, so the class understood it in two ways.",
  synonym: "unclear",
  category: "Frequent psychometric",
  difficulty: "medium",
  sourceYears: ["2022", "2024"]
}
```

## Notes

- Math UI controls remain in English, but the actual geometry content stays in Hebrew.
- Vocabulary cards are easy to expand later into a much larger JSON dataset.
- To reset learning progress, use the reset buttons inside the app.
