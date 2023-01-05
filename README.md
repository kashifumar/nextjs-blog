This is a starter template for [Learn Next.js](https://nextjs.org/learn).

Other Hosting Options

Next.js can be deployed to any hosting provider that supports Node.js.

If you’ve followed the instructions so far, your package.json should have the following build and start scripts:

{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}

In your own hosting provider, run the build script once, which builds the production application in the .next folder.

npm run build

After building, the start script starts a Node.js server that supports hybrid pages, serving both statically generated and server-side rendered pages, and API Routes.

npm run start

    Tip: You can customize the start script in package.json to accept a PORT parameter by updating it as: "start": "next start -p $PORT".