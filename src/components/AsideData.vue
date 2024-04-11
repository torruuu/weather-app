<script setup>
    import AsideNav from '@/components/AsideNav.vue';
    import CurrentLocation from '@/components/icons/CurrentLocation.vue';
    import { getIcon } from '@/utils/getIcon';
    import { useCityCoordinatesStore } from '@/stores/cities';
    import { useWeatherStore } from '@/stores/weather';
    import { onBeforeMount, ref, watch, defineAsyncComponent } from 'vue';

    const weatherStore = useWeatherStore();
    const { setActualCity } = useCityCoordinatesStore();
    const description = ref(null);
    const showNav = ref(false);
    let WeatherIcon;

    watch(weatherStore, async () => {
        const { src, description: desc } = await getIcon(weatherStore.data.current.weather_code);
        description.value = desc;
        WeatherIcon = defineAsyncComponent(() => import(src));
    });

    onBeforeMount(async () => {
        const { src, description: desc } = await getIcon(weatherStore.data.current.weather_code);
        description.value = desc;
        console.log(src);
        WeatherIcon = defineAsyncComponent(() => import(src));
    })
</script>

<template>
    <article class="aside-container">
        <section class="aside-container__weather weather">
            <div class="weather__nav">
                <button
                    @click="showNav = !showNav"
                    class="weather__button">
                    Search
                </button>
                <button
                    @click="setActualCity({ name: 'Madrid', latitude: 40.4168, longitude: -3.7038 })"
                    class="weather__button">
                    <CurrentLocation />
                </button>
            </div>
            <h1>{{ weatherStore.city }}</h1>
            <WeatherIcon v-if="WeatherIcon" />
            <h1>{{ weatherStore.data.current.temperature_2m }} {{ weatherStore.unit.symbol }}</h1>
            <h2>{{ description }}</h2>
        </section>

        <section v-if="showNav" class="aside-container__nav">
            <AsideNav
                @exit="showNav = !showNav"
            />
        </section>
    </article>
</template>

<style lang="scss" scoped>
    .aside-container {
        width: 100%;
        height: 100%;
        position: relative;

        &__nav {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
        }
    }
</style>