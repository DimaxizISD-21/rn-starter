import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
	return <Text style={styles.text}>HomeScreen from React Native</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		textAlign: 'center',
	},
});

export default HomeScreen;
