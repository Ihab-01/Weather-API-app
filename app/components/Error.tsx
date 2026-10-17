import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Error = () => {
  return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Feather name={'alert-triangle'} size={60} color={'#f43f5e'}/>
        </View>
        <Text style={styles.errorTitle}>Oops! Connection Issue</Text>
        <Text style={styles.errorMessage}>We couldn't fetch the weather data. Please check your internet connection and try again.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: '#0f172a',
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    iconContainer: {
        backgroundColor: 'rgba(244, 63, 94, 0.1)',
        padding: 25,
        borderRadius: 200,
        marginBottom: 20,
    },
    errorTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },
    errorMessage:{
        fontSize: 16,
        color: '#94a3b8',
        textAlign: 'center',
        lineHeight: 22,
    }
})

export default Error