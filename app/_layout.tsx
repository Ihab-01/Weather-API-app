import { Stack } from 'expo-router';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useGetWeather } from './hooks/useGetWeather';
import { WeatherProvider } from './context/weatherProvider';

export default function RootLayout() {
  const [loading, error, weather] = useGetWeather() as [boolean, string | null, any];

  if(weather && weather.list){
    return (
      <WeatherProvider weather={weather}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </WeatherProvider>
  );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});