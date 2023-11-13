import React, { useState } from "react";
import {
    Box,
    VStack,
    Input,
    InputField,
    Button,
    ButtonText,
    Divider,
    Text,
    InputSlot,
    InputIcon,
    EyeOffIcon,
    Heading,
    HStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Box flex={1} justifyContent="center" backgroundColor="#021C35">
            <VStack
                width="100%"
                backgroundColor="white"
                padding={30}
                rounded={30}

            >
                <VStack space="xl">
                    <Heading>REGISTER</Heading>
                    <VStack space="md" width="100%">
                        <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
                            <InputField type="text" placeholder="Nama" />
                        </Input>
                    </VStack>
                    <VStack space="md" width="100%">
                        <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
                            <InputField placeholder="Username" />
                        </Input>
                    </VStack>
                    <VStack space="md" width="100%">
                        <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
                            <InputField placeholder="Email" />
                        </Input>
                    </VStack>
                    <VStack space="md" width="100%">
                        <Input borderWidth={0} backgroundColor="#f3f3f3" rounded={10}>
                            <InputField placeholder="Password" type={showPassword ? "text" : "password"} />
                            <InputSlot pr="$3" onPress={handleTogglePassword}>
                                <InputIcon
                                    as={showPassword ? EyeIcon : EyeOffIcon}
                                    color={'blue'}
                                />
                            </InputSlot>
                        </Input>
                    </VStack>
                    <Button
                        backgroundColor="#DF9B52"
                        marginTop={10}
                        onPress={() => {
                        }}
                        rounded={10}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <ButtonText color="$white">Register</ButtonText>
                    </Button>
                    <HStack alignItems="center" my={3}>
                        <Divider color="gray" thickness={1} flex={1} />
                        <Text color="gray" fontSize={16} px={3}>
                            or
                        </Text>
                        <Divider color="gray" thickness={1} flex={1} />
                    </HStack>
                    <Button
                        backgroundColor="#021C35"
                        onPress={() => navigation.navigate('Login')}
                        rounded={10}
                    >
                        <ButtonText color="$white">Login</ButtonText>
                    </Button>
                </VStack>
            </VStack>
        </Box>
    );
};

export default Register;
