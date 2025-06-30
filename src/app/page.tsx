import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col bg-white justify-center p-4 mb-12 mt-12">
      <div className="flex flex-col items-center mb-5">
        <h1 className="text-3xl font-bold text-center mb-4">Scents Boutique</h1>
        <p className="text-lg text-center">Your destination for luxurious fragrances.</p>
      </div>

      <main className="flex flex-col-reverse md:flex-row items-center justify-around">
        <section className="text-lg w-full max-w-md md:w-96 p-4">
          <p>
            “Signature” perfume is a symbol of sophistication and class, reflecting modern elegance and timeless charm. This fragrance is inspired by Creed Aventus, featuring a perfect blend of fruity and woody notes. The top notes offer a refreshing burst of pineapple and apple, while the base notes of oakmoss and vanilla add a smooth touch, making the scent long-lasting and captivating. “Signature” is an ideal choice for a bold and confident style, giving your personality an unforgettable identity.
          </p>
        </section>
        <section className="max-w-md w-full bg-gray-200 text-center p-4">
          <div className="border-gray-300 bg-gray-200 rounded-lg p-4 my-4 flex flex-col justify-center items-center">
            <Image 
              src="/perfume.png" 
              alt='perfume image'
              width={300} 
              height={300} />
            <h3 className="mt-2 font-bold text-center">Calvin Klein Eternity</h3>
          </div>
        </section>
      </main>
    </div>
  );
}