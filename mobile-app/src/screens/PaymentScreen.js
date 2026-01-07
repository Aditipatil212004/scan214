import { View, Button, Text } from 'react-native';

export default function PaymentScreen({ navigation }) {
  return (
    <View style={{ padding:20 }}>
      <Text>Payment Successful</Text>
      <Button title="View Receipt" onPress={() => navigation.navigate('Receipt')} />
    </View>
  );
}
