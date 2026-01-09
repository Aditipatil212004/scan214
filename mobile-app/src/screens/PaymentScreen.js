import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >

        {/* ===== Header ===== */}
        <View style={styles.header}>
          <Ionicons
            name="chevron-back"
            size={26}
            color="#0F172A"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Payment</Text>
        </View>

        {/* ===== Amount Card ===== */}
        <View style={styles.amountCard}>
          <Text style={styles.amountLabel}>Total Amount</Text>
          <Text style={styles.amountValue}>₹132</Text>
        </View>

        {/* ===== Payment Methods ===== */}
        <Text style={styles.sectionTitle}>Select Payment Method</Text>

        <PaymentOption
          icon="phone-portrait-outline"
          title="UPI"
          subtitle="Google Pay, PhonePe, Paytm"
        />

        <PaymentOption
          icon="card-outline"
          title="Debit / Credit Card"
          subtitle="Visa, MasterCard, Rupay"
        />

        <PaymentOption
          icon="wallet-outline"
          title="Wallet"
          subtitle="Amazon Pay, Paytm Wallet"
        />

        <PaymentOption
          icon="cash-outline"
          title="Cash on Exit"
          subtitle="Pay at store counter"
        />

      </ScrollView>

      {/* ===== Pay Button ===== */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payText}>Pay ₹132</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

/* ===== Payment Option ===== */
function PaymentOption({ icon, title, subtitle }) {
  return (
    <TouchableOpacity style={styles.optionCard}>
      <View style={styles.optionLeft}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={22} color="#2563EB" />
        </View>
        <View>
          <Text style={styles.optionTitle}>{title}</Text>
          <Text style={styles.optionSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

/* ===== Styles ===== */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0F172A',
    marginLeft: 12,
  },

  /* Amount */
  amountCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 20,
    paddingVertical: 24,
    alignItems: 'center',
    marginBottom: 28,
  },

  amountLabel: {
    fontSize: 14,
    color: '#475569',
  },

  amountValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2563EB',
    marginTop: 6,
  },

  /* Section */
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 16,
  },

  /* Payment Option */
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },

  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A',
  },

  optionSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },

  /* Bottom Bar */
  bottomBar: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },

  payButton: {
    backgroundColor: '#22C55E',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
  },

  payText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
});
