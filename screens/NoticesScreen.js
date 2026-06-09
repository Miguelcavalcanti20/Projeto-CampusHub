import { View, Text, StyleSheet } from 'react-native';

export default function NoticesScreen({ theme }) {
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
        Avisos
      </Text>

      {[
        {
          type: 'EVENTO',
          title: 'Workshop React Native',
          msg: 'Últimas vagas disponíveis para inscrição.',
        },
        {
          type: 'ATUALIZAÇÃO',
          title: 'Palestra sobre Inteligência Artificial',
          msg: 'Local alterado para o Auditório Principal.',
        },
        {
          type: 'PRAZO',
          title: 'Feira de Estágios',
          msg: 'Inscrições encerram amanhã às 23:59.',
        },
      ].map((item, i) => (
        <View
          key={i}
          style={[
            styles.card,
            isDark && { backgroundColor: '#1E1E1E' },
          ]}
        >
          <Text style={styles.badge}>{item.type}</Text>

          <Text style={[styles.event, isDark && { color: '#FFF' }]}>
            {item.title}
          </Text>

          <Text style={[styles.message, isDark && { color: '#AAA' }]}>
            {item.msg}
          </Text>
        </View>
      ))}
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
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  badge: {
    color: '#003DA5',
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 12,
  },

  event: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  message: {
    color: '#555',
    lineHeight: 20,
  },
});