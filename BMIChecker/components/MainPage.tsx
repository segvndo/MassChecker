import React from 'react'
import { View, Text } from 'react-native'
import Header from './Header'
import MainContainer from './MainContainer'

const MainPage: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <MainContainer />
    </View>
  )
};

export default MainPage;