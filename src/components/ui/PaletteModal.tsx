import { paletteColors } from "../..";

const PaletteModal: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 bg-[#434343] p-4">
      <span className="text-center text-[#00cc99]">Select Color</span>
      <ul className="grid grid-cols-3 gap-4">
        {paletteColors.map((color) => (
          <Colors color={color} key={color} />
        ))}
      </ul>
    </div>
  );
};

export default PaletteModal;

const Colors = ({ color }: { color: string }) => {
  return <li className={`bg-${color} size-6 cursor-pointer rounded-full`}></li>;
};
