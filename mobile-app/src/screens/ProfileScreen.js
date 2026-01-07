import { View, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ padding:20 }}>
      <Button title="Staff Login" onPress={() => navigation.navigate('StaffLogin')} />
      <Button title="Admin Login" onPress={() => navigation.navigate('AdminLogin')} />
    </View>
  );
}
