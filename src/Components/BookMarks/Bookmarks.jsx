import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readTime }) => {
    return (
        <div className="md:w-1/3 h-1/2 ">
            <h2 className='text-xl font-bold border-2 border-violet-600 py-5 px-12 bg-violet-100 rounded-lg text-violet-600'>Spent time on read : {readTime} min</h2>
            
            <div className=' bg-gray-200 rounded-xl pb-5'>
                <h2 className='text-2xl font-bold mx-8 my-8 pt-8'>Bookmarks Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTime: PropTypes.number
}

export default Bookmarks;

