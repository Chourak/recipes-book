import gql from 'graphql-tag'
export const RECETTE = gql`
  query Recette($slug: String) {
    recette: recetteBySlug(slug: $slug) {
      id
      auteur {
        username
      }
      slug
      nom
      description
      difficulte
      notabene
      ingredients {
        id
        quantite
        ingredient {
          id
          nom
        }
        mesure {
          id
          nom
          nom_court
        }
      }
      preparation {
        id
        etape
        image {
          formats
        }
      }
      temps_preparation {
        id
        duree
        unite {
          id
          unite
          unite_court
        }
      }
      temps_cuisson {
        id
        duree
        unite {
          id
          unite
          unite_court
        }
      }
      temps_repos {
        id
        duree
        unite {
          id
          unite
          unite_court
        }
      }
      pour {
        id
        nombre
        quoi
        precisions
      }
      type_plat {
        id
        nom
        slug
        image {
          id
          url
        }
      }
      photos {
        id
        url
        formats
      }
    }
  }
`
export const RECETTES = gql`
  query Recettes {
    recettes(sort: "created_at:desc") {
      created_at
      id
      auteur {
        username
      }
      slug
      nom
      description
      difficulte
      temps_preparation {
        id
        duree
        unite {
          id
          unite
        }
      }
      temps_cuisson {
        duree
        unite {
          id
          unite
        }
      }
      temps_repos {
        duree
        unite {
          id
          unite
        }
      }
      type_plat {
        id
        nom
        slug
        image {
          id
          url
        }
      }
      photos {
        id
        url
        formats
      }
    }
  }
`
export const RECETTES_PAR_TYPE = gql`
  query Recettes($slug: String) {
    recettes(sort: "created_at:desc", where: { type_plat: { slug: $slug } }) {
      created_at
      slug
      id
      auteur {
        username
      }
      nom
      description
      type_plat {
        id
        nom
        slug
        image {
          id
          url
        }
      }
      photos {
        id
        url
        formats
      }
    }
  }
`
export const RECETTES_PAR_AUTEUR = gql`
  query Recettes($auteur: Int) {
    recettes(sort: "created_at:desc", where: { auteur: $auteur }) {
      created_at
      slug
      id
      auteur {
        id
        username
      }
      nom
      description
      type_plat {
        id
        nom
        slug
        image {
          id
          url
        }
      }
      photos {
        id
        url
        formats
      }
    }
  }
`
export const TYPES_PLATS = gql`
  query Types {
    types(sort: "nom:asc") {
      id
      nom
      slug
      image {
        id
        url
      }
    }
  }
`
export const TYPE_PLATS = gql`
  query Type($slug: String) {
    type: typeBySlug(slug: $slug) {
      id
      nom
      slug
      image {
        id
        url
      }
    }
  }
`
export const DIFFICULTE = gql`
  query difficulte {
    difficulte: __type(name: "ENUM_RECETTE_DIFFICULTE") {
      enumValues {
        name
      }
    }
  }
`
