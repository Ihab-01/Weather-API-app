import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import weatherType from '../utilities/weatherType';
import moment from 'moment';

interface ItemProps {
    dt_txt: string;
    min: number;
    max: number;
    condition: keyof typeof weatherType;
}

const Item = ({ dt_txt, min, max, condition }: ItemProps) => {

  return (
    <View style={styles.item}>
        <Feather name={weatherType[condition]?.icon as any} size={50} color='white'/>
        <View style={styles.dateWrapper}>
            <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
            <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
        </View>
        <Text style={styles.temp}>{`${Math.round(min)}° - ${Math.round(max)}°`}</Text>
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
    dateWrapper: {
        flexDirection: 'column'
    }
}) 

export default Item