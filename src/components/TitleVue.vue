<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">回退</button>
    <button @click="forward">前进</button>
    <button @click="go">go</button>
  </div>
</template>

<script>
export default {
  name: "TitleVue",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    go() {
      // 用于前进或回退多少步
      this.$router.go(2);
    },
  },
};
</script>

<style>
</style>