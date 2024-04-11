<script setup>
    import AsideNav from '@/components/AsideNav.vue';
    import CurrentLocation from '@/components/icons/CurrentLocation.vue';
    import { getIcon } from '@/utils/getIcon';
    import { getDay } from '@/utils/getDay';
    import { useCityCoordinatesStore } from '@/stores/cities';
    import { useWeatherStore } from '@/stores/weather';
    import { onBeforeMount, ref, watch, defineAsyncComponent } from 'vue';

    const weatherStore = useWeatherStore();
    const { setActualCity } = useCityCoordinatesStore();
    const description = ref(null);
    const date = getDay(weatherStore.data.current.time);
    const showNav = ref(false);
    let WeatherIcon;

    watch(weatherStore, async () => {
        const { src, description: desc } = await getIcon(weatherStore.data.current.weather_code);
        description.value = desc;
        date.value = getDay(weatherStore.data.current.time);
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
                    class="weather__button weather__button--icon">
                    <CurrentLocation />
                </button>
            </div>
            <div class="weather__icon">
                <WeatherIcon v-if="WeatherIcon" />
            </div>
            <h1 class="weather__temp">{{ weatherStore.data.current.temperature_2m }} <span class="weather__span"> {{ weatherStore.unit.symbol }}</span></h1>
            <h2 class="weather__desc">{{ description }}</h2>
            <div class="weather__info">
                <h3 class="weather__h3">{{ 'Today - ' +  date.dayOfWeek + ', ' + date.dayNumber + ' ' + date.monthName}}</h3>
                <h3 class="weather__h3">{{ weatherStore.city }}</h3>
            </div>
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

        .weather {
            width: 100%;
            height: 100%;
            padding: 2rem;
            @include flex($direction: column, $justify-content: space-between);

            &__nav {
                width: 100%;
                @include flex($justify-content: space-between);
            }

            &__button {
                cursor: pointer;
                border: none;
                height: 2.5rem;
                background-color: map-get($map: $colors, $key: c-button-background);

                &--icon {
                    width: 2.5rem;
                    border-radius: 50%;
                }
            }

            &__icon {
                height: 15rem;
                width: 100%;
                overflow: hidden;

                svg {
                    width: 100%;
                    height: 150%;
                }
            }

            &__temp {
                font-size: 7rem;
            }

            &__span, &__desc, &__h3 {
                color: map-get($map: $colors, $key: c-font-gray);
            }

            &__span {
                font-size: 3.5rem;
            }

            &__desc {
                font-size: 2.5rem;
            }

            &__info {
                width: 100%;
                @include flex($direction: column, $justify-content: space-between);
                gap: 1rem;
            }
        }

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