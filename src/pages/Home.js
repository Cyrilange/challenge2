import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="project-container">
      <i className="fa-solid fa-star"></i>
      <h2>How did we do ?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="stars">
        {[1, 2, 3, 4, 5].map((rating) => (
          <li key={rating} onClick={() => handleRatingClick(rating)}>
            {rating}
          </li>
        ))}
      </ul>

      <NavLink
        to={{
          pathname: "/Thank",
          search: `?selectedRating=${selectedRating}`,
        }}
      >
        <button className="navigation">SUBMIT</button>
      </NavLink>
    </div>
  );
};

export default Home;
