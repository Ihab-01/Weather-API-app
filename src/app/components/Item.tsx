import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

interface ItemProps {
    dt_txt: string;
    min: number;
    max: number;
    condition: string;
}

const Item = ({ dt_txt, min, max, condition }: ItemProps) => {
  return (
    <View style={styles.item}>
        <Feather name='sun' size={50} color='white'/>
        <Text style={styles.date}>{dt_txt}</Text>
        <Text style={styles.temp}>{min}</Text>
        <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink',
    },
    temp:{
        color: 'white',
        fontSize: 20,
    },
    date:{
        color: 'white',
        fontSize: 15,
    },
}) 

export default Item