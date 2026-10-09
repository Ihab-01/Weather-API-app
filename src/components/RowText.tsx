import { Text, View, type TextStyle, type StyleProp, type ViewStyle } from "react-native";

interface RowTextProps {
  firstText: string;
  secondText: string;
  firstTextStyling: StyleProp<TextStyle>;
  secondTextStyling: StyleProp<TextStyle>;
  containerStyling: StyleProp<ViewStyle>;
}

const RowText = ({ firstText, secondText, firstTextStyling, secondTextStyling, containerStyling}: RowTextProps) => {
  return (
    <View style={containerStyling}>
        <Text style={firstTextStyling}>{firstText}</Text>
        <Text style={secondTextStyling}>{secondText}</Text>
    </View>
  )
}

export default RowText