import { BiX } from "react-icons/bi";
import { useGetSingleSupplyQuery } from "../../redux/features/supply/supplyApi";
import { ModalProps } from "../../types/reliefGood.type";
import CreateSupplyForm from "./AuthForm/CreateSupplyForm";

const Modal = ({ supplyId, onClose, isUpdate }: ModalProps) => {
  const { data, isLoading } = useGetSingleSupplyQuery(supplyId);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl  overflow-hidden">
          <BiX
            onClick={(event) => onClose(event)}
            size={32}
            className="text-red-600 absolute top-5 right-10 cursor-pointer"
          />
          <CreateSupplyForm
            supply={data?.result}
            isUpdate={isUpdate}
            onClose={onClose}
          ></CreateSupplyForm>
        </div>
      </div>
    </div>
  );
};

export default Modal;
