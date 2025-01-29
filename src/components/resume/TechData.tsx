import ProgressBar from "../ui/ProgressBar";

interface DataProps {
  data: {
    name: string;
    value: number;
  };
}

const TechData = ({ data: { name, value } }: DataProps) => {
  return (
    <li className="space-y-2">
      <div className="flex flex-row justify-between">
        <span className="">{value}%</span>
        <span className="">{name}</span>
      </div>
      <ProgressBar value={value} />
    </li>
  );
};

export default TechData;
