import React from "react";
import StarRatings from "react-star-ratings";
export const StarRatingComp = (props) => {
  const { field, form } = props;
  const onChange = (newRating) => {
    form.setFieldValue(field.name, newRating);
  };
  return (
    <StarRatings
      rating={field?.value}
      starRatedColor="var(--primary)"
      changeRating={onChange}
      numberOfStars={5}
      name={field.name}
      starHoverColor="var(--primary)"
      starDimension="35px"
    />
  );
};
export default StarRatingComp;
