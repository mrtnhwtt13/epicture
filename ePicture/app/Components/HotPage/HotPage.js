import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from 'react-native'
import { getHotPage, getUserFavorites } from '../../API/apiRequests'
import ImageCard from './ImageCard'

export default class HotPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: null,
      favorites: [],
      loading: true,
    }
  }

  componentDidMount() {
    getUserFavorites().then(
      (response) => {
        this.setState({ favorites: response.data })
        getHotPage(this.props.route.params.sort).then(
          (response) => {
            this.setState({ dataSource: response.data, loading: false })
          },
          (error) => {
            console.log('error: ', error)
          },
        )
      },
      (error) => {
        console.log('error: ', error)
      },
    )
  }

  _closeModal() {
    this.props.navigation.pop()
  }

  render() {
    let { loading, dataSource, favorites } = this.state
    let results = null

    if (loading) {
      results = (
        <View style={style.loadingContainer}>
          <Text style={style.loading}>Loading images...</Text>
        </View>
      )
    }

    if (!loading) {
      results =
        dataSource &&
        dataSource.map((el) => (
          <ImageCard key={el.id} result={el} userFavorites={favorites} />
        ))
    }

    return (
      <View style={style.container}>
        <View style={style.headingContainer}>
          <View style={[style.buttonContainer]}>

          <TouchableHighlight underlayColor='#3f62aa' style={[ style.buttonLink ]} onPress={() => this.props.navigation.replace('HotPage', { sort: "viral"})}>
            <Text style={style.buttonText}>Viral</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#3f62aa' style={[ style.buttonLink ]} onPress={() => this.props.navigation.replace('HotPage', { sort: "top"})}>
            <Text style={style.buttonText}>Top</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#3f62aa' style={[ style.buttonLink ]} onPress={() => this.props.navigation.replace('HotPage', { sort: "time"})}>
            <Text style={style.buttonText}>Newest</Text>
          </TouchableHighlight>
          {/* <TouchableHighlight
            underlayColor="transparent"
            onPress={this._closeModal.bind(this)}
            style={style.closeButton}
          >
            <Text style={style.closeButtonText}>X</Text>
          </TouchableHighlight> */}
        </View>
        </View>
        <ScrollView style={style.mainContainer}>
          <View style={{ flex: 1 }}>{results}</View>
        </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    alignItems: 'center',
  },
  buttonContainer:{
    marginTop: 10,
    width: "70%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  heading: {
    fontSize: 20,
    marginTop: 10,
  },
  mainContainer: {
    flex: 1,
  },
  closeButton: {
    height: 35,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#afafaf',
    marginTop: 10,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 160,
  },
  loading: {
    fontSize: 22,
    color: '#7f7f7f',
  },
  results: {
    color: '#c9c9c9',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 17,
  },
  resultsContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ededed',
  },
  buttonLink: {
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1e3f83",
    borderRadius: 30,
},
buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase'
},
})
