import { Text, StyleSheet, View } from "react-native";
import IconText from "../components/IconText";
import { useWeather } from "../context/weatherProvider";
import moment from "moment";

const City = () => {

    const weatherData = useWeather();

    const cityData = weatherData?.city ? weatherData.city : weatherData;

  return (
    <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={[styles.city, styles.cityText]}>{cityData?.name}</Text>
                <Text style={[styles.country, styles.cityText]}>{cityData?.country}</Text>
            </View>
            <View style={styles.card}>
                <View style={[styles.populationWrapper, styles.rowLayout]}>
                    <IconText featherName="users"
                    featherSize={36}
                    featherColor="#f43f5e"
                    title={`Population: ${cityData?.population?.toLocaleString()}`}
                    styling={styles.populationText}/>
                </View>
                <View style={styles.divider} />
                <View style={[styles.sunWrapper, styles.rowLayout]}>
                    <IconText featherName="sunrise"
                    featherSize={32}
                    featherColor="#38bdf8"
                    title={cityData?.sunrise ? moment(cityData.sunrise * 1000).format('h:mm a') : ''}
                    styling={styles.sunText}/>
                    <IconText featherName="sunset"
                    featherSize={32}
                    featherColor="#fbbf24"
                    title={cityData?.sunset ? moment(cityData.sunset * 1000).format('h:mm a') : ''}
                    styling={styles.sunText}/>
                </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0f172a',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 35,
    },
    city:{
        fontSize: 38,
        letterSpacing: 0.5,
    },
    country:{
        fontSize: 20,
        opacity: 0.8,
        marginTop: 4,
    },
    cityText:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: '700',
        color: '#ffffff',
    },
    card: {
        backgroundColor: '#1e293b',
        borderRadius: 24,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 8,
        borderWidth: 1,
        borderColor: '#334155',
    },
    populationWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    populationText:{
        fontSize: 18,
        marginTop: 8,
        color: '#f8fafc',
    },
    divider: {
        height: 1,
        backgroundColor: '#334155',
        marginVertical: 24,
    },
    sunWrapper:{
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    sunText:{
        fontSize: 16,
        color: '#f8fafc',
        marginTop: 8,
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default City