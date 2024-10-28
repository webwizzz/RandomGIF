import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return(
    <div className="w-full h-screen flex flex-col bg-zinc-900 relative items-center overflow-hidden">
      <h1 className=" bg-white rounded-md  text-3xl font-bold text-center mt-[40px]">
        Random gif</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-10">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
