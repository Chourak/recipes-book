<template>
  <section id="last_recipes">
    <h1 class="titre">Les dernières recettes</h1>
    <Recettes id="recettes" class="recettes" :recettes="recettes" />
  </section>
</template>

<script>
import { RECETTES } from '~/gql/queries.js'
export default {
  async asyncData({ $graphql }) {
    const data = await $graphql.default.request(RECETTES)
    const recettes = data.recettes
    // eslint-disable-next-line
    console.log(recettes)
    return { recettes }
  },
  watch: {
    $route(to, from) {
      if (this.$route.query.user === 'out') {
        this.$toast.error('Vous êtes maintenant déconnecté')
        this.$router.replace({ path: '/' })
      }
    },
  },
  mounted() {
    if (this.$route.query.user === 'in') {
      this.$toast.success('Vous êtes maintenant connecté')
      this.$router.replace({ path: '/' })
    }
    if (this.$route.query.user === 'out') {
      this.$toast.error('Vous êtes maintenant déconnecté')
      this.$router.replace({ path: '/' })
    }
  },
}
</script>
