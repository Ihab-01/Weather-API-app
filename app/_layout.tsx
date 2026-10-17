import { Stack } from 'expo-router';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useGetWeather } from './hooks/useGetWeather';
import { WeatherProvider } from './context/weatherProvider';
import Error from './components/Error';

export default function RootLayout() {
  const [loading, error, weather] = useGetWeather() as [boolean, string | null, any];

  if(weather && weather.list && !loading){
    return (
      <WeatherProvider weather={weather}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </WeatherProvider>
  );
  }
    return (
      <View style={styles.container}>
        {error ?
        <Error />
        :
        <ActivityIndicator size={'large'} color={'blue'} />}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});