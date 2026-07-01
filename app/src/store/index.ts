import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { exampleModule } from './example';

const store: StoreOptions<RootState> = {
  modules: {
    exampleModule
  }
};

Vue.use(Vuex);

export default new Vuex.Store<RootState>(store);
