import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('screen');

function HomeScreen() {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ backgroundColor: 'white', top: 0, width: width, height: 80 }}>
                <View style={{ marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                        <TouchableOpacity style={{ marginRight: 10, borderWidth: 0.3, padding: 5, borderRadius: 5 }}>
                            <Image source={require('../assets/logo_expo.png')} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                        <Text Text style={{ fontWeight: 'bold', fontSize: 15 }}>Expo Go</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#4F5AE4', borderRadius: 20, marginHorizontal: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: '#171A3C', fontSize: 16 }}>A</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <View>
                    <View>
                        <Ionicons name='terminal' size={20} />
                        <Text>Development servers</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}