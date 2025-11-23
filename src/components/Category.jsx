import "./Category.css";

const Category = ({ category, images }) => {
  return (
    <div className="Element">
      <h2>{category}</h2>
      <div className="allMovies">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`${category} ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Category;
