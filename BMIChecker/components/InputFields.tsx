import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

type InputFieldsProps = {
  children?: React.ReactNode
};

const InputFields: React.FC<InputFieldsProps> = ({ children }) => {
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [age, setAge] = React.useState('');

  // const handleWeightChange = (inputText: string) => {
  //     setWeight(inputText)
  // };

  // const handleHeightChange = (inputText: string) => {
  //   setHeight(inputText)
  // };

  // const handleAgeChange = (inputText: string) => {
  //   setAge(inputText)
  // };

  const handleNumericChange = (inputText: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    // Replace non-numeric characters with an empty string***
    const numericInput = inputText.replace(/[^0-9]/g, '');

    // Limit the length of the input to 3 characters
    const limitedInput = numericInput.slice(0, 3);
    setter(limitedInput);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputRow}>
        <Text style={styles.titles}>
          Age
        </Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => handleNumericChange(text, setAge)}
          value={age}
          placeholder='00'>
        </TextInput>
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.titles}>
          Weight
        </Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => handleNumericChange(text, setWeight)}
          value={weight}
          keyboardType='numeric'
          placeholder='00'>
        </TextInput>
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.titles}>
          Height
        </Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => handleNumericChange(text, setHeight)}
          value={height}
          keyboardType='numeric'
          placeholder='00'>
        </TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titles: {
    fontSize: 20,
    color: '#008000',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  inputField: {
    height: 50,
    width: '30%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 6,
    fontSize: 20,
  }
})

export default InputFields;