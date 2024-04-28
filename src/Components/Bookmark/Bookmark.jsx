import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h2 className='text-lg font-semibold bg-white mx-8 my-4 p-5 rounded-xl'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes= {
    bookmark: PropTypes.object
}

export default Bookmark;