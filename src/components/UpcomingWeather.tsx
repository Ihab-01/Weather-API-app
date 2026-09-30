import { Text, StyleSheet, FlatList, StatusBar } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import Item from "./Item";

const DATA = [
    {
        dt_txt: '2026-09-30 16:00:00',
        main:{
            temp_max: 8.55,
            temp_min: 7.55,
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: '2026-09-30 18:00:00',
        main:{
            temp_max: 8.55,
            temp_min: 7.55,
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: '2026-09-30 20:00:00',
        main:{
            temp_max: 8.55,
            temp_min: 7.55,
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    },
]

const UpcomingWeather = () => {

    const renderItem = ({item}: { item: any })=>(
        <Item condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}/>
    )

  return (
    <SafeAreaView style={styles.container}>
        <Text>Upcoming Weather</Text>
        <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'red',
    },
})

export default UpcomingWeather