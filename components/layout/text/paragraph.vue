<template>
  <p>
    <slot />
  </p>
</template>

<script>
  import { gsap } from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  export default {
    mounted() {
      // console.log(this.$el)
      gsap.set(this.$el, { autoAlpha: 0, y: 50 })

      gsap.to(this.$el, {
        scrollTrigger: {
          trigger: this.$el,
          start: 'top bottom',
          // end: '+=800', // 200px past the start
          // markers: true,
          // scrub: 2,
          // pin: '.hero .sun',
        },
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
        duration: 0.5,
      })

      // y: 0,
      // ease: 'power2.out',
      // duration: 0.5,
    },
  }
</script>

<style lang="scss" scoped>
  p {
    display: block;
  }
</style>