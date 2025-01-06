"use client";
import React from "react";

export function Expandable({ children }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return isExpanded ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setIsExpanded(true)}>Reveal Content</button>
    </div>
  );
}
