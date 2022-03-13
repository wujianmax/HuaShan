<template>
  <div>
    <ul>
      <li v-for="mes in messages" :key="mes.id">
        <!-- <router-link to="/home/message/detail">{{ mes.msg }}</router-link> -->
        <!-- 路由传参，参数包含在$.route.query里 -->
        <!-- 方式一 -->
        <!-- <router-link :to="`/home/message/detail?id=${mes.id}&title=${mes.msg}`">{{ mes.msg }}</router-link>  -->
        <!-- 方式二  此处参数名为id和title-->
        <router-link
          :to="{
            name: 'xiaoxi',
            params: {
              id: mes.id,
              title: mes.msg,
            },
          }"
        >
          {{ mes.msg }}
        </router-link>
        <button @click="pushShow(mes)">push方式显示</button>
        <button @click="replaceShow(mes)">replace方式显示</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        { id: "001", msg: "message001" },
        { id: "002", msg: "message002" },
        { id: "003", msg: "message003" },
      ],
    };
  },
  methods: {
    pushShow(mes) {
      // 以栈的形式压入取出页面记录
      this.$router.push({
        name: "xiaoxi",
        params: {
          id: mes.id,
          title: mes.msg,
        },
      });
    },
    replaceShow(mes) {
      // 这一次记录取代上一次，上一次销毁
      this.$router.replace({
        name: "xiaoxi",
        params: {
          id: mes.id,
          title: mes.msg,
        },
      });
    },
  },
};
</script>