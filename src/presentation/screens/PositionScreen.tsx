import { View, Text, StyleSheet } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        
       <View style={styles.greenBox} />
       <View style={styles.purpleBox} />
       <View style={styles.orangeBox} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //height: 250,
        //width: 300,
        backgroundColor: '#28C4D9',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    title: {
        color: 'black',
    },
    purpleBox:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        //left: 0,
        bottom: 0,
    },
    orangeBox:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        right: 0,
        position: 'absolute',
    },
    greenBox:{
        // width: 100,
        // height: 100,
        //flex: 1,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        // top: 0,
        // left: 0,
        ...StyleSheet.absoluteFillObject, //hace position absolute, bottom, right, left y top en 0.
        
    },
})
