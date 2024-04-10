<script setup>
  import AsideData from '@/components/AsideData.vue';
  import UnitButtons from '@/components/UnitButtons.vue';
  import ForecastGallery from '@/components/ForecastGallery.vue';
  import { getWeather } from '@/composables/getWeather';
  import { useWeatherStore } from '@/stores/weather';
  import { onMounted, ref, watch  } from 'vue';

  const store = useWeatherStore();
  const weatherData = ref(null);

  watch(store, () => {
    console.log('storeeeeeeeee')
    weatherData.value = store.getWeatherData;
    console.log(weatherData);
  });

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
    <div class="main__right-col">
      <UnitButtons
        v-if="weatherData"
        :currentUnit="weatherData?.unit.name"
      />
      <ForecastGallery
        v-if="weatherData"
        :weatherData="weatherData?.data.daily"
        :unit="weatherData?.unit.symbol"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 3fr 7fr;

    &__left-col {
      background-color: map-get($map: $colors, $key: c-section-background);
    }
  }
</style>