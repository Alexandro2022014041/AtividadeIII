import { Text, View } from "react-native";
import Score from "../../components/score";
import { useState } from "react";
import { style } from "./style";
import Buttons from "../../components/buttons";

export default function Home(){
    const [weScore, setWeScore] = useState(0)
    const [theyScore, setTheyScore] = useState(0)

    const onAddScoreWE = () => {
        setWeScore(weScore + 1)
    }

    const onAddScoreThey = () => {
        setTheyScore(theyScore + 1)
    }

    const onDelScoreWE = () => {
        setWeScore(weScore - 1)
    }

    const onDelScoreThey = () => {
        setTheyScore(theyScore - 1)
    }

    const onCleanScore = () => {
        setWeScore(0)
        setTheyScore(0)
    }

    return(
        <View style={style.container}>      
            <View style={style.boxPrimaryTittle}>
                <Text style={style.primaryTittle}>MARCADOR DE TRUCO</Text>   
            </View>
            <View style={style.boxContainerTittle}>                 
                <View style={style.scoreWe}>
                    <Score tittle={'NÓS'} tittleSlytle={style.scoreWeTittle}
                            score={weScore} scoreStyle={style.scoreWe}/>
                </View>
                <View style={style.scoreThey}>
                    <Score tittle={'ELES'} tittleSlytle={style.scoreTheyTittle}
                            score={theyScore} scoreStyle={style.scoreThey}/>
                </View>
            </View>
            <View style={style.boxContainerButtons}>
                <View style={style.conteinerButton}>
                    <Buttons texts={'+1'} onChangeNumber={onAddScoreWE} style={style.buttonAdd}/>
                    <Buttons texts={'-1'} onChangeNumber={onDelScoreWE} style={style.buttonDel}/>
                </View>
                <View style={style.conteinerButton}>
                    <Buttons texts={'+1'} onChangeNumber={onAddScoreThey} style={style.buttonAdd}/>
                    <Buttons texts={'-1'} onChangeNumber={onDelScoreThey} style={style.buttonDel}/>
                </View>
            </View>
            <View style={style.boxContainerButtonClean}>
                <Buttons texts={'ZERAR'} onChangeNumber={onCleanScore} style={style.CleanScore}/>
            </View>
        </View>
    )
}