import { Btn } from "./button"
import { Card } from "./card"
import { Customer } from "./customer"
import { Deal } from "./deal"
import { Footer } from "./footer"
import { Home } from "./home"
import { InfoAbout } from "./infoabout"
import { Logo } from "./logo"
import { Navbar } from "./navbar"
import { NewCards } from "./newcards"
import { News } from "./news"
import { Product } from "./product"
import { Sale } from "./sale"
import { Services } from "./services"
import { Trading } from "./trading"

import {createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {
  const router=createBrowserRouter ([
    {path:'/',
    element:
    <>
    <div className="pb-[700px]">
    <Home/>
    </div>

    <div className="pt-50 md:pt-0 pb-10">
    <Services/>
    </div>
    
    <Product/>
    
    <Card/>
    <div className="mt-[1250px] md:mt-60">
    <Deal/>
    </div>
    <Customer/>
    <Trading/>
    <Sale/>
    <News/>
    <NewCards/>
    <Btn/>
    <Logo/>
    {/* <Footer/> */}
    
    </>
    },

    {
      path:'/about',
      element:<><Navbar/><InfoAbout info={'ABOUT US'}/><Product/>
      <div className="mb-[1200px] md:mb-60 ">
      <Card/>
      </div>
      <Logo/>
      </>
    },

    {
      path:'/news',
      element:<><Navbar/><InfoAbout info={'News Article'}/>

      <News/>
      <div className="mb-[1100px] md:mb-0">
      <NewCards/>
      </div>
      <Logo/></>

    },

    {
      path:'/product',
      element:<><Navbar/><InfoAbout info={'Product Marketing'}/><Product/><Deal/><Logo/></>

    },
    
    {
      path:'/contacts',
      element:<><Navbar/><InfoAbout info={'Contact us'}/><Product/>
      <div className="mt-0">      
        <Deal/>
      </div>

      <Logo/></>

    },


    {
      path:'/shop',
      element:<><Navbar/><InfoAbout info={'Shop Now'}/>
      <Product/>
      <div className="py-20 mb-[270px] md:mb-0">
      <Trading/>
      </div>
      <Customer/>
      <Logo/></>

    },

  ])
  return (
     <>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
