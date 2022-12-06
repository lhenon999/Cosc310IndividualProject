# Hospital IMS: Individual Project

Leo Henon (14983282)

## Feature 1: Cart Checkout (Paypal API)

The first feature implemented is a fully functional cart checkout page with a payment processor. This feature uses the Paypal API with a sandbox account to simulate a paypal transaction. When items are added to the cart, you can now click the cart which brings you to a checkout page where the quantity of items in the cart can be edited. The checkout page features a paypal button which allows you to make a payment for the order. 

Once the payment is proccessed and approved, the system displays an output message that a new shipment has been created and provides the user with the shipment ID. 

The corresesponding shipment can then be viewed in the previously created shipments page. The paypal checkout button updates dynamically with items in the cart; when item quantities are changed, the paypal button reflects the corresponding price changes.

Checkout Page:

![image_checkout.png](https://user-images.githubusercontent.com/77656081/205527446-d06c66f1-47e2-44c3-a9ad-320bb369c4b2.png)

Paypal payment: 

![image_paypal.png](https://user-images.githubusercontent.com/77656081/205527773-2f1bb84f-1214-4124-b51e-1feaa0ec54cc.png)

Confirmation message:

![image_message.png](https://user-images.githubusercontent.com/77656081/205527831-66ca6c74-7f5f-453c-89fb-cbe393b7ce92.png)

Created Shipment:

![image_shipmen.png](https://user-images.githubusercontent.com/77656081/205527889-d5fc8efc-21f7-4b9e-830f-2d27940607d2.png)


### How to use:

Paypal sandbox Account: 

use this generated paypal sandbox bussiness account to simulate the hospital business account. 

Username: sb-oe747q23134126@business.example.com
Password: Spd9z=pI

1. Add some items to the cart
2. click on the cart to go to the checkout page 
3. Edit item quantities as required 
4. click the paypal checkout button and login using the sandbox account 
5. Choose the address to ship the shipment to (the account has 3 addresses created to simulate the 3 test warehouses)
6. Choose the preffered payment method (the account has a simulated credit card and bank account with up to $3000 CAD funding) 
7. Click complete purschase
8. Once the confirmation message is displayed, go to the shipment page to view the newly created shipment


## Feature 2: Warehouse Localisation & Alerts (Google Maps Javascript API) 

This feature represents two components that were added to the warehouse page. The first is warehouse localisation which utilises the google maps API to display a visual representation of warehouses' location. The map shows a marker at the address of each warehouse and changes dynamically as the selected warehouse is changed. The address can be clicked to open google maps in a new tab to the corresponding address.

![map3](https://user-images.githubusercontent.com/77656081/205574854-9b98b936-db05-4a2a-b2bf-b8035dce3062.png)

![map1](https://user-images.githubusercontent.com/77656081/205574746-5758da15-ef71-4ed5-ba23-57009e48ed51.png)

- sattelite button bottom left 
- view larger map links to google maps with marker 
- directions links to google maps with directions 
- zoom buttons bottom right or ⌘ + scroll

The next component is the alerts panel, which displays alerts based on a list of requirements for each warehouse. To test this feature, different prop items have been added to inventory of each warehouse. The list of requirements features different item ids and associated minimum quantity that is required at a warehouse. The alerts component displays an alert if the inventory of the selected warehouse has less of an item than is required. 

For example, if a warehouse is required to have at least 5 of item 123 but there is only 4 in it's inventory, then an alert will be displayed to notify the user that the warehouse is low on item 123.

The alerts componenet changes dynamically based on the selected warehouse. Likewise, if items are added/removed to/from the warehouse, the alerts will change accordingly.

Example: 

![Screen Shot 2022-12-05 at 9 04 57 PM](https://user-images.githubusercontent.com/77656081/205820774-20223521-fdcd-4d13-8870-d65ef5f58782.png)

Here the warehouse requires 2 of item 456, if we add 2 item 456s to the warehouse than the alert disappears. 

![Screen Shot 2022-12-05 at 9 15 11 PM](https://user-images.githubusercontent.com/77656081/205822619-4b681505-f145-47b1-bcea-95e98d57194e.png)

![Screen Shot 2022-12-05 at 9 15 39 PM](https://user-images.githubusercontent.com/77656081/205822608-b5eae6bc-8a3a-48ff-9d5c-8db1e2c169b6.png)

# From Assignment 3: 

## Members

Antonio Vazquez-Mackay, Connor Doman, Eric Launer, Leo Henon

## Usage

## Description

The purpose of this project is to create an inventory management system for a hospital capable of tracking stored items, ordering new items, storing user information such as permission level, forecasting shortages, and automatically ordering new items when stocks are low.

### Installation

First, clone the repository:

```bash
$ git clone https://github.com/cosc310team24/project.git
```

You will need to install `node` and `yarn` to run this project. You can install `node` by following the instructions [here](https://nodejs.org/en/download/). You can install `yarn` by following the instructions [here](https://yarnpkg.com/en/docs/install).

Before you can run the app you need to install the project's dependencies. Open a terminal in the folder you cloned and run `$ yarn install`.

### Running the application

From a terminal in the folder you cloned, run `$ yarn dev`. This will start the server which automatically compiles and reloads the project in the browser. You can access the project at `http://localhost:3000` or whatever IP it says.

### Class descriptions

#### Warehouse

This class defines a warehouse used for storage item and tracks the total storage space, remaining storage space, warehouse ID, and a changelog of the warehouse's items. It allows the addition and removal of items while keeping track of which staff member removed what items and notifies users if they attempt to remove an item above their permission level.

#### Cart

This class keeps a list of items along with their quantities in the system's cart and allows the addition or removal of one or multiple items at a time.

## Testing

### Description

Testing is done using the Cypress testing framework. It can perform tests on the components themselves as well as by mimicking user stories and verifying the functionality of the application as a whole.

Component tests are in `cypress/component`.

### How to create a Component Test

Inside the `cypress/component` folder, create a new file with the name of the component you are testing. For example, if you are testing the `Button` component, create a file called `Button.cy.jsx` (or `.js`).

Inside the file, import the component you are testing:

```jsx
import Button from "/components/Button.jsx";

//...
```

Then place all your unit tests inside the `describe` block:

```jsx
// imports...

describe("Button.cy.jsx", () => {
    //...
});
```

Tests, as much as possible, are designed to be coded in a way that feels like natural language. For each test you want to perform, use the `it()` function with a description of the test as the first argument. For example, if a button needed to be disabled when it's mounted:

```jsx
// imports...

describe("Button.cy.jsx", () => {
    it("should be disabled on mount", () => {
        //...
    });
});
```

Then, inside the callback (the second argument), write the code that will perform the test. For example, if the button is disabled when it's mounted, you can check if the button is disabled by using the `cy.get()` function to get the button and then using the `should()` function to check if the button is disabled:

```jsx
// imports...

describe("Button.cy.jsx", () => {
    it("should be disabled on mount", () => {
        cy.get('[data-cy="button"]').should("be.disabled");
    });
});
```

The first argument of `cy.get()`, `'[data-cy="button"]'` is an attribute of the actual button element. This is used to identify the button in the DOM.

```jsx
function Button() {
    // const handleClick = ()...

    return (
        <button data-cy="button" onClick={handleClick}>
            Click me
        </button>
    );
}
```

You can write multiple `it()` blocks inside a `describe()` block to test multiple things about the component.

### Running Component Tests

Once you're satisfied with the component tests, you can run them by running the following command:

```bash
yarn cypress
```

This will open the Cypress test runner. Select `Component Testing`. Then select the browser you'd like to run the tests in. Choose the component you'd like to test and then your results will be displayed.

If your component fails the tests, Cypress will inform you where and how the failure occurred. Edit your components appropriately.

## Features

#### Profile Displays

Allows users to see the profiles of staff members including their id, first name, last name, email, and permission level. The example image shows the profile page with some test profiles. 
![image](https://user-images.githubusercontent.com/113552143/201818540-2286f133-5cdc-45ff-b4af-f9e96b5bca2c.png)

#### Pass Cart to Checkout

Allows for items in the cart/order page to be passed to checkout. The example images show how items from the order page can be moved to checkout.
![image](https://user-images.githubusercontent.com/113552143/201818929-81775b20-395c-4ea7-ac68-0797b9d87e49.png)
![image](https://user-images.githubusercontent.com/113552143/201826641-143ff46e-6c9a-4571-8d00-87d19b444231.png)

#### Filter and Search Shipments + GUI to Modify Active Shipments

Allows users to search the shipments page by shipment ID, date, status, price, and priority. Also allows for the cancellation of active shipments or the option of rushing them if they are needed sooner by changing their priority. The example image shows the shipments list sorted by ID in the first image and by status in the second.
![image](https://user-images.githubusercontent.com/113552143/201818981-f3b0ed64-f046-4508-bb3a-064c49d94b54.png)
![image](https://user-images.githubusercontent.com/113552143/201820384-a5988e4d-a00d-4535-a4a4-366fd511c2b2.png)

#### Warehouse GUI for Modifying and Reviewing Inventory

Allows for the viewing of warehouse inventory, adding/removing of items, and viewing of change history. The example image shows warehouse 123 after an item with ID 123 was added. 
![image](https://user-images.githubusercontent.com/113552143/201820182-68c32d32-b3ef-4909-9473-6f341ea59751.png)
