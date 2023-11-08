import React, { useState } from "react";
import {FormControl, Heading, Center, StatusBar, Box, Text, Input, InputField, InputIcon, EyeOffIcon, Pressable, InputSlot, Button, ButtonText, VStack, EyeIcon} from "@gluestack-ui/themed";

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const handleState = () => {
      setShowPassword((showState) => {
        return !showState
      })
    }
    return (
      <FormControl
      flex={1}
      justifyContent="center"
        padding={50}
        borderWidth="$1"
        borderRadius="$lg"
        borderColor="$borderLight300"

        sx={{
          _dark: {
            borderWidth: "$1",
            borderRadius: "$lg",
            borderColor: "$borderDark800",
          },
        }}
      >
        <VStack space="xl">
          <Heading color="$text900" lineHeight="$md" textAlign="center">
            Login
          </Heading>
          <VStack space="xs">
            <Text color="$text500" lineHeight="$xs">
              Username
            </Text>
            <Input>
              <InputField type="text" />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text color="$text500" lineHeight="$xs">
              Password
            </Text>
            <Input textAlign="center">
              <InputField type={showPassword ? "text" : "password"} />
              <InputSlot pr="$3" onPress={handleState}>
                {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>
          </VStack>
          <Button
            ml="auto"
            onPress={() => {
              setShowModal(false)
            }}
          >
            <ButtonText color="$white">Save</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    )
  }
export default Login;