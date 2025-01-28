// import { Progress } from '@nextui-org/react';

interface DataProps {
  data: {
    name: string;
    value: number;
  };
}

const TechData = ({ data: { name } }: DataProps) => {
  return (
    <li className="relative">
      {/* <Progress
        aria-label={name}
        className="text-black"
        value={value}
        size="sm"
        showValueLabel={true}
        color={'success'}
      /> */}
      <span className="absolute top-0 right-2">{name}</span>
    </li>
  );
};

export default TechData;
