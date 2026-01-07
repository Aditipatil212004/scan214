import { Text, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../styles/responsive';

export default function SplashScreen({ navigation }) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 1200, useNativeDriver: true }).start();
    setTimeout(() => navigation.replace('Main'), 2200);
  }, []);

  return (
    <LinearGradient colors={['#2563EB', '#1E40AF']} style={styles.container}>
      <Animated.View style={{ opacity: fade }}>
        <Text style={styles.title}>ShopyGo</Text>
        <Text style={styles.subtitle}>Scan · Pay · Go</Text>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: SIZES.title * 1.3, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: SIZES.text, color: '#E0E7FF', marginTop: 8 },
});
