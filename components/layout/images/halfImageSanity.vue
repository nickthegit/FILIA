<template>
  <picture>
    <source
      :srcset="`${$urlFor(img)
        .width(480)
        .height(600)
        .quality(80)} 1x, ${$urlFor(img)
        .width(480)
        .height(600)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 480px)"
    />
    <source
      :srcset="`${$urlFor(img)
        .width(600)
        .height(800)
        .quality(80)} 1x, ${$urlFor(img)
        .width(600)
        .height(800)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 600px)"
    />
    <source
      :srcset="`${$urlFor(img)
        .width(800)
        .height(1000)
        .quality(80)} 1x, ${$urlFor(img)
        .width(800)
        .height(1000)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 800px)"
    />
    <source
      :srcset="`${$urlFor(img)
        .width(960)
        .height(1200)
        .quality(80)} 1x, ${$urlFor(img)
        .width(960)
        .height(1200)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 960px)"
    />
    <source
      :srcset="`${$urlFor(img)
        .width(600)
        .height(800)
        .quality(80)} 1x, ${$urlFor(img)
        .width(600)
        .height(800)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 1200px)"
    />
    <source
      :srcset="`${$urlFor(img)
        .width(700)
        .height(900)
        .quality(80)} 1x, ${$urlFor(img)
        .width(700)
        .height(900)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 1400px)"
    />
    <source
      :srcset="`${$urlFor(img)
        .width(800)
        .height(1000)
        .quality(80)} 1x, ${$urlFor(img)
        .width(800)
        .height(1000)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 1600px)"
    />
    <source
      :srcset="`${$urlFor(img)
        .width(900)
        .height(1100)
        .quality(80)} 1x, ${$urlFor(img)
        .width(900)
        .height(1100)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 1800px)"
    />
    <source
      :srcset="`${$urlFor(img)
        .width(1000)
        .height(1200)
        .quality(80)} 1x, ${$urlFor(img)
        .width(1000)
        .height(1200)
        .dpr(2)
        .quality(80)} 2x`"
      media="(min-width: 1801px)"
    />
    <img :src="$urlFor(img).width(800).height(1000)" :alt="alt" />
  </picture>
</template>

<script>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  // // * greensock.com/docs/v3/Installation?checked=core,scrollTrigger,splitText#ZIP

  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
  }
  export default {
    props: {
      img: {
        required: true,
      },
      alt: {
        type: String,
        default: 'Filia In Situ',
      },
    },
    methods: {
      parallaxImg(img, trigger) {
        gsap.to(img, {
          scrollTrigger: {
            trigger: trigger,
            start: '10% bottom',
            markers: false,
            scrub: 0.5,
          },
          y: '-20%',
          ease: 'power2.out',
        })
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.parallaxImg(this.$el.querySelector('img'), this.$el)
      })
    },
  }
</script>

<style lang="scss" scoped>
  picture {
    grid-row: 1 / 2;
    grid-column: span 1;
    overflow: hidden;
    position: relative;
    @include breakpoint(mobile) {
      grid-row: span 1;
      grid-column: 1 / 2;
      height: 50vh;
    }
    img {
      width: 100%;
      height: 125%;
      object-fit: cover;
      top: 0;
      position: absolute;
    }
  }
</style>