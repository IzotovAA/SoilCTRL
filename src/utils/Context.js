import { createContext, useContext } from "react";

export const FormContext = createContext();

export default function useFormContext() {
  return useContext(FormContext);
}
