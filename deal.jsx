import deal from './assets/deal.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Deal() {
  return (

    <div className="bg-gray-100 py-26 my-16 ">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        
        {/* Image Section */}
        <div>
          <img src={deal} className="w-full h-[400px] object-contain" alt="deal" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-orange-500">DEAL </span>of the month
          </h1>
          <p className="text-xl py-2 font-medium">HIKAN STRAWBERRY</p>
          <p className="text-gray-700 max-w-[550px] mx-auto md:mx-0 py-5">
            Quisquam minus maiores repudiandae nobis, minima saepe irecessiond, fugit ullam similique!
            Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error
            sit voluptatem accusant.
          </p>

          {/* Countdown Timer Boxes */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="border-2 border-orange-500 px-4 py-2 w-20 text-center "
              >
                <h1 className="text-3xl text-orange-500 font-bold">00</h1>
                <p className="text-sm text-gray-700">Days</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 mt-6 rounded-full flex items-center justify-center gap-2 mx-auto md:mx-0">
            <ShoppingCartIcon style={{ fontSize: 20 }} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export { Deal };
