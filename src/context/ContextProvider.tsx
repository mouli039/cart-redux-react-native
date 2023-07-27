import React, {Component} from 'react';
import ContextApi from './ContextApi';
import RazorpayCheckout from 'react-native-razorpay';

interface IProps {
  children: any;
}
interface IState {
  data: any;
  transections: any;
}

export class ContextProvider extends Component<IProps, IState> {
  state: IState = {
    data: [],
    transections: [],
  };

  async componentDidMount() {
    try {
      const data: any = await fetch('https://dummyjson.com/products');
      const res = await data.json();
      if (res !== null) {
        const addQuantity: any = res.products.map((ele: any) => ({
          ...ele,
          quantity: 0,
          cart: false,
        }));
        this.setState({data: addQuantity});
      }
    } catch (error) {
      console.log(error);
    }
  }

  checkCart = (id: number) => {
    const {data} = this.state;
    data.map((ele: {id: number; quantity: number; cart: boolean}) => {
      ele.id === id && !ele.cart && this.increseQuantity(id);
    });
  };

  increseQuantity = (id: number) => {
    const {data} = this.state;
    const newData = data.map((ele: {id: number; quantity: number}) =>
      ele.id === id ? {...ele, quantity: ele.quantity + 1, cart: true} : ele,
    );
    this.setState({data: newData});
  };

  incQuantityTo = (id: number, count: number) => {
    const {data} = this.state;
    const newData = data.map((ele: {id: number; quantity: number}) =>
      ele.id === id ? {...ele, quantity: count, cart: true} : ele,
    );
    this.setState({data: newData});
  };

  decreseQuantity = (id: number) => {
    const {data} = this.state;
    const newData = data.map((ele: {id: number; quantity: number}) =>
      ele.id === id
        ? ele.quantity > 0
          ? {...ele, quantity: ele.quantity - 1}
          : {...ele, cart: false}
        : ele,
    );
    this.setState({data: newData});
  };

  zeroQuantity = (id: number) => {
    const {data} = this.state;
    const newData = data.map((ele: {id: number; quantity: number}) =>
      ele.id === id ? {...ele, quantity: 0, cart: false} : ele,
    );
    this.setState({data: newData});
  };

  checkout = (total: number) => {
    const options: any = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_5i2EhFQWEM9sDb',
      amount: total,
      name: 'mouli',
      prefill: {
        email: 'moulikrishnanagiri.com',
        contact: '9346362678',
        name: 'NMK pvt.ltd',
      },
      theme: {color: '#4B194F'},
    };
    RazorpayCheckout.open(options)
      .then((getData: any) => {
        const {transections} = this.state;
        const newTransection = {
          amount: total,
          payment_id: getData.razorpay_payment_id,
          photo: options.image,
          name: options.name,
        };
        console.log(getData.razorpay_payment_id);
        const {data} = this.state;
        const newData = data.map((ele: {id: number; quantity: number}) => ({
          ...ele,
          quantity: 0,
          cart: false,
        }));
        this.setState({
          transections: [...transections, newTransection],
          data: newData,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <ContextApi.Provider
        value={{
          data: this.state.data,
          transections: this.state.transections,
          increseQuantity: this.increseQuantity,
          decreseQuantity: this.decreseQuantity,
          checkCart: this.checkCart,
          zeroQuantity: this.zeroQuantity,
          incQuantityTo: this.incQuantityTo,
          checkout: this.checkout,
        }}>
        {this.props.children}
      </ContextApi.Provider>
    );
  }
}

export default ContextProvider;
