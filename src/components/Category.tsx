import CategoryCard from "./CategoryCard";
import category1 from  "../assets/images/category__1.jpg"
import category2 from  "../assets/images/category__2.jpg"
import category3 from  "../assets/images/category__3.jpg"
import category4 from  "../assets/images/category__4.jpg"
import category5 from  "../assets/images/category__5.jpg"
import category6 from  "../assets/images/category__6.png"
import category7 from  "../assets/images/category__7.jpg"
import category8 from  "../assets/images/category__8.jpg"

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: category1,
    },
    {
        id: 1,
        name: "Fresh Vegs",
        count: "8 Products",
        img: category2,
    },
    {
        id: 2,
        name: "Chocolates",
        count: "10 Products",
        img: category3,
    },
    {
        id: 3,
        name: "Bread & Bakery",
        count: "12 Products",
        img: category4,
    },
    {
        id: 4,
        name: "Fishes & Seafoods",
        count: "10 Products",
        img: category5,
    },
    {
        id: 5,
        name: "Eggs & Dairy",
        count: "7 Products",
        img: category6,
    },
    {
        id: 6,
        name: "Soft Drinks",
        count: "5 Products",
        img: category7,
    },
    {
        id: 7,
        name: "Biscuits & Cookies",
        count: "8 Products",
        img: category8,
    },
];

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map(el => 
                <CategoryCard 
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    count={el.count}
                />
            )}
        </div>
    </div>
  )
}

export default Category