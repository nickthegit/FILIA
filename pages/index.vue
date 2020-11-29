<template>
  <main id="index-page">
    <Logo class="holding-logo" />
  </main>
</template>

<script>
  export default {
    layout: 'holding',
  }
</script>

<style lang="scss" scoped>
  main {
    height: 100vh;
    width: 100%;
    position: relative;
    top: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $warmred;
  }
  .holding-logo {
    width: 40%;
  }
  .svg {
  }
</style>
