export default function Home() {
  return (
    <main>
      <div className="w-[15vw] fixed top-20 left-6 bottom-6  pr-6 hidden md:block">
        <div className="w-full h-full bg-red-500"></div>
      </div>
      <div className="outer py-6 md:pt-20 md:pl-[calc(15vw+20px)]">
        <div className="w-full h-40 p-6 bg-blue-200 flex  items-center justify-between gap-6">
          <div className="w-28 h-28 border-[4px] border-white bg-yellow-400 rounded-full"></div>
          <div className="flex flex-col md:flex-row md:flex-1 justify-between items-center gap-6">
            <div className="bg-white h-10 min-w-40"></div>
            <div className="bg-neutral-500 h-10 min-w-40 "></div>
          </div>
        </div>
        <div className="mt-6 h-10 bg-red-100"></div>
        <div className="mt-6 h-60  flex flex-col lg:flex-row gap-6">
          <div className="h-full bg-red-200 flex-1"></div>
          <div className="h-full bg-red-200 flex-1"></div>
          <div className="h-full bg-red-200 flex-1"></div>
          <div className="h-full bg-red-200 flex-1"></div>
        </div>
        <div className="w-full mt-6 min-h-60 grid lg:grid-cols-8 gap-6">
          <div className="grid min-h-96 lg:grid-cols-4 col-span-6 gap-6 grid-rows-6">
            <div className="lg:col-span-4 bg-red-200 row-span-1"></div>
            <div className="bg-red-200 row-span-4 p-6">
              <div className="h-10 bg-green-200"></div>
            </div>
            <div className="bg-red-200 row-span-4 p-6">
              <div className="h-10 bg-green-200"></div>
            </div>
            <div className="bg-red-200 row-span-4 p-6">
              <div className="h-10 bg-green-200"></div>
            </div>
            <div className="bg-red-200 row-span-4 p-6">
              <div className="h-10 bg-green-200"></div>
            </div>
          </div>
          <div className="h-full bg-red-200 col-span-2"></div>
        </div>
      </div>
    </main>
  );
}
