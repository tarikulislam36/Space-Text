import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar,
    Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';

export default function Welcome() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            <StatusBar hidden={true} />
            <ImageBackground
                source={require('./img/background.png')} // Replace with your background image file name
                style={tw`h-full w-full justify-center items-center bg-black`}
            >
                <View style={tw`flex-1 justify-center items-center px-5`}>
                    <Image
                        source={require('./img/logo.png')} // Replace with your logo file name
                        style={tw`w-50 h-30 mb-5`} // Adjust size for logo
                    />
                    <Text style={tw`text-2xl font-bold text-white text-center mb-5`}>
                        Welcome to Space Texting & Calling
                    </Text>
                    <Text style={tw`text-lg text-white opacity-80 mb-5`}>
                        Free messages and calls - with end-to-end encryption
                    </Text>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <LinearGradient
                            colors={['#7B2CBF', '#E63946']}
                            style={tw`rounded-full px-32 py-4 relative bottom--14`} // Adjust padding for button
                        >
                            <Text style={tw`text-white font-bold text-lg`}>Start now</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {/* Popup Modal */}
                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="fade"
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    {/* Background Overlay */}
                    <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>


                        {/* Popup Content */}
                        <View style={tw`rounded-xl w-4.5/5 overflow-hidden border-2 border-indigo-500/75 border-slate-500`}>
                            {/* Popup Background Image */}
                            <ImageBackground
                                source={require('./img/background.png')} // Replace with your popup background image file name
                                style={tw`p-6`}
                                imageStyle={{ resizeMode: 'cover' }}
                            >
                                {/* Close Button */}
                                <TouchableOpacity
                                    onPress={() => setIsModalVisible(false)}
                                    style={tw`relative   top--8 right--75 w-7   rounded p-2 z-10`}
                                >
                                    <Text style={tw`text-slate-500 font-bold text-xl`}>×</Text>
                                </TouchableOpacity>
                                <Text
                                    style={tw`text-xl font-bold text-white text-center mb-4`}
                                >
                                    Space Texting & Calling
                                </Text>
                                <Text
                                    style={tw`text-sm text-white text-center mb-12`}
                                >
                                    Space Texting can be a strange and wonderful place, full of
                                    people, ideas, and communities that might be new and
                                    different. Treat everyone with respect, and you'll have a
                                    great time. Behave poorly, and you'll be asked to leave.
                                </Text>
                                <Text
                                    style={tw`text-xs text-white text-center mb-6`}
                                >
                                    Read our{' '}
                                    <Text style={tw`text-blue-400 underline`}>
                                        Privacy Policy
                                    </Text>
                                    . By tapping “Start now” you agree to our{' '}
                                    <Text style={tw`text-blue-400 underline`}>
                                        Terms & Policies
                                    </Text>
                                    .
                                </Text>
                                {/* Accept Button */}
                                <TouchableOpacity
                                    onPress={() => setIsModalVisible(false)}
                                >
                                    <LinearGradient
                                        colors={['#7B2CBF', '#E63946']}
                                        style={tw`rounded-full px-10 py-4`}
                                    >
                                        <Text
                                            style={tw`text-white font-bold text-center text-lg`}
                                        >
                                            Accept
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </>
    );
}
