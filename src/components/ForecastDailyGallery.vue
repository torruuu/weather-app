<script setup>
    import ForecastDailyCard from '@/components/ForecastDailyCard.vue';
    import { getDay } from '@/utils/getDay';

    defineProps({
        weatherData: {
            type: Object,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <article class="forecast-gallery">
        <ForecastDailyCard
            v-for="(code, index) in weatherData.weather_code.slice(1)"
            :key="index"
            :weatherCode="code"
            :date="getDay(weatherData.time.slice(1)[index])"
            :max="weatherData.temperature_2m_max.slice(1)[index]"
            :min="weatherData.temperature_2m_min.slice(1)[index]"
            :unit="unit"
        />
    </article>
</template>

<style lang="scss" scoped>
    .forecast-gallery {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
        gap: 2rem;
    }
</style>