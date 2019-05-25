import React, { useState } from 'react';
import ordersApi from '../../../api/ordersApi';
import styles from './ContactData.module.scss';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../../../components/Spinner/Spinner';

function ContactData(props) {
  const [state, setState] = useState({
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  });

  const handleOrder = e => {
    e.preventDefault();
    setState({ ...state, loading: true });
    console.log(props.ingredients);
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      customer: {
        name: 'Trong Manh Tu',
        address: {
          street: 'Street 5/5',
          zipCode: '37-677',
          country: 'Poland'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    saveOrder(order);
  };

  const saveOrder = async order => {
    try {
      await ordersApi.saveOrder(order);
      setState({ ...state, loading: false });
      props.history.push('/exercise1');
    } catch (err) {
      setState({ ...state, loading: false });
    }
  };

  let form = (
    <form>
      <input className={styles.Input} type="text" name="name" placeholder="Your Name" />
      <input className={styles.Input} type="email" name="email" placeholder="Your Mail" />
      <input className={styles.Input} type="text" name="street" placeholder="Street" />
      <input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />
      <Button btnType="Success" clicked={handleOrder}>
        ORDER
      </Button>
    </form>
  );
  if (state.loading) {
    form = <Spinner style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}/>;
  }
  return (
    <div className={styles.ContactData}>
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
}

export default ContactData;
