# Personal Website

My personal website.

Built with React and Vite.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is generated in the `dist/` directory.

## Production
```bash
aws s3 sync ./dist/ s3://ivanvolodin.ru/ --delete
```