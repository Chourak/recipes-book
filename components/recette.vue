<template>
  <div
    v-if="recette"
    class="card group rounded-xl duration-250 hover:shadow h-full transition shadow-lg"
  >
    <nuxt-link :to="urlRecette">
      <div
        class="card-image rounded-xl filter-none relative transition duration-300 rounded-b-none"
        :style="{
          backgroundImage: `url(${imageRecette})`,
        }"
        :class="
          !recette.photos.length
            ? 'bg-50 bg-gray-200'
            : 'bg-cover lg:filter-grayscale-50 lg:group-hover:filter-none'
        "
      >
        <div
          v-if="!recette.photos.length"
          class="flex flex-col items-center justify-center h-full"
        >
          <img
            :src="$config.strapiURL + recette.type_plat.image.url"
            :alt="recette.type_plat.nom"
            class="opacity-20 sm:w-32 w-16"
          />
          <p class="font-headings sm:mt-4 mt-0 text-lg font-bold text-gray-400">
            Aucune image
          </p>
        </div>
        <div class="-bottom-8 sm:justify-end absolute flex w-full text-center">
          <div
            class="type-plat sm:mr-1 group-hover:shadow sm:w-16 sm:h-16 flex justify-center w-12 h-12 m-auto transition bg-white rounded-full shadow-none"
          >
            <img
              :src="$config.strapiURL + recette.type_plat.image.url"
              :alt="recette.type_plat.nom"
              class="sm:w-8 w-6"
            />
          </div>
        </div>
      </div>
      <div class="card-content group py-8">
        <h3
          class="font-headings sm:mt-0 group-hover:text-gray-500 sm:mb-3 w-full mt-4 mb-0 text-2xl font-bold leading-none text-center text-blue-400 transition duration-300"
        >
          {{ recette.nom }}
        </h3>
        <p
          v-if="recette.description && $screen.width >= $screen.config.sm"
          class="group-hover:text-gray-400 px-2 text-sm italic leading-tight text-center text-gray-500 transition duration-300"
        >
          &laquo; {{ recette.description }} &raquo;
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Recette',
  props: {
    recette: {
      type: Object,
      required: true,
    },
  },
  computed: {
    urlRecette() {
      return `/recettes/${this.recette.type_plat.slug}/${this.recette.slug}`
    },
    imageRecette() {
      return this.recette.photos.length
        ? `${this.$config.strapiURL}${this.recette.photos[0].formats.small.url}`
        : ''
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  &-image {
    height: 280px;
    background-position: center center;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 639px) {
    &-image {
      height: 150px;
      background-repeat: no-repeat;
    }
  }
}
</style>
