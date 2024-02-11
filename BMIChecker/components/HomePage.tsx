import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main' as never);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#008000' }}>
      <View style={styles.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
