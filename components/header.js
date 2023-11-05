
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { GluestackUIProvider, Heading, Pressable, Box, Image, Text, HStack, Input, InputField } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const Header = ({ title, withBack = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Box bg={"white"} p={"5"} height={60}>
        <HStack marginTop={10}>
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <Image marginEnd={20}
              marginStart={10}
              marginTop={2}
              source={require("../assets/images/anonim.jpg")}
              width={35}
              height={35}
              alt="CNN Logo"
              rounded={30}
            />
          </Pressable>

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
            <InputField marginStart={30} placeholder="Cari Costum disini" />
          </Input>
          <Box position="absolute" marginLeft={70} marginTop={7}>
            <Ionicons name="search" size={24} color="#DF9B52" />
          </Box>
          <Ionicons name="menu-sharp"
            marginStart={10}
            size={37} color="#DF9B52" />
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;



