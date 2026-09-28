# Crystal Ball

Workforce planning for small and medium businesses—import your roster and performance reviews to see your team’s future more clearly.

## Features

- **Landing page** — mystical “crystal ball” brand experience with a path into the app
- **Dashboard** — upload employee roster and performance review ratings (CSV)
- **Preview** — row counts and a short table preview after each upload

## Getting started

From this directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) (dev server uses port **3001**).

## CSV uploads

**Employee roster** (example columns): `employee_id`, `name`, `department`, `role`, `start_date`

**Performance reviews** (example columns): `employee_id`, `review_period`, `rating`, `reviewer`

Uploads are processed in the browser for now; persistence and analytics can be added next.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
