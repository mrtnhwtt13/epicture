import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Image,
    Dimensions,
    FlatList
} from 'react-native'
import API from './api'
  
let windowWidth = Dimensions.get('window').width
  
export default class ViewImages extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            dataSource: null,
            loading: true,
            images: []
        }
    }
  
    componentDidMount () {
        API.get(this.props.route.params.search)
            .then((response) => {
                this.setState({ dataSource: response.data.items, loading: false }) 
                console.log(this.state.dataSource)
            }, (error) => {
                    console.log('error: ', error)
                })
    }
    
    renderRow (rowData) {
        if (rowData.images) {
            if (rowData.images[0].link.match(/\.(jpg|png|gif)/g)) {
                return (
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                        <View style={{ backgroundColor: "#4e4f61", borderRadius: 10, overflow: "hidden" }}>
                            <View>
                                <Image
                                    source={{ uri: rowData.images[0].link }}
                                    style={{
                                        height: windowWidth - 10,
                                        width: windowWidth - 10
                                    }}
                                />
                            </View>
                            <View style={{ padding: 10, width: 155 }}>
                                <Text>Title</Text>
                                <Text style={{ color: "#777", paddingTop: 5 }}>
                                    Description of the image
                                </Text>
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
        let { loading, images } = this.state
  
        if (loading) {
            images = (
                <View style={style.loadingContainer}>
                    <Text style={style.loading}>Loading images...</Text>
                </View>)
        }
  
        if (!loading) {
            images = <FlatList data={this.state.dataSource} renderItem={({item}) => this.renderRow(item)} />
        }
  
        return (
            <View style={style.container}>
                <View style={style.headingContainer}>
                    <Text style={style.heading}>Search for { this.props.route.params.search }</Text>
                </View>
                <ScrollView style={style.mainContainer}>                    
                    <View style={style.resultsContainer}>
                        <Text style={style.results}>RESULTS</Text>                        
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableHighlight underlayColor='transparent' onPress={this.props.route.params.closeModal.bind(this)} style={style.closeButton}>
                            <Text style={style.closeButtonText}>CLOSE</Text>
                        </TouchableHighlight>
                        <View style={{flex: 1}}>
                            {images}
                        </View>
                    </View>             
                </ScrollView>
            </View>       
        )
    }
}
  
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    headingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed'
    },
    heading: {
        fontSize: 20,
        marginTop: 20
    },
    mainContainer: {
        flex: 1
    },
    closeButton: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1
    },
    closeButtonText: {
        fontSize: 16,
        color: '#afafaf',
        marginTop: 10
    },
    loadingContainer: {
        alignItems: 'center',
        marginTop: 160
    },
    loading: {
        fontSize: 22,
        color: '#7f7f7f'
    },
    results: {
        color: '#c9c9c9',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 17
    },
    resultsContainer: {
        marginTop: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ededed'
    }
})