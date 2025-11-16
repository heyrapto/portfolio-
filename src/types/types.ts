export interface ButtonProps {
    buttonText: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
