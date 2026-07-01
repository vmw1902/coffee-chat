<template>
  <section>
    <h1>Data Examples</h1>
    <ul v-if="examples && examples.length">
      <li v-for="(item, index) in examples" :key="index">
        <b>component:</b> {{ item.name }} {{ item }}
      </li>
    </ul>
    <ul v-if="stateExamples && stateExamples.length">
      <li v-for="(item, index) in stateExamples" :key="index">
        <b>store:</b> {{ item.name }} {{ item }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Example } from '@/models/Example';
import { mapGetters } from 'vuex';

@Component<ApiPage>({
  computed: {
    ...mapGetters({ stateExamples: 'exampleModule/examples' })
  }
})
export default class ApiPage extends Vue {
  private examples: Example[] = [];

  private created() {
    this.fetchExamples();
  }

  private async fetchExamples() {
    // fetch directly from model
    this.examples = await Example.fetchAll();

    // Can also fetch via the store
    this.$store.dispatch('exampleModule/fetchAll');
  }
}
</script>
<style lang="scss" scoped>
h1 {
  color: #333;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
