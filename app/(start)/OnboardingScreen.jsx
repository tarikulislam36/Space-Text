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

export default function OnboardingScreen() {
    const [step, setStep] = useState(0);
    const textData = [
        "Take privacy with you.\nBe yourself in every message.",
        "Reach anyone in the world.\nStay connected wherever you are.",
        "Experience secure conversations.\nYour data, your control.",
        "Enjoy seamless communication.\nWe're here for you.",
    ];

    const router = useRouter();
    const translateX = useRef(new Animated.Value(0)).current;
    const screenWidth = Dimensions.get('window').width;

    const handleNext = () => {
        if (step < textData.length - 1) {
            // Slide out and transition to the next step
            Animated.timing(translateX, {
                toValue: -screenWidth,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setStep(step + 1);
                translateX.setValue(screenWidth); // Reset position for the next slide
                Animated.timing(translateX, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            });
        } else {
            router.push('/SignUp'); // Navigate to the SignUp page on "Done"
        }
    };

    return (
        <>
            <StatusBar hidden={true} />
            <ImageBackground
                source={require('./img/background.png')}
                style={tw`h-full w-full justify-center items-center bg-black`}
            >
                <SafeAreaView style={tw`flex-1 w-full`}>
                    <View style={tw`flex-1 w-full`}>
                        <View style={tw`flex-1 w-full justify-center items-center`}>
                            <Image
                                source={require('./img/img.png')}
                                style={tw`w-50 h-50 mb-5`} // Adjust size for logo
                            />
                        </View>
                        <View style={tw`flex-1 w-full justify-center items-center rounded-t-3xl overflow-hidden`}>
                            <ImageBackground
                                source={require('./img/image.png')}
                                style={tw`h-full w-full justify-center items-center bg-opacity-50`}
                            >
                                <View style={tw`flex-1 w-full px-6 justify-center relative top--5`}>
                                    {/* Animated Text */}
                                    <Animated.View style={{ transform: [{ translateX }] }}>
                                        <Text style={tw`text-white text-3xl text-center`}>
                                            {textData[step]}
                                        </Text>
                                    </Animated.View>

                                    {/* Dotted Indicator (Bottom-Center) */}
                                    <View style={tw`absolute bottom-14 left-0 right-0 flex-row justify-center`}>
                                        {textData.map((_, index) => (
                                            <View
                                                key={index}
                                                style={[
                                                    tw`w-3 h-3 rounded-full mx-1`,
                                                    step === index
                                                        ? tw`bg-white`
                                                        : tw`bg-white opacity-50`,
                                                ]}
                                            />
                                        ))}
                                    </View>

                                    {/* Skip and Next Buttons */}
                                    <View style={tw`flex-row justify-between w-full absolute bottom-6 px-6`}>
                                        {/* Skip Button */}
                                        <TouchableOpacity
                                            onPress={() => router.push('/SignUp')}
                                            accessible
                                            accessibilityLabel="Skip Onboarding"
                                        >
                                            <Text style={tw`text-white text-lg`}>Skip</Text>
                                        </TouchableOpacity>

                                        {/* Next Button */}
                                        <TouchableOpacity
                                            onPress={handleNext}
                                            accessible
                                            accessibilityLabel={
                                                step === textData.length - 1
                                                    ? "Complete Onboarding"
                                                    : "Next Step"
                                            }
                                            style={tw`relative left-15 top--1`}
                                        >
                                            <LinearGradient
                                                colors={['#7B2CBF', '#E63946']}
                                                style={tw`rounded-full px-6 py-2`}
                                            >
                                                <Text style={tw`text-white font-bold text-lg`}>
                                                    {step === textData.length - 1 ? "Done" : "Next"}
                                                </Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    );
}
