export const ProductCard = ({ item, image, price }) => {
  return (
    <div className="border rounded-lg bg-white px-4 py-3">
        <div className="flex items-center justify-center pb-2">
            <img className="h-28 w-auto rounded-xl" src={image} alt="" />
        </div>
        <h2 className="text-sm font-semibold text-slate-700">{item}</h2>
        <h3 className="text-rose-500 text-sm font-semibold">{price}</h3>
    </div>
  )
}
