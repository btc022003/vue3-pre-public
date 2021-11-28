import { ref, onMounted } from 'vue';

type Movie = { albumId: number; name: string };

export default function useMovies() {
  const movies = ref<Movie[]>([]);
  onMounted(() => {
    // fetch是原生js内置的api
    fetch(
      'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48'
    )
      .then((res) => res.json())
      .then((res) => (movies.value = res.data.list));
  });
  return {
    movies,
  };
}
