import React from 'react'
import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { addToFavorites } from '../../API/apiRequests'
  

let windowWidth = Dimensions.get('window').width
  

export default class ImageCard extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            favorite: true
        }
        this.handleAddToFav = this.handleAddToFav.bind(this);
    }

    handleAddToFav() {
        if (this.state.favorite === false) {
            this.setState({ favorite: true });
            addToFavorites(this.props.result.id)
        }
        else {
            this.setState({ favorite: false });
            addToFavorites(this.props.result.id)
        }
    }   
  
    render () {
        let { favorite } = this.state;
        let favIcon;
        if (favorite === false) {
            favIcon = ( <Ionicons name="ios-star-outline" size={16} color="white" style={{ paddingTop: 5 }} onPress={() => this.handleAddToFav()} /> )
        }
        else {
            favIcon = ( <Ionicons name="ios-star" size={16} color="yellow" style={{ paddingTop: 5 }} onPress={() => this.handleAddToFav()} /> )
        }
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                <View style={{ backgroundColor: "#4e4f61", borderRadius: 10, overflow: "hidden" }}>
                    <View style={{ padding: 10, width: "100%" }}>                                
                        <Text style={{ color: "#fff", paddingTop: 5 }}>
                            { this.props.result.description }
                        </Text>                                
                    </View>                            
                    <View>
                        <Image
                            source={{ uri: this.props.result.link }}
                            style={{
                                height: windowWidth - 10,
                                width: windowWidth - 10
                            }}
                        />
                    </View>                            
                    <View style={{ padding: 10, width: windowWidth - 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ paddingTop: 5, flexDirection: 'row' }}>
                            <Ionicons name="md-eye" size={16} color="white" style={{ marginRight: 2 }} />
                            <Text style={{ color: "#fff" }}>{ this.props.result.views }</Text>
                            <Text style={{ color: "#fff", marginLeft: 5, fontStyle: 'italic' }}>{new Date(this.props.result.datetime * 1000).toLocaleString("en-US", {year: "numeric", month: "numeric", day: "numeric"})}</Text>                                    
                        </View>
                        {favIcon}                                
                    </View>
                </View>
            </View>                    
        )
    }
}