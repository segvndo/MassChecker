import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type BmiCalculatorProps = {
  children?: React.ReactNode
};

const BmiCalculator: React.FC<BmiCalculatorProps> = ({}) => {
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [bmi, setBmi] = React.useState<number | null>(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to m
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue);
  };

return (

  );
};


export default BmiCalculator;