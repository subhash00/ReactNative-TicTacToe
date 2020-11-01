import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const display = (props) => {
    return (
      <View style={styles.center}>
      {
       props.winner ? <Text style={styles.textDisplay}> {props.winner} Wins</Text> :                props.draw ? <Text style={styles.textDisplay}> Its a Draw</Text> : 
       <Text style={styles.textDisplay}> {props.turn} turn</Text>
      }
      </View>
    );
}
const styles = StyleSheet.create({
    center: {
        backgroundColor: "rgba(33, 255, 251, 0.89)",
        height: "100%",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden"
    },
    textDisplay: {
       fontSize:50,
       fontWeight:"500",
    },
})

export default display;
