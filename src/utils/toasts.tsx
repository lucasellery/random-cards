import { toast } from "react-toastify";

type InfoMessageProps = {
  newCardsCounter: number
};

export const sucessMessage = () => toast.success(`Parabéns, você alcançou o limite de cartas! 👏`, {
  position: "top-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

export const infoMessage = ({ newCardsCounter }: InfoMessageProps) =>
  toast.info(`Você puxou uma carta! ${Math.abs(newCardsCounter - 2)} cartas restantes.`, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
