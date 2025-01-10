

export default function Home() {
  return <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
    <div className="bg-white shadow-md w-full max-w-[500px] p-5 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-gray-600 font-semibold -mb-1">In transit</span>
          <span className="text-4xl font-semibold">Coolblue</span>
        </div>
        <div className="size-12 rounded-full bg-orange-400"/>
      </div>
      <div className="my-2 flex items-center gap-2">
        <span className="bg-green-400 px-2.5 py-1.5 uppercase text-white font-semibold text-sm rounded-full">Today</span>
        <span>9:30 - 10:30</span>
      </div>
      <div className="relative mb-5">
        <div className="w-full h-2 bg-gray-200 rounded-full absolute"/>
        <div className="bg-green-400 h-2 w-2/4  rounded-full absolute"/>
      </div>
      <div className="flex justify-between text-gray-600 items-center">
        <span>Expected</span>
        <span>Sorting center</span>
        <span>In Transit</span>
        <span className="text-gray-400">Delivered</span>
      </div>
    </div>
  </main>
}
