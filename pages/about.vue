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

    <div class="py-20">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <nuxt-img
          class="w-auto mb-8 lg:mb-12 rounded-md"
          provider="cloudinary"
          src="v1693853981/nuxt-blog/o99ytskneygipvu8prn4.png"
          alt="Headshot of Melinda Golden"
          placeholder
        />

        <p class="text">
          Hi there! I'm Melinda Golden, a software developer based in Asheville,
          NC. With over {{ timeFromNow("2016-01-30") }} of experience in
          front-end development, I specialize in using HTML, CSS, JavaScript,
          TypeScript, and Vue. What I love most about web development is the
          ability to bring designs to life and create something beautiful from
          scratch. I have a keen eye for design and thoroughly enjoy coding a
          stunning UI.
        </p>

        <p class="text">
          My interest in web development began when I built a website for my
          wedding photography business using WordPress. From there, I began
          teaching myself to code and eventually transitioned to working at a
          web design company. I completed an online coding boot camp in
          full-stack JavaScript, and have been working as a software developer
          ever since.
        </p>

        <p class="text">
          In my free time, I like to work on projects and continue learning. I
          attend local tech meets regularly and even organize a local meetup for
          women in technology. I've also volunteered to speak and give
          presentations to share my knowledge with other developers. Outside of
          work, I enjoy traveling, hiking, kayaking, and painting.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.text {
  @apply leading-relaxed lg:leading-loose text-lg mb-6 lg:mb-8 text-neutral-600 dark:text-neutral-300;
}

.text:last-child {
  @apply mb-0;
}
</style>
