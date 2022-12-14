export class Cart {
    //this method tracks items and quantity of specific items in a cart
    constructor() {
        //constructs new cart
        this.itemList = [];
    }
    addItem(it, quant) {
        //adds a new item along with its starting quantity to the cart
        this.itemList.push([it, quant]);
    }
    removeItem(it) {
        //removes an item from the cart
        len = this.itemList.length - 1;
        for (let i = 0; i < len; i++) {
            //loops through itemList until item is found
            if (this.itemList[i][0] == it) {
                this.itemList.splice(i, 1); //removes item from list
                break;
            }
        }
    }
    addAmount(it, quant) {
        //adds specified amount of an item to the list
        len = this.itemList.length - 1;
        for (let i = 0; i < len; i++) {
            //loops through itemList until item is found
            if (this.itemList[i][0] == it) {
                this.itemList[i][1] = this.itemList[i][1] + quant; //updates quantity
                break;
            }
            if (i == len - 1) {
                //if end of list is reached adds item to list along with new quantity
                this.itemList.push([it, quant]);
            }
        }
    }
    removeAmount(it, quant) {
        //removes specified amount of an item to the list
        len = this.itemList.length - 1;
        for (let i = 0; i < len; i++) {
            //loops through itemList until item is found
            if (this.itemList[i][0] == it) {
                this.itemList[i][1] = this.itemList[i][1] - quant; //updates quantity
                if (this.itemList[i][1] <= 0) {
                    //removes item from list if quantity reaches zero
                    this.itemList.splice(i, 1);
                }
                break;
            }
        }
    }
    checkAmount(it) {
        //checks amount of a specified item in cart
        len = this.itemList.length - 1;
        for (let i = 0; i < len; i++) {
            if (this.itemList[i][0] == it) {
                return this.itemList[i][1];
            }
            if (i == len - 1) {
                //if item is not found in cart returns 0
                return 0;
            }
        }
    }
    checkSumAmount() {
        //checks sum of item quantities in cart
        len = this.itemList.length - 1;
        cnt = 0;
        for (let i = 0; i < len; i++) {
            cnt = cnt + itemList[i][1];
        }
        return cnt;
    }
    checkTotAmount() {
        //checks total number of items in cart
        return this.itemList.length;
    }
    seeCart() {
        //displays entire cart
        len = this.itemList.length - 1;
        for (let i = 0; i < len; i++) {
            console.log(
                `${this.itemList[i][1]}, ${" "},  ${this.itemList[
                    i
                ][0].getName()}`
            );
        }
    }
    emptyCart() {
        //resets cart
        this.itemList = [];
    }
}

export default Cart;
