import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >

      {/* ===== Profile Header (Hero Section) ===== */}
      <View style={styles.headerCard}>
        <Image
          source={require('../../assets/images/ketan.jpeg')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Ketan Patil</Text>
        <Text style={styles.email}>ketan.patil@example.com</Text>

        <View style={styles.badge}>
          <Ionicons name="checkmark-circle" size={14} color="#2563EB" />
          <Text style={styles.badgeText}>Verified User</Text>
        </View>
      </View>

      {/* ===== Menu Section ===== */}
      <View style={styles.menuSection}>

        <ProfileItem icon="receipt-outline" label="Order History" />
        <ProfileItem icon="card-outline" label="Payment Methods" />
        <ProfileItem icon="notifications-outline" label="Notifications" />
        <ProfileItem icon="help-circle-outline" label="Help & Support" />

      </View>

      {/* ===== Logout ===== */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

/* ===== Reusable Menu Item ===== */
function ProfileItem({ icon, label }) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={20} color="#2563EB" />
        </View>
        <Text style={styles.itemText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },

  /* ===== Header Card ===== */
  headerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    alignItems: 'center',
    paddingVertical: 32,
    marginTop: 10,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 14,
  },

  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#0F172A',
  },

  email: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    marginTop: 12,
  },

  badgeText: {
    marginLeft: 6,
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '500',
  },

  /* ===== Menu ===== */
  menuSection: {
    marginTop: 6,
  },

  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },

  itemLeft: {
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
    marginRight: 16,
  },

  itemText: {
    fontSize: 16,
    color: '#0F172A',
    fontWeight: '500',
  },

  /* ===== Logout ===== */
  logoutButton: {
    marginTop: 28,
    backgroundColor: '#DC2626',
    borderRadius: 18,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});
