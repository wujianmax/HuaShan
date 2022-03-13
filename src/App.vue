<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Vue App</title>
      <link rel="stylesheet" href="./css/bootstrap.css" />
    </head>
    <body>
      <div>
        <EleUi />
        <div class="row">
          <TitleVue />
        </div>
        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              <!-- 开启replace将当前记录替换掉上一次的记录，后面无法返回被替换掉的记录页面 -->
              <router-link
                replace
                class="list-group-item"
                active-class="active"
                to="/about"
                >About</router-link
              >
              <router-link
                class="list-group-item"
                active-class="active"
                to="/home"
                >Home</router-link
              >
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
                <!-- 路由对应组件的展示位置 -->
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import TitleVue from "./components/TitleVue.vue";
import EleUi from "./components/EleUi.vue";
export default {
  name: "App",
  components: { TitleVue, EleUi },
};
</script>