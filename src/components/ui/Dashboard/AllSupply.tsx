import { useGetSupplyQuery } from "../../../redux/features/supply/supplyApi";
import { ISupplyItem } from "../../../types/reliefGood.type";
import Loading from "../Loading";
import SupplyItem from "./SupplyItem";

const AllSupply = () => {
  const { data, isLoading } = useGetSupplyQuery("");
  let content;
  if (isLoading) {
    content = <Loading></Loading>;
  } else if (data?.result.length == 0) {
    content = <p className="text-center">There is no Item</p>;
  } else {
    content = data?.result.map((item: ISupplyItem) => (
      <SupplyItem key={item._id} item={item}></SupplyItem>
    ));
  }
  return (
    <div className="overflow-auto">
      <h3 className="text-center text-3xl font-bold my-5">All Supply</h3>
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-2 pb-8 text-sm  font-semibold capitalize w-[200px]">
              {" "}
              Title{" "}
            </th>
            <th className="p-2 pb-8 text-sm font-semibold capitalize md:w-[200px]">
              {" "}
              Category{" "}
            </th>
            <th className="p-2 pb-8 text-sm font-semibold capitalize md:w-[200px]">
              {" "}
              Amount{" "}
            </th>
            <th className="p-2 pb-8 text-sm font-semibold capitalize md:w-[200px]">
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default AllSupply;
