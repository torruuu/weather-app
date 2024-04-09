import { defineStore } from 'pinia'

export const useCityCoordinatesStore = defineStore('cityCoordinates', {
    state: () => ({
        cities: [
            { name: 'Madrid', latitude: 40.4168, longitude: -3.7038 },
            { name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
            // Agrega más ciudades aquí
        ],
        actualCity: { name: 'Madrid', latitude: 40.4168, longitude: -3.7038 }
    }),
    getters: {
        getCityCoordinates(cityName) {
            return this.cities.find(city => city.name === cityName);
        },
        getCityNames() {
            return this.cities.map(city => city.name);
        },
    },
    actions: {
        setActualCity(city) {
          this.actualCity = city;
        },
     },
});