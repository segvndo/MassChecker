import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

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

      // Hide loading spinner
      setIsLoading(false);

      // Clear input fields
      setWeight('');
      setHeight('');
      setAge('');
    }, 2000);
  };

  const renderBMIGauge = () => {
    let backgroundColor = '#F0F0F0';

    if (bmi !== null) {
      if (bmi < 18.5) {
        backgroundColor = '#95bff3'; // Light blue for underweight
      } else if (bmi >= 18.5 && bmi < 25) {
        backgroundColor = '#0cc967'; // Green for normal weight
      } else if (bmi >= 25 && bmi < 30) {
        backgroundColor = '#ffe666'; // Yellow for overweight
      } else if (bmi >= 30 && bmi < 35) {
        backgroundColor = '#FFA500'; // Orange for obesity class I
      } else {
        backgroundColor = '#ff4242'; // Red for obesity class II and above
      }
    }

    return backgroundColor;
  };

  const interpretBMI = (bmiValue: number): string => {
    if (bmiValue < 18.5) {
      return "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      return "Normal";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      return "Overweight";
    } else if (bmiValue >= 30 && bmiValue < 35) {
      return "Obesity Class I";
    } else {
      return "Obesity Class II and above";
    }
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
      <View style={styles.calculate}>
        <Button title='Calculate BMI' onPress={calculateBMI} color="#fff" />
        <FontAwesome name="calculator" size={24} color="#fff" />
      </View>
      <View>
        <Image source={require('../assets/bmi3.jpeg')} />
      </View>
      <View style={[styles.result, { backgroundColor: renderBMIGauge() }]}>
        {isLoading ? (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="#008000" />
          </View>
        ) : (
          <>
            {bmi !== null && (
              <>
                <View style={styles.interpretationContainer}>
                  <Text style={styles.interpretation}>
                    {interpretBMI(bmi)}
                  </Text>
                </View>
                <Text style={styles.resultText}>
                  Your BMI: {bmi.toFixed(2)}
                </Text>
              </>
            )}
          </>
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
    color: '#008000',
  },
  calculate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 10,
  },
  bmiGauge: {
    padding: 10,
    borderRadius: 10,
  },
  result: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 18,
    marginTop: 5,
    position: 'absolute',
    top: 2,
    right: 2,
  },
  spinnerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // interpretationContainer: {
  //   backgroundColor: '#000',
  //   borderRadius: 10,
  //   padding: 10,
  // },
  interpretation: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    
  },
});

export default InputFields;
