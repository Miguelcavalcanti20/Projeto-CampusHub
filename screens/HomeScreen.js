import { ScrollView, View, Text, StyleSheet } from 'react-native';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

export default function HomeScreen({ theme }) {
  const isDark = theme === 'dark';

  return (
    <ScrollView
      style={{
        backgroundColor: isDark ? '#121212' : '#F5F7FA',
      }}
      contentContainerStyle={styles.content}
    >
      <View
        style={[
          styles.header,
          isDark && { backgroundColor: '#1E3A8A' },
        ]}
      >
        <Text style={styles.headerTitle}>Olá 👋</Text>

        <Text style={styles.headerSubtitle}>
          Confira os próximos eventos da sua instituição
        </Text>
      </View>

      <View
        style={[
          styles.highlightCard,
          isDark && {
            backgroundColor: '#1E1E1E',
          },
        ]}
      >
        <Text style={styles.highlightTitle}>Evento em Destaque</Text>

        <Text
          style={[
            styles.highlightEvent,
            isDark && { color: '#FFF' },
          ]}
        >
          Feira de Estágios 2026
        </Text>

        <Text
          style={[
            styles.highlightInfo,
            isDark && { color: '#AAA' },
          ]}
        >
          134 inscritos
        </Text>
      </View>

      <Text
        style={[
          styles.sectionTitle,
          isDark && { color: '#4DA3FF' },
        ]}
      >
        Próximos Eventos
      </Text>

      {events.map((event) => (
        <EventCard key={event.id} event={event} theme={theme} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    backgroundColor: '#003DA5',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
  },

  headerTitle: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#FFF',
    marginTop: 8,
    fontSize: 15,
    opacity: 0.9,
  },

  highlightCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },

  highlightTitle: {
    color: '#003DA5',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  highlightEvent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },

  highlightInfo: {
    marginTop: 5,
    color: '#666',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003DA5',
    marginBottom: 15,
  },
});