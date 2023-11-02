import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  return (
    <SafeAreaView>
        <StatusBar barStyle="light" />
        <Box>

        </Box>
    </SafeAreaView>
  )
}

export default Header;