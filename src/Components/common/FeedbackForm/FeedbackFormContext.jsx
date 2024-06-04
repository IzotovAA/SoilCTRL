import { useState } from "react";
import { FormContext } from "../../../utils/Context";
import submitForm from "../../../utils/submitForm";

export default function FeedbackFormProvider({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <FormContext.Provider
      value={{ open: open, handleOpen, handleClose, submitForm }}
    >
      {children}
    </FormContext.Provider>
  );
}
