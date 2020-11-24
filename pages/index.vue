<template>
  <main id="index-page">
    <div class="loading" v-if="loading">
      <Logo class="loading__logo" />
    </div>
    <article class="hero">
      <section class="headline">
        <h1>{{ hero.headline }}</h1>
        <p
          v-for="(paragraph, index) in hero.subtitle"
          :key="`herosubtitle${index}`"
        >
          {{ paragraph }}
        </p>
        <anchor-button type="link" hrefLink="#newsletter" theme="vanilla">{{
          hero.buttonLabel
        }}</anchor-button>
      </section>
      <section class="illustration">
        <hero-illustration />
      </section>
      <section class="sun">
        <sun-illustration />
      </section>
    </article>
    <section class="intro">
      <div class="copy">
        <headline-2>{{ intro.title }}</headline-2>
        <paragraph
          v-for="(paragraph, index) in intro.subtitle"
          :key="`introsubtitle${index}`"
        >
          {{ paragraph }}
        </paragraph>
        <headline-3>HOW IT WORKS</headline-3>
        <paragraph
          v-for="(paragraph, index) in intro.bodyCopy"
          :key="`introbodycopy${index}`"
        >
          {{ paragraph }}
        </paragraph>
        <anchor-button type="link" hrefLink="#newsletter" theme="orange">{{
          intro.buttonLabel
        }}</anchor-button>
      </div>
      <half-image :img="intro.img" alt="Filia In Situ 1" />
    </section>
    <section class="product-highlights">
      <div class="container">
        <figure class="background">
          <img
            :srcset="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,w_1920/${highlights.backgroundImg},
          https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,w_2880/${highlights.backgroundImg} 1.5x,
          https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,w_3840/${highlights.backgroundImg} 2x`"
            :src="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,w_1920/${highlights.backgroundImg}`"
            alt="Filia-InSitu-2"
          />
        </figure>
        <div class="highlights">
          <div class="highlights__wrapper">
            <div
              class="highlight"
              v-for="(highlight, index) in highlights.highlights"
              :key="`hightlight${index}`"
            >
              <figure class="highlight__icon">
                <img
                  :src="`https://res.cloudinary.com/nickjohn/image/upload/c_scale,f_auto,q_100,w_100/${highlight.icon}`"
                  alt="highlight-icon"
                />
              </figure>
              <headline-3>{{ highlight.title }}</headline-3>
              <paragraph>{{ highlight.copy }}</paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="info">
      <half-image :img="info.img" alt="Filia In Situ 3" />
      <div class="copy">
        <!-- <h2>AN INTRODUCTION HEADLINE TO SOME BULLET POINTS</h2> -->
        <ul>
          <li v-for="(point, index) in info.points" :key="`point${index}`">
            <span><tick /></span>
            <headline-4>{{ point.title }}</headline-4>
            <paragraph>{{ point.copy }}</paragraph>
          </li>
        </ul>
        <anchor-button type="link" hrefLink="#newsletter" theme="orange">{{
          info.buttonLabel
        }}</anchor-button>
      </div>
    </section>
    <section class="jumbotron">
      <div class="container">
        <div class="copy">
          <headline-2>{{ jumbotron.heading }}</headline-2>
          <paragraph>{{ jumbotron.copy }}</paragraph>
          <anchor-button type="link" hrefLink="#newsletter" theme="vanilla">{{
            jumbotron.buttonLabel
          }}</anchor-button>
        </div>
        <div class="img-wrap">
          <figure class="figure-1">
            <building-a />
          </figure>
          <figure class="figure-2">
            <building-b />
          </figure>
        </div>
      </div>
    </section>
    <section class="about">
      <figure class="background">
        <img
          :srcset="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,w_1920/${highlights.backgroundImg},
          https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,w_2880/${highlights.backgroundImg} 1.5x,
          https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,w_3840/${highlights.backgroundImg} 2x`"
          :src="`https://res.cloudinary.com/nickjohn/image/upload/c_fill,f_auto,g_auto,w_1920/${highlights.backgroundImg}`"
          alt="Filia-InSitu-2"
        />
      </figure>
      <div class="container">
        <img
          src="~/assets/Assets for build/Filia-Qualifier-Logo-Gradient-RGB.png"
          alt="Filia Logo"
        />
        <headline-3>{{ about.title }}</headline-3>
        <paragraph
          v-for="(paragraph, index) in about.copy"
          :key="`aboutparagraph${index}`"
        >
          {{ paragraph }}
        </paragraph>
      </div>
    </section>
  </main>
