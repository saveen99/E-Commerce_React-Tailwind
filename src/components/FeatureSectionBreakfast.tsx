import ProductCard from "./ProductCard";
import product1 from "../assets/images/product__5.jpg";
import product2 from "../assets/images/product__2.jpg";
import product3 from "../assets/images/product__3.jpg";
import product4 from "../assets/images/product__4.jpg";
import feature from "../assets/images/feature__5.jpg";

const data = [
    { id: 0, img: product1, name: "Fresh Tomato", price: "$400" },
    { id: 1, img: product2, name: "Crunchy Crisps", price: "$300" },
    { id: 2, img: product3, name: "Jewel Cranberries", price: "$200" },
    { id: 3, img: product4, name: "Almond Organic", price: "$100" },
];

const FeatureSectionBreakfast = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
                <p className="text-gray-600 mt-2">Buy best quality breakfast online from big-basket stop near you.</p>
            </div>

            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="feature_btn">Eggs & Dairy</button>
                <button className="text-gray-600 hover:text-accent">Pizza</button>
                <button className="text-gray-600 hover:text-accent">Snacks</button>
            </div>

        </div>

        <div className="grid xxs:grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img className="w-full h-full object-cover" src={feature} alt="banner" />
            </div>
            {data.map((el) => (
                <ProductCard 
                    key = {el.id}
                    img = {el.img}
                    name = {el.name}
                    price = {el.price}
                />
            ))}
        </div>

    </div>
  )
}

export default FeatureSectionBreakfast