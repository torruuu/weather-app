<script setup>

</script>

<template>
    <section class="nav-container">
        <button
            @click="$emit('exit')"
            class="nav-container__cross">
            X
        </button>
    </section>
</template>

<style lang="scss" scoped>
    .nav-container {
        width: 100%;
        height: 100%;
        background-color: aqua;
    }
</style>