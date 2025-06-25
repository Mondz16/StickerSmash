import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./(tabs)/styles";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This screen does not exist.</Text>
      <Link href="/" style={styles.button}>
        Go to Home screen
      </Link>
      <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
    </View>
  );
}

