<template>
  <div class="home">
    <h1>Intrinsic Vue Template</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component<HomePage>({})
export default class HomePage extends Vue {}
</script>
