import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const STASH = "STASH";

export const useStash = (value: string) => {

    const [stash, setStash] = useState<any>();

    useEffect(() => {
        getStash();
    }, [])

    const getStash = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(value);
            setStash(jsonValue != null ? JSON.parse(jsonValue) : null);            
        } catch (e) {
            console.log(e);
        }
    }

    const setStashValue = async (val: any) => {
        try {
            const jsonValue = JSON.stringify(val);
            await AsyncStorage.setItem(value, jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    return [stash, setStashValue];

}