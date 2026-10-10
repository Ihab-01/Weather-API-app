import { View, Text, ImageBackground, StyleSheet, FlatList } from "react-native"
import Item from "@/app/components/Item";
import { Data } from '@/assets/Data';

const UpcomingWeather = () => {

    const renderItem = ({item}: { item: any })=>(
        <Item condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}/>
    )

  return (
    <View style={styles.container}>
        <ImageBackground 
        style={styles.image}
        source={require('@/assets/images/clouds.jpg')}>
            <Text>Upcoming Weather</Text>
            <FlatList 
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}/>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'royalblue',
    },
    image:{
        flex:1,
    },
})

export default UpcomingWeather