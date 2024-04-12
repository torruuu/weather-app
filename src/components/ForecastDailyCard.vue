<script setup>
    import { useIconsStore } from '@/stores/icons';
    import { onBeforeMount, defineAsyncComponent, ref } from 'vue';

    const iconStore = useIconsStore();
    const description = ref(null);
    let WeatherIcon;

    const props = defineProps({
        date: {
            type: Object,
            required: true
        },
        weatherCode: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    });

    onBeforeMount(async () => {
        console.log('cartaaaaaaaa');
        const src = iconStore.getSrc(props.weatherCode);
        description.value = iconStore.getDesc(props.weatherCode);
        WeatherIcon = defineAsyncComponent(() => import(src));
    })
</script>

<template>
    <section class="forecast-card">
        <h3 class="forecast-card__day">{{ date.isTomorrow ? 'Tomorrow' : date.dayOfWeek + ', ' + date.dayNumber + ' ' + date.monthName}}</h3>
        <div class="forecast-card__icon">
            <WeatherIcon />
        </div>
        <div class="forecast-card__temps temps">
            <p class="temps__p">{{ max + ' ' + unit }}</p>
            <p class="temps__p temps__p--min">{{ min + ' ' + unit }}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .forecast-card {
        height: 16rem;
        background-color: map-get($map: $colors, $key: c-section-background);
        padding: 1.5rem;
        @include flex($direction: column, $justify-content: space-between);

        &__day {
            font-size: 1.1rem;
        }

        &__icon {
            width: 100%;
            height: 50%;
            overflow: hidden;

            svg {
                width: 100%;
                height: auto;
            }
        }

        .temps {
            width: 100%;
            @include flex($justify-content: space-between);

            &__p {
                margin: 0;
                font-size: 1rem;

                &--min {
                    color: map-get($map: $colors, $key: c-font-gray);
                }
            }
        }
    }

    @media screen and (min-width: 800px) and (max-width: 921px) {
        .forecast-card {
            height: 21rem; /* Cambia el valor a lo que necesites */
        }
    }
</style>