<template>
  <section id="last_recipes">
    <h1 class="titre">Toutes les recettes</h1>
    <recettes id="recettes" class="recettes" :recettes="recettes" />
  </section>
</template>

<script>
import { RECETTES } from '~/gql/queries.js'
export default {
  async asyncData({ $graphql, $route }) {
    const data = await $graphql.default.request(RECETTES)
    const recettes = data.recettes
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
