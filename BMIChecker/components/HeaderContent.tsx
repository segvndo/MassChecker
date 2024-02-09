import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type HeaderContentProps = {
  children?: React.ReactNode
};

const HeaderContent: React.FC<HeaderContentProps> = ({ children }) => {
  return (
    <View>
      <Text style={ styles.headerContent }>
        BMI Checker
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    padding: 20,
  }
})

export default HeaderContent