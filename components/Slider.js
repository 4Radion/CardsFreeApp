/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.6;

export default class Slider extends React.Component {
  state = {
    active: 0,
  };

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };
  render() {
    return (


        <View style={style.container}>
          <ScrollView
            pagingEnabled
            horizontal
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}
            style={style.container}>
            {this.props.images.map((image, index) => (
              <Image key={index} source={{uri: image}} style={style.image} />
            ))}
          </ScrollView>
          <View style={style.pagination}>
            {this.props.images.map((i, k) => (
              <Text
                key={k}
                style={
                  k == this.state.active
                    ? style.pagingActiveText
                    : style.pagingText
                }>
                ⬤
              </Text>
            ))}
          </View>
          <View style={style.button}>
            
      <TouchableOpacity
        onPress={() => {
          alert('Add a card');
        }}
        style={style.roundButton1}>
        <Text style={style.roundButtonicon}>+</Text>
      </TouchableOpacity>

          </View>
        </View> 
 




    );
  }
}

const style = StyleSheet.create({
 
  container: {

    width,
    height,
    bottom: +60,
  },
  image: {
    width,
    height,
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: +40,
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -200,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: width / 30,
    color: '#050505',
    margin: 3,
  },
  pagingActiveText: {
    fontSize: width / 30,
    color: 'rgba(230,48,53,255)',
    margin: 3,
  },
  roundButton1: {
    width: 70,
    height: 70,
  
    alignItems: 'center',

    borderRadius: 100,
    
    backgroundColor: 'rgba(220,220,220,10)',

  },
  roundButtonicon: {
    fontSize: 50,
  
  },
});
