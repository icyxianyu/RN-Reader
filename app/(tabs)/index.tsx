import { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { STASH, useStash } from "../../store";

export default function TabOneScreen() {

    const [stash, setStash] = useStash(STASH);

    useEffect(() => {
        setStash(["测试书名1", "测试书名2", "测试书名3", "测试书名4", "测试书名5"]);
    }, [])

    const handlePress = useCallback(() => {
        
    }, [])

    return (
        <ScrollView >
            <View style={styles.container}>
                {
                    stash?.map((item: any) => {
                        return (
                            <View
                                style={styles.singleItem}
                                key={item}
                                onPointerDown={handlePress}>
                                <View
                                    style={styles.imgContainer} />
                                <Text
                                    style={styles.textContainer}>
                                    {item}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    singleItem: {
        width: "30%",
        height: 150,
        backgroundColor: "#ccc",
        display: "flex",
        justifyContent: "space-around",
        marginTop: 10,
        marginLeft: 10,
    },
    imgContainer: {
        width: "80%",
        height: "80%",
        backgroundColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
    },
    textContainer: {
        marginLeft: "auto",
        marginRight: "auto",
    }
});

