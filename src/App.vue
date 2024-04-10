<script setup>
  import AsideData from '@/components/AsideData.vue';
  import { getWeather } from '@/composables/getWeather';
  import { useWeatherStore } from '@/stores/weather';
  import { onMounted, ref  } from 'vue';

  const store = useWeatherStore();
  const weatherData = ref(null);

  onMounted(async () => {
    getWeather()
      .then(() => {
        weatherData.value = store.getWeatherData;
        console.log(weatherData);
      })
      .catch((error) => console.log(error));
  });
</script>

<template>
  <main class="main">
    <div class="main__left-col">
      <AsideData
        v-if="weatherData"
        :city="weatherData?.city"
        :iconCode="weatherData?.data.current.weather_code"
        :temperature="weatherData?.data.current.temperature_2m"
        :unit="weatherData?.unit.symbol"
      />
    </div>
    <div class="main__right-col"></div>
  </main>
</template>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 3fr 7fr;
  }
</style>