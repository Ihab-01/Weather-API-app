import { Text, ImageBackground, StyleSheet, FlatList, StatusBar } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import Item from "@/components/Item";
import { Data } from '@/assets/Data';

const UpcomingWeather = () => {

    const renderItem = ({item}: { item: any })=>(
        <Item condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}/>
    )

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground 
        style={styles.image}
        source={require('@/assets/images/clouds.jpg')}>
            <Text>Upcoming Weather</Text>
            <FlatList 
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}/>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
    image:{
        flex:1,
    },
})

export default UpcomingWeather