import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";


type Props = {
    onChangeNumber: (text: any) => void
    texts: String
    style: object
}

export default function Buttons(props: Props){
    return(
        <View style={props.style}>
            <TouchableOpacity onPress={props.onChangeNumber}>
                <Text style={style.container}>{props.texts}</Text>
            </TouchableOpacity>
        </View>
    )
}