<template>
  <article v-if="recette" class="recette">
    <h1 class="titre">{{ recette.nom }}</h1>
    <div class="sm:mb-10 sm:text-base my-2 mb-8 text-sm text-gray-400">
      Par {{ recette.auteur.username }}
    </div>
    <p
      v-if="recette.description"
      class="description md:text-xl mb-12 italic text-blue-400"
    >
      &laquo;&nbsp;{{ recette.description }}&nbsp;&raquo;
    </p>
    <section class="recette__informations rounded-xl">
      <div v-if="recette.photos" class="recette__informations-photos mt-8">
        <div v-for="photo in recette.photos" :key="photo.id" class="photo">
          <img
            class="rounded-xl w-full rounded-b-none"
            sizes="(max-width: 500px) 500px,(max-width: 750px) 750px, 1280px"
            :src="$config.strapiURL + photo.formats.large.url"
            :alt="recette.nom"
          />
        </div>
      </div>
      <div
        class="recette__informations-content rounded-xl grid bg-gray-100 rounded-t-none"
      >
        <div
          class="content__categorie_&_pour border-b border-gray-300 py-4 sm:py-8"
        >
          <div
            class="grid justify-center grid-cols-2 font-semibold text-center"
          >
            <div v-if="recette.difficulte" class="difficulte">
              <div class="icon__wrapper">
                <div class="icon icon-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12.5,1.5C10.73,1.5 9.17,2.67 8.67,4.37C8.14,4.13 7.58,4 7,4A4,4 0 0,0 3,8C3,9.82 4.24,11.41 6,11.87V19H19V11.87C20.76,11.41 22,9.82 22,8A4,4 0 0,0 18,4C17.42,4 16.86,4.13 16.33,4.37C15.83,2.67 14.27,1.5 12.5,1.5M12,10.5H13V17.5H12V10.5M9,12.5H10V17.5H9V12.5M15,12.5H16V17.5H15V12.5M6,20V21A1,1 0 0,0 7,22H18A1,1 0 0,0 19,21V20H6Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="icon-text">{{ recette.difficulte }}</p>
            </div>
            <div v-if="recette.pour" class="pour">
              <div class="icon__wrapper">
                <div class="icon icon-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="icon-text">{{ pour }}</p>
            </div>
          </div>
        </div>
        <div class="content__temps">
          <div
            :class="{
              'grid-cols-1': recette.temps_preparation,
              'grid-cols-2':
                recette.temps_preparation &&
                (recette.temps_cuisson || recette.temps_repos),
              'grid-cols-3':
                recette.temps_preparation &&
                recette.temps_cuisson &&
                recette.temps_repos,
            }"
            class="sm:my-6 grid justify-center my-4 text-sm font-semibold text-center divide-x divide-gray-300"
          >
            <div v-if="recette.temps_preparation" class="temps_preparation">
              <p>Préparation</p>
              <div class="icon__wrapper">
                <div class="icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <p class="icon-text">
                {{ temps_preparation }}
              </p>
            </div>
            <div v-if="recette.temps_cuisson" class="temps_cuisson">
              <p>Cuisson</p>
              <div class="icon__wrapper">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M6,14H8L11,17H9L6,14M4,4H5V3A1,1 0 0,1 6,2H10A1,1 0 0,1 11,3V4H13V3A1,1 0 0,1 14,2H18A1,1 0 0,1 19,3V4H20A2,2 0 0,1 22,6V19A2,2 0 0,1 20,21V22H17V21H7V22H4V21A2,2 0 0,1 2,19V6A2,2 0 0,1 4,4M18,7A1,1 0 0,1 19,8A1,1 0 0,1 18,9A1,1 0 0,1 17,8A1,1 0 0,1 18,7M14,7A1,1 0 0,1 15,8A1,1 0 0,1 14,9A1,1 0 0,1 13,8A1,1 0 0,1 14,7M20,6H4V10H20V6M4,19H20V12H4V19M6,7A1,1 0 0,1 7,8A1,1 0 0,1 6,9A1,1 0 0,1 5,8A1,1 0 0,1 6,7M13,14H15L18,17H16L13,14Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="icon-text">{{ temps_cuisson }}</p>
            </div>
            <div v-if="recette.temps_repos" class="temps_repos">
              <p>Repos</p>
              <div class="icon__wrapper">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M6,2H18V8H18V8L14,12L18,16V16H18V22H6V16H6V16L10,12L6,8V8H6V2M16,16.5L12,12.5L8,16.5V20H16V16.5M12,11.5L16,7.5V4H8V7.5L12,11.5M10,6H14V6.75L12,8.75L10,6.75V6Z"
                    />
                  </svg>
                </div>
              </div>
              <p class="icon-text">{{ temps_repos }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="recette__ingredients__etapes" class="md:flex">
      <section
        v-if="recette.ingredients"
        class="recette__ingredients md:w-1/3 md:mr-4 w-full"
      >
        <h1 class="sous_titre">Ingrédients</h1>
        <ul class="list__ingredients list-disc">
          <li v-for="ingredient in recette.ingredients" :key="ingredient.id">
            {{ ingredient.quantite }}
            <span v-if="ingredient.mesure">
              {{ ingredient.mesure.nom_court }}
            </span>
            <span class="lowercase">{{ ingredient.ingredient.nom }}</span>
          </li>
        </ul>
      </section>
      <section class="recette__etapes md:w-2/3 w-full">
        <h1 class="sous_titre">Préparation</h1>
        <div
          v-for="(preparation, index) in recette.preparation"
          :key="index"
          class="etape flex"
        >
          <div class="position">{{ index + 1 }}</div>
          <p class="p-0">{{ preparation.etape }}</p>
        </div>
      </section>
    </section>
    <section class="notabene">
      <div class="notabene__wrapper">
        <p class="notabene__text">
          &laquo;&nbsp;{{ recette.notabene }}&nbsp;&raquo;
        </p>
      </div>
    </section>
  </article>
</template>

<script>
import { RECETTE } from '~/gql/queries.js'
export default {
  name: 'Recette',
  transition: 'fade',
  async asyncData({ $graphql, $route }) {
    const data = await $graphql.default.request(RECETTE, {
      slug: $route.params.slug,
    })
    const recette = data.recette
    return { recette }
  },
  computed: {
    pour() {
      return `${this.recette.pour.nombre} ${this.recette.pour.quoi}`
    },
    temps_preparation() {
      return `${this.recette.temps_preparation.duree} ${this.recette.temps_preparation.unite.unite_court}`
    },
    temps_cuisson() {
      return `${this.recette.temps_cuisson.duree} ${this.recette.temps_cuisson.unite.unite_court}`
    },
    temps_repos() {
      return `${this.recette.temps_repos.duree} ${this.recette.temps_repos.unite.unite_court}`
    },
  },
}
</script>
<style lang="scss" scoped>
h1 {
  @apply mb-4 text-left;
}
section {
  h1 {
    @apply text-2xl font-bold my-8 text-yellow-500;
  }
}
ul {
  li {
    @apply mb-1;
  }
  @apply text-gray-800 text-sm list-inside ml-2;
}
.content__temps {
  p {
    @apply mb-3;
  }
}
.icon__wrapper {
  @apply flex justify-center;
  .icon {
    &-bg {
      @apply bg-white rounded-full h-12 w-12 flex justify-center m-auto;
    }
    svg {
      @apply my-auto;
    }
    @apply text-blue-400;
  }
  & + .icon-text {
    @apply text-gray-600 mt-2 text-sm;
  }
}
.recette__etapes {
  .etape {
    .position {
      padding-top: 11px;
      @apply rounded-full h-10 w-10 text-gray-400 border-2 border-blue-300 text-center inline-block text-xs font-bold;
    }
    p {
      @apply w-11/12 text-justify px-4;
    }
    @apply mb-6 text-gray-600 items-center;
  }
}
.notabene {
  &__wrapper {
    @apply bg-gray-100 p-6 rounded-lg;
  }
  &__text {
    @apply text-blue-400 text-center italic;
  }
  @apply py-4;
}
</style>
