"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  value?: number;
}

export const WidgetGrid = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap justify-center p-2">
      <SimpleWidget
        label="Contador"
        title={count.toString()}
        subtitle="Productos agregados"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
