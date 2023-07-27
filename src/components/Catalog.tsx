import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContextApi from '../context/ContextApi';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IIcon from 'react-native-vector-icons/Ionicons';

interface IProps {
  navigation?: any;
}
interface IState {}

class Catalog extends Component<IProps, IState> {

  toSinglePage = (no: number) => {
    this.props.navigation.navigate('SingleProduct', {id: no});
  };

  render() {
    const {toSinglePage} = this;
    return (
      <ContextApi.Consumer>
        {({data}: any) => {
          const res = data;

          return (
            <View>
               <View style={styles.headertop}>
                <Text style={styles.headerTexttop}><IIcon name='arrow-back' size={25} />{"    "}Bridal Bouquet</Text>
                <Icon name="search" size={25} color="grey" />
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Catelog</Text>
                <Icon name="sliders" size={20} color="grey" />
              </View>
              <View style={styles.products}>
                <FlatList
                  data={res}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => toSinglePage(item.id)}
                      style={styles.eachItemcont}>
                      <View style={styles.row}>
                        <View style={styles.imageContainer}>
                          <Image
                            source={{uri: item.thumbnail}}
                            style={styles.imageStyle}
                          />
                        </View>
                        <View style={styles.details}>
                          <Text style={styles.titleText}>{item.title}</Text>
                          <View style={styles.cartIcon}>
                            <Text style={styles.priceText}>${item.price}</Text>
                            <IIcon name="cart" size={16} color="#9682B6" />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          );
        }}
      </ContextApi.Consumer>
    );
  }
}

export default Catalog;

const styles = StyleSheet.create({
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9682B6',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
  cartIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    justifyContent: 'space-around',
    gap: 3,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },

  eachItemcont: {
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },

  imageContainer: {
    height: 100,
  },

  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingRight:20
  },
  products: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,
  },
  flatlist: {
    alignSelf: 'center',
    backgroundColor: 'grey',
  },
  row: {
    width: 170,
    height: 180,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontSize: 17,
    color: 'black',
    fontWeight:'500'
  },
  headerTexttop: {
    fontSize: 25,
    color: 'black',
    fontWeight:'600',
  },
  headertop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems:'center'
  },
});
