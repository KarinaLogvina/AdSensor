//"border-[#F14B4B] border-[#73A011] border-[#F1AF4B]"
export const Card = ({card}) => {
  return (
    <div className={`rounded rounded-r-lg  p-5 border-l-4 min-h-[140px] border-[${card.color}] text-white bg-primary-600`}>
      <div className="pb-2 flex justify-between items-center">
        <div className="text-lg">
          {card.title}
        </div>
        <div>
          {card.number}
        </div>
      </div>
      <div className="opacity-50 text-sm">
        {card.text}
      </div>
    </div>
  )
}