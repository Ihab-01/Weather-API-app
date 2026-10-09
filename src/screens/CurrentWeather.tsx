import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import RowText from "@/components/RowText";

const CurrentWeather = ()=>{
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name='sun' size={100} color='black'/>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <RowText firstText="High: 8"
        secondText="Low: 6"
        firstTextStyling={styles.highLow}
        secondTextStyling={styles.highLow}
        containerStyling={styles.highLowWrapper}/>
      </View>
      <RowText firstText="Its Sunny"
      secondText="Its Perfect t-shirt Weather"
      firstTextStyling={styles.description}
      secondTextStyling={styles.message}
      containerStyling={styles.bodyWrapper}/>
    </SafeAreaView>
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