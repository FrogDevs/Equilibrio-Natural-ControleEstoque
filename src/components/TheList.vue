<script setup>
import router from '../router'

const props = defineProps({
  listId: {
    type: String,
    default: null
  },
  user: {
    type: String,
    default: ''
  },
  market: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  bgPicture: {
    type: String,
    default: ''
  }
})

function goToRoute() {
  router.push(`/${props.user}/${props.market}/search/${props.category}`)
}
</script>
<template>
  <div
    class="flex h-fit w-full cursor-pointer items-center gap-3 bg-surface p-3 transition-colors duration-200 ease-in-out lg:hover:bg-inverseOnSurface lg:active:bg-[#ece0da]"
    @click="goToRoute"
  >
    <div
      v-if="props.bgPicture"
      :class="props.bgPicture"
      class="h-16 w-80 rounded-lg bg-cover bg-center bg-no-repeat md:hidden"
    ></div>
    <p class="w-64 font-medium text-onSurface">
      {{ props.title }}
    </p>
  </div>
</template>
