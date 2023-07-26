const LineGradient = ({ width = "w-full", className }) => {
  return (
    <div className={`h-0.5 my-12 ${width} ${className} bg-gradient-rainblue`} />
  );
};

export default LineGradient;
