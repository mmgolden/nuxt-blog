---
draft: false
title: 'Publishing my first extension to the Chrome Web Store: Remind Day'
date: 2024-07-07T04:00:00.000Z
description: >-
  I published my first Chrome extension to the Chrome Web Store. Remind Day is a
  browser extension that helps you achieve your goals by setting objectives and
  receiving reminders to track progress with check-ins.
tags:
  - projects
---

I published my first Chrome extension to the Chrome Web Store. [Remind Day](https://remindday.com/ "Remind Day") is a browser extension that helps you achieve your goals by setting objectives and receiving reminders to track progress with check-ins.

## Starting small using the stair-step approach

I read Rob Walling’s book Start Small, Stay Small. He proposes a method called the “[stair step approach](https://robwalling.com/2015/03/26/the-stair-step-method-of-bootstrapping/ "Stair Step Approach").” The basic premise is that you shouldn’t start with building a SaaS as your first step on your bootstrapper startup journey. Instead, start with something small, like a plugin in a marketplace or an info product, and then work your way up.

## Why build a Chrome extension

I’m trying to follow that advice by starting with a Chrome extension. Chrome extensions are interesting because I can leverage my existing web development skills. They already have a distribution channel through the Chrome Web Store, similar to the Apple App Store or Google Play.

Successful companies that started as Chrome extensions include Grammarly and Loom, which sold to Atlassian for $975 million. However, there are obvious challenges. Most extensions are free, and people don’t expect to pay for them. I have seen that extensions with a paid plan follow a “freemium” business model or a “pay as you go” model with credits.

I found some Chrome extensions that were fairly complex web apps built into the browser. They had a free and paid plan that charged a small monthly amount. If there are Chrome extensions out there charging money, then it must be worth exploring this option. I decided that my extension would always have a free plan. But if I get enough interest for cloud storage, I will add on a paid plan.

## The inspiration for my Chrome extension

I was struggling with deciding on an idea. I’m a perfectionist, so I have difficulty breaking free from that. I’m always waiting for the “perfect idea” before I start on anything. This time, I decided that the most important thing was just to get started. The idea doesn’t have to be perfect. My main goals were to start something, launch it, and not let it die with other unfinished projects. I thought of this as an experiment.

I was inspired by the objective and key results (OKR) management software used by the last startup I worked at. I liked the idea of creating OKRs and weekly check-ins to see how you were doing. As a solo developer, I wanted to keep track of the things I was working on. I made a simple version in Notion at first. I turned my Notion project into a Chrome extension.

![Notion progress tracker](https://res.cloudinary.com/melindagolden/image/upload/v1720377666/nuxt-blog/blog/ngxp0b7rqha1ocvsknig.png "Notion progress tracker")

## The tech stack for building a Chrome extension

I’m a front-end developer, and I’ve never built a Chrome extension. I wanted to continue using Vue since I work the fastest with it. I found [Plasmo](https://www.plasmo.com/ "Plasmo"), a framework for building browser extensions. You can use React, Vue, or Svelte with it. One of the tricky things with developing Chrome extensions is the reloading aspect, but Plasmo comes with live reloading and HMR, so it’s very similar to developing a regular Vue app.

My tech stack:

* Plasmo
* Vue
* Pinia
* TypeScript
* Tailwind CSS
* Headless UI/Tailwind UI component library

I found examples of other Chrome extensions without an external database. Everything is stored in the browser with the Chrome storage API. The Chrome storage API is similar to `localStorage`, but you won’t find it in the dev tools. I found a Chrome extension that lets you view the Chrome storage area in the dev tools, which helped during development.

This is a great starting point for my MVP since building a backend and hooking up a database would add complexity and take me much more time. However, I have plans to look into using Supabase for cloud storage. The major drawback to using the Chrome storage API is that if you use the local version, it won’t sync between devices, and if you uninstall the extension, all of your data will be deleted, too.

## The MVP feature list

It’s tricky deciding on the MVP features list. You want enough to be valuable to a user but not so much that you are wasting your time when you could already launch and get valuable feedback.

These are the features I identified for my MVP:

* Objectives and key results: these are measurable goals.
* Check-ins: You can think of these as a daily journal to track your progress toward your goals.
* Reminder notifications:  I wanted reminders to complete my check-in (something missing from my Notion project).
* Backup and restore: a must-have because data is stored locally in the browser.
* Dark mode: a dark theme to make it easy on the eyes.

In hindsight, I could have launched with the objectives and key results and added the check-ins and reminder notifications later. Instead, I started with check-ins because I was the most excited about that.

Was dark mode necessary for launch? Absolutely not. But it’s fairly easy to add with Tailwind CSS. I think it only added maybe a day or two of development time. In a review for a different extension, I saw that someone was complaining about not having dark mode.

## Planning my Chrome extension

I think it’s important to think about how your app will look and function before you sit down and start coding. As a front-end developer, good UX and UI are important to me. However, I didn’t think it was necessary to design a pixel-perfect mockup in Figma first. That would have been a waste of time for such a small project. If you’re using a good component library, you don’t need it. Instead, I made some simple wireframes with [Excalidraw](https://excalidraw.com/ "Excalidraw").

![Excalidraw wireframes](https://res.cloudinary.com/melindagolden/image/upload/v1720377858/nuxt-blog/blog/l6mfsr9uhh2kgskkhsm7.png "Excalidraw wireframes")

## Time management with a full-time job

I have a full-time job, so finding the time to work on my extension was challenging. What worked for me was waking up earlier and working on my project for an hour or two before I started my job. Evenings don’t work because I’m usually too tired at the end of the day, and I want to spend time with my family. I would work on it on the weekends.

It took me six months from start to finish. I built a landing page website during this time. Six months is a long time. But I have to accept that I will be slow. I didn’t work on it daily and took some time to do fun things. You can’t work all the time!

## Publishing to the Chrome Web Store

The Chrome developer documentation was a great resource. First, you must create a Chrome developer account using a Gmail email and pay a $5 fee. You’re not limited to only one extension per account, but I think I will create separate accounts for each extension I make, especially if they are unrelated. I have learned that creating separate accounts for everything related to your projects is best.

The documentation says you should only use the minimal permissions required for your extension. I thoroughly checked my permissions to ensure I only required what I needed. Certain permissions will trigger a message when you install the extension. I made the notification permission optional because you can turn on reminder notifications in the settings. The more invasive the extension is with permissions, the longer it will take for the team to review it.

Preparing my store listing took me about a week. Preparing the screenshots I created using Figma took the most time. You must also create a privacy policy if you collect personal information like emails. Finally, after manual testing, I submitted my extension to the Chrome Web Store. In my case, it only took a day for it to be approved and published.

![Remind Day screenshot](https://res.cloudinary.com/melindagolden/image/upload/v1720377959/nuxt-blog/blog/s1bv1xr1gbiddbb5yjnf.png "Remind Day screenshot")

## What I learned from building a Chrome extension

I learned that whatever you’re working on outside your full-time job will probably take much longer than you hoped. I believe I will get faster at it over time as I can start re-using some of the components and code I wrote. There was a learning curve since I hadn’t built a browser extension before.

I built this extension for myself, but I want to talk to people and get feedback earlier for my next project. As developers, we are comfortable building products. That’s the easy part. The hard part is marketing, and marketing is what I will be spending my time on next.
