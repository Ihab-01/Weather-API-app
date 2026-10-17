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
        <View style={styles.iconBox}>
            <Feather name={weatherType[condition]?.icon as any} size={28} color='#ffffff'/>
        </View>
        <View style={styles.dateWrapper}>
            <Text style={styles.day}>{moment(dt_txt).format('dddd')}</Text>
            <Text style={styles.time}>{moment(dt_txt).format('h:mm a')}</Text>
        </View>
        <Text style={styles.temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginVertical: 6,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1e293b',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#334155',
    },
    iconBox: {
        width: 45,
        alignItems: 'center',
    },
    temp:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    day:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    time: {
        color: '#94a3b8',
        fontSize: 13,
        marginTop: 2,
    },
    dateWrapper: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 15,
    }
}) 

export default Item