<script setup>
    import ForecastDailyCard from '@/components/ForecastDailyCard.vue';
    import { getDay } from '@/utils/getDay';

    const props = defineProps({
        weatherData: {
            type: Object,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    })
    const 
    {
        temperature_2m_max: maxTemps,
        temperature_2m_min: minTemps,
        weather_code: weatherCodes,
        time: unixtimes
    } = props.weatherData;
    console.log(maxTemps);
</script>

<template>
    <article class="forecast-gallery">
        <ForecastDailyCard
            v-for="(code, index) in weatherCodes.slice(1)"
            :key="index"
            :weatherCode="code"
            :date="getDay(unixtimes.slice(1)[index])"
            :max="maxTemps.slice(1)[index]"
            :min="minTemps.slice(1)[index]"
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