import { ImageBackground, Text, StyleSheet, View } from "react-native";
import IconText from "@/app/components/IconText";

const City = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
        style={styles.imageLayout}
        source={require('@/assets/images/city.jpg')}>
            <Text style={[styles.city, styles.cityText]}>City</Text>
            <Text style={[styles.country, styles.cityText]}>Country</Text>
            <View style={[styles.populationWrapper, styles.rowLayout]}>
                <IconText featherName="user"
                featherSize={50}
                featherColor="red"
                title="10000"
                styling={styles.populationText}/>
            </View>
            <View style={[styles.sunWrapper, styles.rowLayout]}>
                <IconText featherName="sunrise"
                featherSize={50}
                featherColor="white"
                title="6:00:00AM"
                styling={styles.sunText}/>
                <IconText featherName="sunset"
                featherSize={50}
                featherColor="white"
                title="8:00:00PM"
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