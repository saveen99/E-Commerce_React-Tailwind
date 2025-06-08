import BlogCard from './BlogCard'

const data = [
    {
        img: "/post__1.jpg",
        title: "5 Superfoods to Boost Your Immunity This Season",
        date: "Aug 27, 2023",
        comment: 8,
    },
    {
        img: "/post__2.jpg",
        title: "Behind the Scenes: How Your Order is Packed with Love",
        date: "Aug 25, 2023",
        comment: 1,
    },
    {
        img: "/post__3.jpg",
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