<template>
  <div class="recipes">
    <h1 class="title">Recipes</h1>
    <div v-if="isLoading">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
    <div v-if="error">{{ error }}</div>
    <ul v-else class="recipe-list">
      <li v-for="recipe in recipes" :key="recipe.id">
        <b-card
          :title="recipe.name"
          :img-src="recipe.img"
          :img-alt="recipe.name"
          class="recipe-card"
        >
          <div class="recipe-card-content">
            <b-badge pill variant="primary">{{ recipe.category }}</b-badge>
            <b-badge pill variant="info">{{ recipe.area }}</b-badge>
          </div>
        </b-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RecipeList",
  computed: {
    ...mapGetters(["recipes", "isLoading", "error"]),
  },
  methods: {
    ...mapActions(["fetchRecipes"]),
  },
  created() {
    this.fetchRecipes();
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 40px;
}
.recipes {
  padding: 20px;

  .recipe-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    list-style: none;
    padding: 0;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .recipe-card {
      height: 100%;
      border: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      .card-body {
        display: flex;
        flex-direction: column;
      }
      .recipe-card-content {
        display: flex;
        gap: 10px;
        margin-top: auto;
      }
    }
  }
}
</style>
