import { StyleSheet, FlatList, ScrollView } from 'react-native';
import { useCallback, useState } from "react"
import { Text, View } from '../../components/Themed';
import { Tab, TabView } from '@rneui/base';
import { router } from "expo-router";

export default function TabOneScreen() {
  const [index, setIndex] = useState(0);
  const [row1] = useState((new Array(100).fill(0).map(() => Math.random() * 200 + 100)));
  const [row2] = useState((new Array(100).fill(0).map(() => Math.random() * 200 + 100)));

  const press = useCallback((event: any) => {
    router.push("/modal")
  }, [])
  return (
    <>
      <Tab value={index} onChange={setIndex} dense>
        <Tab.Item title="Tab One" onPress={() => setIndex(0)} />
        <Tab.Item title="Tab Two" onPress={() => setIndex(1)} />
        <Tab.Item title="Tab Three" onPress={() => setIndex(2)} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: '100%' }}>
          <ScrollView >
            <View style={styles.container} onTouchEnd={press} >
              <View style={styles.flexRow} >
                {
                  row1.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={{ ...styles.flexRowItem, height: item }} />
                    )
                  })
                }
              </View>
              <View style={styles.flexRow} >{
                row2.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{ ...styles.flexRowItem, height: item }} />
                  )
                })
              }
              </View>

            </View>
          </ScrollView>

        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <Text >Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <Text>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  flexRow: {
    width: "50%",
    backgroundColor: 'skyblue',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  flexRowItem: {
    width: "80%",
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: "auto",
  }
});
