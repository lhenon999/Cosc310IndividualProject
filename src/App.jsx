/**
 * COSC 310 Team 24 Hospital IMS Proof of Concept
 * By Connor Doman
 * 2022-10-05
 */

const app = document.getElementById("app");

const LINKS = ["Order", "Shipments", "Warehouse"];

const FOOTER_TEXT =
    "Made by Team 24: Leo Henon, Antonio Vasquez-Mackay, Connor Doman, and Eric Launer.";

/**
 * CSS Styles with JavaScript objects
 */

// const headerStyle = {
//     backgroundColor: "black",
//     color: "white",
//     padding: "1rem 2rem",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontFamily: "sans-serif",
//     position: "sticky",
// };

/**
 * Navigation Links, Header
 */

function Link({ link }) {
    return <li className="navLink">{link}</li>;
}

function NavLinks({ links }) {
    const linkList = links.map((link) => {
        return <Link key={link} link={link} />;
    });
    return <ul className="navLinks">{linkList}</ul>;
}

function Header({ title }) {
    return (
        <header className="navHeader">
            <h1>{title}</h1>
            <NavLinks links={LINKS} />
        </header>
    );
}

/**
 * Items on the Inventory Screen
 */

class Item {
    static priceFormatter = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
    });

    constructor(id, name, price) {
        this.id = id;
        this.name = name;

        this.price = Item.priceFormatter.format(price);
    }

    toString() {
        return `${this.id}. ${this.name} - ${this.price}`;
    }
}

const testItems = () => {
    let items = [];
    for (let i = 0; i < 100; i++) {
        items.push(new Item(i, `Item ${i}`, Math.floor(Math.random() * 100)));
    }
    return items;
};

function OrderItem({ item }) {
    let it =
        item instanceof Item ? item : new Item(item.id, item.name, item.price);
    return (
        <li className="orderItem">
            <div className="itemImage"></div>
            <p>{it.toString()}</p>
        </li>
    );
}

function OrderPanel() {
    const items = testItems().map((item) => {
        return <OrderItem key={item} item={item} />;
    });
    return <ul className="orderList">{items}</ul>;
}

/**
 * Footer
 */

function Footer() {
    return (
        <footer className="footer">
            <p>{FOOTER_TEXT}</p>
        </footer>
    );
}

/**
 * Page content and app entry point
 */

function Content({ children }) {
    return <div className="content">{children}</div>;
}

function App() {
    return (
        <Content>
            <Header title="Hospital IMS" />
            <OrderPanel />
            <Footer />
        </Content>
    );
}

ReactDOM.render(<App />, app);
