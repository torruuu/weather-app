import { defineStore } from 'pinia'

export const useIconsStore = defineStore('icons', {
    state: () => ({
        icons: [
            { code: 0, src: '/src/components/icons/WeatherIcon0.vue', desc: 'Clear Sky' },
            { code: 1, src: '/src/components/icons/WeatherIcon1.vue', desc: 'Mainly clear' },
            { code: 2, src: '/src/components/icons/WeatherIcon2.vue', desc: 'Partly cloudy' },
            { code: 3, src: '/src/components/icons/WeatherIcon3.vue', desc: 'Overcast' },
            { code: 45, src: '/src/components/icons/WeatherIcon45.vue', desc: 'Fog' },
            { code: 48, src: '/src/components/icons/WeatherIcon48.vue', desc: 'Rime fog' },
            { code: 51, src: '/src/components/icons/WeatherIcon61.vue', desc: 'Ligth drizzle' },
            { code: 53, src: '/src/components/icons/WeatherIcon63.vue', desc: 'Moderate drizzle' },
            { code: 55, src: '/src/components/icons/WeatherIcon65.vue', desc: 'Dense drizzle' },
            { code: 56, src: '/src/components/icons/WeatherIcon56.vue', desc: 'Light freezing drizzle' },
            { code: 57, src: '/src/components/icons/WeatherIcon56.vue', desc: 'Dense freezing drizzle' },
            { code: 61, src: '/src/components/icons/WeatherIcon61.vue', desc: 'Sligth rain' },
            { code: 63, src: '/src/components/icons/WeatherIcon63.vue', desc: 'Moderate rain' },
            { code: 65, src: '/src/components/icons/WeatherIcon65.vue', desc: 'Heavy rain' },
            { code: 66, src: '/src/components/icons/WeatherIcon66.vue', desc: 'Light hail' },
            { code: 67, src: '/src/components/icons/WeatherIcon66.vue', desc: 'Heavy hail' },
            { code: 71, src: '/src/components/icons/WeatherIcon71.vue', desc: 'Slight snow' },
            { code: 73, src: '/src/components/icons/WeatherIcon73.vue', desc: 'Moderate snow' },
            { code: 75, src: '/src/components/icons/WeatherIcon75.vue', desc: 'Heavy snow' },
            { code: 77, src: '/src/components/icons/WeatherIcon77.vue', desc: 'Snow grains' },
            { code: 80, src: '/src/components/icons/WeatherIcon61.vue', desc: 'Sligth rain showers' },
            { code: 81, src: '/src/components/icons/WeatherIcon63.vue', desc: 'Moderate rain showers' },
            { code: 82, src: '/src/components/icons/WeatherIcon65.vue', desc: 'Violent rain showers' },
            { code: 85, src: '/src/components/icons/WeatherIcon71.vue', desc: 'Slight snow showers' },
            { code: 86, src: '/src/components/icons/WeatherIcon75.vue', desc: 'Heavy snow showers' },
            { code: 95, src: '/src/components/icons/WeatherIcon95.vue', desc: 'Thunderstorm' },
            { code: 96, src: '/src/components/icons/WeatherIcon96.vue', desc: 'Heavy thunderstorm' },
            { code: 99, src: '/src/components/icons/WeatherIcon96.vue', desc: 'Heavy thunderstorm and hail' }
        ],
    }),
    getters: {
        getSrc: (state) => {
            return (iconCode) => {
                const icon = state.icons.find(icon => icon.code === iconCode);
                return icon ? icon.src : undefined;
            }
        },
        getDesc: (state) => {
            return (iconCode) => {
                const icon = state.icons.find(icon => icon.code === iconCode);
                return icon ? icon.desc : undefined;
            }
        }
    }
});