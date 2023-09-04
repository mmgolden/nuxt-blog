---
draft: false
title: How to build a blog with Nuxt and TinaCMS
date: 2023-09-04T04:00:00.000Z
description: >-
  In this article, I will show you how to build a blog using Nuxt 3, Nuxt
  Content, and TinaCMS. Nuxt is an open-source framework built on Vue.js.
  TinaCMS is an open-source, Git-backed, headless content management system
  (CMS).
tags:
  - tutorials
  - nuxt
---

In this article, I will show you how to build a blog using Nuxt 3, Nuxt Content, and TinaCMS. Nuxt is an open-source framework built on Vue.js. TinaCMS is an open-source, Git-backed, headless content management system (CMS).

## Why build a blog with Nuxt

I am a front-end developer who has been using [Vue](https://vuejs.org/ "Vue") professionally for the past few years. I wanted to build a blog for my website. I initially went with [Gridsome](https://gridsome.org/ "Gridsome") because it is similar to [Gatsby](https://www.gatsbyjs.com/ "Gatsby"). I’ve used Gatsby before and thought it was great. However, Gridsome has not been updated to Vue 3, and it doesn’t look like it will. I decided to switch to Nuxt. There is a lot of support behind the Nuxt project, and there are several modules that extend the functionality of Nuxt. It can produce static-generated websites and is SEO-friendly.

## Why use TinaCMS as a headless CMS

First, I tried to use [Strapi](https://strapi.io/ "Strapi") as my headless CMS. While I liked using Strapi, the problem was the hosting. At the time, Strapi cloud hosting did not exist. When I tried to host Strapi, I discovered it required a lot of resources and would cost much more than what I wanted to pay for a simple blog. I could not justify the hosting costs. That is when I started looking into alternatives.

I found Forestry. The big difference was that it was Git-based. This means you create your blog posts in Markdown and store them in your GitHub repository. There’s no need to host a separate headless CMS for your website! Unfortunately, Forestry was shut down because they introduced its successor, TinaCMS. TinaCMS was built initially to support [Next.js](https://nextjs.org/ "Next.js"), so some of the features are unavailable for Vue.js at the time of this writing. However, all of the basic features still work with Nuxt.

## Use the Nuxt TinaCMS starter template

You can use the [starter template](https://github.com/mmgolden/nuxt-tinacms-starter "starter template") I created or follow the steps below. The starter template features:

* [Nuxt 3](https://nuxt.com/ "Nuxt 3")
* [Nuxt Content](https://content.nuxtjs.org/ "Nuxt Content")
* [TinaCMS](https://tina.io/ "TinaCMS")
* [Netlify functions](https://www.netlify.com/products/functions/ "Netlify functions")
* Media management with [Cloudinary](https://cloudinary.com/ "Cloudinary")
* TypeScript
* ESLint
* Prettier

## Getting started with Nuxt Content

The first step is to start a new Nuxt Content project. Nuxt Content allows you to write your content in markdown and query it in your components. It provides components to render markdown content in a rich-text format.

In the directory where you want your project to be, run this command in your terminal where `content-app` is the name of your project:

`npx nuxi@latest init content-app -t content`

Inside the `content-app` directory, install the dependencies:

`npm install`

Then start the development server:

`npm run dev`

You can now view the site at http://localhost:3000.

You now have a basic structure to create a blog. Your blog posts will be saved as markdown files in the `content` folder. Each file represents a separate blog post, and the file’s name will be translated to the URL for the blog post:

`content/my-first-blog-post.md`  -> `https://mywebsite.com/my-first-blog-post/`

## Install and configure ESLint and Prettier with Nuxt

ESLint is a tool to identify problems with your code. Prettier is a code formatter. Nuxt does not come with ESLint or Prettier, so we must install them. We’ll want to install TypeScript as well.

Install the following dependencies:

```
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier typescript @types/node @typescript-eslint/parser @nuxtjs/eslint-config-typescript
```

In the root of the `content-app` directory, add a file named `.eslintrc.cjs` and add this to the file:

```json
// .eslintrc.cjs

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {},
};
```

Then, in your `package.json` file, add a script to lint all of your files:

```json
// package.json

"scripts": {
    // ...
    "lint": "eslint ."
  },
```

Now you can use this script to run ESLint:

`npm run lint`

## Installing and configuring TinaCMS with Nuxt

Currently, TinaCMS still needs an installation guide specifically for Nuxt. You will have to follow the [framework-agnostic](https://tina.io/docs/frameworks/other/ "framework-agnostic") TinaCMS setup guide.

First, sign up for a free [Tina Cloud](https://app.tina.io/register "Tina Cloud") account. The Tina Cloud dashboard allows you to create projects and set up users. A project connects to your GitHub repository and authorizes Tina Cloud to push and pull content directly from it.

Next, install the TinaCMS CLI:

`npx @tinacms/cli@latest init`

You can enter your Tina Cloud Client ID from the dashboard or enter it later.

Choose NPM for your package manager.

Choose “other” for the framework you are using.

Select yes to using TypeScript for the Tina configuration.

When prompted for the public assets directory, enter `public`.

Next, update the build scripts in the `package.json` file:

```json
// package.json

"scripts": {
  "build": "tinacms build && nuxt build",
  "dev": "tinacms dev -c 'nuxt dev'",
  "generate": "tinacms build && nuxt generate",
  "preview": "nuxt preview",
  "lint": "eslint ."
},
```

You can now configure TinaCMS in the `tina/config.ts` file. The config file is where you will [model your content](https://tina.io/docs/schema/ "model your content"). You can copy and paste this into your config for a basic setup:

```typescript
// tina/config.ts

import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || "master";

export default defineConfig({
  branch,
  clientId: process.env.NUXT_TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.NUXT_TINA_TOKEN || "", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
```

For the Client ID and token, you can store those values as environment variables in a .env file in the root of the `content-app` directory. Avoid committing environment variables to Git.

### Creating your first post with TinaCMS

Inside the `content/` folder, you can delete the `posts/` folder and `index.md` and `about.md` files that were added after the project was created.

Now, you are ready to start the application.

`npm run dev`

You can view the Tina dashboard locally by going to http://localhost:3000/admin/.

Under collections and in posts, you can add a new post. Add “Hello world” for the title and whatever you want for the body. Save the post.

Tina automatically added a new file called `Hello-world.md` in the `content/` folder.

```markdown
// content/Hello-world.md

---
title: Hello world
---

This is my first post!
```

Now, if you go to http://localhost:3000/hello-world you will see the content of your post.

### How to query content with Nuxt Content

You have a basic blog setup with Nuxt and Tina CMS. However, your blog post page only shows the content of your post. If you want to show the title on the page, you’ll need to add a query in `pages/[…slug].vue`. `[…slug].vue` is a catch-all route. It will match all routes under that path.

Inside the `[…slug].vue` file, the markdown content is rendered with the `<ContentDoc />` component provided by Nuxt Content. To show the post title, we will need to add a query. We will use Nuxt Content for all querying. Nuxt Content uses a MongoDB-like syntax to build queries. Check out the [documentation](https://content.nuxtjs.org/guide/displaying/querying "documentation") about querying to learn more.

```
// pages/[...slug].vue

<template>
  <main v-if="post">
    <h1>{{ post.title }}</h1>
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
const { path } = useRoute();

const { data: post } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
```

Returning to `/hello-world`, we can see the post title.

So far, we have installed Nuxt with Nuxt Content, installed and configured ESLint and Prettier, installed and configured TinaCMS, and created and queried our first blog post. You could stop here if you wanted to. However, you might notice that media is stored in the site’s repository by default. Continue reading to set up an external media provider with Cloudinary.

## How to add Cloudinary as an external media provider for TinaCMS

Tina supports [external media providers](https://tina.io/docs/reference/media/external/authentication/ "external media prodividers"), but you must set up and host a backend media handler. We will use Cloudinary as our media provider and Netlify functions to host our media handler. Cloudinary offers digital asset management and image and video APIs that can transform assets. Netlify allows you to build and deploy your sites from Git. You can also deploy server-side code that works as API endpoints with Netlify functions.

You must sign up for free [Cloudinary](https://cloudinary.com/users/register_free "Cloudinary") and [Netlify](https://app.netlify.com/signup "Netlify") accounts.

Add a `netlify.toml` file in the directory’s root. We must set up redirects so that all requests to `/api/*` can be redirected to Netlify functions.

```
# netlify.toml

[functions]
    external_node_modules = ["express", "vm2"]
    node_bundler = "esbuild"
[[redirects]]
    force = true
    from = "/api/*"
    status = 200
    to = "/.netlify/functions/api/:splat"
```

Adding redirects in the `netlify.toml` file doesn’t work for me. The redirects worked after adding a ￼`_redirects`￼ file in the ￼`public/`￼ folder.

```
// public/_redirects

/api/*    /.netlify/functions/api/:splat    200
```

### Install dependencies

Install the following dependencies:

`npm install @tinacms/auth serverless-http express next-tinacms-cloudinary`

Note: The name of the `next-tinacms-cloudinary` library is misleading. It can be used with Nuxt and not just Next.js.

### Create a media handler function

Create a folder named `netlify` in the root of the directory. Add a child folder called `functions`. Add another child folder named `api`. Add a file inside `netlify/functions/api` named `api.js` and add this to the file:

```javascript
// netlify/functions/api/api.js

import ServerlessHttp from "serverless-http";
import express, { Router } from "express";
import { isAuthorized } from "@tinacms/auth";
import { createMediaHandler } from "next-tinacms-cloudinary/dist/handlers";

const app = express();
const router = Router();

const mediaHandler = createMediaHandler({
  cloud_name: process.env.NUXT_CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.NUXT_CLOUDINARY_API_KEY || "",
  api_secret: process.env.NUXT_CLOUDINARY_API_SECRET || "",
  authorized: async (req, _res) => {
    try {
      if (process.env.NODE_ENV === "development") {
        return true;
      }

      const user = await isAuthorized(req);

      return user && user.verified;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});

router.get("/cloudinary/media", mediaHandler);

router.post("/cloudinary/media", mediaHandler);

router.delete("/cloudinary/media/:media", (req, res) => {
  req.query.media = ["media", req.params.media];
  return mediaHandler(req, res);
});

app.use("/api/", router);
app.use("/.netlify/functions/api/", router);

export const handler = ServerlessHttp(app);
```

You must get your Cloudinary cloud name, API key, and API secret from your Cloudinary dashboard. Store the values in your `.env` file.

### Register the media store in the TinaCMS config

Now, replace the default repo-based media with the external media store.

```typescript
// tina/config.ts

export default defineConfig({
  // ...
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  }
});
```

### Testing Netlify functions locally

To test Netlify functions locally, you must first install the Netlify CLI. Follow the [documentation](https://docs.netlify.com/cli/get-started/ "documentation") for installation, authentication, and linking your site.

To run a local development environment:

`netlify dev`

Now open the TinaCMS dashboard at http://localhost:8888/admin/.

Now, the media manager has been updated to use Cloudinary.

## Next steps

At this point, you have a fully functional blog that works locally. You can now deploy your blog to Netlify. First, connect Netlify to your GitHub repository. You will use `tinacms build && nuxt generate` as the build command. The publish directory is `dist`.  You will also want to add the environment variables from the `.env` file to Netlify. Every time you publish a post, Tina will create a commit in your `master` branch, automatically starting a build in Netlify to update your website.
