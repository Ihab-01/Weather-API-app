import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import weatherType from "../utilities/weatherType";
import { useWeather } from "../context/weatherProvider";

const CurrentWeather = ()=>{

  const weatherData = useWeather();

  const currentData = weatherData.list ? weatherData.list[0] : weatherData;
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = currentData;
  const weatherCondition = weather[0]?.main as keyof typeof weatherType;

  return(
    <SafeAreaView style={styles.wrapper} edges={['top']}>
      <ImageBackground 
      style={styles.image}
      source={weatherType[weatherCondition]?.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Feather name={weatherType[weatherCondition]?.icon as any} size={90} color='#ffffff'/>
            </View>
            <Text style={styles.temp}>{`${Math.round(temp)}°`}</Text>
            <Text style={styles.feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
            <RowText firstText={`High: ${Math.round(temp_max)}° `}
            secondText={`Low: ${Math.round(temp_min)}° `}
            firstTextStyling={styles.highLow}
            secondTextStyling={styles.highLow}
            containerStyling={styles.highLowWrapper}/>
          </View>
          <RowText firstText={weather[0].description}
          secondText={weatherType[weatherCondition]?.message}
          firstTextStyling={styles.description}
          secondTextStyling={styles.message}
          containerStyling={styles.bodyWrapper}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor: '#0f172a',
  },
  image:{
    flex:1,
  },
  overlay:{
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer:{
    backgroundColor: 'rgba(255, 255, 255, 0.15chno)',
    padding: 20,
    borderRadius: 50,
    marginBottom: 15,
  },
  temp:{
    color: '#ffffff',
    fontSize: 76,
    fontWeight: '300',
  },
  feels:{
    color: '#e2e8f0',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '500',
  },
  highLow:{
    fontSize: 18,
    color: '#f8fafc',
    fontWeight: '600',
  },
  highLowWrapper:{
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingHorizontal: 25,
  },
  description:{
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  message:{
    fontSize: 18,
    color: '#e2e8f0',
    fontWeight: '500',
  }
})

export default CurrentWeather;