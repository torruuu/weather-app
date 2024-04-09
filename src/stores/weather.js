import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
    state: () => ({
       weatherData: null
    }),
    getters: {
        getWeatherData() {
            return this.weatherData;
        }
    },
    actions: {
        setWeatherData(newWeatherData) {
            this.weatherData = newWeatherData;
        },
    },
});