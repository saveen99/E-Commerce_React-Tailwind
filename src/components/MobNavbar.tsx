import { IoSearchSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";

const MobNavbar = ({setShowCart}: any) => {
  return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container p-8 lg:hidden">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl">
                    <img className="w-full h-[35px]" src="/logo1.png" alt="logo" />
                </h1>

                <div className="flex items-center gap-6">
                    <IoSearchSharp size={22}/>
                </div>

                <div className="flex gap-4 text-[22px]">
                    <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
                        <AiOutlineShoppingCart />
                        <CartCountBadge size="w-[20px] h-[20px]" />
                    </div>
                </div>

                <div className="flex justify-end items-center gap-6">
                    <IoIosMenu size={30} />
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default MobNavbar