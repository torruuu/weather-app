<script setup>
    import CurrentCard from '@/components/CurrentCard.vue';

    defineProps({
        weatherData: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <h3 class="title">Today's Highlights</h3>
    <article class="current-info">
        <CurrentCard
            title="Wind Status"
            :value="weatherData.current.wind_speed_10m"
            :unit="weatherData.current_units.wind_speed_10m"
        />
        <CurrentCard
            title="Humidity"
            :value="weatherData.current.relative_humidity_2m"
            :unit="weatherData.current_units.relative_humidity_2m"
        />
        <CurrentCard
            title="Visibility"
            :value="weatherData.hourly.visibility[0]"
            :unit="weatherData.hourly_units.visibility"
        />
        <CurrentCard
            title="Air Pressure"
            :value="weatherData.current.surface_pressure"
            :unit="weatherData.current_units.surface_pressure"
        />
    </article>
</template>

<style lang="scss" scoped>
    .title {
        font-size: 2rem;
    }

    .current-info {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        gap: 2rem;
    }
</style>