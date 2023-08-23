import { StyleSheet } from 'react-native';
import { useState } from "react"
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Tab } from '@rneui/base';

export default function TabOneScreen() {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Tab value={index} onChange={setIndex} dense>
        <Tab.Item>Tab</Tab.Item>
        <Tab.Item>Tab</Tab.Item>
      </Tab>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
