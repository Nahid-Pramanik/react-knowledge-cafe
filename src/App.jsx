import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);


  const handleAddToBookmarks = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  const handleAddMarkAsRead = (id, time) => {
    const newTime = readTime + time;
    setReadTime(newTime);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <div className='p-3'>
        <Header></Header>

        <div className='md:flex max-w-7xl mx-auto gap-5'>
          <Blogs
            handleAddToBookmarks={handleAddToBookmarks}
            handleAddMarkAsRead={handleAddMarkAsRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readTime={readTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
