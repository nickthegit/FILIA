<template>
  <h2>
    <slot />
  </h2>
</template>

<script>
  import { gsap } from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  export default {
    mounted() {
      let mySplitText = new SplitText(this.$el, {
        type: 'words,lines',
        linesClass: 'lines',
        wordsClass: 'words',
      })

      let lines = mySplitText.lines
      let words = mySplitText.words

      gsap.set(lines, { overflow: 'hidden' })
      gsap.set(words, { y: -70 })

      gsap.to(words, {
        scrollTrigger: {
          trigger: this.$el,
          start: 'top bottom',
          // end: '+=800', // 200px past the start
          // markers: true,
          // scrub: 2,
          // pin: '.hero .sun',
        },
        y: 0,
        duration: 1,
        ease: 'power2.out',
      })

      // y: 0,
      // ease: 'power2.out',
      // duration: 0.5,
    },
  }
</script>

<style lang="scss" scoped>
  h2 {
    display: block;
  }
</style>