import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './actions'

let styles

const App = (props) => {
	const {
		container,
		text,
		button,
		buttonText,
		mainContent
	} = styles

	return (
		<View style={container}>
			<Text style = {text}> Demo 1 - Redux Example</Text>
			<TouchableHighlight style = {button} onPress={()=>props.fetchData()}>
				<Text style = {buttonText}>Load Data</Text>
			</TouchableHighlight>
			<View style={mainContent}>
				{
					props.appData.isFetching && <Text>Data is Loading...</Text>
				}
				{
					props.appData.data.length ? (
						props.appData.data.map((person,i)=>{
							return <View key={i}>
								<Text>Name: {person.name}</Text>
								<Text>Age: {person.age}</Text>
							</View>
						})
					) : null
				}
			</View>
		</View>
	)
}

	styles = StyleSheet.create({
		container: {
			marginTop: 100
		},
		text: {
			textAlign: 'center'
		},
		button: {
			height: 60,
			margin: 10,
			justifyContent: 'center',
			backgroundColor: '#0b7eff'
		},
		buttonText: {
			color: 'white'
		},
		mainContent: {
			margin: 10,
		}
	})

// Get new state from store and return as props (appData).
	function mapStateToProps (state) {
		return {
			appData: state.appData
		}
	}

// The only way to change the state inside it is to dispatch an action on it.
// imported actions into the props you want to pass to a presentational component you are wrapping
	function mapDispatchToProps (dispatch) {
		return {
			fetchData: () => dispatch(fetchData())
		}
	}

export default connect(
	mapStateToProps,
	mapDispatchToProps
) (App)
