import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Component} from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContextApi from '../context/ContextApi';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class Wedding extends Component {
  render() {
    return (
      <ContextApi.Consumer>
        {({data}: any) => {
          const categories = data.reduce((accumulator: any, current: any) => {
            if (
              !accumulator.find(
                (item: any) => item.category === current.category,
              )
            ) {
              accumulator.push(current);
            }
            return accumulator;
          }, []);
          return (
            <ScrollView>
              <View style={styles.container}>
                <StatusBar backgroundColor="#F4F4F4" barStyle="dark-content" />
                <View style={styles.calender}>
                  <View style={{width: wp('70')}}>
                    <Text style={styles.question}>Need help?</Text>
                    <Text style={styles.subText}>
                      Make an appointment or chat with us.
                    </Text>
                  </View>
                  <MIcon
                    name="calendar-month-outline"
                    size={wp('12')}
                    color="white"
                  />
                </View>
                <View style={styles.grid}>
                  <View style={styles.inCol}>
                    <MIcon
                      name="view-grid"
                      size={hp('5')}
                      color="white"
                      style={styles.menu}
                    />
                    <Text style={styles.menuText}>All</Text>
                  </View>
                  <View style={{paddingRight: wp('5')}}>
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={categories}
                      renderItem={({item}) => (
                        <View style={styles.eachIcon}>
                          <View style={styles.imageContainer}>
                            <Image
                              source={{uri: item.thumbnail}}
                              style={styles.image}
                            />
                          </View>
                          <Text style={styles.menuText}>{item.category}</Text>
                        </View>
                      )}
                    />
                  </View>
                </View>
                <Text style={styles.popular}>Popularity</Text>
                <View>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({item}) => (
                      <View style={styles.eachPicture}>
                        <Image
                          source={{uri: item.thumbnail}}
                          style={styles.eachPic}
                        />
                        <View style={{width: '100%', alignItems: 'center'}}>
                          <View style={styles.eachTitle}>
                            <Text style={styles.eachTitleText}>
                              {item.title}
                            </Text>
                            <Text style={styles.eachTitleRating}>
                              Rating : {item.rating}
                            </Text>
                          </View>
                          <Text style={styles.eachPrice}>${item.price}</Text>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </View>
            </ScrollView>
          );
        }}
      </ContextApi.Consumer>
    );
  }
}

export default Wedding;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '4%',
  },
  calender: {
    backgroundColor: '#9682B6',
    flexDirection: 'row',
    padding: '5%',
    justifyContent: 'space-between',
    marginVertical: '5%',
    borderRadius: 10,
  },
  question: {
    fontSize: wp('8'),
    fontWeight: '500',
    color: 'white',
  },
  subText: {
    color: 'white',
    marginTop: wp('1'),
    fontSize: wp('3.4'),
  },
  grid: {
    flexDirection: 'row',
  },
  menu: {
    padding: hp('1'),
    backgroundColor: '#9682B6',
    borderRadius: 10,
  },
  menuText: {
    textAlign: 'center',
    color: '#2E2D2D',
    marginTop: hp('1'),
    fontSize: hp('1.3')
  },
  popular: {
    fontSize: hp('2.7'),
    color: '#2E2D2D',
    fontWeight: '500',
    // letterSpacing: 1,
    marginVertical: '8%',
  },
  iconFlatlist: {
    flexDirection: 'row',
  },
  image: {
    height: hp('8'),
    // width: 60,
    width: wp('10')
  },
  imageContainer: {
    height: hp('7'),
    width:wp('14'),
    borderRadius: 10,
    overflow: 'hidden',
  },
  inCol: {
    marginRight: 20,
  },
  eachIcon: {
    marginRight: 10,
  },
  eachPicture: {
    height: 210,
    width: 280,
    backgroundColor: 'white',
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  eachPic: {
    height: 130,
    width: 250,
    borderRadius: 10,
  },
  eachTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  eachTitleText: {
    color: '#9682B6',
    fontSize: 20,
    fontWeight: '600',
  },
  eachTitleRating: {
    color: 'orange',
  },
  eachPrice: {
    textAlign: 'left',
    width: '90%',
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
});
