<template>
  <section>
    <button @click="handleSendEmail">sgsfg</button>

    <!--End mc_embed_signup-->
  </section>
</template>

<script>
  import jsonp from 'jsonp'
  import queryString from 'query-string'

  export default {
    components: {},
    data() {
      return {
        userEmail: null,
        error: false,
        errorMsg: null,
        status: 'inactive', // inactive, requested, success, error
      }
    },
    methods: {
      handleSendEmail() {
        this.$axios
          .post(
            'https://us7.api.mailchimp.com/3.0/lists/512087/members/',
            {
              status: 'subscribed',
              email_address: 'testnick@test.com',
            },
            {
              headers: {
                Authorization: `apikey: 526f6feedb6a5d7c81c818dd78091cdf-us7`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => {
            console.log('SUCCESS', response.data)
          })
          .catch((error) => {
            console.log('safdadfs', error)
          })
      },
      onError(err) {
        // handle error
        console.log('err', err)
      },
      onSuccess() {
        console.log('Success!!')
        // handle success
      },
    },
    mounted() {},
  }
</script>

<style lang="scss" scoped>
</style>