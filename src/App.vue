<script setup>
  import AsideData from '@/components/AsideData.vue';
  import { getWeather } from '@/composables/getWeather';
  import { useWeatherStore } from '@/stores/weather';
  import { onMounted } from 'vue';

  const store = useWeatherStore();

  onMounted(async () => {
    getWeather()
      .then(() => {
        console.log(store.getWeatherData);
    })
      .catch(() => console.log("Error al cargar los datos meteorológicos"));
  });
</script>

<template>
  <div>
    <AsideData />
  </div>
</template>

<style lang="scss" scoped>

</style>