import React, { Component } from 'react';
import {  Text, View, FlatList, TouchableOpacity} from 'react-native';

export default class Aba extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemAba: [],
     

    };

  }

  UNSAFE_componentWillMount() {
   


  }


  componentDidMount() {

    switch(this.props.aba){
        case 0:
          this.setState({itemAba:[{ID:0,NOME:"teste000", VALOR:10},{ID:1,NOME:"teste001", VALOR:15}, {ID:2,NOME:"teste002", VALOR:8}]})
        break
        case 1:
          this.setState({itemAba:[{ID:0,NOME:"teste000", VALOR:10},{ID:1,NOME:"teste001", VALOR:15}, {ID:2,NOME:"teste002", VALOR:8}]})
        break
        case 2:
          this.setState({itemAba:[{ID:0,NOME:"teste000", VALOR:10},{ID:1,NOME:"teste001", VALOR:15}, {ID:2,NOME:"teste002", VALOR:8}]})
        break
        case 3:
          this.setState({itemAba:[{ID:0,NOME:"teste000", VALOR:10},{ID:1,NOME:"teste001", VALOR:15}, {ID:2,NOME:"teste002", VALOR:8}]})
        break
        case 4:
          this.setState({itemAba:[{ID:0,NOME:"teste000", VALOR:10},{ID:1,NOME:"teste001", VALOR:15}, {ID:2,NOME:"teste002", VALOR:8}]})
        break
        case 5:
          this.setState({itemAba:[{ID:0,NOME:"teste000", VALOR:10},{ID:1,NOME:"teste001", VALOR:15}, {ID:2,NOME:"teste002", VALOR:8}]})
        break
        case 6:
          this.setState({itemAba:[{ID:0,NOME:"teste000", VALOR:10},{ID:1,NOME:"teste001", VALOR:15}, {ID:2,NOME:"teste002", VALOR:8}]})
        break
    }

   
  }


  renderItem = ({ item, index }) => {

    return (


      <View

        style={{ borderRadius: 60, flex: 1, margin: 3, backgroundColor:"gray"}}>


        <TouchableOpacity
          key={item.ID}
          activeOpacity={0.5}
          style={[{ height: 115 }]}

           onPress={() => this.props.updateParent(item.VALOR)}>
     

          <View style={{ flex: 1, justifyContent: 'center', marginTop:4 }}>

            <View style={{flex:0.5}}>
             
            </View>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
              <Text style={ { fontSize: 12, color: "#000",textAlignVertical: 'center'}}>{item.NOME} </Text>

            </View>
            <View style={ {flex: 1,justifyContent: 'center',alignItems: 'center'}}>

              <Text style={{ fontSize: 15, color: "#000",height: "100%", width: "100%",textAlign: 'center',textAlignVertical: 'center'}}>{item.VALOR}</Text>

            </View>

          </View>


        </TouchableOpacity>
      </View>

    );

  };

  render() {

    return (


      <View style={{ padding:2,backgroundColor:'#fff', height:'100%' }}>

        <FlatList
          data={this.state.itemAba}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          numColumns={3}
        />
      </View>



    )
  }
}

