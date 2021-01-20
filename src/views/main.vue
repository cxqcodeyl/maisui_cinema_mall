<template>
  <div>
    <div>
      <van-cell icon="fire" title="热门榜单" is-link to="index" />
      <movie-x></movie-x>
      <van-cell icon="coupon" title="找电影" is-link />
      <van-list
        v-model="loading"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <movie v-for="item in movies" :key="item.index" :movie="item"></movie>
      </van-list>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { Icon } from "vant";
import movieX from "../components/movie_x.vue";
import Movie from "../components/movie.vue";
import { List } from "vant";

Vue.use(List);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
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
          img: "http://192.168.199.222/image/p2576212449.jpg ",
          name: "电影1",
          grade: 5,
          cast: ["演员1", "演员2", "演员3"],
        },
        {
          img: "http://192.168.199.222/image/p2628373757.jpg",
          name: "电影2",
          grade: 2,
          cast: ["演员1", "演员2", "演员3"],
        },
        {
          img: "http://192.168.199.222/image/p2630010362.jpg",
          name: "电影3",
          grade: 1,
          cast: ["演员1", "演员2", "演员3"],
        },
        {
          img: "http://192.168.199.222/image/p2630386833.jpg",
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
          cast: ["演员1", "演员2", "演员3", "演员4", "演员5"],
        },
        {
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
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
      error: false,
      loading: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.movies.push(this.movies[0])
        this.loading = false;
      }, 1000);
    },
  },
};
</script>