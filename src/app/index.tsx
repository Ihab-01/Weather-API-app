import City from "@/screens/City";
import CurrentWeather from "@/screens/CurrentWeather";
import UpcomingWeather from "@/screens/UpcomingWeather";
import { View, StyleSheet } from "react-native";

const index = ()=>{
  return(
    <View style={styles.container}>
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default index;