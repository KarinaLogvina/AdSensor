import data from "./data/data.json"
import { Card } from "./components/card/Card.jsx";
function App() {
  return (
      <div className="px-8 pb-8 bg-primary-700 w-full h-screen flex items-center justify-center">
        <div className="max-w-[662px] max-h-[530px] grid grid-cols-12  gap-2">
        <div className="pt-4 pb-5 text-white text-2xl col-span-12">Замечания и рекомендации</div>
          {
            JSON.parse(JSON.stringify(data)).map((card, index) => (
              <div className={`col-span-12 ${(index === data.length - 1) ? "md:col-span-12" : "md:col-span-6"} `}>
                <Card card={card}/>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default App
