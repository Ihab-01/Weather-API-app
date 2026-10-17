import { View, Text, StyleSheet } from "react-native";
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
    <View style={[styles.wrapper, 
    {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition]?.icon as any} size={100} color='white'/>
        <Text style={styles.temp}>{`${temp}°`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}`}</Text>
        <RowText firstText={`High: ${temp_max}° `}
        secondText={`Low: ${temp_min}° `}
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
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor: 'pink',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp:{
    color: 'black',
    fontSize: 48,
  },
  feels:{
    color: 'black',
    fontSize: 30,
  },
  highLow:{
    fontSize: 20,
  },
  highLowWrapper:{
    flexDirection: 'row',
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description:{
    fontSize: 48,
  },
  message:{
    fontSize: 30,
  },
})

export default CurrentWeather;