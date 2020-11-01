import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

const DATA = [
 {id:"0", value:""},
                          {id:"1", value:""},
                          {id:"2", value:""},
                          {id:"3", value:""},
                          {id:"4", value:""},
                          {id:"5", value:""},
                          {id:"6", value:""},
                          {id:"7", value:""},
                          {id:"8", value:""},
];

const Item = ({ title, props, index }) => (
  <TouchableOpacity
  onPress={() => props.handleClick(index)}
  >
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const board = (props) => {
  const renderItem = ({ item, index }) => (
    <Item index={index}
     title={item.value}
     props={props}
     />
  );

  return (
    <View>
      <FlatList
        data={props.board}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    //flex:1,
    width:120,
    height:120,
    borderRadius:100,
    backgroundColor: 'rgba(249, 7, 209, 0.47)',
    padding: 5,
    //marginVertical: 5,
    //marginHorizontal: 5,
    alignItems:"center",
    justifyContent:"center",
  },
  title: {
    fontSize: 60,
    fontWeight:"600",
  },
});

export default board;
