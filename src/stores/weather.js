import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
    state: () => ({
        city: null,
        data: null,
        unit: { name: 'celsius', symbol: 'ºC' }
    }),
    getters: {
        getWeatherData() {
            return {
                city: this.city,
                data: this.data,
                unit: this.unit
            };
        }
    },
    actions: {
        setWeatherData(newCity, newWeatherData) {
            this.data = newWeatherData;
            this.city = newCity;
        },
    },
});