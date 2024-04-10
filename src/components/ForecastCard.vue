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
        const src = iconStore.getSrc(props.weatherCode);
        description.value = iconStore.getDesc(props.weatherCode);
        WeatherIcon = defineAsyncComponent(() => import(src));
    })
</script>

<template>
    <article class="forecast-card">
        <h3>{{ date.isTomorrow ? 'Tomorrow' : date.dayOfWeek }}</h3>
        <h1>{{ max }} {{ min }} {{ unit }}</h1>
        <WeatherIcon />
    </article>
</template>

<style lang="scss" scoped>
    .forecast-card {
        width: 5rem;
        height: 10rem;
        background-color: map-get($map: $colors, $key: c-section-background);
    }
</style>