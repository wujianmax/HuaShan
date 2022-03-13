<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息名称：{{ title }}</li>
    <!-- {{
      a
    }},{{
      b
    }} -->
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route);
  },
  // 第一种   直接接收参数，与params和query都无关
  // props: ["a", "b"],
  // 第二种，接收过来的是params参数
  // props: ["id", "title"],
  // 第三种  可以接收params和query参数
  props: ["id", "title"],
};
</script>

<style>
</style>