import React, { useState, useEffect } from 'react';
import Order from '../../components/Order/Order';
import ordersApi from '../../api/ordersApi';
import Spinner from '../../../../components/Spinner/Spinner';
//import { Test } from './Orders.styles';

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await ordersApi.fetchOrders();
      if (response.data) {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }
        setOrders(fetchedOrders);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !loading && orders ? (
    <div>
      {orders.map(order => (
        <Order key={order.id} ingredients={order.ingredients} price={order.price} />
      ))}
    </div>
  ) : (
    <Spinner
      style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
    />
  );
}

export default Orders;
