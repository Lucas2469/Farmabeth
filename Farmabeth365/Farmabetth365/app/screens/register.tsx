import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';

export default function RegisterScreen() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Crear Cuenta</Text>

        <TextInput placeholder="Nombre" style={styles.input} />
        <TextInput placeholder="Apellidos" style={styles.input} />
        <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} />
        <TextInput placeholder="Confirmar Contraseña" secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fecha Nacimiento</Text>
        </TouchableOpacity>

        <Text style={styles.or}>También puedes crear una cuenta con:</Text>

        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialButtonContent}>
            <Image source={require('../../assets/google.png')} style={styles.socialIcon} />
            <Text>Continuar con Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialButtonContent}>
            <Image source={require('../../assets/facebook.png')} style={styles.socialIcon} />
            <Text>Continuar con Facebook</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    justifyContent: 'flex-start',
    backgroundColor: '#fff', 
    paddingHorizontal: 20,
    paddingTop: 80, 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    alignSelf: 'center', 
  },
  input: { 
    width: '100%', 
    padding: 12, 
    borderWidth: 1, 
    borderRadius: 8, 
    marginBottom: 10, 
    alignSelf: 'center', 
  },
  button: { 
    backgroundColor: '#4B0082', 
    padding: 12, 
    borderRadius: 8, 
    width: '100%', 
    alignItems: 'center', 
    marginTop: 10, 
    alignSelf: 'center', 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
  },
  or: { 
    marginTop: 10, 
    alignSelf: 'center', 
  },
  socialButton: { 
    backgroundColor: '#ddd', 
    padding: 12, 
    borderRadius: 8, 
    width: '100%', 
    alignItems: 'center', 
    marginVertical: 5, 
    alignSelf: 'center', 
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    width: 20, 
    height: 20, 
    marginRight: 10, // Espacio entre el logo y el texto
  },
});
