import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar,
    Animated,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import { useRouter } from 'expo-router';

export default function SignUp() {
    return (
        <>

            <StatusBar hidden={true} />
            <ImageBackground
                source={require('./img/background.png')}
                style={tw`h-full w-full justify-end items-center bg-black`}
            >

                <View style={tw`flex-1 w-full justify-end items-center bg-red-900`}>
                    <ImageBackground

                        source={require('./img/imgbg.png')}
                        style={tw`w-full h-[94%] `}
                    >
                    </ImageBackground>
                </View>
            </ImageBackground>
        </>
    )
}