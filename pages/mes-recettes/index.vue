<template>
  <section id="mes-recettes">
    <h1 class="titre">Mes recettes</h1>
    <div class="content">
      <recettes id="recettes" :recettes="recettes" class="recettes" editable />
    </div>
  </section>
</template>
<script>
import { RECETTES_PAR_AUTEUR } from '~/gql/queries.js'
export default {
  middleware: 'auth',
  async asyncData({ $graphql, $strapi }) {
    const data = await $graphql.default.request(RECETTES_PAR_AUTEUR, {
      auteur: $strapi.user.id,
    })
    const recettes = data.recettes
    return { recettes }
  },
}
</script>
