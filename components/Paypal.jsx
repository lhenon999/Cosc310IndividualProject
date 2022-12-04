import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import * as React from "react";
import { Shipment } from './ShipmentPanel';
import { TEST_ITEMS } from '../utils/test_shipments';

const Paypal = props =>{
  const {amount} = props;
  const {cartData} = props;

    const handleCreatePaypal = (data, actions) => {
      const orderAmount = amount;
      return actions.order.create({
          purchase_units: [
              { 
                amount: {value: orderAmount} }
          ]
      })
  }

  const handleApprove = (orderID) =>{

    const content = [];
    for (let i of Object.keys(cartData)) {
      if (i != 0){
        content[i-1] = {item_id: cartData[i][0].id , name: cartData[i][0].name , quantity: cartData[i][1] , price: cartData[i][0].price};
      }
    }

    TEST_ITEMS.push({shipment_id: 999,price: 100,status: 1,priority: 1, date: "2021-10-20",content: content});

    console.log(TEST_ITEMS);

    alert("Transaction completed by " + details.payer.name.given_name + ". Your order has been confirmed and a shipment has been created");
  }

  return (
    <PayPalScriptProvider>
        <PayPalButtons
            style= {{
              color: "gold",
              shape: "pill",
              height: 55
            }}
            createOrder={(data, actions) => handleCreatePaypal(data, actions)}
            forceReRender={[amount]}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              handleApprove(data.orderID);
          }}
        />
    </PayPalScriptProvider>
)
}

export default Paypal
