<template>
  <div>
    <header class="sticky top-0 z-10 flex w-full h-24 px-4 bg-gray-100">
      <nav class="container grid max-w-screen-xl grid-cols-3 mx-auto">
        <div class="my-auto">
          <button
            :class="{ isActive: drawerIsOpen === true }"
            class="btn btn-menu"
            @click="toggleTypePlatMenu()"
          >
            <icon-menu v-if="!drawerIsOpen" width="24" />
            <icon-close v-else width="24" />
          </button>
          <nuxt-link
            to="/"
            tag="button"
            @click.native="drawerIsOpen = userMenuIsOpen = false"
          >
            <icon-home width="24" />
          </nuxt-link>
        </div>
        <div class="m-auto">
          <nuxt-link to="/" class="group flex">
            <logo icon-size="16" animate />
          </nuxt-link>
        </div>
        <div class="relative justify-end my-auto text-right">
          <button
            v-if="user.confirmed"
            id="user-menu"
            aria-haspopup="true"
            aria-expanded="true"
            class="user"
            @click="toggleUserMenu()"
          >
            <icon-user-logged width="24" alt="avatar" />
          </button>
          <nuxt-link v-else to="/login" class="user" tag="button">
            <icon-user width="24" :alt="user.username" />
          </nuxt-link>
        </div>
      </nav>
    </header>

    <div
      v-show="drawerIsOpen || userMenuIsOpen"
      class="overlay fixed z-10 w-full h-full transition-opacity"
      @keydown.esc="drawerIsOpen = userMenuIsOpen = false"
    >
      <div
        class="overlay-black absolute w-full h-full bg-black opacity-50"
        tabindex="0"
        @click="drawerIsOpen = userMenuIsOpen = false"
      ></div>
    </div>
    <aside
      :class="drawerIsOpen ? '-translate-x-0' : '-translate-x-full'"
      class="drawer sm:max-w-sm fixed left-0 top-auto z-30 w-full h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white"
    >
      <AsideMenuTypePlat @toggle="toggleTypePlatMenu" />
    </aside>
    <aside
      v-if="user.confirmed"
      :class="userMenuIsOpen ? 'translate-x-0' : 'translate-x-full'"
      class="drawer sm:max-w-sm fixed right-0 top-auto z-30 w-full h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white"
    >
      <AsideMenuUser @toggle="toggleUserMenu" />
    </aside>
  </div>
</template>

<script>
import iconMenu from '~/assets/images/icons/menu.svg'
import iconClose from '~/assets/images/icons/close.svg'
import iconHome from '~/assets/images/icons/home.svg'
import iconUser from '~/assets/images/icons/user.svg'
import iconUserLogged from '~/assets/images/icons/baker.svg'
export default {
  components: { iconMenu, iconClose, iconHome, iconUser, iconUserLogged },
  data() {
    return {
      drawerIsOpen: false,
      userMenuIsOpen: false,
    }
  },
  computed: {
    user() {
      return this.$strapi.user ? this.$strapi.user : false
    },
  },
  methods: {
    toggleTypePlatMenu() {
      this.userMenuIsOpen = false
      this.drawerIsOpen = !this.drawerIsOpen
    },
    toggleUserMenu() {
      this.drawerIsOpen = false
      this.userMenuIsOpen = !this.userMenuIsOpen
    },
  },
}
</script>
<style scoped lang="scss">
nav button {
  @apply p-3 bg-none rounded-full text-gray-500 transition-all duration-150;
}
nav button:hover,
nav button.isActive {
  @apply bg-gray-200 text-gray-700;
}
</style>
