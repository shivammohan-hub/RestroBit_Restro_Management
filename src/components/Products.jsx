import { ProductCard } from "./ProductCard"

export const Products = () => {
  return (
    <div className="w-8/12 ml-5 rounded-lg border bg-gray-50">
        <header className="flex items-center justify-between px-5 py-3 border-b">
            <input className="w-72 bg-white px-4 py-1 text-sm rounded-md outline-none" type="text" placeholder="Search in products" name="" id="" />
            <select className="bg-white px-4 py-2 text-xs font-medium rounded-md outline-none" name="" id="">
                <option className="py-2 " value="">All Category</option>
                <option className="py-2 " value="">Chinese</option>
                <option className="py-2 " value="">Continemtal</option>
                <option className="py-2 " value="">Vigan</option>
                <option className="py-2 " value="">Chicken</option>
                <option className="py-2 " value="">Salad</option>
            </select>
        </header>
        <div className="grid grid-cols-4 gap-4 p-5">
            <ProductCard item="Pasta" image="pasta.png" price="$15.00"/>
            <ProductCard item="Dahipuri" image="dahipuri.png" price="$12.00"/>
            <ProductCard item="Maxican Tacos" image="roll.png" price="$20.00"/>
            <ProductCard item="Chowmin" image="chowmin.png" price="$15.00"/>
            <ProductCard item="Potato Fries" image="fries.png" price="$8.00"/>
            <ProductCard item="Grilled Pork Chop" image="Meat.png" price="$25.00"/>
            <ProductCard item="Fresh Salad" image="salad.png" price="$10.00"/>
            <ProductCard item="Fried Chicken" image="friedchicken.png" price="$16.00"/>
            <ProductCard item="Chocolate Pestry" image="cake.png" price="$8.00"/>
            <ProductCard item="Chicken Salad" image="chickensalad.png" price="$18.00"/>
            <ProductCard item="Veg Thali" image="thali.png" price="$25.00"/>
            <ProductCard item="Continental Food" image="continental.png" price="$35.00"/>

        </div>

        
        
    </div>
  )
}
