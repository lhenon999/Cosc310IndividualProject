import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import * as React from "react";
import { TEST_ITEMS } from '../utils/test_shipments';


// Paypal checkout componenent
const Paypal = props =>{
  const {amount} = props;
  const {cartData} = props;
  const id = 0;


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
    id = Math.floor(Math.random()*(999-100+1)+100);

    //Getting today's date 
    const today_date = new Date().toISOString().split('T')[0];

    //Create new shipment
    TEST_ITEMS.push({shipment_id: id,price: amount,status: 1,priority: 1, date: today_date ,content: content});

    // TODO: Redirect to order page
    // TODO: Error handling

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
            handleApprove(data.orderID);
            const details = await actions.order.capture();
            await alert("\nTransaction completed by " + details.payer.name.given_name + ".\n\nYour order has been confirmed and a shipment has been created \n\nCheck the shipments page for more details\n(Shipment ID: " + id + ")");
          }}
        />
    </PayPalScriptProvider>
  )
}


export default Paypal
