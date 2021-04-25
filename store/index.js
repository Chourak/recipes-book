import { DIFFICULTE, TYPES_PLATS } from '~/gql/queries.js'

export const state = () => ({
  listeDifficulte: [],
  listeTypesPlats: [],
})

export const mutations = {
  SET_LISTE_DIFFICULTE(state, listeDifficulte) {
    state.listeDifficulte = listeDifficulte
  },
  SET_LISTE_TYPES_PLATS(state, listeTypesPlats) {
    state.listeTypesPlats = listeTypesPlats
  },
}

export const actions = {
  async nuxtClientInit({ commit }, context) {
    const [dataDifficulte, dataTypesPlats] = await Promise.all([
      context.$graphql.default.request(DIFFICULTE),
      context.$graphql.default.request(TYPES_PLATS),
    ])
    commit('SET_LISTE_DIFFICULTE', dataDifficulte.difficulte.enumValues)
    commit('SET_LISTE_TYPES_PLATS', dataTypesPlats.types)
  },
}
