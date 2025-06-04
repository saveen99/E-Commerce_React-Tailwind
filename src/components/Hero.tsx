import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
                <img className="w-full h-full object-cover rounded-lg" src="/hero__1.jpg" alt="hero image" />

                <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                  <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
                  <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">Dried Fruits Best Healthy</h2>
                  <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
                  <div className="font-medium text-red-700 text-2xl sm:text-4xl pb-4 sm:pb-8">$18.36</div>
                  <div className="bg-accent-dark hover:bg-accent text-white rounded-full w-fit flex items-center
                  gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                    Shop Now <BsArrowRight />
                  </div>
                </div>
            </div>

            <div className="relative">
              <img className="h-full w-full object-cover rounded-lg" src="/hero__2.jpg" alt="hero image" />
              <div className="absolute max-w-[470px] sm:ml-16 xl:ml-10 2xl:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-6xl xl:text-2xl 2xl:text-3xl font-bold">Best Yummy Pizza</h2>
                <p className="text-gray-500 text-xl pt-4">Starting At</p>
                <div className="font-medium text-red-700 text-2xl sm:text-4xl pb-8">$25</div>
                <div className="bg-accent hover:bg-accent-dark text-white rounded-full w-fit flex items-center
                gap-4 px-4 py-2 text-[14px] cursor-pointer">
                  Shop Now <BsArrowRight />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img className="h-full w-full object-cover rounded-lg" src="/hero__3.jpg" alt="hero image" />
              <div className="absolute max-w-[470px] sm:ml-16 xl:ml-10 2xl:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-6xl xl:text-2xl 2xl:text-3xl font-bold">Best Yummy Chips</h2>
                <p className="text-gray-500 text-xl pt-4">Starting At</p>
                <div className="font-medium text-red-700 text-2xl sm:text-4xl pb-8">$10</div>
                <div className="bg-accent hover:bg-accent-dark text-white rounded-full w-fit flex items-center
                gap-4 px-4 py-2 text-[14px] cursor-pointer">
                  Shop Now <BsArrowRight />
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Hero