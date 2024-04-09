<script setup>
    import WeatherIcon from '@/components/icons/WeatherIcon96.vue'
</script>

<template>
    <div class="aside-container">
        <WeatherIcon />
    </div>
</template>

<style lang="scss" scoped>
    .aside-container {
        width: 30%;
        height: 100vh;
        background-color: map-get($map: $colors, $key: c-section-background);
    }
</style>