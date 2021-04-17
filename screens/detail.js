import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default ({navigation}) => {
    const name = navigation.getParam('name');
    const title = navigation.getParam('title');
    const body = navigation.getParam('body');
    return (
        <View style={styles.container}>
          <Text>{name}</Text>
          <Text>{title}</Text>
          <Text>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
  });