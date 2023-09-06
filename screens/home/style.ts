import { ImageBackground, StyleSheet } from "react-native"

export const style = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: '#383535',
        flexDirection: 'column',
        justifyContent: "space-between",
        paddingTop: 100
    },
    boxPrimaryTittle: {
        alignContent: 'center',
        alignItems: 'center'
    },
    primaryTittle: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    boxContainerTittle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 170
    }, 
    boxContainerButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 105
    }, 
    conteinerButton : {
        gap: 10
    },
    scoreWe:{
        color: '#4aa4f9',
        fontSize: 100,
        fontWeight:'bold', 
        gap: 1
    },
    scoreThey:{
        color: '#c08df3',
        fontSize: 100,
        fontWeight:'bold', 
        borderRadius: 5,
        gap: 1
    },
    scoreWeTittle:{
        color: '#4aa4f9',
        fontSize: 20,
        fontWeight:'bold',        
    },
    scoreTheyTittle:{
        color: '#c08df3',
        fontSize: 20,
        fontWeight:'bold',
    },
    buttonAdd: {
        height: 67,
        width: 120,
        backgroundColor: '#589d52',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonDel: {
        height: 67,
        width: 120,
        backgroundColor: '#bd1010',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center'
    },
    CleanScore: {
        width: 334,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#de9609',
        justifyContent: 'center',
        alignItems:'center'
    },
    boxContainerButtonClean: {
        justifyContent: 'center',
        alignItems:'center',
        paddingBottom: 50
    }
})