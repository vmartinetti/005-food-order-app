import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}> {[
    { id: "c1", name: "Chicken", price: 10.99 },
    { id: "c2", name: "Beef", price: 12.99 },
    { id: "c3", name: "Pork", price: 11.99 },
  ].map((item) => <li key={item.id}>{item.name}</li>)} </ul>;
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>100.99</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
