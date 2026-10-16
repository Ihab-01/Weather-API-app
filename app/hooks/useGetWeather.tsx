import { useEffect, useState } from "react";
import * as Location from 'expo-location';

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export const useGetWeather = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [weather, setWeather] = useState<any>(null);

    const featchWeatherData = async (lat: number, lon: number)=>{
        try{
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
            setWeather(data);
        }catch(error){
            setError('Could not fetch weather');
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        async function fetchLocation() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                setLoading(false);
                return;
            }
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
            
            await featchWeatherData(
                currentLocation.coords.latitude, 
                currentLocation.coords.longitude
            );
        }
        fetchLocation();
    }, []);
    
    return [loading, error, weather];
}