<template>
  <div>
    <div>
      <van-cell icon="fire" title="热门榜单" is-link to="index" />
      <movie-x></movie-x>
      <van-cell icon="coupon" title="找电影" is-link />
      <movie v-for="item in movies" :key="item.name" :movie=item></movie>
    </div>
    <van-divider dashed>我也是有底线的</van-divider>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup,Divider  } from "vant";
import { Icon } from "vant";
import movieX from "../components/movie_x.vue";
import Movie from "../components/movie.vue";
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Divider);
export default {
  name: "m",
  components: {
    movieX,
    Movie,
  },
  data() {
    return {
      movies: [
        {
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "电影1",
          grade: 5,
          cast: ["演员1", "演员2", "演员3"],
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "电影2",
          grade: 2,
          cast: ["演员1", "演员2", "演员3"],
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          name: "电影3",
          grade: 1,
          cast: ["演员1", "演员2", "演员3"],
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "电影3",
          grade: 1,
          cast: ["演员1", "演员2", "演员3"],
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          name: "电影3",
          grade: 1,
          cast: ["演员1", "演员2", "演员3"],
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "电影3",
          grade: 1,
          cast: ["演员1", "演员2", "演员3"],
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "电影3",
          grade: 1,
          cast: ["演员1", "演员2", "演员3"],
        },
      ],
    };
  },
};
</script>