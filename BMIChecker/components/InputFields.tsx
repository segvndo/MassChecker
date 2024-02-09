import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const InputFields: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBMI] = useState<number | null>(null);

  const handleNumericChange = (inputText: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    const numericInput = inputText.replace(/[^0-9]/g, '');
    const limitedInput = numericInput.slice(0, 3);
    setter(limitedInput);
  };

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to m
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(bmiValue);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputRow}>
        <Text style={styles.titles}>Age</Text>
        <FontAwesome name="user" size={24} color="#008000" />
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => handleNumericChange(text, setAge)}
          value={age}
          placeholder='00'
        />
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.titles}>Weight(kg)</Text>
        <FontAwesome name="balance-scale" size={24} color="#008000" />
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => handleNumericChange(text, setWeight)}
          value={weight}
          keyboardType='numeric'
          placeholder='00kg'
        />
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.titles}>Height(cm)</Text>
        <View style={{ transform: [{ rotate: '-90deg' }] }}>
          <MaterialIcons name="straighten" size={24} color="#008000" />
        </View>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => handleNumericChange(text, setHeight)}
          value={height}
          keyboardType='numeric'
          placeholder='00cm'
        />
      </View>
      <Button title='Calculate BMI' onPress={calculateBMI} />
      {bmi !== null && <Text>Your BMI: {bmi.toFixed(2)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  titles: {
    fontSize: 20,
    fontWeight: '600',
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
    color: '#008000'
  }
});

export default InputFields;
