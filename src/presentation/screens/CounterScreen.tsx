import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {
    const [count, setCount] = useState(10)
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {count} </Text>
            {/* <Pressable
          onPress={ () => setCount( count + 1) }
          onLongPress={ () => setCount(0)}
          style={ ({ pressed }) => [styles.button, pressed && styles.buttonPressed] }>
            <Text style={ { color: Platform.OS === 'android' ? 'white' : '#4746AB' }}>Incrementar </Text>
        </Pressable> */}
            {/* <PrimaryButton
                label='Incrementar'
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)} /> */}

            <Button
                mode='contained'
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}>Incrementar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300',
    },
})