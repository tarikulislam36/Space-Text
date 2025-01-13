import React from 'react'
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
import { Redirect, router, link } from 'expo-router';
import OnboardingScreen from './(start)/OnboardingScreen';


const index = () => {
    return (
        // <View>
        //     <TouchableOpacity
        //         onPress={() => router.push('/Welcome')}
        //     >
        //         <LinearGradient
        //             colors={['#7B2CBF', '#E63946']}
        //             style={tw`rounded-full px-10 py-4`}
        //         >
        //             <Text
        //                 style={tw`text-white font-bold text-center text-lg`}
        //             >
        //                 Accept
        //             </Text>
        //         </LinearGradient>
        //     </TouchableOpacity>
        // </View>

        <>
            <OnboardingScreen />
        </>
    )
}

export default index