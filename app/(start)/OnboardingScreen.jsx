import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import { Redirect, router, link } from 'expo-router';

export default function OnboardingScreen() {
    return (
        <>
            <StatusBar hidden={true} />
            <ImageBackground
                source={require('./img/background.png')}
                style={tw`h-full w-full justify-center items-center bg-black`}
            >
                <SafeAreaView style={tw`flex-1 w-full`}>
                    <View style={tw`flex-1 w-full`}>
                        <View style={tw`flex-1 w-full  justify-center items-center`}>
                            {/* <Text style={tw`text-white text-2xl`}>Above Part</Text> */}
                        </View>
                        <View style={tw`flex-1 w-full  justify-center items-center rounded-t-3x1   overflow-hidden`}>
                            <ImageBackground
                                source={require('./img/image.png')}
                                style={tw`h-full w-full justify-center items-center  bg-optacity-50 `}
                            >

                                <View style={tw`flex-1 w-full   m-12  p-6  `}>

                                    <Text style={tw`text-white text-3xl`}>Take privacy with you.
                                    </Text>
                                    <Text style={tw`text-white text-3xl`}>
                                        Be yourself in every message.</Text>
                                    <View style={tw`flex-1 justify-center items-end`}>
                                        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                                            <LinearGradient
                                                colors={['#7B2CBF', '#E63946']}
                                                style={tw`rounded-full px-6 py-3  relative bottom--5`}
                                            >
                                                <Text style={tw`text-white font-bold text-lg`}>Next</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </SafeAreaView>

            </ImageBackground >
        </>
    )
}


