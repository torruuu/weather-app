<script setup>
    defineProps({
        title: { type: String, required: true },
        value: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="current-card">
        <h2 class="current-card__h2">{{ title }}</h2>
        <h3 class="current-card__h3">{{ value + ' '}}<span class="current-card__span">{{ unit }}</span></h3>
    </div>
</template>

<style lang="scss" scoped>
    .current-card {
        height: 13rem;
        padding: 1.5rem;
        background-color: map-get($map: $colors, $key: c-section-background);
        @include flex($direction: column, $justify-content: flex-start);
        gap: 2rem;

        &__h2 {
            font-size: 1.5rem;
        }

        &__h3 {
            font-size: 4rem;
        }

        &__span {
            font-size: 2.5rem;
        }
    }
</style>