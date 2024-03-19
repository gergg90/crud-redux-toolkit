import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { AppDistpach, RootState } from "../store/index.ts";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDistpach: () => AppDistpach = useDispatch;
