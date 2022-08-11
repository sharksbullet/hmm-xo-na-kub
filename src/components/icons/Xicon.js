import React from "react";

const Xicon = ({ color, size }) => {
  return (
    <div
      className={`icon ${color ? "icon-" + color : "icon-blue"} ${
        size && "icon-" + size
      }`}
    >
     <svg 
    width="50px" 
    height="50px" 
    viewBox="0 0 24 24">
    <path d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"/>
    <path fill-rule="evenodd" 
    d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"/>
</svg>
    </div>
  );
};

export default Xicon;
