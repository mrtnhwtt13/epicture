import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import { getUserFavorites } from '../../API/apiRequests'
import ImageCard from './ImageCard'
    

export default class Favorites extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            favorites: null,
            loading: true
        }
    }
  
    componentDidMount () {
        getUserFavorites()
            .then((response) => {
                this.setState({ favorites: response.data, loading: false });                      
            }, (error) => {
                    console.log('error: ', error)
            })
        
    }

    _closeModal () {
        this.props.navigation.pop()
    }    
  
    render () {
        let { loading, favorites } = this.state;
        let results = null;
  
        if (loading) {
            results = (
                <View style={style.loadingContainer}>
                    <Text style={style.loading}>Loading images...</Text>
                </View>)
        }
  
        if (!loading) {
            results = favorites && favorites.map(el => <ImageCard key={el.id} result={el} />)
        }
  
        return (
            <View style={style.container}>
                <View style={style.headingContainer}>
                    <Text style={style.heading}>My favorites</Text>
                <TouchableHighlight underlayColor='transparent' onPress={this._closeModal.bind(this)} style={style.closeButton}>
                    <Text style={style.closeButtonText}>CLOSE</Text>
                </TouchableHighlight>
                </View>
                <ScrollView style={style.mainContainer}>                    
                    {/* <View style={style.resultsContainer}>
                        <Text style={style.results}>RESULTS</Text>                        
                    </View> */}
                    {/* <View style={{flex: 1}}> */}
                        <View style={{flex: 1}}>
                            {results}
                        </View>
                    {/* </View>              */}
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
        marginTop: 50
    },
    mainContainer: {
        flex: 1
    },
    closeButton: {
        height: 50,
        marginBottom: 30,
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