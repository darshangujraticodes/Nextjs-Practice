import React from "react";

function Capitalize(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export default Capitalize;
