
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { GluestackUIProvider, Heading, Pressable, Box, Image, Text, HStack, Input, InputField, Menu, MenuItem, MenuItemLabel, Button, ButtonText } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const Header = (props) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Box bg={"white"} p={"5"} height={60}>
        <HStack marginTop={10}>
        <Pressable marginStart={20} flex={5}>
            <Box width={"100%"} height={40} backgroundColor="#f5f5f5" rounded={5}></Box>
            <Text  marginTop={8} marginLeft={50} position="absolute">Cari Disini</Text>
            <Box position="absolute" marginLeft={10} marginTop={7}>
              <Ionicons name="search" size={24} color="#DF9B52" />
            </Box>
          </Pressable>
          <Pressable flex={1} onPress={() => navigation.navigate('Profile')}>
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
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;



