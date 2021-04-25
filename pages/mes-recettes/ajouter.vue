<template>
  <section id="mes-recettes">
    <div id="ariane" class="pt-8">
      <ul class="flex text-sm font-bold text-gray-400">
        <li>
          <nuxt-link to="/mes-recettes" class="hover:text-blue-400">
            Mes recettes
          </nuxt-link>
        </li>
        <li>Ajouter une recette</li>
      </ul>
    </div>
    <h1 class="titre">Ajouter une recette</h1>
    <div class="content">
      <div class="rounded-xl p-8 bg-gray-100">
        <form @submit.prevent="submit()">
          <input type="hidden" name="auteur" :value="form.auteur" />
          <input type="hidden" name="slug" :value="form.slug" />
          <div class="relative flex flex-col py-4">
            <label for="visible">Recette visible ?</label>
            <input
              id="visible"
              v-model="form.visible"
              type="checkbox"
              name="visible"
              value=""
            />
          </div>
          <div class="relative flex flex-col py-4">
            <label for="publique">Recette publique ?</label>
            <input
              id="publique"
              v-model="form.publique"
              type="checkbox"
              name="publique"
              value=""
            />
          </div>
          <div class="relative flex flex-col py-4">
            <FormInputText
              v-model="form.nom"
              name="nom"
              placeholder="Nom de la recette"
              label="Nom de la recette"
              required
              @input="slugify($event)"
            />
          </div>

          <div class="relative flex flex-col py-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-600"
              for="description"
            >
              Description
            </label>
            <textarea
              id="description"
              v-model="form.description"
              name="description"
              placeholder="Entrez une description courte de la recette"
              required
              class="ring-gray-100 focus:border-white focus:shadow-none focus:ring-4 w-full px-3 py-3 text-sm leading-tight transition border rounded-md shadow-inner appearance-none"
            ></textarea>
          </div>
          <div class="relative flex flex-col py-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-600"
              for="description"
            >
              Type de plat
            </label>
            <select
              v-model="form.type_plat"
              class="ring-gray-100 focus:border-white focus:shadow-none focus:ring-4 w-full px-3 py-3 text-sm leading-tight transition border rounded-md shadow-inner appearance-none"
            >
              <option
                v-for="item in listeTypesPlats"
                :key="item.nom"
                :value="item.id"
              >
                {{ item.nom }}
              </option>
            </select>
          </div>
          <div class="relative flex flex-col py-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-600"
              for="description"
            >
              Difficulté
            </label>
            <select
              v-model="form.difficulte"
              class="ring-gray-100 focus:border-white focus:shadow-none focus:ring-4 w-full px-3 py-3 text-sm leading-tight transition border rounded-md shadow-inner appearance-none"
            >
              <option v-for="item in listeDifficulte" :key="item.name">
                {{ item.name }}
              </option>
            </select>
          </div>
          <input type="submit" value="Créer" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listeTypesPlats: this.$store.state.listeTypesPlats,
      listeDifficulte: this.$store.state.listeDifficulte,
      slug: '',
      form: {
        auteur: this.$strapi.user.id,
        nom: '',
        slug: '',
        description: '',
        difficulte: '',
        type_plat: '',
        visible: false,
        publique: false,
      },
    }
  },
  methods: {
    slugify(slug) {
      this.form.slug = this.$slugify(slug)
    },
    async submit() {
      try {
        const create = await this.$strapi.$recettes.create(this.form)
        // eslint-disable-next-line
        console.log(create)
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss">
#ariane {
  ul {
    li {
      &:last-child {
        &::after {
          content: '';
        }
      }
      &::after {
        content: '>';
        margin: 0 5px;
      }
    }
  }
}
</style>
