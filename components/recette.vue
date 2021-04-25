<template>
  <div>
    <div
      v-if="recette"
      class="card group rounded-xl duration-250 hover:shadow relative h-full transition shadow-lg"
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
            <p
              class="font-headings sm:mt-4 mt-0 text-lg font-bold text-gray-400"
            >
              Aucune image
            </p>
          </div>
          <div
            class="-bottom-8 sm:justify-end absolute flex w-full text-center"
          >
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

    <div v-if="editable" class="flex items-start justify-between mt-4">
      <div
        class="w-28 hover:bg-red-500 hover:text-white flex items-center justify-center py-1 text-red-500 transition duration-300 rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <span class="text-xs">supprimer</span>
      </div>

      <div
        class="w-28 hover:bg-green-500 hover:text-white flex items-center justify-center py-1 text-green-500 transition duration-300 rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        <span class="text-xs">éditer</span>
      </div>
      <nuxt-link :to="urlRecette">
        <div
          class="w-28 hover:bg-indigo-500 hover:text-white flex items-center justify-center py-1 text-indigo-500 transition duration-300 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span class="text-xs">voir</span>
        </div>
      </nuxt-link>
    </div>
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
    editable: {
      type: Boolean,
      required: false,
      default: false,
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
