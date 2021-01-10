<template>
  <div>
    <div>
      <van-cell icon="fire" title="热门榜单" is-link to="index" />
      <movie></movie>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { Icon } from "vant";
import movie from "../components/movie";
import Movie from "../components/movie.vue";

Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  name: "m",
  components: {
    movie,
  },
};
</script>