import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useCartContext } from "../context/cartContext";

const Cart = ({ setShowCart }: any) => {
  return (
    <div className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
    onClick={() => setShowCart(false)}>
        <div></div>
    </div>

  )
}

export default Cart