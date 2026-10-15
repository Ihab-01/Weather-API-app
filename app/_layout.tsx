import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);

  const featchWeatherData = async (currentLocation : Location.LocationObject)=>{
    try{
      const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
     const data = await response.json();
      setWeather(data);
      }catch(error){
        setError('Could not fetch weather')
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
      setLatitude(currentLocation.coords.latitude);
      setLongitude(currentLocation.coords.longitude);
      await featchWeatherData(currentLocation);
    }
    fetchLocation();
  }, [latitude, longitude]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});