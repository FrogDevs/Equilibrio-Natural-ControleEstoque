<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, defineAsyncComponent } from 'vue'
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import SearchModal from '../components/SearchModal.vue'

const asyncList = defineAsyncComponent(() =>
  import('../components/TheList.vue')
)

const props = defineProps({
  user: {
    type: String,
    default: ''
  },
  market: {
    type: String,
    default: ''
  }
})

const modal = ref(false)
</script>
<template>
  <header class="fixed top-0 z-10 w-full">
    <ToolBar :user="props.user" :market="props.market" />
  </header>
  <main class="flex flex-col items-center px-4 pb-24">
    <div
      class="mt-20 flex w-full cursor-pointer gap-4 rounded-full bg-tertiaryContainer py-3 px-3 transition-colors duration-200 ease-in-out hover:bg-[#caec73] active:bg-[#c5ea64] sm:w-fit"
      @click="modal = true"
    >
      <i class="material-symbols-rounded text-onTertiaryContainer">search</i>
      <p class="w-[15.75rem] text-onTertiaryContainer">Pesquisar um produto</p>
    </div>
    <section class="flex w-full flex-col gap-2 pt-4">
      <asyncList
        title="Alimentícios"
        :user="props.user"
        :market="props.market"
        category="alimenticios"
        bg-picture="bg-category1"
      />
      <asyncList
        title="Beleza"
        :user="props.user"
        :market="props.market"
        category="beleza"
        bg-picture="bg-category2"
      />
      <asyncList
        title="Óleos essenciais"
        :user="props.user"
        :market="props.market"
        category="oleos"
        bg-picture="bg-category3"
      />
      <asyncList
        title="Suplementos"
        :user="props.user"
        :market="props.market"
        category="suplementos"
        bg-picture="bg-category4"
      />
      <asyncList
        title="Vida & Saúde"
        :user="props.user"
        :market="props.market"
        category="vida"
        bg-picture="bg-category5"
      />
    </section>
  </main>
  <footer class="fixed bottom-0 w-full">
    <NavigationBar :home="true" :user="props.user" :market="props.market" />
  </footer>
  <SearchModal
    v-if="modal"
    :user="props.user"
    :market="props.market"
    @close-modal="modal = false"
  />
</template>
