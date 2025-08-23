import BlogCard from './BlogCard'
import post1 from  "../assets/images/post__1.jpg"
import post2 from  "../assets/images/post__2.jpg"
import post3 from  "../assets/images/post__3.jpg"

const data = [
    {
        img: post1,
        title: "5 Superfoods to Boost Your Immunity This Season",
        date: "Aug 27, 2023",
        comment: 8,
    },
    {
        img: post2,
        title: "Behind the Scenes: How Your Order is Packed with Love",
        date: "Aug 25, 2023",
        comment: 1,
    },
    {
        img: post3,
        title: "Meal Planning Made Easy: Your Weekly Food Shopping List",
        date: "Aug 30, 2023",
        comment: 6,
    },
]

const BlogSection = () => {
  return (
    <div className="container pt-16">
        <h2 className='font-bold text-2xl'>Latest News</h2>
        <p className='text-gray-500'>
            Present posts in a best way to highlight interesting moments of your blog.
        </p>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
            {data.map((el) => (
                <BlogCard
                    key={el.date}
                    img={el.img}
                    title={el.title}
                    date={el.date}
                    comment={el.comment}
                />
            ))}
        </div>
    </div>
  )
}

export default BlogSection