import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { increment, decrement, removeFromCart, clearCart } from "../redux/slices/counter";

const Cart: React.FC = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg"
            >
              <div>
                <h2 className="font-semibold">{item.brand}</h2>
                <p className="text-gray-600">${item.price} / day</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decrement(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  ➖
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increment(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  ➕
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 font-semibold"
              >
                ✖
              </button>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg mt-6">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-4 bg-purple-700 text-white py-2 rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
