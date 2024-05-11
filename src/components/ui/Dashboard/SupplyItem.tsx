import { useState } from "react";
import { FaEdit, FaPlusSquare, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useDeleteSupplyMutation } from "../../../redux/features/supply/supplyApi";

import { ISupplyItem } from "../../../types/reliefGood.type";
import Modal from "../Modal";
const SupplyItem = ({ item }: { item: ISupplyItem }) => {
  const [deleteSupply] = useDeleteSupplyMutation();
  const [editModal, setShowEditModal] = useState(false);
  const [editSupplyId, setEditSupplyId] = useState<string | null>(null);
  const handleDelete = (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await deleteSupply(id);
          if (response.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <tr className="border-b border-[#2E3443] text-center [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          <div>{item.title}</div>
        </td>
        <td>
          <div>{item.category}</div>
        </td>
        <td>
          <div>{item.amount}</div>
        </td>

        <td>
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={() => handleDelete(item._id)}
              className="text-red-500 cursor-pointer"
            >
              <FaRegTrashAlt size={20} />
            </button>
            <button
              onClick={() => {
                setShowEditModal(true);
                setEditSupplyId(item?._id);
              }}
              className="text-blue-500 cursor-pointer"
            >
              <FaEdit size={20}></FaEdit>
            </button>
            <Link to="/dashboard/create-supply">
              <button className="text-green-500 cursor-pointer">
                <FaPlusSquare size={20}></FaPlusSquare>
              </button>
            </Link>
          </div>
        </td>
      </tr>
      {editModal && (
        <Modal
          supplyId={editSupplyId}
          onClose={() => setShowEditModal(false)}
          isUpdate={true}
        ></Modal>
      )}
    </>
  );
};

export default SupplyItem;
