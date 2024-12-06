import React, { useEffect, useRef } from "react";

function OutsideClickHandler({ onOutsideClick, ...props }) {
	const wrapperRef = useRef(null);
	const handleClickOutside = (event) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			onOutsideClick(props.id ?? 0);
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [wrapperRef]);

	return (
		<div className={props.class} ref={wrapperRef} style={props.style}>
			{props.children}
		</div>
	);
}

export default OutsideClickHandler;
