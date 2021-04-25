<template>
  <div class="user__navigation">
    <div
      class="user__navigation-user bg-gradient-to-r from-gray-300 to-blue-400 px-8 py-12"
    >
      <div class="flex justify-start">
        <div
          class="user__icon-wrapper p-4 my-auto bg-gray-100 rounded-full shadow-lg"
        >
          <icon-user-logged width="36" class="m-auto" />
        </div>
        <div class="my-auto ml-6">
          <p class="text-headings text-3xl text-gray-700">
            {{ user.username }}
          </p>
          <p class="text-sm text-gray-600">{{ user.email }}</p>
        </div>
      </div>
    </div>
    <div class="user__navigation-menu p-4">
      <div class="flex flex-col">
        <div v-for="item in menu" :key="item.id">
          <AsideMenuItem
            :slug="item.slug"
            :icon="item.icon"
            @click.native="
              $emit('toggle'), item.id === 'logout' ? logout() : ''
            "
          >
            {{ item.slot }}
          </AsideMenuItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconUserLogged from '~/assets/images/icons/baker.svg'
export default {
  name: 'MenuUser',
  components: {
    iconUserLogged,
  },
  transition: 'fade',
  data() {
    return {
      menu: {
        profil: {
          id: 'profil',
          slot: 'Profil',
          slug: '/profil',
          icon: {
            name: 'iconProfil',
            alt: 'Profil',
          },
        },
        mesRecettes: {
          id: 'mes-recettes',
          slot: 'Mes recettes',
          slug: '/mes-recettes',
          icon: {
            name: 'iconMesRecettes',
            alt: 'Mes recettes',
          },
        },
        logout: {
          id: 'logout',
          slot: 'Déconnexion',
          slug: '/',
          icon: {
            name: 'iconLogout',
            alt: 'Déconnexion',
          },
        },
      },
    }
  },
  computed: {
    user() {
      return this.$strapi.user ? this.$strapi.user : false
    },
  },
  methods: {
    async logout() {
      try {
        await this.$strapi.logout()
        this.$router.push({ path: '/', query: { user: 'out' } })
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
