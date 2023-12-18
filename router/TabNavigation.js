import * as React from 'react';
import { Dimensions, Image, Text, View, VirtualizedList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('screen');

function HomeScreen() {
    return (
        <View style={{ flex: 1, }}>

            {/* Header  */}
            <View style={{ backgroundColor: 'white', top: 0, width: width, height: 80 }}>
                <View style={{ marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                        <TouchableOpacity style={{ marginRight: 10, borderWidth: 0.3, padding: 5, borderRadius: 5, borderColor: 'gray' }}>
                            <Image source={require('../assets/logo_expo.png')} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                        <Text Text style={{ fontWeight: 'bold', fontSize: 15 }}>Expo Go</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#4F5AE4', borderRadius: 20, marginHorizontal: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: '#171A3C', fontSize: 16 }}>A</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={{ marginHorizontal: 15, paddingTop: 15 }} showsVerticalScrollIndicator={false}>
                {/* Header  */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Ionicons name='terminal' size={20} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Development servers</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', color: "gray" }}>HELP</Text>
                </View>

                {/* body count */}
                <View style={{ backgroundColor: 'white', marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }}>
                    <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <Text style={{ fontWeight: 'normal', marginBottom: 10, marginTop: 10 }}>Start a local development server with:</Text>
                        <View style={{ height: 50, borderWidth: 0.3, borderRadius: 5, padding: 10, backgroundColor: '#F8F9FA', marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'normal' }}>npx expo start</Text>
                        </View>
                        <Text style={{ fontWeight: 'normal', fontSize: 13 }}>Select the local server wheen it appears here.</Text>
                    </View>
                    <View style={{ backgroundColor: 'gray', marginBottom: 15, marginTop: 15, height: 0.5, width: width }}></View>
                    <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row' }}>
                        <Ionicons size={20} name='chevron-forward' />
                        <Text style={{ fontSize: 16 }}> Enter URL manually</Text>
                    </View>
                    <View style={{ backgroundColor: 'gray', marginBottom: 15, marginTop: 15, height: 0.5, }}></View>
                    <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 20 }}>
                        <Ionicons size={20} name='qr-code' />
                        <Text style={{ fontSize: 16 }}>  Scan QR code</Text>
                    </View>
                </View>

                {/* Recenty */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Recently opened</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', color: "gray" }}>Clear</Text>
                </View>
                <View style={{ backgroundColor: 'white', marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                            <TouchableOpacity style={{ marginRight: 10, borderWidth: 0.3, padding: 10, borderRadius: 5, borderColor: 'gray' }}>
                                <Image source={require('../assets/logo_expo.png')} style={{ width: 20, height: 20, borderWidth: 0.5 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Power Gym </Text>
                            </View>
                        </View>
                        <View>
                            <Ionicons name='chevron-forward' size={20} color={'gray'} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                </View>


                {/* Projects */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Projects</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                            <TouchableOpacity style={{ marginRight: 10, borderWidth: 0.3, padding: 10, borderRadius: 5, borderColor: 'gray' }}>
                                <Image source={require('../assets/logo_expo.png')} style={{ width: 20, height: 20, borderWidth: 0.5 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Instagram Ui </Text>
                            </View>
                        </View>
                        <View>
                            <Ionicons name='chevron-forward' size={20} color={'gray'} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                </View>


                {/* Snakcks */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Snacks</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                            <TouchableOpacity style={{ marginRight: 10, borderWidth: 0.3, padding: 10, borderRadius: 5, borderColor: 'gray' }}>
                                <Image source={require('../assets/logo_expo.png')} style={{ width: 20, height: 20, borderWidth: 0.5 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Projetco 1 </Text>
                            </View>
                        </View>
                        <View>
                            <Ionicons name='chevron-forward' size={20} color={'gray'} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                </View>
            </ScrollView >
        </View >
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