import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
  

let windowWidth = Dimensions.get('window').width
  

export default class ImageCard extends React.Component {
    
    renderRow (rowData) {
        if (rowData.images) {
            if (rowData.images[0].link.match(/\.(jpg|png|gif)/g)) {
                return (
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                        <View style={{ backgroundColor: "#4e4f61", borderRadius: 10, overflow: "hidden" }}>
                            <View style={{ padding: 10, width: 155 }}>                                
                                <Text style={{ color: "#fff", paddingTop: 5 }}>
                                    { rowData.images[0].description }
                                </Text>                                
                            </View>                            
                            <View>
                                <Image
                                    source={{ uri: rowData.images[0].link }}
                                    style={{
                                        height: windowWidth - 10,
                                        width: windowWidth - 10
                                    }}
                                />
                            </View>                            
                            <View style={{ padding: 10, width: windowWidth - 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ paddingTop: 5, flexDirection: 'row' }}>
                                    <Ionicons name="md-eye" size={16} color="white" style={{ marginRight: 2 }} />
                                    <Text style={{ color: "#fff" }}>{ rowData.images[0].views }</Text>
                                    <Text style={{ color: "#fff", marginLeft: 5, fontStyle: 'italic' }}>{new Date(rowData.images[0].datetime * 1000).toLocaleString("en-US", {year: "numeric", month: "numeric", day: "numeric"})}</Text>                                    
                                </View>
                                <Ionicons name="ios-star-outline" size={16} color="white" style={{ paddingTop: 5 }} />                                
                            </View>
                        </View>
                    </View>                    
                )
            }
            else {
                return null;
            }
        }
        else {
            return null
        }
    }
  
    render () {
        let card = this.renderRow(this.props.result)
  
        return card
    }
}