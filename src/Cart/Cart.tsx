import CartItem from "../CartItem/CartItem";
// Styles
import { Wrapper } from "./Cart.styles";
// Types
import { CartItemType } from "../App";
import Button from "@material-ui/core/Button";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem 
        key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        />
      ))}
      <br />
      <p className="total">Total: '' </p>
      <p className="totalTax">Total Tax: </p>
      <hr />
      <Button className="buy" type='submit'>Buy</Button>
    </Wrapper>
  );
};


export default  Cart;