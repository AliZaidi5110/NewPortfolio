
function Hero() {
    return(

        <div className="flex flex-col pt-20 md:pt-24  text-center text-white justify-center mt-40 items-center ">
            <h4 className="text-orange-500 font-bold  ">F R E S H  &  O R G A N I C</h4>
            <h1 className="md:text-5xl text-3xl font-bold mb-10 text-white">Delicious Seasonal Fruits</h1>
            <div className="flex gap-4">
            <button className="bg-orange-500 cursor-pointer text-white p-2 px-5 rounded-full hover:bg-black hover:text-orange-500">Fruit Colleciton</button>
            <button className="border-orange-500  cursor-pointer border-2 p-2 px-5 rounded-full  hover:bg-orange-500 hover:text-white ">Contact us</button>
            </div >
            
        </div>
    
    )
}
export {Hero}