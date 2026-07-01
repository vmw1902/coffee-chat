<template>
  <div class="app">
    <nav-component></nav-component>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavComponent from '@/components/NavComponent.vue';

@Component<App>({
  components: {
    NavComponent
  }
})
export default class App extends Vue {}
</script>
