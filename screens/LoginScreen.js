import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ onLogin }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎓</Text>

      <Text style={styles.title}>
        CampusHub
      </Text>

      <Text style={styles.subtitle}>
        Conectando você aos eventos da sua instituição
      </Text>

      <TextInput
        placeholder="RA ou Matrícula"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onLogin}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#F5F7FA',
  },

  logo: {
    fontSize: 60,
    textAlign: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#003DA5',
    marginBottom: 10,
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },

  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
  },

  button: {
    backgroundColor: '#003DA5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});