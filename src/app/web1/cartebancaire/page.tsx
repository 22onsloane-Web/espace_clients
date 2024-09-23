import Image from 'next/image'
import React from 'react'
import carteRed from './img/cartebank.png'
import carteBlack from './img/carte.png'
import card1 from "../img/Carte_prepaid.jpg"
import card2 from "../img/Carte_credit.jpg"
import card3 from "../img/Carte_classique.jpg"
import card4 from "../img/Carte_gold.jpg"
import card5 from "../img/Carte_Platinuim.jpg"
import card6 from "../img/Carte_infinite.jpg"
export default function CarteBancaire() {
  return (
    <div className='space-y-5 py-10 bg-[#fff]'>
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
            <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-center text-white bg-[#a22a2b] rounded-t-[10px]'>Mastercard prépayée</p>
                                <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                <Image src={card1} className='w-full ' alt='' />
                
                   
                </div>
                <div className='px-0 pt-0'>
                    <button className='font-semibold bg-[#a22a2b] text-white 
                    hover:border-[#a22a2b] w-full  text-[20px] rounded-b-[10px] py-3 px-4'>Cartes prépayées</button>
                    </div>
            </div>
        </div>
        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-center text-white bg-[#a22a2b] rounded-t-[10px]'>Mastercard Crédit </p>
                <p className='text-[20px] font-semibold px-4 text-[#ffffff] absolute'>Cartes de crédit</p> 
                <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                <Image src={card2} className='w-full ' alt='' />

                   
                </div>
                <div className='px-0 pt-0'>
                    <button className='font-semibold bg-[#a22a2b] text-white 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Cartes de crédit</button>
                    </div>
            </div>
        </div>

        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-center text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Classique </p>
                <p className='text-[20px] font-semibold px-4 text-[#636569]'></p> 
                <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                <Image src={card3} className='w-full ' alt='' />

                
                   
                </div>
                <div className='px-0 pt-0'>
                    <button className='font-semibold bg-[#a22a2b] text-white 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Cartes internationales</button>
                    </div>
            </div>
        </div>
       
        </div>

        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
          
        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-center text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Gold</p>
                <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                <Image src={card4} className='w-full ' alt='' />

                </div>
                <div className='px-0 pt-0'>
                    <button className='font-semibold bg-[#a22a2b] text-white 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Cartes Prestiges</button>
                    </div>
            </div>
        </div>

        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-center text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Platinum</p>
                <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                <Image src={card5} className='w-full ' alt='' />

                    
                   
                   
                </div>
                <div className='px-0 pt-0'>
                    <button className='font-semibold bg-[#a22a2b] text-white 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Cartes Prestiges</button>
                    </div>
            </div>
        </div>

        <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000]'>
                
                <p className='text-[25px] font-semibold w-full py-3 text-center text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Infinite </p>
                <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                <Image src={card6} className='w-full ' alt='' />
   
                    
                    
                   
                   
                </div>
                <div className='px-0 pt-0'>
                    <button className='font-semibold bg-[#a22a2b] text-white 
                    hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Cartes Prestiges</button>
                    </div>
            </div>
        </div>
        </div>

        
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
            
   

        
        </div>
    </div>
  )
}
