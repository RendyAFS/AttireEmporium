import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { GluestackUIProvider, Heading, Center, StatusBar, Box, Text, } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Katalog from "./screens/Katalog";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Katalog":
              iconName = focused ? "home-sharp" : "home-outline" ;
              break;
            case "Profile":
              iconName = focused ? "person-circle-sharp" : "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? "#DF9B52" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 1,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "#DF9B52" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Katalog" component={Katalog} options={noHead} />
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


