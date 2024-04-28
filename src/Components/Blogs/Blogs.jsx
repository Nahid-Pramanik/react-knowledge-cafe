import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmarks, handleAddMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( ()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    return (
        <div className="md:w-2/3">

            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}
                    handleAddMarkAsRead={handleAddMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleAddMarkAsRead: PropTypes.func
}

export default Blogs;