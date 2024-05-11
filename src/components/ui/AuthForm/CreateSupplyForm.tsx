import { MouseEventHandler } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  useCreateSupplyMutation,
  useUpdateSupplyMutation,
} from "../../../redux/features/supply/supplyApi";
import { ISupplyItem } from "../../../types/reliefGood.type";

type Inputs = {
  title: string;
  category: string;
  amount: string;
  description: string;
  image: string;
};
const CreateSupplyForm = ({
  supply,
  isUpdate,
  onClose,
}: {
  supply?: ISupplyItem;
  isUpdate?: boolean;
  onClose?: MouseEventHandler<SVGElement>;
}) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [createSupply] = useCreateSupplyMutation();
  const [updateSupply] = useUpdateSupplyMutation();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { title, category, amount, description, image } = data;
    const item = {
      title,
      category,
      amount: parseInt(amount),
      description,
      image,
    };
    if (isUpdate) {
      const response = await updateSupply({ id: supply?._id, item });
      if (response) {
        toast.success("Successfully Supply Updated!");
      }
    } else {
      const response = await createSupply(item);
      if (response) {
        toast.success("Successfully Supply Created!");
      }
    }
    onClose();
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#e3e0e0] mt-10">
      <div className="form-control w-full px-5 pt-5">
        <label className="label">
          <span className="label-text font-medium text-lg">Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          defaultValue={supply?.title}
          {...register("title", { required: true })}
          className="input input-bordered w-full"
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="form-control w-full px-5">
          <label className="label">
            <span className="label-text font-medium text-lg">Category</span>
          </label>
          <select
            defaultValue={supply?.category}
            className="select select-bordered"
            {...register("category", { required: true })}
          >
            <option disabled>Select one</option>
            <option>Food Supplies</option>
            <option>Shelter Kits</option>
            <option>Clothing</option>
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label">
            <span className="label-text font-medium text-lg">Amount</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            defaultValue={supply?.amount}
            {...register("amount", { required: true })}
            className="input input-bordered w-full px-2"
          />
        </div>
      </div>

      <div className="form-control px-5">
        <label className="label">
          <span className="label-text font-medium text-lg">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          defaultValue={supply?.description}
          {...register("description", { required: true })}
          placeholder="Description"
        ></textarea>
      </div>

      <div className="form-control w-full px-5">
        <label className="label">
          <span className="label-text font-medium text-lg">Image URL</span>
        </label>
        <input
          type="text"
          defaultValue={supply?.image}
          {...register("image", { required: true })}
          className="file-input file-input-bordered w-full"
        />
      </div>
      <input className="m-5 btn bg-green-300" type="submit" value="Submit" />
    </form>
  );
};

export default CreateSupplyForm;
