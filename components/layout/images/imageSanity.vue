<template>
  <picture>
    <source
      :srcset="`${$urlFor(img).width(480).quality(80)} 1x, ${$urlFor(img)
        .width(480)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 480px)"
    />
    <source
      :srcset="`${$urlFor(img).width(600).quality(80)} 1x, ${$urlFor(img)
        .width(600)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 600px)"
    />
    <source
      :srcset="`${$urlFor(img).width(800).quality(80)} 1x, ${$urlFor(img)
        .width(800)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 800px)"
    />
    <source
      :srcset="`${$urlFor(img).width(960).quality(80)} 1x, ${$urlFor(img)
        .width(960)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 960px)"
    />
    <source
      :srcset="`${$urlFor(img).width(1200).quality(80)} 1x, ${$urlFor(img)
        .width(1200)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 1200px)"
    />
    <source
      :srcset="`${$urlFor(img).width(1400).quality(80)} 1x, ${$urlFor(img)
        .width(1400)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 1400px)"
    />
    <source
      :srcset="`${$urlFor(img).width(1600).quality(80)} 1x, ${$urlFor(img)
        .width(1600)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 1600px)"
    />
    <source
      :srcset="`${$urlFor(img).width(1800).quality(80)} 1x, ${$urlFor(img)
        .width(1800)
        .dpr(2)
        .quality(80)} 2x`"
      media="(max-width: 1800px)"
    />
    <source
      :srcset="`${$urlFor(img).width(2000).quality(80)} 1x, ${$urlFor(img)
        .width(2000)
        .dpr(2)
        .quality(80)} 2x`"
      media="(min-width: 1801px)"
    />
    <img :src="$urlFor(img).width(1600)" :alt="alt" />
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
          y: '20%',
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
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 125%;
      object-fit: cover;
      bottom: 0;
      position: absolute;
    }
  }
</style>