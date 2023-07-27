import {FlatList, Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import ContextApi from '../context/ContextApi';

export class Transections extends Component {
  render() {
    return (
      // <View
      //   style={{
      //     // flexDirection: 'row',
      //     // justifyContent: 'space-evenly',
      //     // height: 100,
      //     // marginTop: 30,
      //     // paddingVertical: '5%',
      //     // paddingHorizontal: '4%',
      //   }}>
      //   <View style={{
      //     justifyContent: 'space-evenly'
      // }}>
      //     <View
      //       style={{
      //         flexDirection: 'row',
      //         justifyContent: 'space-between',
      //         alignItems:'center',
      //         width:'90%',
      //         alignSelf:'center'
      //       }}>
      //       <Text style={{color: 'black', fontSize: 22, fontWeight: '600'}}>
      //         foo
      //       </Text>
      //       {/* <Text style={{textAlign:'right'}}> foo </Text> */}
      //     </View>
      //     <View
      //       style={{
      //         flexDirection: 'row',
      //         justifyContent: 'space-between',
      //       }}>
      //       <Text style={{ color: 'black'}}>payment_Id</Text>
      //       <Text style={{textAlign:'right'}}>kjgaibgrervsd</Text>
      //     </View>
      //     <View
      //       style={{
      //         flexDirection: 'row',
      //         justifyContent: 'space-between',
      //       }}>
      //       <Text style={{ color: 'black'}}>Amount</Text>
      //       <Text style={{textAlign:'right'}}> $550</Text>
      //     </View>
      //   </View>
      // </View>
      <ContextApi.Consumer>
        {({transections}: any) => {
          console.log(transections);
          return (
            <View>
              <FlatList
                data={transections}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      height: 100,
                      marginTop: 30,
                    }}>
                    <Image
                      source={{uri: 'https://i.imgur.com/3g7nmJC.png'}}
                      style={{height: 90, width: '23%'}}
                      resizeMode="contain"
                    />
                    <View
                      style={{width: '60%', justifyContent: 'space-evenly'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{width: '40%', color: 'black'}}>
                          User Name
                        </Text>
                        <Text style={{width: '60%'}}> {item.name} </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{width: '40%', color: 'black'}}>
                          payment_Id
                        </Text>
                        <Text style={{width: '60%'}}>{item.payment_id}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{width: '40%', color: 'black'}}>
                          Amount
                        </Text>
                        <Text style={{width: '60%'}}> {item.amount} </Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          );
        }}
      </ContextApi.Consumer>
    );
  }
}

export default Transections;
