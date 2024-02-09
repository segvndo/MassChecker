// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: '#008000' }} />
      <View>
        <Header />
      </View>
      <MainContainer />
      <SafeAreaView style={{ backgroundColor: '#000' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
