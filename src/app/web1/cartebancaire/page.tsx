"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import carteRed from './img/cartebank.png'
import carteBlack from './img/carte.png'
import card1 from "../img/Carte_prepaid.jpg"
import card2 from "../img/Carte_credit.jpg"
import card3 from "../img/Carte_classique.jpg"
import card4 from "../img/Carte_gold.jpg"
import card5 from "../img/Carte_Platinuim.jpg"
import card6 from "../img/Carte_infinite.jpg"
import { Dialog } from '@headlessui/react'
export default function CarteBancaire() {

    const [loginOpen, setLoginOpen] = useState(false);
    const [loginOpen1, setLoginOpen1] = useState(false);
    const [loginOpen2, setLoginOpen2] = useState(false);
    const [loginOpen3, setLoginOpen3] = useState(false);
    const [loginOpen4, setLoginOpen4] = useState(false);
    const [loginOpen5, setLoginOpen5] = useState(false);
    const [loginOpen6, setLoginOpen6] = useState(false);
    const [loginOpen7, setLoginOpen7] = useState(false);
    const[comptepage, setComptepage]= useState('')

    const [shadow, setShadow] = useState('none')
    useEffect(() => {
      function HideShadow() {
        if (loginOpen || loginOpen1 || loginOpen2 || loginOpen3 || loginOpen4 || loginOpen5 || loginOpen6 || loginOpen7) {
          setShadow('');
        } else {
          setShadow('none');
        }
      }
  
      HideShadow();
    }, [loginOpen, loginOpen1, loginOpen2, loginOpen3, loginOpen4, loginOpen5, loginOpen6, loginOpen7],);
  return (
    <div className='space-y-5 py-10 bg-[#fff]'>
           <div className='w-full bg-[#000] h-[1000vw] lg:h-[119vw] absolute bg-opacity-50 -mt-[50vw] 'style={{display:shadow}} >

           </div>
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5' >
            <div className='shadow-xl rounded-[10px]'>
            {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
            <div className='text-[#000] hover:cursor-pointer'onClick={() => setLoginOpen2(true)}>
                
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
            <div className='text-[#000] hover:cursor-pointer'onClick={() => setLoginOpen3(true)}>
                
                <p className='text-[25px] font-semibold w-full py-3 text-center text-white bg-[#a22a2b] rounded-t-[10px]'>Mastercard Crédit </p>
                {/* <p className='text-[20px] font-semibold px-4 text-[#ffffff] absolute'>Cartes de crédit</p>  */}
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
            <div className='text-[#000] hover:cursor-pointer'onClick={() => setLoginOpen4(true)}>
                
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

      
        <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5 '>
          
          <div className='shadow-xl rounded-[10px]'>
              {/* <Image src={carteBlack} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
              <div className='text-[#000] hover:cursor-pointer'onClick={() => setLoginOpen5(true)}>
                  
                  <p className='text-[25px] font-semibold w-full py-3 text-center text-white bg-[#a22a2b] rounded-t-[10px]'>Visa Gold</p>
                  <div className='text-start text-[14px] px-0 w-full md:w-full lg:w-[23vw] h-auto'>
                  <Image src={card4} className='w-full ' alt='' />
  
                  </div>
                  <div className='px-0 pt-0'>
                      <button className='font-semibold bg-[#a22a2b] text-white 
                      hover:border-[#a22a2b] w-full text-[20px] rounded-b-[10px] py-3 px-4'>Cartes prépayées</button>
                      </div>
              </div>
          </div>
  
          <div className='shadow-xl rounded-[10px]'>
              {/* <Image src={carteRed} className='w-full h-auto rounded-t-[10px]' alt=''/> */}
              <div className='text-[#000] hover:cursor-pointer'onClick={() => setLoginOpen6(true)}>
                  
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
              <div className='text-[#000] hover:cursor-pointer'onClick={() => setLoginOpen7(true)}>
                  
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
     
       
        


        
        {/* <div className='block lg:flex space-y-5 lg:space-y-0 justify-center items-center mx-auto gap-x-10 px-5'>
        </div> */}
        
     
{/* 
        <div style={{display:''}} className='bg-[#000] z-30 opacity-50 w-full mt-[-2000px] h-[7100px] lg:mt-[-180vw]'>

       </div> */}

        <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen2}
      onClose={setLoginOpen2}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Mastercard prépayée</p>
         
          <div className='px-[5vw] pb-[2vw] text-black'>
            <p className=' py-[1vw] text-[25px]   w-full '>Cartes prépayées</p>
                <p>- Prix : 10 USD + <span className='font-bold'>TVA 16%</span></p>
                <p>- Très flexible pour les transactions internet</p>
                <p>- Frais de recharge 1% min 1.5$ + <span className='font-bold'>TVA 16%</span></p>
                <p>- 1%+TVA en local et 1.2% à l’étranger limite 5000 USD</p>
                <p>- Lier à un pool account</p>
                <p>- Limite dépôt 5000 USD / jour</p>
                <p>- Limite journalière retrait 2500 USD</p>
          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>
    
    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen3}
      onClose={setLoginOpen3}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Mastercard Crédit</p>
         
          <div className='px-[5vw] pb-[2vw] text-black'>
            <p className=' py-[1vw] text-[25px]   w-full '>Cartes de crédit</p>
                <p>Prix de la carte : 50 USD + <span className='font-bold'>TVA 16%</span></p>
                <p>Client cible : Client entrepreneur</p>
                <p>Frais de retrait : DAB/GAB EBCDC : 2,5 % du montant retiré +16% TVA, minimum 5 USD</p>

          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen4}
      onClose={setLoginOpen4}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Visa Classique</p>
         
          <div className='px-[5vw] pb-[2vw] text-black'>
            <p className=' py-[1vw] text-[25px]   w-full '>Cartes internationales            </p>
                <p>- Prix de la carte : 30 USD + <span className='font-bold'>TVA 16%</span></p>
                <p>- Limite journalière : retrait 2500 USD et Paiement/Achat en ligne : 3500 USD</p>
          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen5}
      onClose={setLoginOpen5}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Visa Gold</p>
         
          <div className='px-[5vw] pb-[2vw] text-black'>
            <p className=' py-[1vw] text-[25px]   w-full '>Cartes prépayées</p>
                <p>- Prix : 75 USD + <span className='font-bold'>TVA 16%</span></p>
                <p>- Flexible pour les transactions en ligne</p>
                <p>- Limite journalière très élevé 5000 USD retrait et 7500 USD achat</p>
                <p>- Services offerts par Visa</p>
          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen6}
      onClose={setLoginOpen6}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Visa Platinum</p>
         
          <div className='px-[5vw] pb-[2vw] text-black'>
            <p className=' py-[1vw] text-[25px]   w-full '>Cartes prestige</p>
            <p>Prix : 150 USD + <span className='font-bold'>TVA 16%</span></p>
            <p>Cible : segment fortuné, revenus élevés, voyage fréquemment, dépenses modérées</p>
            <p>Limite journalière retrait 5000 USD et paiement 7500 USD</p>
            <p>Remplacement carte en cas de vol ou perte</p>
            <p>Dépannage en cash</p>
            <p>Assistance médical</p>
            <p>Assistance juridique</p>
          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    <Dialog
      as="div"
      className="fixed inset-0 flex items-center w-full px-5 lg:px-[30vw] rounded-[15px] justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
      open={loginOpen7}
      onClose={setLoginOpen7}
    >
      <div className="items-center " />

      <Dialog.Panel className="relative lg:w-full mt-7 shadow-xl rounded-[15px] lg:px-0 bg-[#fcfcfc]">
        <div className="flex items-center justify-between outline-none ">
       
        
        </div>
        <div className=' rounded-[15px]'>
          <p className='bg-[#a22a2b] text-center text-[30px] rounded-t-[14px]  w-full py-3 text-white'>Visa Infinite</p>
         
          <div className='px-[5vw] pb-[2vw] text-black'>
            <p className=' py-[1vw] text-[25px]   w-full '>Cartes Prestiges</p>
                <p>- Prix : 10 USD + </p>
                <p>Prix : 150 USD + <span className='font-bold'>TVA 16%</span></p>
                <p>Cible : segment fortuné, revenus élevés, voyage fréquemment, dépenses modérées</p>
                <p>Limite journalière retrait 5000 USD et paiement 7500 USD</p>
                <p>Remplacement carte en cas de vol ou perte</p>
                <p>Dépannage en cash</p>
                <p>Assistance médical</p>
                <p>Assistance juridique</p>

          </div>
          <div>

          </div>
          </div>
          
      </Dialog.Panel>
    </Dialog>

    </div>
  )
}
