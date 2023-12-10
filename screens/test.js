import React, { useState } from 'react'
import { Box, Input, Text, InputField, Button, ButtonText, ButtonIcon } from '@gluestack-ui/themed'
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../firebase";
const Test = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Panggil method untuk menyimpan data ke AsyncStorage
                saveUserData(email, password, userCredential);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const saveUserData = async (email, password, credential) => {
        const userData = { email, password, credential };
        try {
            // Menyimpan data User ke AsyncStorage
            await AsyncStorage.setItem("user-data", JSON.stringify(userData));
            // Diarahkan ke Halaman Home
            navigation.replace("Home");
        } catch (error) {
            console.error(error);
        }
    };
    return (

        <Box padding={10}>
            <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
            >
                <InputField placeholder="Enter Text here" type='email' onChangeText={(email) => setEmail(email)} />
            </Input>
            <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
            >
                <InputField placeholder="Enter Text here" type="password" onChangeText={(password) => setPassword(password)} />
            </Input>

            <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} onPress={() => { handleRegister() }} >
                <ButtonText>Add </ButtonText>
            </Button>


        </Box>
    )
}

export default Test