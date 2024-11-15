import PerfumeType from "@/components/perfume";

export default function PerfumeItem() {
  return (
    <div className="p-5 md:p-10 h-auto">
      <h1 className="text-center mb-5 font-bold text-4xl">Perfume Item</h1>
      <div className="flex flex-wrap justify-center md:justify-around">
        <PerfumeType
          image="/perf-1.png"
          name="Aura"
          price="Rs: 3999" 
        />
        <PerfumeType
          image="/perf-2.png"
          name="Luxe"
          price="Rs: 2499" 
        />
        <PerfumeType
          image="/perf-3.png"
          name="Vibe"
          price="Rs: 2199" 
        />
        <PerfumeType
          image="/perf-4.png"
          name="Zephyr"
          price="Rs: 3499" 
        />
        <PerfumeType
          image="/perf-5.png"
          name="Pulse"
          price="Rs: 1999" 
        />
        <PerfumeType
          image="/perfume-6.png"
          name="Solace"
          price="Rs: 4499" 
        />
      </div>
    </div>
  );
}