import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Disclaimer: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main' as never);
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#008000' }}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Disclaimer
        </Text>
        <Text style={styles.body}>
          Designed for adults over the age of 18, this calculator is for informational purposes only. Consult a doctor before making any decisions.
        </Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    backgroundColor: '#008000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 20,
  },
  body: {
    fontSize: 20,
    fontWeight: '300',
    color: '#fff',
  },
});

export default Disclaimer;