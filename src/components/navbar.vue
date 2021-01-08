<template>
  <div>
    <van-row>
      <van-col span="4">
        <div id="allmap"></div>
        <div class="address" @click="getAdd">
          <span>{{ Address }}</span>
          <van-icon size="14" name="location" />
        </div>
      </van-col>
      <van-col span="16">
        <van-search
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
      /></van-col>
      <van-col span="4">
        <div class="login" @click="doLogin">
          <van-icon name="manager" size="20" />
        </div>
      </van-col>
    </van-row>
    <van-dialog v-model="show" title="登录/注册" cancelButtonText="注册" :beforeClose="onLogin" show-cancel-button>
      <login></login>
    </van-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import { Col, Row } from "vant";
import { Icon } from "vant";
import { Search } from "vant";
import { Dialog } from 'vant';
import login from './login.vue'

Vue.use(Dialog);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);

export default {
  components: { login },
  name: "navbar",
  data() {
    return {
      value: "",
      Address: "北京",
      show: false
    };
  },
  mounted() {
    this.getAdd()
  },
  comments:{
    login
  },
  methods: {
    getAdd() {
      new Promise((resolve, reject) => {
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
        let address = "北京市";
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            address = r.address.city;
            resolve(address);
          } else {
          }
        });
      }).then((address) => {
        this.Address = address.replace("市", "");
      });
    },
    doLogin(){
      this.show=true;
    },
    onLogin(action,done){
      new Promise((resolve,reject) => {
        setTimeout(()=>{done()},1000)
      })
    }
  },
};
</script>

<style>
.font-size {
  font-size: 15px;
}
.address {
  text-align: center;
  margin-top: 30%;
  margin-left: 10%;
}
.login {
  margin-top: 35%;
  margin-left: 20%;
}
</style>