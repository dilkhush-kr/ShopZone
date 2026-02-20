import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, totalPrice } = useCart();

  return (
    <div className="cart-item">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>₹ {item.price} x {item.quantity}</p>
            </div>
          ))}
          <h2 className="total">Total: ₹ {totalPrice}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
