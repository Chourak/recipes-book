<template>
  <nuxt-link :to="slug" class="group flex flex-row">
    <div
      class="icone rounded-full p-3 bg-transparent group-hover:bg-blue-100 transition duration-250"
    >
      <component
        :is="icon.name"
        v-if="icon.name"
        width="32"
        height="32"
        :alt="icon.alt"
      />
      <img v-else :src="icon.src" :alt="icon.alt" width="32" height="32" />
    </div>
    <p
      class="my-auto ml-2 pt-1 text-gray-700 group-hover:text-blue-500 capitalize"
    >
      <slot></slot>
    </p>
  </nuxt-link>
</template>

<script>
import iconProfil from '~/assets/images/icons/baker.svg'
import iconMesRecettes from '~/assets/images/icons/livre.svg'
import iconLogout from '~/assets/images/icons/logout.svg'
export default {
  name: 'MenuItem',
  components: { iconProfil, iconMesRecettes, iconLogout },
  props: {
    slug: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
  },
}
</script>
