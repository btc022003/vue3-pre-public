<script setup lang="ts">
// import { ref, onMounted } from 'vue';

// const list = ref<string[]>([]);
// const txt = ref('');
// const saveHandle = () => {
//   // console.log(txt.value);
//   list.value.push(txt.value);
//   txt.value = '';
// };
// // 生命周期函数，挂载之后执行
// onMounted(() => {
//   console.log('创建成功');
// });
import { ref } from 'vue';
import useList from './composables/useList';
import useMovies from './composables/useMovies';
const txt = ref('');
const { list, addItem } = useList();
const saveHandle = () => {
  if (txt.value) {
    // 新增
    addItem(txt.value);
    txt.value = '';
  }
};

// 下一个功能，展示一个调用接口获取数据的操作
const { movies } = useMovies();
</script>

<template>
  <input
    type="text"
    v-model="txt"
    placeholder="请输入内容"
    @keyup.enter="saveHandle"
  />
  <hr />
  <ul>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ul>
  <hr />
  <h5>展示一个电影列表数据</h5>
  <ul>
    <li v-for="item in movies" :key="item.albumId">{{ item.name }}</li>
  </ul>
</template>

<style></style>
