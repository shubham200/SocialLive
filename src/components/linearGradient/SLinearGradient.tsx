import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const SLinearGradient = ({children}) => {
  return (
	<LinearGradient
			colors={["#46180F", "#230C08"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={{ flex: 1 }}
		>
			{children}
		</LinearGradient>
  )
}

export default SLinearGradient