</template>

<script>
  import { gsap } from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import Headline2 from '~/components/layout/text/headline2.vue'

  // // * greensock.com/docs/v3/Installation?checked=core,scrollTrigger,splitText#ZIP

  if (process.client) {
    gsap.registerPlugin(SplitText)
    gsap.registerPlugin(ScrollTrigger)
  }
  export default {
    components: { Headline2 },
    data() {
      return {
        loading: true,
        hero: {
          headline: 'Filia. Your Window to Solar Energy.',
          subtitle: [
            'We’re Filia. We bring solar energy to every home by integrating solar technology into the fabric of our blackout blinds. Meaning every window can embrace the limitless power of the sun.',
            'Whether heading up and out to work or down for a siesta, dropping your Filia blind means you can rest easy, knowing you’re always generating clean renewable energy for your home.',
          ],
          buttonLabel: 'Join the solar revolution',
        },
        intro: {
          title: 'A New Breed Of Sun Worshipper',
          subtitle: [
            'The sun is a true energy hero. Did you know that in only an hour it provides the earth with more energy than we use across the globe for an entire year? And it’s predicted that by 2050 solar energy will be responsible for around 80% of all the power we use.',
          ],
          bodyCopy: [
            'Our blinds come as a complete unit. They do everything you’d expect from a blackout blind, keeping you and your home cool and restful but also make the most out of every drop of wonderful sunshine.',
            'Our team of installers will quickly and easily fit your blinds then it’s over to you.',
          ],
          buttonLabel: 'Join the solar revolution',
          img: 'v1605989375/Filia/Filia-InSitu-02_v2.png',
        },
        highlights: {
          backgroundImg: 'v1605979358/Filia/Filia-InSitu-01-Cropped.png',
          highlights: [
            {
              icon: 'v1605978760/Filia/Filia-Icon-Home.svg',
              title: 'Hassle free install',
              copy:
                'After measuring up, your blinds are fitted quickly and easily by our team of installers',
            },
            {
              icon: 'v1605978752/Filia/Filia-Icon-Renewable.svg',
              title: 'Generate your own energy',
              copy:
                'Feed your energy directly back into your home, out to the grid or power up your battery pack. The choice is yours',
            },
            {
              icon: 'v1605978742/Filia/Filia-Icon-Sun.svg',
              title: 'Clean and renewable',
              copy: 'No Co2 emissions and minimal footprint to convert energy',
            },
          ],
        },
        info: {
          img: 'v1605989369/Filia/Filia-InSitu-03_v2.png',
          points: [
            {
              title: 'Cost effective',
              copy: 'Versus conventional solar panels, with an instant return',
            },
            {
              title: 'No roof required',
              copy:
                '*Energy from *5 windows can provide up to *80% of an average homes energy',
            },
            {
              title: 'No red tape',
              copy:
                'No special permissions needed - whether you own or rent your home',
            },
            {
              title: 'We give back',
              copy:
                'We pledge 10% of all profits to sustainable and charitable initiatives',
            },
          ],
          buttonLabel: 'Join the solar revolution',
        },
        jumbotron: {
          heading: 'Wind down charge up',
          copy:
            'Roll down the blinds and unwind. Filia blinds block 99% of penetrable light, so you can take time for yourself, to kick back and rest easy.',
          buttonLabel: 'Join the solar revolution',
        },
        about: {
          title: 'Our Story',
          copy: [
            'We know that small changes can have a big impact, and now more than ever we all need to make changes to ensure the safety and future of the planet we live on. But access to conventional solar power is limited by big financial out-lays and generally to those who own their own homes. We wanted to bring about new democracy for cleaner energy, a simple cost effective solution, and lasting legacy for our future generations.',
          ],
        },
      }
    },
    methods: {
      async enterAnimation() {
        let wWidth = await window.innerWidth
        let vm = await this
        let hero_h1_lines, hero_h1_words
        let mySplitText = await new SplitText('.hero .headline h1', {
          type: 'words,lines',
          linesClass: 'lines',
          wordsClass: 'words',
        })

        hero_h1_lines = await mySplitText.lines
        hero_h1_words = await mySplitText.words
        await gsap.set(hero_h1_lines, { overflow: 'hidden' })
        await gsap.set('.hero .headline h1', { autoAlpha: 1 })

        // * TIMELINE
        let tl = await gsap.timeline({
          // delay: 0.25,
          ease: 'power2.out',
        })

        tl.to('.hero .sun', {
          width: wWidth > 480 ? 390 : 220,
          duration: 2,
          onComplete: () => {},
        })
        tl.fromTo(
          '.hero .illustration',
          { y: 200, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1 },
          '-=0.5'
        )
        tl.fromTo(
          '.mainHeader',
          { y: -200 },
          { y: 0, ease: 'power2.out', duration: 1 },
          '-=0.5'
        )
        tl.fromTo(
          hero_h1_words,
          { y: -70 },
          {
            y: 0,
            ease: 'power2.out',
            duration: 0.5,
          },
          '-=0.5'
        )
        tl.fromTo(
          '.hero .headline p',
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, stagger: 0.2, ease: 'power2.out', duration: 0.5 },
          '-=0.25'
        )
        tl.fromTo(
          '.hero .headline .btn',
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            ease: 'power2.out',
            duration: 0.6,
            onComplete: () => {
              vm.enterComplete()
            },
          },
          '-=0.2'
        )
        tl.pause()
        this.$nextTick(async () => {
          let tlLoading = gsap.timeline({
            delay: 0.25,
            onComplete: async () => {
              vm.loading = await false
              await tl.play()
            },
          })
          tlLoading.fromTo(
            '.loading__logo',
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 1 }
          )
          tlLoading.to(
            '.loading',
            {
              autoAlpha: 0,
              duration: 1,
              ease: 'power2.out',
            },
            '+=1'
          )
        })
      },
      async enterComplete() {
        gsap.set('body', { position: 'relative' })
        this.heroScrollAnimations()
        // this.introScrollAnimations()
        // this.infoScrollAnimations()
        this.jumbotronScrollAnimations()
      },
      async heroScrollAnimations() {
        gsap.to('.hero .sun', {
          scrollTrigger: {
            trigger: '.hero',
            start: '40px 0',
            end: '+=800', // 200px past the start
            markers: false,
            scrub: 1.5,
            // pin: '.hero .sun',
          },
          y: 350,
        })
      },
      introScrollAnimations() {
        this.parallaxImg('.intro figure img', '.intro figure')
      },
      infoScrollAnimations() {
        this.parallaxImg('.info figure img', '.info figure')
      },
      jumbotronScrollAnimations() {
        gsap.to('.jumbotron .figure-1 svg', {
          scrollTrigger: {
            trigger: '.jumbotron',
            start: '10% bottom',
            // markers: true,
            scrub: 1,
          },
          y: '30%',
          ease: 'power2.out',
        })
      },
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
    async mounted() {
      await gsap.set('body', { position: 'fixed' })
      await gsap.set('.hero .sun', { width: '250%' })
      await gsap.set(
        ['.hero .illustration', '.hero .headline h1', '.loading__logo'],
        {
          autoAlpha: 0,
        }
      )
      this.$nextTick(async () => {
        await this.enterAnimation()
      })
    },
  }
