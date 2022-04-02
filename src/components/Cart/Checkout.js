import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  value === "" ||
  value.trim().length === 0;
const isNotFiveChars = (value) => value.length !== 5;

const Checkout = (props) => {
  const [formIsValid,setFormIsValid] = useState(true)

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();

    const eneteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    if (
      isEmpty(eneteredName) ||
      isEmpty(enteredStreet) ||
      isEmpty(enteredPostal) ||
      isEmpty(enteredCity)
    ) {
        setFormIsValid(false);
      return;
    }
    if (isNotFiveChars(enteredPostal)) {
        setFormIsValid(false);
      return;
    }
    // submit order
    props.onConfirm({
        name: eneteredName,
        street: enteredStreet,
        postal: enteredPostal,
        city: enteredCity
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      {!formIsValid ? <p className={classes.error}>Please fill out the form</p> : null}
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
