const ProgressBar = ({ value }: { value: number }) => {
  const progress = Math.min(100, Math.max(0, value));

  return (
    <div className="border-text-dark h-2 w-full overflow-hidden rounded-full border bg-white">
      <div
        className="h-full bg-[#00cc99] transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