</script>

<style lang="scss" scoped>
  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999999;
    background: $warmred;
    &__logo {
      width: 80%;
      max-width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  }
  main {
    min-height: 200vh;
    width: 100%;
    position: relative;
    top: 0;
  }
  .hero {
    width: 100%;
    min-height: 100vh;
    position: relative;
    background: $warmred;
    color: $vanilla;
    overflow: hidden;
    z-index: 1;
    section {
      width: 100%;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      overflow: hidden;
    }
    .headline {
      max-width: 600px;
      padding: 30px;
      text-align: center;
      margin-top: 130px;
      h1,
      p {
        margin-bottom: 30px;
      }
      p {
        display: block;
        overflow: hidden;
      }
    }
    .illustration {
      max-width: 1020px;
      min-width: 540px;
      padding: 70px 30px;
      @include breakpoint(mobile) {
        transform: translateX(-15%);
      }
    }
    .sun {
      position: absolute;
      z-index: 1;
      width: 390px;
      top: 40%;
      left: 47%;
      transform: translate(-50%, -50%) rotate(180deg);
      @include breakpoint(mobile) {
        width: 220px;
        top: 50%;
        left: 50%;
      }
    }
  }
  .intro {
    width: 100%;
    position: relative;
    display: grid;
    grid-template: auto / 50% 50%;
    background: $offWhite;
    z-index: 2;
    @include breakpoint(mobile) {
      grid-template: auto auto / 100%;
    }
    // figure {
    //   width: 100%;
    // }
    .copy {
      width: 100%;
      max-width: 600px;
      padding: 70px;
      justify-self: end;
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      @include breakpoint(mobile) {
        padding: 50px 25px;
        grid-row: 2 / 3;
        grid-column: 1 / 2;
      }
      h2 {
        margin-bottom: 50px;
      }
      p {
        margin: 25px 0;
      }
      a {
        margin-top: 50px;
        @include breakpoint(mobile) {
          margin-top: 25px;
        }
      }
    }
  }
  .product-highlights {
    width: 100%;
    padding: 30px;
    background: $white;
    @include breakpoint(mobile) {
      padding: 25px;
    }
    .container {
      width: 100%;
      position: relative;
      height: 0;
      padding-bottom: 56.25%;
      overflow: hidden;
      @include breakpoint(mobile) {
        height: auto;
        padding-bottom: unset;
      }
    }
    .background,
    .highlights {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      @include breakpoint(mobile) {
        height: auto;
        position: relative;
      }
    }
    .background {
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @include breakpoint(mobile) {
        height: 100%;
        position: absolute;
      }
    }
    .highlights {
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      @include breakpoint(mobile) {
        flex-direction: column;
        padding: 40px 0;
      }
      &__wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        @include breakpoint(mobile) {
          flex-direction: column;
          align-items: center;
        }
      }
    }
    .highlight {
      width: 100%;
      max-width: 220px;
      text-align: center;
      padding: 20px;
      margin: 25px;
      color: $white;
      @include breakpoint(mobile) {
        padding: 20px;
        margin: 0;
      }
      &__icon {
        width: 50px;
        height: 50px;
        margin: 0 auto 15px auto;
        display: block;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      h3 {
        margin-bottom: 20px;
      }
    }
  }
  .info {
    width: 100%;
    position: relative;
    display: grid;
    grid-template: auto / 50% 50%;
    background: $offWhite;
    @include breakpoint(mobile) {
      grid-template: auto auto / 100%;
    }
    .copy {
      width: 100%;
      max-width: 600px;
      padding: 70px;
      justify-self: start;
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      @include breakpoint(mobile) {
        padding: 50px 25px;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }
      h2 {
        margin-bottom: 50px;
      }
      h4 {
        display: inline-block;
        vertical-align: middle;
      }
      p {
        display: block;
        padding-left: 26px;
      }
      ul {
        margin: 25px 0;
      }
      li {
        padding: 15px 0;
        border-top: 1px solid $black;
        span {
          display: inline-block;
          // padding: 5px;
          height: 18px;
          width: 18px;
          margin-right: 5px;
          svg {
            width: 100%;
          }
        }
        &:nth-child(1) {
          border-top: none;
        }
      }
      a {
        margin-top: 50px;
        @include breakpoint(mobile) {
          margin-top: 25px;
        }
      }
    }
  }
  .jumbotron {
    width: 100%;
    padding: 30px;
    background: $white;
    position: relative;
    @include breakpoint(mobile) {
      padding: 25px;
    }
    .container {
      width: 100%;
      position: relative;
      background: $warmred;
      color: $vanilla;
      display: grid;
      grid-template: auto / 45% 55%;
      @include breakpoint(mobile) {
        grid-template: auto auto / 100%;
      }
    }
    .copy {
      width: 460px;
      padding: 120px 50px;
      justify-self: end;
      // position: absolute;
      @include breakpoint(tablet) {
        width: 100%;
      }
      @include breakpoint(mobile) {
        grid-row: 2 / 3;
        padding: 0 40px 60px 40px;
        text-align: center;
        width: 100%;
      }
      p {
        margin: 25px 0;
      }
    }
    .img-wrap {
      position: relative;
      overflow: hidden;
      @include breakpoint(mobile) {
        grid-row: 1 / 2;
        overflow: initial;
      }
    }
    .figure-1 {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      svg {
        height: 160%;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
      @include breakpoint(mobile) {
        display: none;
      }
    }
    .figure-2 {
      width: 160px;
      display: none;
      margin: 0 auto;
      padding: 40px;
      svg {
        width: 100%;
      }
      @include breakpoint(mobile) {
        display: block;
      }
    }
  }
  .about {
    width: 100%;
    height: auto;
    position: relative;
    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.15;
      }
    }
    .container {
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;
      // background: springgreen;
      z-index: 2;
      padding: 140px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include breakpoint(tablet-mobile) {
        padding: 70px 30px;
      }
      img {
        width: 100%;
        max-width: 200px;
      }
    }
    h3,
    p {
      width: 100%;
      max-width: 520px;
      text-align: center;
      margin-top: 40px;
    }
  }
</style>
