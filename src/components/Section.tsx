import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
    return(
        <section className="flex flex-col items-center justify-center main">
            {children}
        </section>
    )
}