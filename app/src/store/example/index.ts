import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IExampleState } from './types';
import { RootState } from '../types';

export const state: IExampleState = {
  examples: null,
  example: null
};

export const exampleModule: Module<IExampleState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
