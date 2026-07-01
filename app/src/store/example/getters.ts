import { GetterTree } from 'vuex';
import { IExampleState } from './types';
import { RootState } from '../types';
import { Example } from '@/models/Example';

export const getters: GetterTree<IExampleState, RootState> = {
  examples(state): Example[] | null {
    return state.examples;
  },
  example(state): Example | null {
    return state.example;
  }
};
