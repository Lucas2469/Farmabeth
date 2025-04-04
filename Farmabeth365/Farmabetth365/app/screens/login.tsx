import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>FARMABETTH 365</Text>

      <TextInput placeholder="Correo" style={styles.input} />
      <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/MedicationManagement')}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/screens/register')}>
        <Text style={styles.link}>¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/screens/account')}>
        <Text style={styles.link}>¿Olvidaste tu cuenta?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // 🔹 Mueve todo un poco más arriba
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 80, // 🔹 Controla qué tan arriba está todo
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10, // 🔹 Menos espacio entre logo y título
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80, // 🔹 Mayor espacio antes del formulario
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4B0082',
    padding: 12,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#4B0082',
    marginTop: 10,
  },
});
