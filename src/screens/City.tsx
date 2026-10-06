import { ImageBackground, Text, StyleSheet, StatusBar, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground
        style={styles.imageLayout}
        source={require('@/assets/images/city.jpg')}>
            <Text style={[styles.city, styles.cityText]}>City</Text>
            <Text style={[styles.country, styles.cityText]}>Country</Text>
            <View style={styles.populationWrapper}>
                <Feather name={'user'} size={50} color={'red'}/>
                <Text style={styles.populationText}>10000</Text>
            </View>
            <View style={styles.sunWrapper}>
                <Feather name={'sunrise'} size={50} color={'white'}/>
                <Text style={styles.sunText}>6:00:00 AM</Text>
                <Feather name={'sunset'} size={50} color={'white'}/>
                <Text style={styles.sunText}>8:00:00 PM</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold',
    },
    sunWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    sunText:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
})

export default City