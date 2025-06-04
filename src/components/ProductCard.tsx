import { AiFillStar, AiOutlineStar, AiOutlineShopping } from 'react-icons/ai';
/*import { useCartContext } from "../context/cartContext";
import { toast } from "react-hot-toast";*/

interface propsType {
    img: string;
    name: string;
    price: string;
}

const ProductCard: React.FC<propsType> = ({ img, name, price }) => {
    /*const { addToCart } = useCartContext();

    const addProductToCart = () => {
        toast.success("Added to Cart!");
        addToCart({ img, name, price });
    };*/

    return (
        <div className='border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform 
        rounded-lg relative'>
            <img src={img} alt={name} />

            <div className='space-y-2 relative p-4'></div>
        </div>
  )
}

export default ProductCard