<template>
  <div class="typePlat__navigation-menu p-4">
    <p class="font-headings my-4 text-2xl font-medium text-gray-800">
      Toutes les recettes par type de plat
    </p>
    <div class="flex flex-col">
      <div v-for="categorie in types" :key="categorie.id">
        <AsideMenuItem
          :slug="`${'/recettes/' + categorie.slug}`"
          :icon="{
            src: $config.strapiURL + categorie.image.url,
            alt: categorie.nom,
          }"
          @click.native="$emit('toggle')"
        >
          {{ categorie.nom }}
        </AsideMenuItem>
      </div>
    </div>
  </div>
</template>

<script>
import { TYPES_PLATS } from '~/gql/queries.js'
export default {
  name: 'MenuTypePlat',
  transition: 'fade',
  data() {
    return {
      types: [],
    }
  },
  mounted() {
    this.fetchTypesPlats()
  },
  methods: {
    async fetchTypesPlats() {
      const data = await this.$graphql.default.request(TYPES_PLATS)
      this.types = data.types
    },
  },
}
</script>
