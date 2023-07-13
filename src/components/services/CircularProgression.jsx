"use client";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const CircularProgression = ({ serviceTab, index }) => {
  const [percentages, setPercentages] = useState([0, 0, 0]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const updatedPercentages = percentages.map((percentage, index) => {
              if (percentage < serviceTab[index].value) {
                return percentage + 1;
              }
              return percentage;
            });
            setPercentages(updatedPercentages);
          }
        });
      },
      { threshold: 0 } // Change the threshold value as per your requirements
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [percentages, serviceTab]);
  return (
    <div ref={containerRef}>
      {" "}
      <CircularProgressbar
        value={percentages[index]}
        text={`${percentages[index]}%`}
      />
    </div>
  );
};

export default CircularProgression;
