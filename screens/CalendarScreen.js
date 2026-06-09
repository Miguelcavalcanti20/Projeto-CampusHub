import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const events = {
  '2026-6': [
    { day: 15, title: 'Workshop React Native' },
    { day: 22, title: 'Palestra sobre IA' },
    { day: 28, title: 'Feira de Estágios' },
  ],
};

export default function CalendarScreen({ theme }) {
  const isDark = theme === 'dark';

  const [month, setMonth] = useState(5);
  const [year] = useState(2026);

  const monthNames = [
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const calendarDays = [];

  for (let i = 0; i < adjustedFirstDay; i++) calendarDays.push('');
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  const monthEvents = events[`${year}-${month + 1}`] || [];

  return (
    <View
      style={[
        styles.container,
        isDark && { backgroundColor: '#121212' },
      ]}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => month > 0 && setMonth(month - 1)}>
          <Text style={styles.arrow}>◀</Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.title,
            isDark && { color: '#4DA3FF' },
          ]}
        >
          {monthNames[month]} {year}
        </Text>

        <TouchableOpacity onPress={() => month < 11 && setMonth(month + 1)}>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* DIAS DA SEMANA */}
      <View style={styles.weekDays}>
        {['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map((d, i) => (
          <Text
            key={i}
            style={[
              styles.weekText,
              { color: isDark ? '#AAA' : '#000' },
            ]}
          >
            {d}
          </Text>
        ))}
      </View>

      {/* CALENDÁRIO */}
      <View style={styles.calendar}>
        {calendarDays.map((day, i) => {
          const hasEvent = monthEvents.some(e => e.day === day);

          return (
            <View
              key={i}
              style={[
                styles.day,
                hasEvent && {
                  backgroundColor: isDark ? '#2A3B5F' : '#D6E4FF',
                  borderRadius: 8,
                },
              ]}
            >
              <Text style={{ color: isDark ? '#FFF' : '#000' }}>
                {day}
              </Text>
            </View>
          );
        })}
      </View>

      {/* EVENTOS */}
      <Text
        style={[
          styles.eventsTitle,
          isDark && { color: '#4DA3FF' },
        ]}
      >
        Eventos do mês
      </Text>

      {monthEvents.length === 0 ? (
        <Text style={{ color: isDark ? '#AAA' : '#666' }}>
          Nenhum evento anunciado.
        </Text>
      ) : (
        monthEvents.map((event, i) => (
          <View
            key={i}
            style={[
              styles.eventCard,
              isDark && { backgroundColor: '#1E1E1E' },
            ]}
          >
            <Text style={{ color: isDark ? '#FFF' : '#000' }}>
              {event.day}/{month + 1}/{year}
            </Text>

            <Text style={{ color: isDark ? '#CCC' : '#000' }}>
              {event.title}
            </Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003DA5',
  },

  arrow: {
    fontSize: 24,
    color: '#003DA5',
  },

  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  weekText: {
    width: '14%',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  day: {
    width: '14%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  eventsTitle: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003DA5',
  },

  eventCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});