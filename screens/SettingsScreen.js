import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function SettingsScreen({
  theme,
  setTheme,
}) {
  const isDark = theme === 'dark';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? '#121212'
            : '#F5F7FA',
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: isDark
              ? '#FFFFFF'
              : '#003DA5',
          },
        ]}
      >
        Configurações
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => setTheme('light')}
      >
        <Text style={styles.cardText}>
          ☀️ Tema Claro
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => setTheme('dark')}
      >
        <Text style={styles.cardText}>
          🌙 Tema Escuro
        </Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Tema Atual: {isDark ? 'Escuro' : 'Claro'}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Versão 1.0.0
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          Futuras Implementações
        </Text>

        <Text style={styles.infoText}>
          • Integração com sistemas acadêmicos
        </Text>

        <Text style={styles.infoText}>
          • Login institucional
        </Text>

        <Text style={styles.infoText}>
          • Notificações em tempo real
        </Text>

        <Text style={styles.infoText}>
          • Personalização por instituição
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  cardText: {
    fontSize: 16,
  },

  infoCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    marginTop: 15,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003DA5',
    marginBottom: 10,
  },

  infoText: {
    marginBottom: 6,
    color: '#444',
  },
});