import CurrentWeather from "@/components/CurrentWeather";
import UpcomingWeather from "@/components/UpcomingWeather";
import { View, StyleSheet } from "react-native";

const index = ()=>{
  return(
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

export default index;