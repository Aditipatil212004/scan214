import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  Animated,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function CartScreen({ navigation }) {

    const scaleAnim = new Animated.Value(1);

const onPressIn = () => {
  Animated.spring(scaleAnim, {
    toValue: 0.96,
    useNativeDriver: true,
  }).start();
};

const onPressOut = () => {
  Animated.spring(scaleAnim, {
    toValue: 1,
    friction: 4,
    useNativeDriver: true,
  }).start();
};

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* ===== Scrollable Content ===== */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }} // space for sticky button
      >

        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={26} color="#0F172A" />
          <Text style={styles.headerTitle}>Your Cart</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3 Items</Text>
          </View>
        </View>

        {/* Cart Items */}
        <CartItem
          image={require('../../assets/products/amul-gold-milk-carton-od3clkzha2vx2unc-2.png')}
          name="Fresh Milk"
          price="₹50"
          qty="1"
        />

        <CartItem
          image={require('../../assets/products/Lays-chip-png-image-isolated-png-Pngsource-6BTP9JNR.png')}
          name="Potato Chips"
          price="₹30"
          qty="2"
        />

        <CartItem
          image={require('../../assets/products/imgbin_5307425ba2902f31ff414873028e1ced.png')}
          name="Whole Wheat Bread"
          price="₹40"
          qty="1"
        />

        {/* Bill Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Bill Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>₹120</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryValue}>₹12</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₹132</Text>
          </View>
        </View>

      </ScrollView>

      {/* ===== Sticky Bottom Pay Bar ===== */}
      <View style={styles.bottomBar}>
        <View style={styles.totalBox}>
          <Text style={styles.bottomLabel}>Total</Text>
          <Text style={styles.bottomAmount}>₹132</Text>
        </View>

       <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
 <TouchableOpacity
  style={styles.payButton}
  onPress={() => navigation.navigate('Payment')}
>
  <Text style={styles.payText}>Proceed to Pay</Text>
</TouchableOpacity>

</Animated.View>

      </View>

    </SafeAreaView>
  );
}

/* ===== Cart Item ===== */
function CartItem({ image, name, price, qty }) {
  return (
    <View style={styles.itemCard}>
      <View style={styles.imageBox}>
        <Image source={image} style={styles.productImage} />
      </View>

      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
      </View>

      <View style={styles.qtyBox}>
        <Ionicons name="remove" size={18} color="#2563EB" />
        <Text style={styles.qtyText}>{qty}</Text>
        <Ionicons name="add" size={18} color="#2563EB" />
      </View>
    </View>
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
    flex: 1,
  },

  badge: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
  },

  /* Cart Item */
  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 5,
  },

  imageBox: {
    width: 60,
    height: 60,
    borderRadius: 14,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  productImage: {
    width: 46,
    height: 46,
    resizeMode: 'contain',
  },

  itemDetails: {
    flex: 1,
  },

  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A',
  },

  itemPrice: {
    fontSize: 14,
    color: '#2563EB',
    marginTop: 4,
  },

  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  qtyText: {
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: 10,
  },

  /* Summary */
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 5,
  },

  summaryTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 16,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  summaryLabel: {
    color: '#64748B',
  },

  summaryValue: {
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
  },

  totalValue: {
    fontSize: 18,
    fontWeight: '700',
  },

  /* Bottom Bar */
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  totalBox: {
    flex: 1,
  },

  bottomLabel: {
    fontSize: 13,
    color: '#64748B',
  },

  bottomAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },

  payButton: {
    backgroundColor: '#22C55E',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 26,
  },

  payText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
