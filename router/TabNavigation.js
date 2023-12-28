import * as React from 'react';
import { Dimensions, Image, SafeAreaView, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StatusColor, dark, darkBg, darkText, light } from '../config';
const { width } = Dimensions.get('screen');
function HomeScreen({ navigation, colorScheme }) {
    const Thema = useColorScheme();


    return (
        <View style={[{ flex: 1, backgroundColor: Thema == 'dark' ? darkBg : null }]}>

            {Thema == 'dark' ?
                <>
                    <StatusBar style='light' backgroundColor={Thema == 'dark' && dark} />
                </>
                :
                <StatusBar style='dark' backgroundColor={Thema == 'light' && light} />

            }
            <SafeAreaView style={{ flex: 1, }} >
                {/* Header  */}
                <View style={[{ backgroundColor: Thema == 'dark' ? dark : light, width: width, marginTop: 30, paddingBottom: 10 }]}>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                            <TouchableOpacity style={{ marginRight: 10, borderWidth: 0.3, padding: 5, borderRadius: 5, borderColor: 'gray' }}>
                                <Image source={require('../assets/logo_expo.png')} style={{ width: 20, height: 20 }} tintColor={Thema == 'dark' ? light : darkBg} />
                            </TouchableOpacity>
                            <Text Text style={[{ fontWeight: 'bold', fontSize: 15, color: Thema == 'dark' ? light : dark }]}>Expo Go</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
                            backgroundColor: '#EDF6FF',
                            borderRadius: 20, marginHorizontal: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', color: '#171A3C', fontSize: 16 }}>A</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{ marginHorizontal: 15, paddingTop: 15 }} showsVerticalScrollIndicator={false}>
                    {/* Header  */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Ionicons name='terminal' size={20} />
                            <Text style={[{ fontWeight: 'bold', marginLeft: 5, color: Thema == 'dark' ? darkText : 'gray' }]}>Development servers</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', color: "gray" }}>HELP</Text>
                    </View>

                    {/* body count */}
                    <View style={[{ backgroundColor: Thema == 'dark' ? dark : light, marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }]}>
                        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <Text style={[{ fontWeight: 'normal', marginBottom: 10, marginTop: 10, color: Thema == 'dark' ? darkText : dark }]}>Start a local development server with:</Text>
                            <View style={{ height: 50, borderWidth: 0.3, borderRadius: 5, padding: 10, backgroundColor: '#F8F9FA', marginBottom: 10, borderWidth: 0, }}>
                                <Text style={{ fontWeight: 'normal' }}>npx expo start</Text>
                            </View>
                            <Text style={[{ fontWeight: 'normal', fontSize: 13, color: Thema == 'dark' ? darkText : dark }]}>Select the local server wheen it appears here.</Text>
                        </View>
                        <View style={{ backgroundColor: 'gray', marginBottom: 15, marginTop: 15, height: 0.5, width: width }}></View>
                        <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row' }}>
                            <Ionicons size={20} name='chevron-forward' color={Thema == 'dark' && darkText} />
                            <Text style={[{ fontSize: 16, color: Thema == 'dark' ? darkText : dark }]}> Enter URL manually</Text>
                        </View>
                        <View style={{ backgroundColor: 'gray', marginBottom: 15, marginTop: 15, height: 0.5, }}></View>
                        <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 20 }}>
                            <Ionicons size={20} name='qr-code' color={Thema == 'dark' && darkText} />
                            <Text style={[{ fontSize: 16, color: Thema == 'dark' ? darkText : dark }]}>  Scan QR code</Text>
                        </View>
                    </View>

                    {/* Recenty */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={[{ fontWeight: 'bold', marginLeft: 5, color: Thema == 'dark' ? darkText : 'gray' }]}>Recently opened</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', color: "gray" }}>Clear</Text>
                    </View>
                    <View style={[{ backgroundColor: Thema == 'dark' ? dark : light, marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }]}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <TouchableOpacity style={{ marginRight: 10, borderWidth: 0.3, padding: 10, borderRadius: 5, borderColor: 'gray' }}>
                                    <Image source={require('../assets/logo_expo.png')} style={{ width: 30, height: 30, borderWidth: 0.5 }} tintColor={Thema == 'dark' ? light : dark} />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={[{ fontSize: 16, fontWeight: 'bold', color: Thema == 'dark' ? light : dark }]}> Power Gym </Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <TouchableOpacity style={{ marginRight: 10, borderWidth: 0.3, padding: 10, borderRadius: 5, borderColor: 'gray' }}>
                                    <Image source={require('../assets/favicon.png')} style={{ width: 30, height: 30, borderWidth: 0.5 }} />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Thema == 'dark' ? light : dark }}>Snack </Text>
                                    <TouchableOpacity style={{ backgroundColor: '#EDF6FF', borderRadius: 5 }}>
                                        <Text style={{ color: '#0093ED', }}> Channel:default </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <TouchableOpacity style={{ marginRight: 10, borderWidth: 0.3, padding: 10, borderRadius: 5, borderColor: 'gray' }}>
                                    <Image source={require('../assets/logo_expo.png')} style={{ width: 30, height: 30, borderWidth: 0.5 }} tintColor={Thema == 'dark' ? light : dark} />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Thema == 'dark' ? light : dark }}> Arnaldo REST API </Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </View>
                    </View>


                    {/* Projects */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={[{ fontWeight: 'bold', marginLeft: 5, color: Thema == 'dark' ? darkText : 'gray' }]}>Projects</Text>
                        </View>
                    </View>

                    <View style={[{ backgroundColor: Thema == 'dark' ? dark : light, marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }]}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Thema == 'dark' ? light : dark }}> Instagram Ui/UX </Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </View>

                        <View style={{ backgroundColor: 'gray', height: 1, marginTop: 10 }}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Thema == 'dark' ? light : dark }}> Recat TailWinds </Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', height: 1, marginTop: 10 }}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Thema == 'dark' ? light : dark }}> Njira </Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', height: 1, marginTop: 10 }}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: 'gray', color: Thema == 'dark' ? light : dark }}> See all Projects </Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </View>
                    </View>



                    {/* Snakcks */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={[{ fontWeight: 'bold', marginLeft: 5, color: Thema == 'dark' ? darkText : 'gray' }]}>Snacks</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: Thema == 'dark' ? dark : light, marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Thema == 'dark' ? light : dark }}>Auht0 </Text>
                                    <Text style={{ fontSize: 14, fontWeight: '400', color: Thema == 'dark' ? light : dark }}>Exemplo use of Auth0 in React Native </Text>
                                    <Text style={[{ backgroundColor: Thema == 'dark' ? dark : '#F8F9FA', width: 50, padding: 5, marginTop: 10, borderRadius: 5, fontWeight: '700', borderColor: Thema == 'dark' && darkText, borderWidth: 1, color: Thema == 'dark' ? darkText : dark }]}>Draft</Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Thema == 'dark' ? light : dark }}>SlideShare</Text>
                                    <Text style={[{ backgroundColor: Thema == 'dark' ? dark : '#F8F9FA', width: 50, padding: 5, marginTop: 10, borderRadius: 5, fontWeight: '700', borderColor: Thema == 'dark' && darkText, borderWidth: 1, color: Thema == 'dark' ? darkText : dark }]}>Draft</Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Thema == 'dark' ? light : dark }}>SwitchCase</Text>
                                    <Text style={[{ backgroundColor: Thema == 'dark' ? dark : '#F8F9FA', width: 50, padding: 5, marginTop: 10, borderRadius: 5, fontWeight: '700', borderColor: Thema == 'dark' && darkText, borderWidth: 1, color: Thema == 'dark' ? darkText : dark }]}>Draft</Text>
                                </View>
                            </View>
                            <View>
                                <Ionicons name='chevron-forward' size={20} color={'gray'} />
                            </View>
                        </View>
                    </View>
                </ScrollView >
            </SafeAreaView>
        </View >
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="dark" backgroundColor='white' />
            <SafeAreaView style={{ flex: 1, }} >
                {/* Header  */}
                <View style={{ backgroundColor: 'white', top: 0, width: width, marginTop: 30, paddingBottom: 10 }}>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                            <Text Text style={{ fontWeight: 'bold', fontSize: 20 }}>Settings</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ marginHorizontal: 15, paddingTop: 15 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Thema</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name='contrast-outline' size={20} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Automatic </Text>
                                </View>
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <Ionicons name='radio-button-off-outline' size={20} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name='sunny-outline' size={20} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Light</Text>
                                </View>
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <Ionicons name='radio-button-on-outline' size={20} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Ionicons name='moon' size={20} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Dark</Text>
                                </View>
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <Ionicons name='radio-button-off-outline' size={20} />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 5, marginBottom: 20 }}>
                        <Text>Automatic is only suported on operating systems that  allow you to control the  system-wide color schema.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>App Info</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500' }}> Device ID </Text>
                                </View>
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>4a3b-7101 </Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500' }}> Client Version</Text>
                                </View>
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> 2.29.7</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', marginBottom: 10, marginTop: 10, height: 0.5, }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 20, paddingRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500' }}> Supported SDKs</Text>
                                </View>
                            </View>
                            <View style={{ marginRight: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}> SDKs: 47,48,49</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Delete Account</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'white', marginVertical: 20, padding: 5, borderRadius: 6, borderWidth: 0.4, borderColor: 'gray', }}>
                        <View style={{ marginBottom: 10, marginTop: 10, marginHorizontal: 20, marginVertical: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name='trash' size={25} />
                                <Text style={{ fontSize: 19, fontWeight: 'bold' }}> Delete Your account </Text>
                            </View>
                            <Text style={{ fontWeight: '600', fontSize: 16, justifyContent: 'flex-end', marginTop: 10 }}>This action ins irreversible.
                                It wil delete your personal account, project, and activity.</Text>
                            <TouchableOpacity style={{ backgroundColor: '#FFF8F8', alignSelf: 'flex-end', marginTop: 20, padding: 10, borderColor: '#E3656A', borderRadius: 6, borderWidth: 1, width: 150 }}>
                                <Text style={{ color: 'red', fontWeight: 'bold' }}>Delete Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const Account = () => {
    return (
        <View style={{ flex: 1, }}>

            <ScrollView style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>log Out</Text>
                <TouchableOpacity style={{ backgroundColor: 'black', alignItems: 'center', borderRadius: 6, padding: 18 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>log Out</Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', marginTop: 20, marginBottom: 20 }}>Switch Account</Text>
                <TouchableOpacity style={{ justifyContent: 'space-between', backgroundColor: 'white', padding: 20, borderRadius: 6, elevation: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ backgroundColor: '#EDF6FF', borderRadius: 20, marginHorizontal: 20, width: 30, height: 30, }}>
                                <Text style={{ fontWeight: 'bold', color: '#171A3C', fontSize: 16 }}>A</Text>
                            </View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>arnaldotomo</Text>
                        </TouchableOpacity>
                    </View>
                    <Ionicons name='checkmark' size={20} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


export const Normal = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="tabs" component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Account" component={Account} options={{ headerShadowVisible: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function TabNavigation() {
    const Thema = useColorScheme();
    return (
        <Tab.Navigator
            screenOptions={({ route, focused }) => ({

                headerShown: false,

                tabBarStyle: {
                    paddingTop: 8,
                    backgroundColor: Thema == 'dark' ? darkBg : light

                },
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
                // freezeOnBlur: true,
                tabBarActiveTintColor: '#a498ec',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator >
    );
}