import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariants;
}

export const Button: FC<Props> = ({ variant = "primary", ...props }) => (
  <button {...props} className={`button button--${variant}`} />
);
