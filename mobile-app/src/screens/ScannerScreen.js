import { CameraView, Camera } from 'expo-camera';
import { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function ScannerScreen({ navigation }) {
  const [permission, setPermission] = useState(null);
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  if (permission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (permission === false) {
    return <Text>No camera access</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'ean13', 'ean8', 'code128'],
        }}
        onBarcodeScanned={({ data }) => {
          // Dummy product added
          setCart([{ name: 'T-Shirt', price: 499 }]);
          navigation.navigate('Cart');
        }}
      />
    </View>
  );
}
