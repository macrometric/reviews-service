import React from "react";
const { average } = require("../helpers.js");

const ReviewsSummary = ({ reviews }) => (
  <div className="summary_box" style={summaryBox}>
    <div className="ratingBox">
      <div style={rating}>
        <p style={ratingText}> {average(reviews).toFixed(1)}</p>
      </div>
      <div style={maxRating}>out of 5</div>
    </div>
    <p>{reviews.length} reviews</p>
  </div>
);

const summaryBox = {
  display: "flex",
  flexGrow: "1",
  flexBasis: "0",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRight: "1px solid #cccccc",
  color: "#f96302"
};

const rating = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "115px",
  height: "75px",
  border: "2px solid #797979"
};

const ratingText = {
  fontSize: "40px",
  color: "#f96302",
  fontWeight: "bold"
};

const maxRating = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  fontSize: "18px",
  color: "white",
  width: "119px",
  height: "30px",
  backgroundColor: "#797979"
};

export default ReviewsSummary;
