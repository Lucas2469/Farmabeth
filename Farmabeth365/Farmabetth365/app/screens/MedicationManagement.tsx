import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function MedicationManagement() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gestión de Medicamentos</Text>
      <Text style={styles.subtitle}>Registro Medicamento</Text>
      
      <Text style={styles.label}>Nombre Medicamento</Text>
      <TextInput style={styles.input} placeholder="Ingrese el nombre" />
      
      <Text style={styles.label}>Dosis</Text>
      <TextInput style={styles.input} placeholder="Ingrese la dosis" keyboardType="numeric" />
      
      <Text style={styles.label}>Frecuencia</Text>
      <TextInput style={styles.input} placeholder="Ejemplo: Cada 8 horas" />
      
      <Text style={styles.label}>Hora Recomendada</Text>
      <TextInput style={styles.input} placeholder="Ejemplo: 08:00 AM" />
      
      <Text style={styles.label}>Hora Inicio</Text>
      <TextInput style={styles.input} placeholder="Ejemplo: 09:30 AM" />
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/customer-support')}>
        <Text style={styles.buttonText}>Ir a Atención al Cliente</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4B0082',
    padding: 12,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
