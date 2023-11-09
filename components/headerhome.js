
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { GluestackUIProvider, Heading, Pressable, Box, Image, Text, HStack, Input, InputField, Menu, MenuItem, MenuItemLabel, Button, ButtonText } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const HeaderHome = (props) => {
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

          <Pressable width={"65%"} onPress={() => navigation.navigate('Katalog')}>
            <Input
              variant="outline"
              size="sm"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              backgroundColor="#F5F5F5"
              marginTop={2}
              borderWidth={0}

            >
              <InputField marginStart={20} placeholder="Cari Costum disini" />
            </Input>
          </Pressable>

          <Box position="absolute" marginLeft={70} marginTop={7}>
            <Ionicons name="search" size={24} color="#DF9B52" />
          </Box>
          {/* <Pressable onPress={() => props.drawer.current.openDrawer()}>
            <Ionicons name="menu-sharp"
              marginStart={10}
              size={37} color="#DF9B52" />
          </Pressable> */}
          <Menu
            placement={"top"}
            disabledKeys={["Theme"]}
            trigger={({ ...triggerProps }) => {
              return (
                // <Button {...triggerProps}>
                //   <Ionicons name="menu-sharp"
                //     marginStart={10}
                //     size={37} color="#DF9B52" />
                // </Button>
                <Button marginRight={40} backgroundColor="transparent"  {...triggerProps}>
                  <Ionicons name="menu-sharp"
                    size={37} color="#DF9B52" />
                </Button>
              )
            }}
          >
            <MenuItem key="Katalog" onPress={() => navigation.navigate('Katalog')} textValue="Katalog">
              <MenuItemLabel size="sm">Katalog</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Add account" textValue="Add account">
              <MenuItemLabel size="sm">Sign Out</MenuItemLabel>
            </MenuItem>
          </Menu>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default HeaderHome;



