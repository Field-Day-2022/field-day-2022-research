# Next-Proto-0

An introduction to Next JS + next-pwa

To run this, open a terminal in the `next-proto-0` directory, do an `npm install`, `npm run build`, `npm run dev`

- [Next JS](https://nextjs.org/)
  - Underlying architecture
- [Next-PWA](https://github.com/shadowwalker/next-pwa)
  - PWA adapter, uses [Workbox](https://developer.chrome.com/docs/workbox/)
- [Getting rid of babel linting warnings](https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel)

## Steps to get going from scratch:
1. run `npx create-next-app next-proto-0` to create the Next app
2. run `npm i next-pwa` to install next-pwa 
3. Go to [https://www.simicart.com/manifest-generator.html/](https://www.simicart.com/manifest-generator.html/) to generate the manifest  
   1. Make sure Display is "Standalone"
   2. Once downloaded, unzip and copy contents into the public directory
   3. Rename `manifest.webmanifest` to `manifest.json`
4. Create a new file `_document.js` under the pages directory, and paste in the following:
```js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```
5. Go to `next.config.js` and replace the contents with this:
```js
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
})
```
6. Now run `npm run build` to build the PWA, then `npm run dev` to start it locally.

## Auto-Generated ReadME:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
