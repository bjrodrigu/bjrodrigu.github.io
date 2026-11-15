# bjrodrigu.github.io

My personal portfolio site: https://bjrodrigu.github.io

Built with React and React Router (Create React App). Deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Development

```sh
npm install
npm start        # http://localhost:3000
npm run build    # production build in build/ (also writes 404.html for client-side routes)
```

Projects shown on the home page and the All Projects page come from
`src/data/projects.js`; screenshots live in `public/projects/`.
