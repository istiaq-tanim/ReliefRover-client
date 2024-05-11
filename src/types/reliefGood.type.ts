
import { MouseEventHandler } from "react";

export interface IReliefItem {
      _id: string;
      title: string;
      category: string;
      image: string;
      description: string;
      amount: string;
}
export interface ISupplyItem {
      _id: string;
      title: string;
      category: string;
      image: string;
      description: string;
      amount: string;
}
export interface ModalProps {
      supplyId: string | null;
      onClose: MouseEventHandler<SVGElement>;
      isUpdate: boolean;
}


