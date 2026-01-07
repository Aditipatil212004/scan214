import { View, Button } from 'react-native';

export default function StaffLoginScreen({ navigation }) {
  return (
    <View style={{ padding:20 }}>
      <Button title="Login" onPress={() => navigation.navigate('StaffVerify')} />
    </View>
  );
}
