import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ListItem from '../components/listitem';

const users = [
    { id: '1', name: 'Leanne'},
    { id: '2', name: 'Ervin'},
]
export default ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <View style={styles.container}>
            {loading?<Text>Cargando...</Text>:
                <FlatList 
                data={users}
                keyExtractor={x => String(x.id)}
                renderItem={({ item }) => <ListItem 
                                        title={item.name} 
                                        onPress={() => navigation.navigate('Posts', {user_id: item.id, name: item.name})}
                                     />}
                style={styles.list}
              />
            }
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    }
  });