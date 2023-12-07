import React, { useState } from 'react'
import {
    Box, Input, Text, InputField, Button, ButtonText, ButtonIcon, VStack, Heading,
    Divider,
    InputSlot,
    InputIcon,
    EyeOffIcon,
    EyeIcon,
    HStack,
} from '@gluestack-ui/themed'
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../firebase";
import { useNavigation } from "@react-navigation/native";
const Register = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    const navigation = useNavigation();
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
            navigation.replace("Tabs");
        } catch (error) {
            console.error(error);
        }
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
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                        backgroundColor="#f3f3f3" borderWidth={0} rounded={10}
                    >
                        <InputField placeholder="Email@example.com" type='email' onChangeText={(email) => setEmail(email)} />
                    </Input>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                        backgroundColor="#f3f3f3" borderWidth={0} rounded={10}
                    >
                        <InputField placeholder="Password" type={showPassword ? "Text" : "password"} onChangeText={(password) => setPassword(password)} />
                        <InputSlot pr="$3" onPress={handleTogglePassword}>
                            <InputIcon
                                as={showPassword ? EyeIcon : EyeOffIcon}
                                color={'blue'}
                            />
                        </InputSlot>
                    </Input>

                    <Button size="md" variant="solid" action="primary"
                        backgroundColor="#DF9B52"
                        marginTop={10}
                        rounded={10}
                        isDisabled={false} isFocusVisible={false} onPress={() => { handleRegister() }} >
                        <ButtonText>Add </ButtonText>
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
    )
}

export default Register


// import React, { useState } from "react";
// import {
//     Box,
//     VStack,
//     Input,
//     InputField,
//     Button,
//     ButtonText,
//     Divider,
//     Text,
//     InputSlot,
//     InputIcon,
//     EyeOffIcon,
//     EyeIcon,
//     Heading,
//     HStack,
// } from "@gluestack-ui/themed";
// import { useNavigation } from "@react-navigation/native";
// import firebase from "../firebase";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// const Register = () => {
//     const [name, setName] = useState("");
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const [showPassword, setShowPassword] = useState(false);
//     const navigation = useNavigation();

//     const handleTogglePassword = () => {
//         setShowPassword((prev) => !prev);
//     };

//     const handleRegister = () => {
//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 // Panggil method untuk menyimpan data ke AsyncStorage
//                 saveUserData(name, username, email, password, userCredential);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }

//     const saveUserData = async (email, password, credential) => {
//         const userData = { email, password, credential };
//         try {
//             // Menyimpan data User ke AsyncStorage
//             await AsyncStorage.setItem("user-data", JSON.stringify(userData));
//             // Diarahkan ke Halaman Home
//             navigation.replace("Home");
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <Box flex={1} justifyContent="center" backgroundColor="#021C35">
//             <VStack
//                 width="100%"
//                 backgroundColor="white"
//                 padding={30}
//                 rounded={30}

//             >
//                 <VStack space="xl">
//                     <Heading>REGISTER</Heading>
//                     <VStack space="md" width="100%">
//                         <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
//                             <InputField type="text" placeholder="Nama" />
//                         </Input>
//                     </VStack>
//                     <VStack space="md" width="100%">
//                         <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
//                             <InputField placeholder="Username" />
//                         </Input>
//                     </VStack>
//                     <VStack space="md" width="100%">
//                         <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
//                             <InputField placeholder="Email" onChangeText={(email) => setEmail(email)} />
//                         </Input>
//                     </VStack>
//                     <VStack space="md" width="100%">
//                         <Input borderWidth={0} backgroundColor="#f3f3f3" rounded={10}>
//                             <InputField placeholder="Password" type={showPassword ? "password" : "password"} onChange={(password) => setPassword(password)} />
//                             <InputSlot pr="$3" onPress={handleTogglePassword}>
//                                 <InputIcon
//                                     as={showPassword ? EyeIcon : EyeOffIcon}
//                                     color={'blue'}
//                                 />
//                             </InputSlot>
//                         </Input>
//                     </VStack>
//                     <Button
//                         backgroundColor="#DF9B52"
//                         marginTop={10}
//                         rounded={10}
//                         onPress={() => {handleRegister()}}
//                     >
//                         <ButtonText color="$white">Register</ButtonText>
//                     </Button>
//                     <HStack alignItems="center" my={3}>
//                         <Divider color="gray" thickness={1} flex={1} />
//                         <Text color="gray" fontSize={16} px={3}>
//                             or
//                         </Text>
//                         <Divider color="gray" thickness={1} flex={1} />
//                     </HStack>
//                     <Button
//                         backgroundColor="#021C35"
//                         onPress={() => navigation.navigate('Login')}
//                         rounded={10}
//                     >
//                         <ButtonText color="$white">Login</ButtonText>
//                     </Button>
//                 </VStack>
//             </VStack>
//         </Box>
//     );
// };

// export default Register;
