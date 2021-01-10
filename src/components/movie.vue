<template>
  <div id="movie" class="scrollx padding_20">
    <a class="display_inlineBlock" v-for="item of movies" :key="item.index">
      <div
        class="height"
        :style="'background:url(' + item.url + ') center center / cover'"
      ></div>
      <div>
        <div class="font_blod">{{ item.name }}</div>
        <div>
          <van-icon name="star" v-for="num in item.grade" :key="num"/>
          <van-icon name="star-o" v-for="num in 5-item.grade" :key="num" />
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
  name: "movie",
  data() {
    return {
      movies: [
        {
          url: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "电影1",
          grade: 2,
        },
        {
          url: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "电影2",
          grade: 4,
        },
        {
          url: "https://img.yzcdn.cn/vant/apple-1.jpg",
          name: "电影3",
          grade: 1,
        },
        {
          url: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "电影4",
          grade: 0,
        },
        {
          url: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "电影1",
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