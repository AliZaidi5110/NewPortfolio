import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import CachedIcon from '@mui/icons-material/Cached';
function Services() {
    return (
        <section className="max-w-full h-100 md:h-50 pt-20  bg-gray-100 ">
            <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-8">

        {/* feature 1 */}
            <div className="flex items-center justify-center gap-4">
          <div className="border border-orange-500 rounded-full p-3 text-orange-500">
            <LocalShippingIcon size={24} />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-black">Free Shipping</h3>
            <p className="text-sm text-gray-700">When order over $75</p>
          </div>
        </div>

        {/* feature 2 */}

        <div className='flex pr-3 sm:pr-3 md:pl-0 items-center justify-center gap-4'>
            <div className='border border-orange-500 rounded-full text-orange-500 p-3'>
                <SettingsPhoneIcon size={34}/>
                </div>
                <div className='text-left'>
                    <h3 className='font-bold text-black'>24/7 Support</h3>
                    <p className='text-sm text-gray-700'>Get support all day</p>
                </div>
        </div>

        {/* feature 3 */}

        <div className='flex pl-6 sm:pl-6 md:pl-0 items-center justify-center gap-4'>
            <div className='border border-orange-500 rounded-full text-orange-500 p-3'>
                <CachedIcon size={24}/>
                </div>
                <div className='text-left'>
                    <h3 className='font-bold text-black'>Refund</h3>
                    <p className='text-sm text-gray-700'>Get refund within 3 days!</p>
                </div>
        </div>


            </div>
        </section>
    )
}
export {Services}