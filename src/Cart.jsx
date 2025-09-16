import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import { calculateTotal } from "./discountUtils";
import { clearCart, increaseQty, decreaseQty, removeFromCart } from "./store";
import "./Cart.css";
import { useMemo } from "react";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const total = useMemo(() => calculateTotal(cartItems), [cartItems]);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1>
        <b>Your Cart 🛒</b>
      </h1>

      <button onClick={() => dispatch(clearCart())} className="btn btn-danger mb-3">
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🫤</p>
      ) : (
        <div className="cart-layout">
          {/* Left → Items */}
          <div className="cart-left">
            <CartItems
              cartItems={cartItems}
              onIncrease={(item) => dispatch(increaseQty(item))}
              onDecrease={(item) => dispatch(decreaseQty(item))}
              onRemove={(item) => dispatch(removeFromCart(item))}
            />
          </div>

          {/* Right → Summary */}
          <div className="cart-right">
            <CartSummary cartItems={cartItems} total={total} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
