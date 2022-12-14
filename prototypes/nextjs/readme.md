# NextJS Prototypes

Author: [Isaiah Lathem](https://github.com/ilathem)

This folder contains a list of research related to nextjs, a fullstack react framework by Vercel.

You can read more about nextjs [here](https://nextjs.org/)

## Folder Structure:

- next-proto-0
  This next js app is just a plain next js app with PWA capabilities, created by following [this tutorial](https://blog.avneesh.tech/how-to-create-a-pwa-with-nextjs)
- next-proto-1
  - This is how I picture one version of the Field Day project, where the webUI and the phone version are combined into one app, just designated by separate endpoints in the pages directory.
  - In this one, I altered the manifest start url so that the downloaded app will always open the PhoneUI url, but if you open the app through the browser, it gives the user the option to choose.
  - That way, the codebase can be combined for faster development.
- next-proto-2
  This is how I picture another version of the Field Day project, where the webUI and the phone version are separated into two different applications, each with their own separate deployment url.