<template>
  <div>
    <van-cell>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div >
          <div
            class="bgimg float_l"
            :style="'background:url(' + movie.img + ') center center / cover'"
          ></div>
          <div class="float_l">
            <div><h3>{{movie.name}}</h3></div>
            <div class="bottom">
              <div>
                评分:
                <van-icon
                  name="star"
                  color="black"
                  v-for="num in movie.grade"
                  :key="num"
                />
                <van-icon
                  name="star-o"
                  color="black"
                  v-for="num in 5 - movie.grade"
                  :key="num"
                />
              </div>
              <div class="overflow_x">
                主演:
                <span class="span_x" v-for="item in movie.cast" :key="item" >{{ item + "  " }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #right-icon>
        <div>
          <div class="tra">
            <van-button type="info" size="small">观影</van-button>
          </div>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup, Button } from "vant";
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  name: "movie",
  props: ['movie',]
};
</script>

<style>
.bgimg {
  padding-top: 40%;
  width: calc((100% - 20px) / 3);
}
.float_l {
  float: left;
}
.tra {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.overflow_x{
  width: 12rem;
  overflow-x: scroll;
  white-space: nowrap;
}
.span_x{
  display: inline-block;
}
</style>
