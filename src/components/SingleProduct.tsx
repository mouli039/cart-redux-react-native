import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import ContextApi from '../context/ContextApi';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/Entypo';
import SwiperFlatList from 'react-native-swiper-flatlist';

interface IProps {
  navigation?: any;
  route: any;
}

interface IState {
  count: number;
}

class SingleProduct extends Component<IProps, IState> {
  state: IState = {count: 1};

  back = () => {
    this.props.navigation.push('TopNavigator');
  };

  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  };

  decrementCount = () => {
    this.state.count > 1 && this.setState({count: this.state.count - 1});
  };

  componentDidMount() {
    this.setState({count: 1});
  }

  render() {
    const {id} = this.props.route.params;
    const {back, incrementCount, decrementCount} = this;
    const {count} = this.state;
    return (
      <ScrollView>
        <ContextApi.Consumer>
          {({
            data,
            increseQuantity,
            decreseQuantity,
            checkCart,
            incQuantityTo,
          }: any) => {
            const product = data.filter(
              (ele: {id: number}) => ele.id === id,
            )[0];
            return (
              <View style={{alignItems: 'center', height: '100%'}}>
                <Text style={{width: '100%', alignItems: 'flex-end'}}>
                  <MIcon name="circle-with-cross" size={30} onPress={back} />
                </Text>
                <Image
                  source={{uri: product.thumbnail}}
                  style={{height: 300, width: '80%'}}
                />
                {/* <View>
                <SwiperFlatList
                data={product.images}
                autoplay
                autoplayDelay={2}
                autoplayLoop
                renderItem={({item}) => (
                  <Image
                  source={{uri: item}}
                  style={{height: 300, width: '80%'}}
                  />
                  )}
                  />
                </View> */}
                <View style={styles.content}>
                  <View style={styles.info}>
                    <View style={styles.inRow}>
                      <Text style={styles.title}>{product.title}</Text>
                      <Text style={[styles.title, styles.textColor]}>
                        ${product.price}
                      </Text>
                    </View>
                    <View style={styles.inRow}>
                      <Text style={styles.avail}>Availability</Text>
                      <Text style={styles.inStock}>in stock</Text>
                    </View>
                    <View style={styles.inRow}>
                      <Text style={styles.avail}>Rating</Text>
                      <Text>{product.rating}</Text>
                    </View>
                  </View>
                  <View style={styles.infoQ}>
                    <View style={styles.quantity}>
                      <Text style={styles.no}>Quantity</Text>
                      <View style={styles.adding}>
                        <MIcon
                          name="minus"
                          size={20}
                          onPress={decrementCount}
                          style={styles.iconStyle}
                        />
                        <Text style={[styles.no, styles.no2]}>{count}</Text>
                        <Icon
                          name="add"
                          size={20}
                          onPress={incrementCount}
                          style={styles.iconStyle}
                        />
                      </View>
                    </View>

                    <View style={styles.inRow}>
                      <Text style={styles.no}>Total amount</Text>
                      <Text style={[styles.title, styles.textColor]}>
                        ${count * product.price}
                      </Text>
                    </View>
                    <Text
                      onPress={() => {
                        const s = this.state.count;
                        this.setState({count: 1});
                        incQuantityTo(product.id, s);
                        Alert.alert('Items added Successfully');
                      }}
                      style={styles.cartBtn}>
                      <Icon
                        name="cart-outline"
                        size={20}
                        onPress={incrementCount}
                        style={styles.iconStyle}
                      />
                      {'    '}ADD CART
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        </ContextApi.Consumer>
      </ScrollView>
    );
  }
}

export default SingleProduct;

const styles = StyleSheet.create({
  textColor: {
    color: '#9682B6',
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  adding: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    paddingVertical: 1,
  },
  content: {
    width: '80%',
    paddingVertical: '7%',
  },
  avail: {
    color: 'black',
  },
  inRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  info: {
    height: '29%',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: '10%',
  },
  infoQ: {
    height: '40%',
    justifyContent: 'space-around',
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
  no2: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  cartBtn: {
    width: '80%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    backgroundColor: '#9682B6',
    paddingVertical: '4%',
    borderRadius: 10,
    color: 'white',
  },
  inStock: {
    color: 'green',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
