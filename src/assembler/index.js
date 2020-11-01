import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import Board from '../components/board/index'
import Display from '../components/display/index'
import Footer from '../components/footer/index'
import { handleCheck } from '../handlers/handleCheck' 
import { handleDraw } from '../handlers/handleDraw'

class assembler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardArray: [ {id:"0", value:""},
                          {id:"1", value:""},
                          {id:"2", value:""},
                          {id:"3", value:""},
                          {id:"4", value:""},
                          {id:"5", value:""},
                          {id:"6", value:""},
                          {id:"7", value:""},
                          {id:"8", value:""}],
            gameActive: true,
            gameIndex: true,
            winner: "",
            turn: "X",
            draw: ""

        }
        this.handleClick = this.handleClick.bind(this);
        this.restart = this.restart.bind(this);
    }
    restart = () => {
      //e.preventDefault;
       //console.log("assembler handler")
         this.setState({
         boardArray: [ {id:"0", value:""},
                          {id:"1", value:""},
                          {id:"2", value:""},
                          {id:"3", value:""},
                          {id:"4", value:""},
                          {id:"5", value:""},
                          {id:"6", value:""},
                          {id:"7", value:""},
                          {id:"8", value:""}],  
         gameIndex: true,
         winner: "",
         turn: "X",
         draw: ""
       });
           
    }

    handleClick = (index) => {
      const boardKeys = [...this.state.boardArray];

        if (boardKeys[index].value || this.state.winner) {
           //console.log("mango")
            return;
         } 
         // console.log(boardKeys[index].value)
        boardKeys[index].value = this.state.gameIndex ? "X" : "O";
        const turn = boardKeys[index].value === "X" ? "O" : "X";
       
        this.setState({
            boardArray: boardKeys,
            gameIndex: !this.state.gameIndex,
            turn: turn,
            
        })
         if (!this.state.winner) {
                    
                    const win = handleCheck(boardKeys);
                   // console.log("I wo") 
                    const draw = handleDraw(boardKeys);
              //console.log("I working")      
                    if (win) {
                        this.setState({
                            winner: win,
                        })
                       // console.log("I win")
                    }
                    if (draw) {
                        //console.log("its a draw");
                        this.setState({
                            draw: "draw",
                        })
                    }
                }
       
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.display}>
                  <Display winner={this.state.winner} 
                    draw={this.state.draw}
                    turn={this.state.turn}
                  />
              </View> 
              <View style={styles.board}>
                  <Board 
                  board={this.state.boardArray}
                  handleClick={(index) => this.handleClick(index)}
                  />
              </View> 
              <View style={styles.footer}>
                  <Footer winner={this.state.winner} 
                    draw={this.state.draw}
                    restart={() => this.restart()}
                  />
              </View> 
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
        //alignItems: '',
    },
    display: {
        flex:1,
        backgroundColor: "rgba(249, 116, 7, 0.06)",
        paddingBottom:2,

        //width: "50"
    },
    board: {
        flex:4,
        //marginVertical: 2,
        backgroundColor: "rgba(249, 116, 7, 0.06)",
        //height:150
    },
    footer: {
        flex:1,
        backgroundColor: "rgba(249, 116, 7, 0.06)",
        height: "100%",
    },
    
})

export default assembler;
