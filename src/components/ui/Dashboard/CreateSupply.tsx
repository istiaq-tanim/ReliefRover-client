import CreateSupplyForm from "../AuthForm/CreateSupplyForm";

const CreateSupply = () => {
  return (
    <div className="w-full lg:px-10 mt-5">
      <h3 className="text-center text-3xl font-bold">Create Supply</h3>
      <CreateSupplyForm></CreateSupplyForm>
    </div>
  );
};

export default CreateSupply;
