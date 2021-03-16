import { FoodsProps } from "../../pages/Dashboard/types";

export type FoodProps = {
  food: FoodsProps
  handleDelete: (id: number) => Promise<void>
  handleEditFood: (food: FoodsProps) => void
}


export type FoodStyledProps = {
  available: boolean
}
