import { ButtonProps } from "@/interfaces/Button";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
    return (
        <button className={`bg-[#1a88d1] px-4 h-[50px] py-2 m-4 text-sm ${styles}`}>
            {title}
        </button>
    )
}
export default Button;