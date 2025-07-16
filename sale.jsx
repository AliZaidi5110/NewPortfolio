import sale from './assets/discount.png'; 

function Sale() {
    return (
        <div
            className="bg-cover bg-center h-120 w-full mt-90 md:mt-0  "
            style={{ backgroundImage: `url(${sale})` }}
        >
            <div className='pl-0 md:pl-60  py-28 '>
            <h1 className="text-3xl md:text-5xl font-bold">December sale is on!</h1>
            <h1 className="text-3xl md:text-5xl font-bold">with big <span className='text-orange-400'>Discount...</span></h1>
        <div className='flex py-5'>
            <h3 className='w-1 text-xl'>Sale! upto</h3>
            <h1 className='pl-11'><span className='text-orange-400 text-5xl font-bold'>50%</span> off</h1>
        </div>
        <button className='bg-orange-400 text-white text-xl px-4 py-2 rounded-2xl hover:bg-black hover:text-orange-400'>Shop now</button>
        </div>
        </div>
    );
}
export { Sale };
