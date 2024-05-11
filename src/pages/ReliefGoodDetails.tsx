import { Link, useParams } from "react-router-dom";
import Container from "../components/ui/Container";
import Loading from "../components/ui/Loading";
import { useGetGoodDetailsQuery } from "../redux/features/relief-goods/reliefGoodsApi";

const ReliefGoodDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetGoodDetailsQuery(id);
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center items-center h-screen lg:w-[1280px] mx-auto">
        <Loading></Loading>
      </div>
    );
  } else {
    content = (
      <section className="mt-10">
        <div>
          <img
            className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
            src={data?.result.image}
            alt=""
          />
        </div>

        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <img src={data?.result.image} alt="" />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-800 text-2xl">
              {data?.result.title}
            </h2>
            <p className="my-2 text-slate-800 italic">
              {data?.result.description}
            </p>
            <ul className="text-slate-800 space-y-2 my-8">
              <li>Category : {data?.result.category}</li>
              <li>Amount : {data?.result.amount}</li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <Link to="/dashboard">
              <button className="py-2 w-full bg-blue-500 font-medium text-slate-800 rounded-md">
                Donate
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return <Container>{content}</Container>;
};

export default ReliefGoodDetails;
