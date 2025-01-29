interface ModalProps {
  text: string;
}

const Modal: React.FC<ModalProps> = ({ text }) => {
  return (
    // <div className="h-screen w-screen">
    <div className="bg-text-dark flex max-w-3xl flex-row rounded-md p-2 md:p-6">
      {text}
    </div>
    // </div>
  );
};

export default Modal;
