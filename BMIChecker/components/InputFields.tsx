import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

const InputFields: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [bmi, setBMI] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNumericChange = (inputText: string, setter: React.Dispatch<React.SetStateAction<string>>, field: string) => {
    const numericInput = inputText.replace(/[^0-9]/g, '');
    const limitedInput = numericInput.slice(0, 3);
    setter(limitedInput);

    // Validate input
    if (!limitedInput) {
      setErrors(prevErrors => ({ ...prevErrors, [field]: '*' }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
    }
  };

  const calculateBMI = () => {
    // Validate all input fields before proceeding
    if (!age || !weight || !height) {
      setErrors({
        age: !age ? '*' : '',
        weight: !weight ? '*' : '',
        height: !height ? '*' : '',
      });
      return;
    }

    // Show loading spinner
    setIsLoading(true);


    setTimeout(() => {
    // Calculate BMI if all fields are filled
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to m
    const bmiValue = weightInKg / (heightInM * heightInM);
    // Reset errors
    setErrors({});
    setBMI(bmiValue);

    // Clear input fields
    setWeight('');
    setHeight('');
    setAge('');

    // Hide loading spinner
    setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputRow}>
        <Text style={styles.titles}>Age</Text>
        <FontAwesome name="user" size={24} color="#008000" />
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => handleNumericChange(text, setAge, 'age')}
          value={age}
          placeholder='00'
        />
        {errors.age && <Text style={styles.error}>{errors.age}</Text>}
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.titles}>Weight(kg)</Text>
        <FontAwesome name="balance-scale" size={24} color="#008000" />
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => handleNumericChange(text, setWeight, 'weight')}
          value={weight}
          keyboardType='numeric'
          placeholder='00kg'
        />
        {errors.weight && <Text style={styles.error}>{errors.weight}</Text>}
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.titles}>Height(cm)</Text>
        <View style={{ transform: [{ rotate: '-90deg' }] }}>
          <MaterialIcons name="straighten" size={24} color="#008000" />
        </View>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => handleNumericChange(text, setHeight, 'height')}
          value={height}
          keyboardType='numeric'
          placeholder='00cm'
        />
        {errors.height && <Text style={styles.error}>{errors.height}</Text>}
      </View>
      <View >
        <Button title='Calculate BMI' onPress={calculateBMI} color="#00A000"/>
      </View>
      <View>
      {isLoading ? (
          <ActivityIndicator size="large" color="#008000" />
        ) : bmi !== null && (
          <Text style={styles.result}>Your BMI: {bmi.toFixed(2)}</Text>
        )}
      </View>
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
    position: 'relative',
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
  },
  button: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  result: {
    fontSize: 25,
    fontWeight: '600',
    color: '#008000',
    marginTop: 10,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 18,
    marginTop: 5,
    position: 'absolute',
    top: 2,
    right: 2,
  }
});

export default InputFields;
