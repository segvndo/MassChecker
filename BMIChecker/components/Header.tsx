import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import HeaderContent from './HeaderContent'

type HeaderProps = {
  children?: React.ReactNode
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <HeaderContent />
      <Ionicons name='scale' size={50} color='#fff' style={styles.icon} />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008000',
    padding:10
  },
  icon: {
    marginLeft: 10
  }
})

export default Header;