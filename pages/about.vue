<template>
  <div>
    <!-- Meta -->
    <Head>
      <Title>About | Melinda Golden</Title>
      <Meta
        name="description"
        content="Melinda Golden is a front-end developer based in Asheville, NC."
      />
      <Link rel="canonical" href="https://melindagolden.com/about/" />
    </Head>

    <LayoutPageTitle>
      <template #title> About </template>
    </LayoutPageTitle>

    <div class="pt-10 pb-10 bg-neutral-50 dark:bg-neutral-900">
      <div class="mx-auto max-w-3xl px-4 lg:px-8">
        <NuxtImg
          class="w-auto mb-8 lg:mb-12 rounded-md"
          provider="cloudinary"
          src="v1693853981/nuxt-blog/o99ytskneygipvu8prn4.png"
          alt="Headshot of Melinda Golden"
          placeholder
        />

        <p class="text">
          Hello! I'm Melinda Golden. I'm a Senior Front End Developer based in
          Asheville, NC. I have over
          {{ timeFromNow(DATES.WORK_EXPERIENCE) }} of experience in front-end
          development. I specialize in using HTML, CSS, JavaScript, TypeScript,
          and Vue.
        </p>

        <p class="text">
          I've always been talented at creating art. I attended Kennesaw State
          University, where I studied with a concentration in painting and
          drawing. I originally thought I would study graphic design, but I
          didn't like that the courses focused on packaging design. I took
          courses in drawing, painting, ceramics, typography, and
          black-and-white film photography. I considered pursuing an MFA and
          becoming a college art professor.
        </p>

        <p class="text">
          After college, I got married. My husband had been working in portrait
          studios, but wanted to break out on his own. Since I already had an
          interest in photography from my college courses, we decided to team up
          and start a photography business. We specialized in photographing
          weddings and did that for a few years. My interest in web development
          started when I built our website using WordPress.
        </p>

        <p class="text">
          Eventually, we both decided to pursue different career paths. My
          husband started working for craft beer breweries. I got a part-time
          job working for a group of surgeons. They needed help with their
          websites and marketing. I started diving deeper into learning to code.
          I ended up getting a job working for a small web design company. I was
          still mainly customizing templates at this point, but my coding skills
          were growing.
        </p>

        <p class="text">
          I had a great experience in my first junior software developer role. I
          was in an office working with a small group of engineers, and I
          believe this greatly accelerated my learning. I learned a lot on the
          job, including React, TypeScript, and GraphQL. From there, I decided
          to pursue a remote position at an early-stage startup. They were using
          Vue, so I had to switch tech stacks and learn a new JavaScript
          framework. I was part of a small team of developers, and the pace was
          incredibly fast. As a result, my front-end development skills grew
          exponentially. After only a few years, I was promoted to Senior Front
          End Developer.
        </p>

        <p class="text">
          Currently, I am a Senior Front-End Developer for a company that
          provides online OSHA training. I was hired as the first front-end
          developer on the team. They were migrating their legacy tech stack to
          a new one built in Django and Vue. I was tasked with creating a Vue
          codebase from scratch, including deciding on the front-end
          architecture and libraries, developing a Vue style guide, establishing
          guidelines for CSS and styling, and creating a strategy for unit
          tests. I documented all of this and helped train the other developers
          on how to use Vue.
        </p>

        <p class="text">
          I regularly attend local tech meetups and have even organized a local
          meetup for women in technology. I've also volunteered to speak and
          give presentations to share my knowledge. Outside of work, I enjoy
          traveling, hiking, kayaking, and painting.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DATES } from "@/constants/dates";
</script>

<style scoped>
.text {
  @apply leading-relaxed lg:leading-loose text-lg mb-6 lg:mb-8 text-neutral-600 dark:text-neutral-300;
}

.text:last-child {
  @apply mb-0;
}
</style>
