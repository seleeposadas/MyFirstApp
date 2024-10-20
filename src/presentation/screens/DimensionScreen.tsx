import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { Dimensions } from 'react-native';


//const { height, width } = Dimensions.get('window');

export const DimensionScreen = () => {

    const { width, height} = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.6
                }} />
            </View>

            <Text style={styles.title}>w: {width}, h: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //width: '100%',
        width: 300,
        backgroundColor: 'red',
        height: 300,
    },
    title: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center'
    },
    purpleBox: {
        height: '50%',
        backgroundColor: '#5856D6',
        width: '50%',
    },
})
