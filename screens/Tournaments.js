import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import axios from "axios";


export default class Tournaments extends React.Component{

    constructor(props) {
        super(props);
        this.state={data:[],
                    max_id:''}
    }



    getTournamentsList = async () =>{

        try {
            const response = await axios.get('1https://fairplay.host/api/tournament/list?max_id='+ this.state.max_id);
            //return response.data;
            console.log(response.data);
            this.setState({data: this.state.data.concat(response.data),
                                max_id:response.data[response.data.length-1].id })


        } catch (error) {
            if (error.response.status === 401) {
                throw new Error('Unauthorized');
            } else {
                throw error;
            }
        }
    }


    componentDidMount() {
        this.getTournamentsList();
    }


    listItem = (item)=> {
        return(<Text>{item.name}</Text>)
    }


    render() {

        return(
            <View>
            <Text>render jbhkjkjn</Text>
            <Text>{this.state.max_id}</Text>
                <FlatList data={this.state.data}
                          renderItem={({item}) => <Text>{item.name}</Text>}
                          keyExtractor={item => item.id}
                          onEndReached={({ distanceFromEnd }) => {
                              if (distanceFromEnd < 0) return;
                              this.getTournamentsList()
                          }

                    }
                          onEndReachedThreshold={.5}
                />
            </View>
        )
    }

}

