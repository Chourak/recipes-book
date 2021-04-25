<template>
  <div class="container mx-auto">
    <h1 class="titre flex">
      <span class="font-bold text-blue-400 capitalize">
        {{ type.nom }}
      </span>
      , toutes les recettes
    </h1>
    <div v-if="recettes" class="recettes">
      <div v-for="recette in recettes" :key="recette.id" class="recette">
        <recette :recette="recette" />
      </div>
    </div>
  </div>
</template>

<script>
import { RECETTES_PAR_TYPE, TYPE_PLATS } from '~/gql/queries.js'

export default {
  name: 'Recettes',
  transition: 'fade',
  async asyncData(context) {
    const [dataRecettes, dataType] = await Promise.all([
      context.$graphql.default.request(RECETTES_PAR_TYPE, {
        slug: context.route.params.type_plat,
      }),
      context.$graphql.default.request(TYPE_PLATS, {
        slug: context.route.params.type_plat,
      }),
    ])
    const recettes = dataRecettes.recettes
    const type = dataType.type
    return { recettes, type }
  },
}
</script>
