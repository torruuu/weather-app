<script setup>
    import SadFace from './icons/SadFace.vue';
</script>

<template>
    <div class="error-container">
        <div class="error-container__icon">
            <SadFace />
        </div>
        <h2 class="error-container__message">Vaya, algo salió mal</h2>
        <button
            class="error-container__button"
            @click="() => $emit('reload')"
        >
            Recargar
        </button>
    </div>
</template>

<style lang="scss" scoped>
    .error-container {
        @include flex($direction: column);
        gap: 1.5rem;

        &__icon {
            height: 10rem;
            @include flex();

            svg {
                width: auto;
                height: 100%;
            }
        }
        &__message {
            font-size: 3rem;
        }
        &__button {
            cursor: pointer;
            font-size: 1.3rem;
            width: 12rem;
            height: 3rem;
            border: none;
            background-color: map-get($map: $colors, $key: c-button-background);
        }
    }
</style>