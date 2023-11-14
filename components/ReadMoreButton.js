function ReadMoreButton({ onClick, isFullPostVisible }) {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-200 ease-in-out"
      >
        {isFullPostVisible ? 'Read Less' : 'Read More'}
      </button>
    );
  }
  
  export default ReadMoreButton;