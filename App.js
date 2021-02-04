import React,{ useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name:'sarkodie', key : 1},
    {name:'joeyb', key : 2},
    {name:'mr drew', key : 3},
    {name:'reggie rockstone', key : 4},
    {name:'ashad', key : 5},
    {name:'kendrick', key : 6},
    {name:'flick', key : 7},
    {name:'fameye', key : 8}
  ]);
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(person => {
          return (
            <View key={person.key}>
              <Text style={styles.person}>{person.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
  
});
