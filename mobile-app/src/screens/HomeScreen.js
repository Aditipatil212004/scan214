import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES, SHADOW } from '../styles/responsive';

const STORES = [
  {
    id: '1',
    name: 'Zudio',
    tagline: 'Fashion for Everyone',
    logo: require('../../assets/stores/zudio-logo-hd.png'),
  },
  {
    id: '2',
    name: 'Westside',
    tagline: 'Style & Comfort',
    logo: require('../../assets/stores/westside-logo-hd.png'),
  },
  {
    id: '3',
    name: 'Zara',
    tagline: 'Premium Fashion',
    logo: require('../../assets/stores/zara-logo-hd.png'),
  },
  {
    id: '4',
    name: 'H&M',
    tagline: 'Fashion & Quality',
    logo: require('../../assets/stores/585990604f6ae202fedf28d3.png'),
  },
  {
    id: '5',
    name: 'Reliance Trends',
    tagline: 'Everyday Fashion',
    logo: require('../../assets/stores/reliance-trends-logo-hd.png'),
  },
  {
    id: '6',
    name: 'Reliance Smart',
    tagline: 'Groceries & More',
    logo: require('../../assets/stores/pngegg.png'),
  },
  {
    id: '7',
    name: 'DMart',
    tagline: 'Value for Money',
    logo: require('../../assets/stores/dmart-logo-hd.png'),
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.heading}>Welcome 👋</Text>
      <Text style={styles.subHeading}>
        Choose a store and start shopping smart
      </Text>

      {/* Vertical Store Slider */}
      <FlatList
        data={STORES}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.storeCard}>
            <View style={styles.row}>
             <View style={styles.logoContainer}>
  <Image source={item.logo} style={styles.logo} />
</View>


              <View style={styles.storeInfo}>
                <Text style={styles.storeName}>{item.name}</Text>
                <Text style={styles.storeTag}>{item.tagline}</Text>
              </View>
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>View Offers</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Floating Scan Button */}
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => navigation.navigate('Scanner')}
      >
        <Icon name="scan-outline" size={24} color="#fff" />
        <Text style={styles.scanText}>Scan Product</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.padding,
  },

  heading: {
    fontSize: SIZES.title,
    fontWeight: 'bold',
    color: COLORS.text,
  },

  subHeading: {
    fontSize: SIZES.small,
    color: COLORS.muted,
    marginBottom: 16,
  },

  storeCard: {
    backgroundColor: COLORS.card,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    marginBottom: 16,
    ...SHADOW,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

logoContainer: {
  width: 68,          // ⬅ increased from 60
  height: 68,         // ⬅ increased from 60
  backgroundColor: '#FFFFFF',
  borderRadius: 14,
  justifyContent: 'center',
  alignItems: 'center',
},

logo: {
  width: 50,          // ⬅ increased from 42
  height: 50,         // ⬅ increased from 42
  resizeMode: 'contain',
},

  storeInfo: {
    marginLeft: 16,
  },

  storeName: {
    fontSize: SIZES.text,
    fontWeight: '600',
    color: COLORS.text,
  },

  storeTag: {
    fontSize: SIZES.small,
    color: COLORS.muted,
    marginTop: 4,
  },

  badge: {
    marginTop: 16,
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primary + '20',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
  },

  badgeText: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    fontWeight: '600',
  },

  scanButton: {
    position: 'absolute',
    bottom: 20,
    left: SIZES.padding,
    right: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 999,
  },

  scanText: {
    color: '#fff',
    fontSize: SIZES.text,
    fontWeight: '600',
    marginLeft: 8,
  },
});
