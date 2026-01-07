import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { COLORS, SIZES } from '../styles/responsive';

export default function ReceiptScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Successful ✅</Text>
      <QRCode value="RECEIPT12345" size={SIZES.width * 0.55} />
      <Text style={styles.note}>Show this QR at exit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.title,
    marginBottom: 20,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  note: {
    marginTop: 16,
    fontSize: SIZES.small,
    color: COLORS.muted,
  },
});
