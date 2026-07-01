import { MutationTree } from 'vuex';
import { IExampleState } from './types';
import { Example } from '@/models/Example';

export const mutations: MutationTree<IExampleState> = {
  SET_ALL(state, examples: Example[]) {
    state.examples = examples;
  },
  SET(state, examples: Example) {
    state.example = examples;
  }
};
