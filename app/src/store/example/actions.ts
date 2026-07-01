import { ActionTree } from 'vuex';
import { IExampleState } from './types';
import { RootState } from '../types';
import { Example } from '@/models/Example';

export const actions: ActionTree<IExampleState, RootState> = {
  async fetchAll({ commit }): Promise<Example[] | null> {
    try {
      const data = await Example.fetchAll();
      commit('SET_ALL', data);
      return data;
    } catch (err) {
      commit('SET_ALL', null);
    }
    return null;
  },
  async fetch({ commit }, id: number): Promise<Example | null> {
    try {
      const data = await Example.fetch(id);
      commit('SET', data);
      return data;
    } catch (err) {
      commit('SET', null);
    }
    return null;
  }
};
