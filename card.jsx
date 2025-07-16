import strawberry from './assets/strawberry.png'; 
import berry from './assets/berry.png'; 
import lemon from './assets/lemon.png'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Card() {
    return (
        <div className="h-100 max-w-[1300px] mx-auto  px-24 my-24  grid md:grid-cols-3 gap-8">
            
       <div className="w-[300px] md:w-[350px] bg-white p-6 hover:shadow-2xs rounded-2xl shadow-xl text-center mx-auto">
      <img
        src={strawberry}
        alt="Strawberry"
        className="w-full h-58 object-contain mb-6"/>
      <h2 className="text-2xl font-bold text-gray-900">Strawberry</h2>
      <p className="text-sm text-gray-600">per Kg</p>
      <p className="text-3xl font-bold text-[#011627] mt-2">85$</p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 mt-6 ml-18 rounded-full flex items-center  justify-center">
        <ShoppingCartIcon style={{ fontSize: 20 }} />
        Add to Cart
      </button>
    </div>
       <div className="w-[300px] md:w-[350px] bg-white p-6 hover:shadow-2xs rounded-2xl shadow-xl text-center mx-auto">
      <img
        src={berry}
        alt="Strawberry"
        className="w-full h-58 object-contain mb-6"/>
      <h2 className="text-2xl font-bold text-gray-900">Berry</h2>
      <p className="text-sm text-gray-600">per Kg</p>
      <p className="text-3xl font-bold text-[#011627] mt-2">70$</p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 mt-6 ml-18 rounded-full flex items-center  justify-center">
        <ShoppingCartIcon style={{ fontSize: 20 }} />
        Add to Cart
      </button>
    </div>
       <div className="w-[300px] md:w-[350px] bg-white p-6 hover:shadow-2xs rounded-2xl shadow-xl text-center mx-auto">
      <img
        src={lemon}
        alt="Strawberry"
        className="w-full h-58 object-contain mb-6"/>
      <h2 className="text-2xl font-bold text-gray-900">Lemon</h2>
      <p className="text-sm text-gray-600">per Kg</p>
      <p className="text-3xl font-bold text-[#011627] mt-2">35$</p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 mt-6 ml-18 rounded-full flex items-center  justify-center">
        <ShoppingCartIcon style={{ fontSize: 20 }} />
        Add to Cart
      </button>
    </div>


        </div>
    )
}
export {Card}