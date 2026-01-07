import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOW } from '../styles/responsive';

const stores = ['Zudio', 'Westside', 'Zara', 'H&M'];

export default function StoresScreen() {
  return (
    <FlatList
      data={stores}
      numColumns={SIZES.width >= 768 ? 2 : 1}
      keyExtractor={(item) => item}
      contentContainerStyle={{ padding: SIZES.padding }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item}</Text>
          <Text style={styles.sub}>View offers →</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.card,
    padding: SIZES.padding,
    margin: 8,
    borderRadius: SIZES.radius,
    ...SHADOW,
  },
  name: { fontSize: SIZES.text, fontWeight: '600', color: COLORS.text },
  sub: { fontSize: SIZES.small, color: COLORS.muted, marginTop: 4 },
});
