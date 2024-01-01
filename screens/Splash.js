import React from 'react';
import { Box, Button, ButtonText, Image, Text } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import firebase from "../firebase";

const Splash = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    useEffect(() => {
        getUser();
    }, []);
    const getUser = async () => {
        try {
            // Ambil data dari AsyncStorage
            const userData = await AsyncStorage.getItem("user-data");
            if (userData !== null) {
                // Diarahkan ke Halaman Home
                navigation.replace("Tabs");
            } else {
                setIsLoading(false);
            }
        } catch (e) {
            console.error(e);
        }
    };
    return (
        

    );

};
export default Splash;