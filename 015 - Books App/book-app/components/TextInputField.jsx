import { TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function TextInputField({placeholder, initialState, setInitialState, keyboardType}) {
  return (
    <TextInput
              style={styles.textInput}
        placeholder={placeholder}
              onChangeText={setInitialState}
              value={initialState}
              keyboardType={keyboardType}
            />
  )
}

const styles = StyleSheet.create({
  textInput : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
  }
})