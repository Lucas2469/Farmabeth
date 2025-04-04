import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/user.png')} style={styles.logo} />
      <Text style={styles.title}>Mi Cuenta</Text>

      <TextInput placeholder="Nombre" style={styles.input} />
      <TextInput placeholder="Apellidos" style={styles.input} />
      <TextInput placeholder="Correo" style={styles.input} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Historial Médico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notificaciones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // 🔹 Alinea con LoginScreen
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 80, // 🔹 Misma altura que LoginScreen
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10, // 🔹 Igual al logo en LoginScreen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80, // 🔹 Igual al título en LoginScreen
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4B0082',
    padding: 12,
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
    width: '45%', // 🔹 Tamaño ajustado para mejor apariencia
  },
  buttonText: {
    color: '#fff',
  },
});
