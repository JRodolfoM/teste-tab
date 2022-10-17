import React, { Component} from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Aba from './Aba';

const Tab = createMaterialTopTabNavigator();

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      Abas: [{ID:0, NOME:"teste00"}, {ID:1, NOME:"teste01"},{ID:2, NOME:"teste02"},{ID:3, NOME:"teste03"}, {ID:4, NOME:"teste04"}, {ID:5, NOME:"teste05"},{ID:6, NOME:"teste06"}],
      //Abas: [{ ID: 0, NOME: "teste00" }],//testar com uma aba
      Total: 0,
      larguraAba: 100,
      tabScreen:null,
     

    };


  }
  UNSAFE_componentWillMount() {
this.setState({tabScreen: this.renderLista()})

  }
  componentWillUnmount() {

  }


  componentDidMount() {

  }

  somar = (valor) => {

    var aux = parseFloat(this.state.Total) + parseFloat(valor);
    this.setState({ Total: aux })


  }

  ComponenteAba({ route }) {
    return (

      <Aba aba={route.params.ID}
         updateParent={route.params.somar}
      />

    );
  }

  renderLista = () => {

console.warn("chamou")
   
    return (

  
      <>
        {this.state.Abas.length > 0 &&
          <NavigationContainer>{
            <Tab.Navigator
              screenOptions={{
                
                tabBarScrollEnabled: true,
                tabBarStyle: {
                  height: 60,
                  borderBottomColor: 'black',
                  backgroundColor: 'green'

                },
                tabBarIndicatorStyle: {
                  backgroundColor: 'red',


                }


              }}>

              {
                this.state.Abas.map(abas =>

                  <Tab.Screen key={abas.ID} name={abas.NOME}
                    initialParams={{ ID: abas.ID, somar: this.somar }}
                     component={this.ComponenteAba}
                
                    options={{
                      title: abas.NOME,
                      tabBarItemStyle: { width: this.state.larguraAba },
                      tabBarIconStyle: {
                        alignItems: 'center'
                      },




                    }} />
                )
                }


            </Tab.Navigator>

          }</NavigationContainer>

  

        }

      </>

    )



  }


  render() {

    return (

      <View style={{ flex: 1, backgroundColor: "white" }}>


        <View style={{ flex: 2.5 }}>

          {this.state.tabScreen}

        </View>
        <Text style={{ fontSize: 45 }}>{this.state.Total}</Text>

      </View>

    );
  }


}
