import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import InputFields from './InputFields'

type MainContainerProps = {
  children?: React.ReactNode
};

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <InputFields />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  } as ViewStyle
});

export default MainContainer;