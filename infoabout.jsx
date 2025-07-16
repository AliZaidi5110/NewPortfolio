function InfoAbout({ info }) {
    return (
        <div className="max-w-full h-100 bg-[#143049] mb-10  flex flex-col text-center my-2 justify-center ">
            <p className="text-orange-500 text-md font-bold">WE SALE FRESH FRUITS</p>
            <h1 className="text-4xl text-white font-bold">{info}</h1>
        </div>
    );
}
export { InfoAbout };
