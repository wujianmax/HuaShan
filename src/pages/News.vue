<template>
  <div>
    <h1 :style="{ opacity }">欢迎学习vue</h1>
    <ul>
      <li v-for="n in news" :key="n.id">
        <!-- 使用params参数时，若使用切换路由中的对象写法，则只能使用name别名对应路由，而不能使用path -->
        <!-- <router-link :to="`/home/news/dnew/666/wwww`">{{ mes.msg }}</router-link>    params参数666www-->
        <router-link
          :to="{
            name: 'xinwen',
            params: {
              id: n.id,
              title: n.s,
            },
          }"
          >{{ n.s }}</router-link
        >
        <input type="text" />
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: [
        { id: "001", s: "news001" },
        { id: "002", s: "news002" },
        { id: "003", s: "news003" },
      ],
      opacity: 1,
    };
  },
  // 两个钩子（生命周期）函数，只有在<keep-alive>中的标签才有
  // 页面被激活状态
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity < 0) this.opacity = 1;
    }, 16);
  },
  // 失活状态
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>