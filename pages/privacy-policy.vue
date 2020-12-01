<template>
  <main>
    <article id="top">
      <h1>{{ header }}</h1>
      <SanityContent :blocks="content" />
      <a href="#top">Back to top</a>
    </article>
  </main>
</template>

<script>
  import { privacyPolicyQuery } from '~/utils/groqQuery'
  export default {
    async asyncData(context) {
      const query = await privacyPolicyQuery(context.app.i18n.locale)
      const result = await context.$sanity.fetch(query)
      return {
        ...result,
      }
    },
    mounted() {},
  }
</script>

<style lang="scss" scoped>
  main {
    background: $warmred;
    color: $white;
    width: 100%;
  }
  article {
    width: 100%;
    max-width: 960px;
    padding: 140px 40px 40px 40px;
    margin: 0 auto;
  }
  h1,
  h2,
  p,
  a {
    width: 100%;
    max-width: 520px;
  }
  p,
  h1 {
    margin-bottom: 40px;
  }
  a {
    color: $white;
  }
</style>