import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";

type Props = {
    score: number
    tittle: String
    scoreStyle: object
    tittleSlytle: object
}

export default function Score(props: Props){
    return(
        <View style={style.container}>
            <Text style={props.tittleSlytle}>{props.tittle}</Text>
            <Text style={props.scoreStyle}>{props.score}</Text>
        </View>
    )
}