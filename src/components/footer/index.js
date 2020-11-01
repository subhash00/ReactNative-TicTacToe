import React from 'react';

import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    center: {
        backgroundColor: "rgba(33, 255, 251, 0.89)",
        height: "100%",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        overflow:"visible"
    },
    textDisplay: {
       fontSize:50,
       fontWeight:"500",
    },
    button: {
        backgroundColor: "rgba(127, 249, 21, 0.69)",
        height: "100%",
        width:"100%",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        //overflow:"visible"
    },
})

const footer = (props) => {
    return (
      <View style={styles.center}> 
        {
        props.winner || props.draw ? 
         <TouchableOpacity
         onPress={() => props.restart()} 
         style={styles.button}
         >
          <Text  style={styles.textDisplay}>New Game </Text>
         </TouchableOpacity>        
        : <Text style={styles.textDisplay}>Tic-Tac-Toe</Text>
         }
      </View>
    );
}

export default footer;
