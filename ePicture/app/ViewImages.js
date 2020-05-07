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
                    <View>
                        <Image source={{ uri: rowData.images[0].link }} style={{width: windowWidth, height: windowWidth}} />
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
            <View style={{flex: 1}}>
                <TouchableHighlight underlayColor='transparent' onPress={this.props.route.params.closeModal.bind(this)} style={style.closeButton}>
                    <Text style={style.closeButtonText}>CLOSE</Text>
                </TouchableHighlight>
                {/* <ScrollView style={{flex: 1}}> */}
                    {images}
                {/* </ScrollView> */}
            </View>
        )
    }
}
  
const style = StyleSheet.create({
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
    }
})