import Image from "next/image";

interface PerfumeTypeProps {
  image: string;
  name: string;
  price: string;
}

export default function PerfumeType({ image, name, price }: PerfumeTypeProps) {
  return (
    <div className="bg-gray-100 border border-gray-300 shadow-lg rounded-lg p-4 m-3 text-center transition-transform duration-200 hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="relative h-60 w-full">
        <Image 
          src={image}
          alt={name}
          layout="fill"  
          objectFit="cover" 
          className="rounded-lg" 
        />
      </div>
      <h2 className="mt-2 font-bold text-xl">{name}</h2>
      <p className="text-lg">{price}</p>
    </div>
  );
}