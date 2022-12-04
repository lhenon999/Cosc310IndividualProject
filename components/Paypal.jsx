import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import * as React from "react";
import { Shipment } from './ShipmentPanel';
import { TEST_ITEMS } from '../utils/test_shipments';

// Paypal checkout componenent
const Paypal = props =>{
  const {amount} = props;
  const {cartData} = props;

    // Handle change in price during checkout
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

    //Initilize an array of all items in cart
    const content = [];
    for (let i of Object.keys(cartData)) {
      if (i != 0){
        content[i-1] = {item_id: cartData[i][0].id , name: cartData[i][0].name , quantity: cartData[i][1] , price: cartData[i][0].price};
      }
    }

    //generate random shipment id from 100-999
    const id = Math.floor(Math.random()*(999-100+1)+100);

    //Getting today's date 
    const today_date = new Date().toISOString().split('T')[0];

    //Create new shipment
    TEST_ITEMS.push({shipment_id: id,price: amount,status: 1,priority: 1, date: today_date ,content: content});
    console.log(TEST_ITEMS);

    //send confirmation message
    alert("Transaction completed by " + details.payer.name.given_name + ". Your order has been confirmed and a shipment has been created (Check the shipments page for more details)");
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
