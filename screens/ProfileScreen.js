import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ theme }) {
  const isDark = theme === 'dark';

  return (
    <View
      style={[
        styles.container,
        isDark && { backgroundColor: '#121212' },
      ]}
    >
      <Text
        style={[
          styles.title,
          isDark && { color: '#4DA3FF' },
        ]}
      >
        Perfil
      </Text>

      <View
        style={[
          styles.card,
          isDark && { backgroundColor: '#1E1E1E' },
        ]}
      >
        <Text style={[styles.label, { color: isDark ? '#CCC' : '#000' }]}>
          Nome:
        </Text>
        <Text style={[styles.value, { color: isDark ? '#FFF' : '#003DA5' }]}>
          X
        </Text>

        <Text style={[styles.label, { color: isDark ? '#CCC' : '#000' }]}>
          RA:
        </Text>
        <Text style={[styles.value, { color: isDark ? '#FFF' : '#003DA5' }]}>
          20260001
        </Text>

        <Text style={[styles.label, { color: isDark ? '#CCC' : '#000' }]}>
          Instituição:
        </Text>
        <Text style={[styles.value, { color: isDark ? '#FFF' : '#003DA5' }]}>
          Universidade Exemplo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003DA5',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },

  label: {
    fontSize: 14,
    marginTop: 10,
  },

  value: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
});