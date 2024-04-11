import { useCityCoordinatesStore } from '@/stores/cities';
import { useWeatherStore } from '@/stores/weather';
import { useErrorStore } from '@/stores/error';

export async function getWeather() {
    const { actualCity } = useCityCoordinatesStore();
    const weatherStore = useWeatherStore();
    const { name: cityName, latitude, longitude } = actualCity;
    const { unit: { name: unit } } = weatherStore;
    
    try {
        const response = await fetch(`https://pi.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,surface_pressure,wind_speed_10m&hourly=visibility&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=${unit}&timeformat=unixtime&timezone=Europe%2FBerlin&forecast_days=6`);
        const weather = await response.json();
        weatherStore.setWeatherData(cityName, weather);
    } catch (error) {
        useErrorStore.setError(true);
        throw new Error('Error al cargar los datos meteorológicos');
    }
}