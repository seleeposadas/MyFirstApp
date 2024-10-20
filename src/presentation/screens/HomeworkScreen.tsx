import { StyleSheet, View } from 'react-native'

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.purpleBox]}/>
        <View style={[styles.box, styles.orangeBox]}/>
        <View style={[styles.box, styles.blueBox]}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        //Tarea
        //Ejercicio 2
            // justifyContent: 'center',
        //Ejercicio 3
            // alignContent: 'center',
            // justifyContent: 'center'
        //Ejercicio 4
            //justifyContent: 'space-between'
        //Ejercicio 5
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'stretch'
        //Ejercicio 7
            //justifyContent: 'center',
            //alignItems: 'center'
        //Ejercicio 8
            // justifyContent: 'center',
            // alignItems: 'center'
        //Ejercicio 9
            //justifyContent: 'center',
            //alignItems: 'center',
        //Ejercicio 10
            //flexDirection: 'row',
            //justifyContent: 'center',
            //alignItems: 'center',
    },
    box:{
        //Ejercicio 6, comentar width
        width: 100,
        //Ejercicio 5, comentar el height
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        //Ejercicio 3
            // alignSelf: 'flex-end',
        //Ejercicio 4
            //alignSelf: 'flex-end',
        //Ejercicio 6
            //flex: 2,
        //Ejercicio 9
            //top: 100,
    },
    orangeBox:{
        backgroundColor: '#F0A23B',
        //Ejercicio 1
            //flex: 1,
        //Ejercicio 4
            //alignSelf: 'center',
        //Ejercicio 6
            //flex: 2,
        //Ejercicio 8
            //right: -100,
        //Ejercicio 9
            //right: -100,
        //Ejercicio 10
            //top: 50,
    },
    blueBox:{
        backgroundColor: '#28C4D9',
        //Ejercicio 2
            //width: '100%',
        //Ejercicio 3
            //alignSelf: 'center',
        //Ejercicio 6
            //flex: 4,
    },

})