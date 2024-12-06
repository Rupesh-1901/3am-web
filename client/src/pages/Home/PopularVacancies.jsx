import React from "react";

const PopularVacancies = ({ arrVacancies }) => {
	return (
		<div className="vacanciesCover">
			{arrVacancies?.map((item, ind) => (
				<div className="vacanciesBox" key={item?.id}>
					<div className="vacanciesName"> {item?.name}</div>
					<div className="vacanciesNumber">{item?.openPositions}</div>
				</div>
			))}
		</div>
	);
};

export default PopularVacancies;
