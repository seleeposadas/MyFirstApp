import { View, Text, SafeAreaView } from 'react-native';
//import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
//import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
//import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
//import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';

export const App = () => {
  return (
    <PaperProvider
     settings={{
      icon: (props) => <IonIcon {...props}/>
     }}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        {/* <HelloWorldScreen name='Selene Posadas'/> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen/> */}
        {/* <BoxObjectModelScreen/> */}
        <DimensionScreen/>
      </SafeAreaView>
    </PaperProvider>
  )
}
