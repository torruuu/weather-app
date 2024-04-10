<script setup>
    import ForecastCard from '@/components/ForecastCard.vue';
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
    <section class="forecast-gallery">
        <h1>Galería</h1>
        <ForecastCard
            v-for="(code, index) in weatherCodes.slice(1)"
            :key="index"
            :weatherCode="code"
            :date="getDay(unixtimes.slice(1)[index])"
            :max="maxTemps.slice(1)[index]"
            :min="minTemps.slice(1)[index]"
            :unit="unit"
        />
    </section>
</template>

<style lang="scss" scoped>

</style>