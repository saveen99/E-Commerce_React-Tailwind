interface propsType {
    img: string;
    title: string;
    comment: number;
    date: string;
}

const BlogCard: React.FC<propsType> = ({ img, title, date, comment }) => {
  return (
    <div>BlogCard</div>
  )
}

export default BlogCard