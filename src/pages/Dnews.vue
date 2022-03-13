<template>
  <ul>
    <li>新闻编号：{{ $route.params.id }}</li>
    <li>新闻名称：{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Dnews",
  // 组件内路由守卫,对通过路由规则的进入生效
  // 路由进入前生效
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("name") === "wujian") {
      next();
    } else {
      alert("无权限");
    }
  },
  // 路由离开前生效
  beforeRouteLeave(to, from, next) {
    console.log("从这个组件离开了");
    next();
  },
};
</script>

<style>
</style>