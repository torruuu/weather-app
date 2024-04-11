<script setup>
  import AsideData from '@/components/AsideData.vue';
  import UnitButtons from '@/components/UnitButtons.vue';
  import ForecastDailyGallery from '@/components/ForecastDailyGallery.vue';
  import { getWeather } from '@/composables/getWeather';
  import { useWeatherStore } from '@/stores/weather';
  import { useCityCoordinatesStore } from '@/stores/cities';
  import { onMounted, ref, watch  } from 'vue';

  const weatherStore = useWeatherStore();
  const citiesStore = useCityCoordinatesStore();
  const weatherData = ref(null);

  watch(weatherStore, () => {
    console.log('storeeeeeeeee')
    weatherData.value = weatherStore.getWeatherData;
    console.log(weatherData.value);
  });

  watch(citiesStore, () => {
    getWeather()
      .then(() => {
        weatherData.value = weatherStore.getWeatherData;
      })
      .catch((error) => console.log(error));
  });

  onMounted(async () => {
    getWeather()
      .then(() => {
        weatherData.value = weatherStore.getWeatherData;
        console.log(weatherData);
      })
      .catch((error) => console.log(error));
  });
</script>

<template>
  <main class="main">
    <section class="main__left-col">
      <AsideData
        v-if="weatherData"
      />
    </section>
    <section class="main__right-col">
      <div class="main__right-data">
        <UnitButtons
          v-if="weatherData"
          :currentUnit="weatherData?.unit.name"
        />
        <ForecastDailyGallery
          v-if="weatherData"
          :weatherData="weatherData?.data.daily"
          :unit="weatherData?.unit.symbol"
        />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 30rem auto;

    &__left-col {
      background-color: map-get($map: $colors, $key: c-section-background);
    }

    &__right-col {
      padding: 2rem 0;
    }

    &__right-data {
      margin: 0 auto;
      width: 75%;
      @include flex(column, flex-start, flex-start);
      gap: 3rem;
    }
  }
</style>