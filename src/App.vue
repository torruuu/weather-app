<script setup>
  import AsideData from '@/components/AsideData.vue';
  import UnitButtons from '@/components/UnitButtons.vue';
  import ForecastDailyGallery from '@/components/ForecastDailyGallery.vue';
  import LoadingPage from '@/components/LoadingPage.vue';
  import ErrorPage from '@/components/ErrorPage.vue';
  import { getWeather } from '@/composables/getWeather';
  import { useWeatherStore } from '@/stores/weather';
  import { useErrorStore } from '@/stores/error';
  import { useCityCoordinatesStore } from '@/stores/cities';
  import { onMounted, ref, watch  } from 'vue';

  const weatherStore = useWeatherStore();
  const citiesStore = useCityCoordinatesStore();
  const errorStore = useErrorStore();
  const weatherData = ref(null);
  const showError = ref(errorStore.getError);

  async function getWeatherFunction() {
    getWeather()
      .then(() => {
        weatherData.value = weatherStore.getWeatherData;
      })
      .catch((error) => console.log(error));
  }

  watch(errorStore, () => {
    if (errorStore.getError) {
      showError.value = true;
    }
  })

  watch(weatherStore, () => {
    weatherData.value = weatherStore.getWeatherData;
  });

  watch(citiesStore, async () => {
    getWeatherFunction();
  });

  onMounted(async () => {
    setTimeout(async () => {
      getWeatherFunction();
    }, 5000)
  });
</script>

<template>
  <template v-if="weatherData">
    <main class="main">
        <section class="main__left-col">
        <AsideData />
      </section>
      <section class="main__right-col">
        <div class="main__right-data">
          <UnitButtons
            :currentUnit="weatherData?.unit.name"
          />
          <ForecastDailyGallery
            :weatherData="weatherData?.data.daily"
            :unit="weatherData?.unit.symbol"
          />
        </div>
      </section>
    </main>
  </template>
  <main v-else-if="!showError" class="main-exc">
    <LoadingPage />
  </main>
  <main v-else class="main-exc">
    <ErrorPage />
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

  .main-exc {
    width: 100%;
    height: 100vh;
    @include flex();
  }
</style>