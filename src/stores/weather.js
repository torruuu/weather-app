import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
    state: () => ({
        city: null,
        data: null,
        unit: { name: 'celsius', symbol: 'ºC' }
    }),
    getters: {
        getWeatherData: (state) => {
            return {
                city: state.city,
                data: state.data,
                unit: state.unit
            };
        }
    },
    actions: {
        setWeatherData(newCity, newWeatherData) {
            this.data = newWeatherData;
            this.city = newCity;
        },
        setUnit(newUnit) {
            this.unit = newUnit;
        }
    },
});