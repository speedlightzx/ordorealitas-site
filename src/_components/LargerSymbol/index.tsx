import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import Link from "next/link";

export default function LargerSymbol() {
    return (
      <div className="flex justify-center items-center w-full relative">

        <img src="maior.png" alt="simbolo maior" 
        className="max-w-110 max-h-110 sm:max-w-160 sm:max-h-160 simboloMaior"/>

        <div className="absolute top-1/2 flex">
          <Link
          target="_blank"
          href="https://discord.com/api/oauth2/authorize?client_id=1042204545012473926&permissions=277025516545&scope=bot%20applications.commands"
          className="botaoSimboloMaior border-2 rounded-md p-2.5 max-h-[10vh] text-white bg-purple-500 border-white cursor-pointer transition duration-200 hover:bg-purple-700 hover:underline">
            
            <GradientText
                colors={["#61dafbaa", "#FFD700", "#7F00FF", "#ff0000", "#000000"]}
                animationSpeed={3}
                showBorder={false}>
                Adicionar ao Servidor
            </GradientText>

          </Link>
        </div>

      </div>   
    )
}