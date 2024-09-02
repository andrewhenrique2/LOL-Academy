"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import ferro from "../../public/ferro.png";
import bronze from "../../public/bronze.png";
import prata from "../../public/prata.png";
import gold from "../../public/Ouro.png";
import platina from "../../public/Platina.png";
import diamante from "../../public/Diamante.png";	
const elos = [
    { src: ferro, alt: "Ferro", description: "Meu elo é Ferro" },
    { src: bronze, alt: "Bronze", description: "Meu elo é Bronze" },
    { src: prata, alt: "Prata", description: "Meu elo é  Prata" },
    { src: gold, alt: "Gold", description: "Meu elo é  Gold" },
    { src: platina, alt: "Platina", description: "Meu elo é  Platina" },
    { src: diamante, alt: "Diamante", description: "Meu elo é  Diamante" },
  ];
  
const Service = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center py-4">
      <div className="bg-background px-8 pt-10 text-center w-full">
        <h1 className="text-white p-1 text-2xl font-bold">Olá invocador!</h1>
        <h2 className="text-white p-1 text-xl">Selecione seu elo abaixo para continuar</h2> 
      </div>
      {elos.map((elo, index) => (
        <Card
          key={index}
          className="group border-none cursor-pointer flex flex-col items-center justify-center gap-4 p-4 bg-[#1a1b1f] rounded transition-transform transform hover:scale-105 hover:border hover:border-white hover:shadow-lg w-[190px] h-[300px] flex-shrink-0"
        >
          <div className="relative w-[150px] h-[150px] flex justify-center items-center">
            <Image
              src={elo.src}
              alt={elo.alt}
              width={150}
              height={150}
            />
          </div>
          <div className="text-white text-center">
            <h3 className="text-xl font-bold">{elo.alt}</h3>
            <p className="text-lg">{elo.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Service;
