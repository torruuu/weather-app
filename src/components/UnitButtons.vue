<script setup>
    import { getWeather } from '@/composables/getWeather';
    import { useWeatherStore } from '@/stores/weather';
    import { ref, watch } from 'vue';

    const props = defineProps({
        currentUnit: {
            type: String,
            required: true
        }
    });

    const store = useWeatherStore();
    const { setUnit } = store;
    const celsius = ref(props.currentUnit === 'celsius' ? true : false);

    watch(celsius, () => {
        celsius.value ?
            setUnit({ name: 'celsius', symbol: 'ºC' }) :
            setUnit({ name: 'fahrenheit', symbol: 'ºF' });
        getWeather();
    });
</script>

<template>
    <article class="unit-buttons-section">
        <button
            @click="() => celsius = true"
            :class="{ highlighted: currentUnit === 'celsius' }"
            class="unit-buttons-section__button">
            º C
        </button>
        <button
            @click="() => celsius = false"
            :class="{ highlighted: currentUnit === 'fahrenheit' }"
            class="unit-buttons-section__button">
            º F
        </button>
    </article>
</template>

<style lang="scss" scoped>
    .unit-buttons-section {
        height: 2.5rem;
        width: 6rem;
        @include flex($justify-content: space-between);

        .highlighted {
            background-color: map-get($map: $colors, $key: c-white);
            color: map-get($map: $colors, $key: c-black);
        }

        &__button {
            cursor: pointer;
            border-radius: 50%;
            width: 2.5rem;
            border: none;
            height: 100%;
            font-weight: bold;
            font-size: map-get($map: $font-sizes, $key: fs-button);
            color: map-get($map: $colors, $key: c-white);
            background-color: map-get($map: $colors, $key: c-button-background);
        }
    }
</style>