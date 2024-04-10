import { defineStore } from 'pinia'

export const useIconsStore = defineStore('icons', {
    state: () => ({
        icons: [
            { code: 0, src: '@/components/icons/WeatherIcon0.vue' },
            { code: 1, src: '@/components/icons/WeatherIcon1.vue' },
            { code: 2, src: '@/components/icons/WeatherIcon2.vue' },
            { code: 3, src: '@/components/icons/WeatherIcon3.vue' },
            { code: 45, src: '@/components/icons/WeatherIcon45.vue' },
            { code: 48, src: '@/components/icons/WeatherIcon48.vue' },
            { code: 61, src: '@/components/icons/WeatherIcon61.vue' },
            { code: 63, src: '@/components/icons/WeatherIcon63.vue' },
            { code: 65, src: '@/components/icons/WeatherIcon65.vue' },
            { code: 71, src: '@/components/icons/WeatherIcon71.vue' },
            { code: 73, src: '@/components/icons/WeatherIcon73.vue' },
            { code: 75, src: '@/components/icons/WeatherIcon75.vue' },
            { code: 95, src: '@/components/icons/WeatherIcon95.vue' },
            { code: 96, src: '@/components/icons/WeatherIcon96.vue' }
        ],
    }),
    getters: {
        getSrc(iconCode) {
            const icon = this.icons.find(icon => icon.code === iconCode);
            return icon.src;
        }
    }
});