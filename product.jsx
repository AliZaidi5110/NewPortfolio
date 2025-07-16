function Product() {
    return (

       <div className="text-center ">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="text-orange-500">Our</span>{' '}
        <span className="text-black">Products</span>
      </h2>

      {/* Underline */}
      <div className="w-[60px] h-[2px] bg-orange-500 mx-auto my-2"></div>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-sm md:max-w-xl mx-auto mt-4 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
      </p>
    </div>

    

 
    )
}
export {Product}