import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useContext, useRef } from 'react';
import { CartContext } from '../context/CartContext';
import { COLORS, SIZES } from '../styles/responsive';

export default function CartScreen({ navigation }) {
  const { cart } = useContext(CartContext);
  const scale = useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.container}>
      {cart.map((item, i) => (
        <Text key={i} style={styles.item}>{item.name} – ₹{item.price}</Text>
      ))}

      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Payment')}
          onPressIn={() => Animated.spring(scale, { toValue: 0.96, useNativeDriver: true }).start()}
          onPressOut={() => Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()}
        >
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: SIZES.padding, backgroundColor: COLORS.background },
  item: { fontSize: SIZES.text, color: COLORS.text, marginBottom: 8 },
  button: {
    marginTop: 24,
    backgroundColor: COLORS.accent,
    paddingVertical: 16,
    borderRadius: 999,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: SIZES.text, fontWeight: '600' },
});
