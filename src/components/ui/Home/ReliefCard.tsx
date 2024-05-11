import { Link } from "react-router-dom";
import { ReliefItem } from "../../../types/reliefGood.type";

const ReliefCard = ({ item }: { item: ReliefItem }) => {
  return (
    <>
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img className="w-full object-cover h-64" src={item.image} alt="" />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{item.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{item.category}</p>
          <p className="text-[#575A6E] text-sm mb-2">Amount: {item.amount}</p>
          <Link
            className="bg-green-400 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            to={`/relief-goods/${item._id}`}
          >
            <span>Details</span>
          </Link>
        </figcaption>
      </figure>
    </>
  );
};

export default ReliefCard;
