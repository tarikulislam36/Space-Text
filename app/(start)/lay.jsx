import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const lay = () => {
    return (

        <>
            <Stack>
                <Stack.Screen name='index' options={{
                    headerShown: false,
                }} />
            </Stack>
        </>
    )
}

export default lay

const styles = StyleSheet.create({})