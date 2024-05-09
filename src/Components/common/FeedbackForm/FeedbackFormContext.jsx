import { useState } from "react";
import { FormContext } from "../../../utils/Context";

export default function FeedbackFormProvider({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <FormContext.Provider value={{ open: open, handleOpen, handleClose }}>
      {children}
    </FormContext.Provider>
  );
}
