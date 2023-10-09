import React from "react";

export default function MaxWidthWrapper({
  children,
  containerClass = "container",
}) {
  return <div className={`${containerClass} mx-auto`}>{children}</div>;
}
