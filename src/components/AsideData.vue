<script setup>
    import { useIconsStore } from '@/stores/icons'
    import { onBeforeMount, defineAsyncComponent, ref } from 'vue';

    const iconStore = useIconsStore();
    const description = ref(null);
    let WeatherIcon;

    const props = defineProps({
        city: {
            type: String,
            required: true
        },
        iconCode: {
            type: Number,
            required: true
        },
        temperature: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    })

    onBeforeMount(async () => {
        const src = iconStore.getSrc(props.iconCode);
        description.value = iconStore.getDesc(props.iconCode);
        console.log(src);
        WeatherIcon = defineAsyncComponent(() => import(src));
    })
</script>

<template>
    <div class="aside-container">
        <h1>{{ city }}</h1>
        <WeatherIcon />
        <h1>{{ temperature }} {{ unit }}</h1>
        <h2>{{ description }}</h2>
    </div>
</template>

<style lang="scss" scoped>
    .aside-container {
        width: 100%;
        height: 100%;
        background-color: map-get($map: $colors, $key: c-section-background);
    }
</style>