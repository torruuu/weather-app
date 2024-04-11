<script setup>
    import { useCityCoordinatesStore } from '@/stores/cities';
    import { ref } from 'vue';

    const emit = defineEmits(['exit']);

    const { getCityNames, getCityCoordinates, setActualCity } = useCityCoordinatesStore();
    const cities = ref(getCityNames);

    function setCity(city) {
        const cityData = getCityCoordinates(city);
        setActualCity(cityData);
        emit('exit');
    }
</script>

<template>
    <section class="nav-container">
        <div class="nav-container__cross-div">
            <button
                @click="$emit('exit')"
                class="nav-container__cross">
                X
            </button>
        </div>
        <article class="nav-container__cities">
            <button
                class="nav-container__button"
                v-for="(city, index) in cities"
                :key="index"
                @click="setCity(city)"
            >{{ city }}</button>
        </article>
    </section>
</template>

<style lang="scss" scoped>
    .nav-container {
        width: 100%;
        height: 100%;
        padding: 2rem;
        background-color: map-get($map: $colors, $key: c-section-background);
        animation: slideIn 2s ease-out forwards;

        &__cross-div {
            width: 100%;
            @include flex($justify-content: flex-end);
        }

        &__cross {
            cursor: pointer;
            border: none;
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 50%;
            background-color: map-get($map: $colors, $key: c-button-background);
        }

        &__cities {
            margin: 3rem 0 0;
            @include flex($direction: column);
            gap: 1rem;
        }

        &__button {
            cursor: pointer;
            width: 100%;
            height: 5rem;
            background: none;
            border: none;
            background-color: map-get($map: $colors, $key: c-main-background);

            &:hover {
                border: solid .1rem map-get($map: $colors, $key: c-white);
            }
        }
    }
</style>