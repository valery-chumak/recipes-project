import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import type { Recipe } from "@/types/Recipe";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [] as Recipe[],
    isLoading: false,
    error: null as string | null,
  },
  mutations: {
    setRecipes(state, recipes: Recipe[]) {
      state.recipes = recipes;
    },
    setIsLoading(state, isLoading: boolean) {
      state.isLoading = isLoading;
    },
    setError(state, error: string | null) {
      state.error = error;
    },
  },
  actions: {
    async fetchRecipes({ commit }) {
      commit("setIsLoading", true);
      commit("setError", null);
      try {
        const response = await axios.get("/db.json");
        const recipes = response.data.recipes ?? [];
        console.log(recipes);
        commit("setRecipes", recipes as Recipe[]);
      } catch (error) {
        commit("setError", "Failed to fetch recipes");
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  getters: {
    recipes: (state) => state.recipes,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
  },
});
