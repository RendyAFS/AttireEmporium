import React, { useState } from "react";
import {
  FormControl,
  Heading,
  Center,
  StatusBar,
  Box,
  Text,
  Input,
  InputField,
  InputIcon,
  EyeOffIcon,
  Pressable,
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
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
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
        shadow="md"
        flex={1}
        borderTopLeftRadius={40}
        borderTopRightRadius={40}
      >
        <VStack space="xl">
          {/* <Heading fontSize={24} color="$text900" textAlign="center">
            Login
          </Heading> */}
          <VStack space="md" marginTop={30}>
            <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
              <InputField type="text" placeholder="Username" />
            </Input>
          </VStack>
          <VStack space="md">
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
            rounded={10}
            onPress={() => navigation.navigate('Tabs')}

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
            rounded={10}
          >
            <ButtonText color="$white">Register</ButtonText>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default Login;
