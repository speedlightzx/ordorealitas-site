import { ReactNode } from "react";

interface ElementSection {
    children: ReactNode,
    morte?: boolean 
}

export default function ElementSection({ children, morte }: ElementSection) {
    return (
      <section className={`w-full items-center flex mt-10 p-3 ${morte ? "justify-end" : ""}`}>
        {children}
      </section>
    )
}