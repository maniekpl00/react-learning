import React, { useState } from 'react';
import ordersApi from '../../../api/ordersApi';
import styles from './ContactData.module.scss';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../../../components/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

function ContactData(props) {
  const [state, setState] = useState({
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      postalCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Postal Code'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{ value: 'fastest', displayValue: 'Fastest' }, { value: 'cheapest', displayValue: 'Cheapest' }]
        },
        value: ''
      }
    },
    loading: false
  });

  const handleOrder = e => {
    e.preventDefault();
    setState({ ...state, loading: true });
    const formData = {};

    for (let formElement in state.orderForm) {
      formData[formElement] = state.orderForm[formElement].value;
    }
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      customer: formData
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

  const handleInputChange = e => {
    const target = e.target;
    const orderForm = state.orderForm;
    orderForm[target.name].value = target.value;
    setState({
      ...state,
      orderForm
    });

    console.log(e.target.value);
    console.log(e.target.name);
  };

  const formElementsArray = [];
  for (let key in state.orderForm) {
    formElementsArray.push({
      id: key,
      config: state.orderForm[key]
    });
  }
  let form = (
    <form onSubmit={handleOrder}>
      {formElementsArray.map(el => (
        <Input
          key={el.id}
          name={el.id}
          elementType={el.config.elementType}
          elementConfig={el.config.elementConfig}
          value={el.config.value}
          changed={handleInputChange}
        />
      ))}
      <Button btnType="Success" clicked={handleOrder}>
        ORDER
      </Button>
    </form>
  );
  if (state.loading) {
    form = <Spinner style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />;
  }
  return (
    <div className={styles.ContactData}>
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
}

export default ContactData;
