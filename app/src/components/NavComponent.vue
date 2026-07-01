<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/data">Data</router-link>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavComponent extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
a {
  color: blue;
  text-decoration: none;
}
</style>
