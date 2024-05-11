import Container from "../components/ui/Container";
import ReliefCard from "../components/ui/Home/ReliefCard";
import Loading from "../components/ui/Loading";
import { useGetGoodsQuery } from "../redux/features/relief-goods/reliefGoodsApi";
import { IReliefItem } from "../types/reliefGood.type";

const ReliefGoods = () => {
  const { data, isLoading } = useGetGoodsQuery("");
  let content;
  if (isLoading) {
    content = <Loading></Loading>;
  } else {
    content = data?.result.map((item: IReliefItem) => (
      <ReliefCard item={item}></ReliefCard>
    ));
  }
  return (
    <Container>
      <div className="text-center my-10 text-2xl font-bold">
        <h3 className="underline">Relief Goods</h3>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">{content}</div>
    </Container>
  );
};

export default ReliefGoods;
