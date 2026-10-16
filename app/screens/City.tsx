import { ImageBackground, Text, StyleSheet, View } from "react-native";
import IconText from "../components/IconText";
import { useWeather } from "../context/weatherProvider";
import moment from "moment";

const City = () => {

    const weatherData = useWeather();

    const cityData = weatherData?.city ? weatherData.city : weatherData;

  return (
    <View style={styles.container}>
        <ImageBackground
        style={styles.imageLayout}
        source={require('@/assets/images/city.jpg')}>
            <Text style={[styles.city, styles.cityText]}>{cityData?.name}</Text>
            <Text style={[styles.country, styles.cityText]}>{cityData?.country}</Text>
            <View style={[styles.populationWrapper, styles.rowLayout]}>
                <IconText featherName="user"
                featherSize={50}
                featherColor="red"
                title={`Population: ${cityData?.population}`}
                styling={styles.populationText}/>
            </View>
            <View style={[styles.sunWrapper, styles.rowLayout]}>
                <IconText featherName="sunrise"
                featherSize={50}
                featherColor="white"
                title={cityData?.sunrise ? moment(cityData.sunrise * 1000).format('h:mm:ss a') : ''}
                styling={styles.sunText}/>
                <IconText featherName="sunset"
                featherSize={50}
                featherColor="white"
                title={cityData?.sunset ? moment(cityData.sunset * 1000).format('h:mm:ss a') : ''}
                styling={styles.sunText}/>
            </View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    imageLayout:{
        flex: 1,
    },
    city:{
        fontSize: 40,
    },
    country:{
        fontSize: 30,
    },
    cityText:{
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper:{
        justifyContent: 'center',
        marginTop:30,
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    sunWrapper:{
        justifyContent: 'space-around',
        marginTop: 30,
    },
    sunText:{
        fontSize: 20,
        color: 'white',
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default City