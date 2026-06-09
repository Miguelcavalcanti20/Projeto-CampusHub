import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function EventCard({ event, theme }) {
  const [confirmed, setConfirmed] = useState(false);
  const isDark = theme === 'dark';

  return (
    <View
      style={[
        styles.card,
        isDark && { backgroundColor: '#1E1E1E' },
      ]}
    >
      <Text
        style={[
          styles.title,
          isDark && { color: '#4DA3FF' },
        ]}
      >
        {event.title}
      </Text>

      <Text style={[styles.info, isDark && { color: '#CCC' }]}>
        Data: {event.date}
      </Text>

      <Text style={[styles.info, isDark && { color: '#CCC' }]}>
        Horário: {event.time}
      </Text>

      <Text style={[styles.info, isDark && { color: '#CCC' }]}>
        Local: {event.location}
      </Text>

      <Text style={[styles.participants, isDark && { color: '#4DA3FF' }]}>
        {event.participants} inscritos
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          confirmed && styles.buttonConfirmed,
        ]}
        onPress={() => setConfirmed(!confirmed)}
      >
        <Text style={styles.buttonText}>
          {confirmed ? 'Presença Confirmada' : 'Confirmar Presença'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003DA5',
    marginBottom: 10,
  },

  info: {
    marginBottom: 4,
  },

  participants: {
    marginTop: 10,
    color: '#003DA5',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#003DA5',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },

  buttonConfirmed: {
    backgroundColor: '#2E8B57',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});