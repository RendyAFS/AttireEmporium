import React, { useState } from "react";
import {GluestackUIProvider, Heading, Center, StatusBar, Box, Text, Input, InputField, Pressable} from "@gluestack-ui/themed";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Tambahkan logika autentikasi di sini sesuai kebutuhan Anda.
    };

    return (
        <Box flex={1} justifyContent="center" bgColor="#F5F5F5" alignItems="center">
            <Heading>Login</Heading>
            <Box width={300}>
                <Input
                    width={"68%"}
                    variant="outline"
                    size="sm"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    backgroundColor="#F5F5F5"
                    marginTop={2}
                    borderWidth={0}
                >
                    <InputField marginStart={30} placeholder="Username" />
                </Input>
                <Input
                    width={"68%"}
                    variant="outline"
                    size="sm"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    backgroundColor="#F5F5F5"
                    marginTop={2}
                    borderWidth={0}
                >
                    <InputField marginStart={30} placeholder="Password" />
                </Input>
                <Pressable marginTop={15} alignItems="center">
                    <Text padding={10} width={100} backgroundColor="black" color="white" textAlign="center">
                        Login
                    </Text>
                </Pressable>
            </Box>
        </Box>
    );
};

export default Login;