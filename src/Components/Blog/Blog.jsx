import PropTypes from 'prop-types';
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmarks, handleAddMarkAsRead }) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='border-b-2 mb-10'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center mb-4'>
                    <img className='h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='font-semibold text-base text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div>
                        <span className='text-gray-500 font-medium text-xl'>{reading_time} min read</span>
                        <button onClick={ () => handleAddToBookmarks(blog)} className='text-gray-500 font-medium text-2xl ml-2'><BsBookmark></BsBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>

            {
                hashtags.map((hash, idx) => <span key={idx}><a className='text-gray-500 font-medium text-xl pr-2' href="" >#{hash}</a> </span>)
            }
            <br></br>
            <button onClick={ () => handleAddMarkAsRead(id, reading_time)} className='text-xl font-semibold text-violet-800 my-5 underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleAddMarkAsRead: PropTypes.func
}

export default Blog;