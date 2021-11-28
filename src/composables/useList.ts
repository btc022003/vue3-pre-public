import { ref } from 'vue';

export default function useList() {
  // 数据
  const list = ref<string[]>([]);
  /**
   * 新增方法
   * @param txt
   * @returns
   */
  const addItem = (txt: string) => list.value.push(txt);
  return {
    list,
    addItem,
  };
}
