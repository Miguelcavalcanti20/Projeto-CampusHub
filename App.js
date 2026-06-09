import { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import NoticesScreen from './screens/NoticesScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

export default function App() {
  const [logged, setLogged] = useState(false);
  const [screen, setScreen] = useState('home');

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');

      if (savedTheme) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeTheme = async (newTheme) => {
    try {
      setTheme(newTheme);

      await AsyncStorage.setItem(
        'theme',
        newTheme
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (!logged) {
    return (
      <LoginScreen
        onLogin={() => setLogged(true)}
      />
    );
  }

  const renderScreen = () => {
    switch (screen) {
      case 'calendar':
        return <CalendarScreen theme={theme} />;

      case 'notices':
        return <NoticesScreen theme={theme} />;

      case 'profile':
        return <ProfileScreen theme={theme} />;

      case 'settings':
        return (
          <SettingsScreen
            theme={theme}
            setTheme={changeTheme}
          />
        );

      default:
        return <HomeScreen theme={theme} />;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            theme === 'dark'
              ? '#121212'
              : '#F5F7FA',
        },
      ]}
    >
      <View style={styles.content}>
        {renderScreen()}
      </View>

      <View
        style={[
          styles.navbar,
          {
            backgroundColor:
              theme === 'dark'
                ? '#1E1E1E'
                : '#003DA5',
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => setScreen('home')}
        >
          <Ionicons
            name="home"
            size={28}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen('calendar')}
        >
          <Ionicons
            name="calendar"
            size={28}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen('notices')}
        >
          <Ionicons
            name="notifications"
            size={28}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen('profile')}
        >
          <Ionicons
            name="person"
            size={28}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen('settings')}
        >
          <Ionicons
            name="settings"
            size={28}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

 navbar: {
  height: 80,
  paddingBottom: 15,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',

  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,

  elevation: 10,
}
});