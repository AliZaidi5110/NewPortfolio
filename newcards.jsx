import apple from './assets/apples.png'; 
import jaman from './assets/jaman.png'; 
import orange from './assets/orange.png'; 


import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function NewCards() {
    return (
       <div className="max-w-[1000px] ml-15 md:ml-65 mx-auto gap-8 md:gap-0 h-140 grid md:grid-cols-3 my-15">

        <div className='bg-white hover:shadow-2xs shadow-xl w-[302px] h-[500px]'>
            <img className='rounded-2xl w-[300px]' src={apple} alt="" />
            <div className='pl-3'>
            <h1 className='text-xl font-bold max-w-[290px] py-3'>You will vainly look for fruit on it in autumn.</h1>
            <div className='flex gap-4 text-gray-500'>
                <span><SupervisorAccountIcon/> admin</span>
                <span><CalendarMonthIcon/> 10 july 2025</span>
            </div>
            <p className='w-[280px] py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Magnam quibusdam laudantium, pariatur odit accusantium ab?</p>
             <h1 className='text-sm font-bold'>read more <ArrowForwardIosIcon /></h1>  
             </div>  
        </div>

        <div className='bg-white hover:shadow-2xs shadow-xl w-[302px] h-[500px]'>
            <img className='rounded-2xl w-[300px]' src={jaman} alt="" />
            <div className='pl-3'>
            <h1 className='text-xl font-bold max-w-[290px] py-3'>A man's worth has its season, like tomato.</h1>
            <div className='flex gap-4 text-gray-500'>
                <span><SupervisorAccountIcon/> admin</span>
                <span><CalendarMonthIcon/> 10 july 2025</span>
            </div>
            <p className='w-[280px] py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Magnam quibusdam laudantium, pariatur odit accusantium ab?</p>
             <h1 className='text-sm font-bold'>read more <ArrowForwardIosIcon /></h1>  
             </div>  

        </div>
        <div className='bg-white hover:shadow-2xs shadow-xl w-[302px] h-[500px]'>
            <img className='rounded-2xl w-[300px]' src={orange} alt="" />
            <div className='pl-3'>
            <h1 className='text-xl font-bold max-w-[290px] py-3'>Good thoughts bear good fresh juicy fruit.</h1>
            <div className='flex gap-4 text-gray-500'>
                <span><SupervisorAccountIcon/> admin</span>
                <span><CalendarMonthIcon/> 10 july 2025</span>
            </div>
            <p className='w-[280px] py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Magnam quibusdam laudantium, pariatur odit accusantium ab?</p>
             <h1 className='text-sm font-bold'>read more <ArrowForwardIosIcon /></h1>  
             </div>  
        </div>
       </div>
    )
}
export {NewCards}