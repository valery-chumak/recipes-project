<template>
  <div class="home-page">
    <RecipeList />
  </div>
</template>

<script>
import RecipeList from "@/components/RecipeList.vue";

export default {
  name: "HomePage",
  components: {
    RecipeList,
  },
};
</script>
