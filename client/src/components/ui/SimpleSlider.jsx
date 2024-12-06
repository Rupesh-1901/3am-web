import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarousalNext from "../../assets/CarousalNext.svg";
import CarousalPrev from "../../assets/CarousalPrev.svg";
import starImg from "../../assets/starImg.svg";
import DPImg from "../../assets/DPImg.svg";
import colonQuote from "../../assets/colonQuote.svg";

export default function SimpleSlider({ sliderProp }) {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<div className={`slider-containerdefault  ${sliderProp}`} style={{ position: "relative" }}>
				<img className="CarousalNext" src={CarousalNext} alt="" />
				<img className="CarousalPrev" src={CarousalPrev} alt="" />
				<Slider {...settings}>
					<div>
						<div className="testimonial-card">
							{/* Star Rating */}
							<div className="stars">
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
							</div>

							{/* Testimonial Text */}
							<p className="testimonial-text">
								"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus,
								in faucibus est."
							</p>

							{/* User Info */}
							<div className="user-infocover">
								<div className="user-info">
									<img
										src={DPImg} // Replace with actual image path
										alt="Robert Fox"
										className="user-image"
									/>
									<div style={{ marginLeft: "10px" }}>
										<p className="user-name">Robert Fox</p>
										<p className="user-title">UI/UX Designer</p>
									</div>
								</div>
								<div className="quote-icon">
									<span>
										<img src={colonQuote} alt="" />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="testimonial-card">
							{/* Star Rating */}
							<div className="stars">
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
							</div>

							{/* Testimonial Text */}
							<p className="testimonial-text">
								"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus,
								in faucibus est."
							</p>

							{/* User Info */}
							<div className="user-infocover">
								<div className="user-info">
									<img
										src={DPImg} // Replace with actual image path
										alt="Robert Fox"
										className="user-image"
									/>
									<div style={{ marginLeft: "10px" }}>
										<p className="user-name">Robert Fox</p>
										<p className="user-title">UI/UX Designer</p>
									</div>
								</div>
								<div className="quote-icon">
									<span>
										<img src={colonQuote} alt="" />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="testimonial-card">
							{/* Star Rating */}
							<div className="stars">
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
							</div>

							{/* Testimonial Text */}
							<p className="testimonial-text">
								"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus,
								in faucibus est."
							</p>

							{/* User Info */}
							<div className="user-infocover">
								<div className="user-info">
									<img
										src={DPImg} // Replace with actual image path
										alt="Robert Fox"
										className="user-image"
									/>
									<div style={{ marginLeft: "10px" }}>
										<p className="user-name">Robert Fox</p>
										<p className="user-title">UI/UX Designer</p>
									</div>
								</div>
								<div className="quote-icon">
									<span>
										<img src={colonQuote} alt="" />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="testimonial-card">
							{/* Star Rating */}
							<div className="stars">
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
							</div>

							{/* Testimonial Text */}
							<p className="testimonial-text">
								"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus,
								in faucibus est."
							</p>

							{/* User Info */}
							<div className="user-infocover">
								<div className="user-info">
									<img
										src={DPImg} // Replace with actual image path
										alt="Robert Fox"
										className="user-image"
									/>
									<div style={{ marginLeft: "10px" }}>
										<p className="user-name">Robert Fox</p>
										<p className="user-title">UI/UX Designer</p>
									</div>
								</div>
								<div className="quote-icon">
									<span>
										<img src={colonQuote} alt="" />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="testimonial-card">
							{/* Star Rating */}
							<div className="stars">
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
							</div>

							{/* Testimonial Text */}
							<p className="testimonial-text">
								"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus,
								in faucibus est."
							</p>

							{/* User Info */}
							<div className="user-infocover">
								<div className="user-info">
									<img
										src={DPImg} // Replace with actual image path
										alt="Robert Fox"
										className="user-image"
									/>
									<div style={{ marginLeft: "10px" }}>
										<p className="user-name">Robert Fox</p>
										<p className="user-title">UI/UX Designer</p>
									</div>
								</div>
								<div className="quote-icon">
									<span>
										<img src={colonQuote} alt="" />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="testimonial-card">
							{/* Star Rating */}
							<div className="stars">
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
							</div>

							{/* Testimonial Text */}
							<p className="testimonial-text">
								"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus,
								in faucibus est."
							</p>

							{/* User Info */}
							<div className="user-infocover">
								<div className="user-info">
									<img
										src={DPImg} // Replace with actual image path
										alt="Robert Fox"
										className="user-image"
									/>
									<div style={{ marginLeft: "10px" }}>
										<p className="user-name">Robert Fox</p>
										<p className="user-title">UI/UX Designer</p>
									</div>
								</div>
								<div className="quote-icon">
									<span>
										<img src={colonQuote} alt="" />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="testimonial-card">
							{/* Star Rating */}
							<div className="stars">
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
							</div>

							{/* Testimonial Text */}
							<p className="testimonial-text">
								"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus,
								in faucibus est."
							</p>

							{/* User Info */}
							<div className="user-infocover">
								<div className="user-info">
									<img
										src={DPImg} // Replace with actual image path
										alt="Robert Fox"
										className="user-image"
									/>
									<div style={{ marginLeft: "10px" }}>
										<p className="user-name">Robert Fox</p>
										<p className="user-title">UI/UX Designer</p>
									</div>
								</div>
								<div className="quote-icon">
									<span>
										<img src={colonQuote} alt="" />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="testimonial-card">
							{/* Star Rating */}
							<div className="stars">
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
								<img style={{ height: "17px" }} src={starImg} alt="" />
							</div>

							{/* Testimonial Text */}
							<p className="testimonial-text">
								"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus,
								in faucibus est."
							</p>

							{/* User Info */}
							<div className="user-infocover">
								<div className="user-info">
									<img
										src={DPImg} // Replace with actual image path
										alt="Robert Fox"
										className="user-image"
									/>
									<div style={{ marginLeft: "10px" }}>
										<p className="user-name">Robert Fox</p>
										<p className="user-title">UI/UX Designer</p>
									</div>
								</div>
								<div className="quote-icon">
									<span>
										<img src={colonQuote} alt="" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
}
