<template>
  <figure>
    <img
      :srcset="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,q_80,w_800/${img},
          https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,q_80,w_1200/${img} 1.5x,
          https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,q_80,w_1600/${img} 2x,
          https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,q_80,w_2000/${img} 2.5x,
          https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,q_80,w_2400/${img} 3x`"
      :src="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,q_80,w_800/${img}`"
      :alt="alt"
    />
  </figure>
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
        type: String,
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
          y: '15%',
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
  figure {
    grid-row: 1 / 2;
    grid-column: span 1;
    overflow: hidden;
    position: relative;
    @include breakpoint(mobile) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      height: 50vh;
    }
    img {
      width: 100%;
      height: 120%;
      object-fit: cover;
      bottom: 0;
      position: absolute;
    }
  }
</style>