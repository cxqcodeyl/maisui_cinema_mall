<template>
  <div id="movie" class="scrollx padding_20">
    <a
      class="display_inlineBlock"
      v-for="item of movies"
      :key="item.index"
      :href="item.url"
    >
      <div
        class="height"
        :style="'background:url(' + item.img + ') center center / cover'"
      ></div>
      <div>
        <div class="font_blod">{{ item.name }}</div>
        <div>
          <van-icon
            name="star"
            color="black"
            v-for="num in item.grade"
            :key="num"
          />
          <van-icon
            name="star-o"
            color="black"
            v-for="num in 5 - item.grade"
            :key="num"
          />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem, Icon } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
export default {
  name: "moviex",
  data() {
    return {
      movies: [
        {
          url: "http://192.168.199.222:8080/#/detail?mov=d1",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "电影1",
          grade: 2,
        },
        {
          url: "http://192.168.199.222:8080/#/detail?mov=d2",
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "电影2",
          grade: 4,
        },
        {
          url: "http://192.168.199.222:8080/#/detail?mov=d3",
          img: "https://img.yzcdn.cn/vant/apple-1.jpg",
          name: "电影3",
          grade: 1,
        },
        {
          url: "http://192.168.199.222:8080/#/detail?mov=d4",
          img: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "电影4",
          grade: 0,
        },
        {
          url: "http://192.168.199.222:8080/#/detail?mov=d5",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "电影5",
          grade: 3,
        },
      ],
    };
  },
};
</script>

<style>
.scrollx {
  overflow-x: scroll;
  white-space: nowrap;
}
.display_inline {
  display: inline-block;
  width: 100px;
  width: calc((100% - 45px) / 3);
  margin-right: 10px;
}
.padding_20 {
  padding: 0 15px;
}
.display_inlineBlock {
  display: inline-block;
  width: 100px;
  width: calc((100% - 45px) / 3);
  margin-right: 10px;
}
.height {
  padding-top: 140%;
}
.font_blod {
  font-size: 13px;
  font-weight: 700;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>