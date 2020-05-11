import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import { UserImage } from './API/apiRequests'
import MyImageCard from './MyImageCard'

export default class MyImages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: null,
            loading: true
        }
    }

    componentDidMount () {
        UserImage()
            .then((response) => {
                console.log(response);
                this.setState({ dataSource: response.data, loading: false });
                console.log(this.state.dataSource) 
            }, (error) => {
                    console.log('error: ', error)
                })
    }


    render () {
        // let { loading, dataSource } = this.state;
        // let results = null;

        // if (loading) {
        //     results = (
        //         <View style={style.loadingContainer}>
        //             <Text style={style.loading}>Loading images...</Text>
        //         </View>)
        // }

        // if (!loading) {
        //     results = dataSource && dataSource.map(el => <MyImageCard key={el.id} result={el} />)
        // }

        return (
            <View style={style.container}>
                <ScrollView style={style.mainContainer}>                    
                    <View style={{flex: 1}}>
                        
                        <View style={{flex: 1}}>
                            {/* {results} */}
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
