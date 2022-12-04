import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import * as React from "react";

const Paypal = props =>{
  const {amount} = props;
  console.log(amount);

    console.log(amount);

    const handleCreatePaypal = (data, actions) => {
      const orderAmount = amount;
      return actions.order.create({
          purchase_units: [
              { 
                amount: {value: orderAmount} }
          ]
      })
  }

  return (
    <PayPalScriptProvider>
        <PayPalButtons
            createOrder={(data, actions) => handleCreatePaypal(data, actions)}
            forceReRender={[amount]}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              alert("Transaction completed by " + details.payer.name.given_name);
          }}
        />
    </PayPalScriptProvider>
)
}

export default Paypal
