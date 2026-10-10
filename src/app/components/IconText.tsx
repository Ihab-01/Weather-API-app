import { View, Text, StyleSheet, type TextStyle, type StyleProp } from 'react-native';
import { Feather } from '@expo/vector-icons';
import type { ComponentProps} from 'react';

interface IconTextProps {
  featherName: ComponentProps<typeof Feather>['name'];
  featherSize: number;
  featherColor: string;
  title: string;
  styling: StyleProp<TextStyle>;
}

const IconText = ({ featherName, featherSize, featherColor, title, styling }: IconTextProps) => {
  return (
    <View style={styles.container}>
      <Feather name={featherName} size={featherSize} color={featherColor} />
      <Text style={[styles.defaultText, styling]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    defaultText: {
      fontWeight: 'bold',
    },
});

export default IconText