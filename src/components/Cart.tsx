import { FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import ContextApi from '../context/ContextApi';
import MIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import Deletecon from 'react-native-vector-icons/AntDesign';

export class Cart extends Component {
  render() {
    return (
      <ContextApi.Consumer>
        {({
          data,
          increseQuantity,
          decreseQuantity,
          zeroQuantity,
          checkout,
        }: any) => {
          const cartData = data.filter((ele: any) => ele.quantity > 0);
          const total = cartData.reduce(
            (acc: number, ele: any) => (acc += ele.price * ele.quantity),
            0,
          );
          if (cartData.length === 0) {
            return (
              <View style={styles.emptyPage}>
                <Text style={styles.noDataText}>No cart data</Text>
              </View>
            );
          }
          return (
            <View style={styles.container}>
              <View style={styles.upperContainer}>
                <FlatList
                  data={cartData}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <View style={styles.cartItem}>
                      <View style={styles.imageContainer}>
                        <Image
                          source={{uri: item.thumbnail}}
                          style={styles.image}
                        />
                      </View>
                      <View style={styles.details}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.colorText}>
                          Pirce :{' '}
                          <Text style={styles.totalA}>${item.price}</Text>
                        </Text>
                        <View style={styles.quantity}>
                          <Text style={styles.colorText}>Quantity : </Text>
                          <View style={styles.adding}>
                            <MIcon
                              name="minus"
                              size={20}
                              onPress={() => decreseQuantity(item.id)}
                              style={styles.iconStyle}
                            />
                            <Text style={[styles.no, styles.no2]}>
                              {item.quantity}
                            </Text>
                            <Icon
                              name="add"
                              size={20}
                              onPress={() => increseQuantity(item.id)}
                              style={styles.iconStyle}
                            />
                          </View>
                          <Deletecon
                            name="delete"
                            size={20}
                            color="red"
                            onPress={() => zeroQuantity(item.id)}
                          />
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
              <View style={styles.lowerContainer}>
                <View style={styles.totalLine}>
                  <Text style={styles.total}>Total Amount =</Text>
                  <Text style={styles.totalA}>${total}</Text>
                </View>
                <Text
                  style={styles.checkout}
                  onPress={() => checkout(total * 100)}>
                  checkout
                </Text>
              </View>
            </View>
          );
        }}
      </ContextApi.Consumer>
    );
  }
}

export default Cart;

const styles = StyleSheet.create({
  adding: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    paddingVertical: 2,
  },
  image: {
    height: 100,
    width: 100,
  },
  upperContainer: {
    height: '83%',
  },
  lowerContainer: {
    height: '14%',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10%',
    backgroundColor: 'white',
    padding: '5%',
    borderRadius: 10,
  },
  container: {
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    justifyContent: 'space-evenly',
    gap: 20,
    height: '100%',
  },
  itemTitle: {
    color: 'black',
    fontSize: 15,
  },
  details: {
    width: '60%',
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: '30%',
    alignItems: 'center',
  },
  iconStyle: {
    opacity: 0.6,
    alignSelf: 'center',
  },
  no: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  no2: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 9,
  },
  emptyPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    fontSize: 30,
    fontWeight: '800',
  },
  totalA: {
    color: '#9682B6',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: '5%',
  },
  totalLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:'3%',
    alignItems:'center'
  },
  total: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: '5%',
  },
  colorText: {
    color: 'black',
  },
  checkout: {
    textAlign: 'center',
    paddingVertical: 15,
    backgroundColor: '#9682B6',
    borderRadius: 30,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
