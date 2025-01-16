import { ButtonProps } from "../types/types.ts"

export const Button = ({ name }: ButtonProps) => {
    return(
        <button className={``}>{name}</button>
    )
}