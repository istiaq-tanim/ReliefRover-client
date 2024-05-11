import { Link } from "react-router-dom";

import { useGetGoodsQuery } from "../../../redux/features/relief-goods/reliefGoodsApi";
import { IReliefItem } from "../../../types/reliefGood.type";
import Container from "../Container";
import Loading from "../Loading";
import ReliefCard from "./ReliefCard";

const ReliefGoods = () => {
  const { data, isLoading } = useGetGoodsQuery("");
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center items-center h-screen lg:w-[1280px] mx-auto">
        <Loading></Loading>;
      </div>
    );
  } else {
    content = data?.result
      .slice(0, 6)
      .map((item: IReliefItem) => <ReliefCard item={item}></ReliefCard>);
  }
  return (
    <Container>
      <div className="text-center my-10 text-2xl font-bold">
        <h3 className="underline">Relief Goods</h3>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">{content}</div>
      <div className="text-center">
        <Link to="/relief-goods">
          <button className="btn btn-outline border-t-0 border-x-0 my-10 border-b-4 btn-success">
            View ALL
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default ReliefGoods;
