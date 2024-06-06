import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, EvilIcons } from '@expo/vector-icons';
import Login from './pages/auth/login';
import Home from './pages/home/home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#111',
                    paddingTop: 1,
                    paddingBottom: 1,
                },
                tabBarActiveTintColor: '#80f',
                tabBarInactiveTintColor: '#888',
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'location';
                        return <EvilIcons name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Login') {
                        iconName = 'user';
                        return <Feather name={iconName} size={size} color={color} />;
                    }

                    return null;
                },
            })}
        >
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' },
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
