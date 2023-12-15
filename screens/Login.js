import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Input,
  InputField,
  InputIcon,
  EyeOffIcon,
  InputSlot,
  Button,
  ButtonText,
  VStack,
  EyeIcon,
  Image,
  HStack,
  Divider
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../firebase";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
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
  const loginHandler = () => {
    // Verifikasi Login via Firebase
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Panggil method untuk Menyimpan data User ke AsyncStorage
        saveUserData(email, password, userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const saveUserData = async (email, password, credential) => {
    const userData = { email, password, credential };
    try {
      // Menyimpan data ke AsyncStorage
      await AsyncStorage.setItem("user-data", JSON.stringify(userData));
      // Diarahkan ke Home
      navigation.replace("Tabs", { email: email });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box flex={1} backgroundColor="#021C35" >
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Image role="img" alt="hello" width={220} height={310} resizeMode="cover" source={require('../assets/images/Logo.png')} />
      </Box>
      <Box
        width="100%"
        backgroundColor="white"
        padding={20}
        flex={1}
        borderTopLeftRadius={40}
        borderTopRightRadius={40}
      >
        <VStack space="xl">
          <VStack space="md" marginTop={30}>
            <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
              <InputField value={email} type="text" placeholder="Username" onChangeText={(value) => setEmail(value)} />
            </Input>
          </VStack>
          <VStack space="md">
            <Input borderWidth={0} backgroundColor="#f3f3f3" rounded={10}>
              <InputField value={password} placeholder="Password" type={showPassword ? "text" : "password"} onChangeText={(value) => setPassword(value)} />
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
            rounded={5}
            onPress={loginHandler}

          >
            <ButtonText color="$white">Login</ButtonText>
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
            onPress={() => navigation.navigate('Register')}
            rounded={5}
          >
            <ButtonText color="$white">Register</ButtonText>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default Login;
