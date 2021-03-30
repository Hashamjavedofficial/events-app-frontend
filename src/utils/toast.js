import { toast } from "react-toastify";

export const success = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const error = (message) => {
  toast.error(message, { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 });
};
