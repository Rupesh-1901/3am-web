import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MapPin from "../../assets/MapPin.svg";

const FeaturedJobs = ({ arrFeaturedJob, setArrFeaturedJob }) => {
	return (
		<div className="vacanciesCover">
			{arrFeaturedJob?.map((job, ind) => (
				<div key={job?.id} className="job-box">
					<div className="job-header">
						<h3 className="job-title">{job.title}</h3>
						<div className="job-headerDIv">
							<span className={`job-type`}>{job.type}</span>
							<p className="salary">
								Salary: ${job.salaryLowerLimit} - ${job.salaryUpperLimit}
							</p>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<div className="company-details">
							<img src={job?.companyLogo} alt={job.companyName} className="company-logo" />
							<div>
								<p className="company-name">{job.companyName}</p>
								<p className="company-location">
									{" "}
									<img src={MapPin} alt="" />
									{job.companyLocation}
								</p>
							</div>
						</div>
						<div
							className="bookmark"
							onClick={() =>
								setArrFeaturedJob((prev) => {
									const arr = prev.map((item, index) =>
										index === ind ? { ...item, isBookmarked: !item.isBookmarked } : item
									);
									return arr;
								})
							}
						>
							<span>
								{job?.isBookmarked ? (
									<BookmarkIcon style={{ cursor: "pointer", fontSize: 30 }} />
								) : (
									<BookmarkBorderIcon style={{ cursor: "pointer", fontSize: 30 }} />
								)}
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default FeaturedJobs;
