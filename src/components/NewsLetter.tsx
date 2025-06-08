import { LuMailOpen } from "react-icons/lu"

const NewsLetter = () => {
  return (
    <div className="bg-accent-dark mt-16 ">
        <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
            {/* Left */}
            <div className="flex items-center gap-4">
                <LuMailOpen className="text-[60px]" />
                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                    Sign up To Our Newsletters
                    </h3>
                    <p className="text-sm sm:text-base">
                    ...and receive $20 coupon for first shopping
                    </p>
                </div>
            </div>
            {/* Right */}
            <div className="w-full max-w-[500px] relative">
                <input className="py-4 px-6 w-full rounded-full bg-white text-black placeholder:text-gray-500" type="text" placeholder="Your Email Address..." />
                <button className="bg-accent-dark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4
                rounded-full hover:bg-accent text-white">Subscribe!</button>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter