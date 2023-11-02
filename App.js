import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { GluestackUIProvider, Heading, Center, StatusBar, Box, Text, } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Ionicons, AntDesign, MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import Katalog from "./screens/Home";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Favorite from "./screens/Favorite";
import History from "./screens/History";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };
//tabs
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "shopping" : "shopping-outline";
              return (
                <MaterialCommunityIcons name={iconName} size={28} color={focused ? "#DF9B52" : color} />
              );
            case "Favorite":
              iconName = focused ? "favorite" : "favorite-outline";
              return (
                <MaterialIcons name={iconName} size={28} color={focused ? "#DF9B52" : color} />
              );
            case "History":
              iconName = focused ? "history" : "history";
              return (
                <MaterialCommunityIcons name={iconName} size={28} color={focused ? "#DF9B52" : color} />
              );
            case "Profile":
              iconName = focused ? "person-circle-sharp" : "person-circle-outline";
              return (
                <Ionicons name={iconName} size={28} color={focused ? "#DF9B52" : color} />
              )
          }
        },
        tabBarIconStyle: { marginTop: 6 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 1,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text fontSize={13} color={focused ? "#DF9B52" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Favorite" component={Favorite} options={noHead} />
      <Tab.Screen name="History" component={History} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          {/* <Stack.Screen
            name="News Detail"
            component={NewsDetail}
            options={noHead}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;

