 <template>
  <div>
    <div class="cross" @click="reTop">
      <van-icon name="cross" />
    </div>
    <div v-if="regist">
      <h2 class="text-center">注册麦穗</h2>
      <van-form validate-first @failed="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="phone"
          name="phone"
          placeholder="账号 8~16位字母或数字,区分大小写"
          :rules="[
            {
              pattern: /^[0-9a-zA-Z]{8,11}$/g,
              message: '请按规则输入',
              validator: asyncValidator,
            },
          ]"
        />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
        <van-field
          v-model="rePassword"
          type="password"
          placeholder="请输入密码"
          :rules="[{ validator, message: '两次输入的密码不一致' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >注册</van-button
          >
        </div>
        <div class="loginMethod" @click="switchLoginMethod">手机验证码登录</div>
        <div class="pwdForget" @click="pwdForget">找回密码</div>
      </van-form>
    </div>
    <!-- 手机号登录 -->
    <div v-else>
      <h2 class="text-center">手机验证码登录</h2>
      <van-form validate-first @failed="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="phone"
          name="phone"
          placeholder="手机号"
          :rules="[
            { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '请输入正确手机号' },
          ]"
        />
        <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
        <div class="loginMethod" @click="switchLoginMethod">注册麦穗</div>
        <div class="pwdForget" @click="reTop">返回首页</div>
      </van-form>
    </div>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
       @select="onSelect"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { Form } from "vant";
import { Toast } from "vant";
import { Field } from "vant";
import { Button } from "vant";
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);
Vue.use(Button);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Form);
Vue.use(Icon);
export default {
  name: "register",
  data() {
    return {
      regist: false,
      phone: "",
      password: "",
      rePassword: "",
      sms: "",
      show: false,
      actions:[{name: '手机号找回'},{name: '邮箱找回'}]
    };
  },
  methods: {
    onFailed() {},
    validator(value, rule) {
      return this.password == this.rePassword;
    },
    asyncValidator(value, rule) {
      rule.message = "账号已存在";
      return new Promise((resolve) => {
        Toast.loading("验证中...");
        setTimeout(() => {
          Toast.clear();
          resolve(false);
        }, 1000);
      });
    },
    switchLoginMethod() {
      this.regist = !this.regist;
    },
    reTop() {
      this.$router.push("/");
    },
    onCancel(){

    },
    pwdForget(){
      this.show=true;
    },
    onSelect(item){
      console.log(item)
    }
  },
};
</script>

<style scope>
.cross {
  padding-top: 10px;
  padding-left: 10px;
}
.text-center {
  text-align: center;
}
.loginMethod {
  padding: 10px;
  float: left;
  color: #15654f;
}
.pwdForget {
  padding: 10px;
  float: right;
}
</style>