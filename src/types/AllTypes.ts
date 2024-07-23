import { ReactNode } from "react";

export type HomePageProps = {
  title: string;
  id: number;
  likes: number;
  cashback: string;
};
export type WrapperFunctionType = {
  className?: string;
  children: ReactNode;
};
