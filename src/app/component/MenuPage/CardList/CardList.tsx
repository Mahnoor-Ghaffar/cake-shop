import Image from 'next/image'
import React from 'react'
import CardImage1 from '@/../public/images/menu/cookies-1.png';
import CardImage2 from '@/../public/images/menu/cookies-2.png';
import CardImage3 from '@/../public/images/menu/cookies-3.png';
import CardImage4 from '@/../public/images/menu/waffle-4.png';
import CardImage5 from '@/../public/images/menu/macr-5.png';
import CardImage6 from '@/../public/images/menu/macr-6.png';
import CardImage7 from '@/../public/images/menu/macr-7.png';
import CardImage8 from '@/../public/images/menu/coco-p-8.png';
import CardImage9 from '@/../public/images/menu/green-tea-9.png';   
import Link from 'next/link';

const CardList = () => {
  return (
    <section className='w-full flex flex-col lg:flex-row'>

        {/* List */}

        <div className='h-full lg:w-[25%]'>
            <ul className='w-full h-[40px] list-none flex lg:text-[var(--font-color)]
            text-[14px] items-center justify-around font-bold text-black sm:text-[24px] lg:w-full lg:flex-col
            lg:h-[500px] lg:text-3xl'>
                <li><Link href="Products">Cookies </Link></li>
                <li><Link href="Products">Waffles</Link></li>
                <li><Link href="Products">Macaroons</Link></li>
                <li><Link href="Products">Snacks</Link></li>
                <li><Link href="Products">Beverage</Link></li>
            </ul>
        </div>

        {/* Cards main */}
        <div className='w-full bg-[var(--pink-bg)] lg:w-[75%] flex flex-col items-center'>

                {/* Cards */}
                    <div className="grid grid-cols-2 justify-center w-[88%]">

                    {/* Card 1 */}

                    <div className="w-[161px] h-[250px] rounded-2xl flex flex-col justify-between mt-[7rem]
                    md:w-[300px] md:h-[400px]">
                        {/* image */}
                        <Image src={CardImage1} alt='Moon Bread' width={1000} height={1000} className='
                        w-full h-[70%]' />

                        {/* text */}
                        <div className='w-full text-1xl md:text-2xl flex justify-center text-[var(--font-color)]
                         text-[17px] font-bold'>
                         Lorem ipsum
                         </div>

                         {/* Button */}
                        <div className='flex justify-center'>
                        <button className='text-white bg-[var(--button-color)] text-1xl rounded-full 
                        text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
                        ease-in-out w-[110px] h-[30px] sm:w-[170px] md:w-[200px] md:h-[40px]'>
                            <Link href="/">About Us</Link>
                        </button>
                        </div>

                    </div>

                     {/* Card 2 */}

                     <div className="w-[161px] h-[250px] rounded-2xl flex flex-col justify-between mt-[7rem]
                    md:w-[300px] md:h-[400px]">
                        {/* image */}
                        <Image src={CardImage2} alt='Moon Bread' width={1000} height={1000} className='
                        w-full h-[70%]' />

                        {/* text */}
                        <div className='w-full text-1xl md:text-2xl flex justify-center text-[var(--font-color)]
                         text-[17px] font-bold'>
                         Lorem ipsum
                         </div>

                         {/* Button */}
                        <div className='flex justify-center'>
                        <button className='text-white bg-[var(--button-color)] text-1xl rounded-full 
                        text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
                        ease-in-out w-[110px] h-[30px] sm:w-[170px] md:w-[200px] md:h-[40px]'>
                            <Link href="/">About Us</Link>
                        </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-[161px] h-[250px] rounded-2xl flex flex-col justify-between mt-[7rem]
                    md:w-[300px] md:h-[400px]">

                        {/* image */}
                        <Image src={CardImage3} alt='Moon Bread' width={1000} height={1000} className='
                        w-full h-[70%]' />

                        {/* text */}
                        <div className='w-full text-1xl md:text-2xl flex justify-center text-[var(--font-color)]
                        text-[17px] font-bold'>
                         Lorem ipsum
                        </div>

                        {/* Button */}
                       <div className='flex justify-center'>
                       <button className='text-white bg-[var(--button-color)] text-1xl rounded-full 
                       text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
                       ease-in-out w-[110px] h-[30px] sm:w-[170px] md:w-[200px] md:h-[40px]'>
                         <Link href="/">About Us</Link>
                      </button>
                  </div>
              </div>
                    
                 </div>




                 {/* Cards row 2 */}
<div className="grid grid-cols-2 justify-center w-[88%]">
{/* Card 1 */}
<div className="w-[161px] h-[250px] rounded-2xl flex flex-col justify-between mt-[7rem]
md:w-[300px] md:h-[400px]">
{/* image */}
<Image src={CardImage4} alt='Moon Bread' width={1000} height={1000} className='
w-full h-[70%]' />

{/* text */}
<div className='w-full text-1xl md:text-2xl flex justify-center text-[var(--font-color)]
 text-[17px] font-bold'>
 Lorem ipsum
 </div>

 {/* Button */}
<div className='flex justify-center'>
<button className='text-white bg-[var(--button-color)] text-1xl rounded-full 
text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
ease-in-out w-[110px] h-[30px] sm:w-[170px] md:w-[200px] md:h-[40px]'>
    <Link href="/">About Us</Link>
</button>
</div>

</div>

{/* Card 2 */}

<div className="w-[161px] h-[250px] rounded-2xl flex flex-col justify-between mt-[7rem]
md:w-[300px] md:h-[400px]">
{/* image */}
<Image src={CardImage5} alt='Moon Bread' width={1000} height={1000} className='
w-full h-[70%]' />

{/* text */}
<div className='w-full text-1xl md:text-2xl flex justify-center text-[var(--font-color)]
 text-[17px] font-bold'>
 Lorem ipsum
 </div>

 {/* Button */}
<div className='flex justify-center'>
<button className='text-white bg-[var(--button-color)] text-1xl rounded-full 
text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
ease-in-out w-[110px] h-[30px] sm:w-[170px] md:w-[200px] md:h-[40px]'>
    <Link href="/">About Us</Link>
</button>
</div>
</div>

{/* Card 3 */}
<div className="w-[161px] h-[250px] rounded-2xl flex flex-col justify-between mt-[7rem]
md:w-[300px] md:h-[400px]">

{/* image */}
<Image src={CardImage6} alt='Moon Bread' width={1000} height={1000} className='
w-full h-[70%]' />

{/* text */}
<div className='w-full text-1xl md:text-2xl flex justify-center text-[var(--font-color)]
text-[17px] font-bold'>
 Lorem ipsum
</div>

{/* Button */}
<div className='flex justify-center'>
<button className='text-white bg-[var(--button-color)] text-1xl rounded-full 
text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
ease-in-out w-[110px] h-[30px] sm:w-[170px] md:w-[200px] md:h-[40px]'>
 <Link href="/">About Us</Link>
</button>
</div>
</div>
</div>
             



{/* Cards row 3 */}
<div className="grid grid-cols-2 justify-center w-[88%] mb-20">
{/* Card 1 */}
<div className="w-[161px] h-[250px] rounded-2xl flex flex-col justify-between mt-[7rem]
md:w-[300px] md:h-[400px]">
{/* image */}
<Image src={CardImage7} alt='Moon Bread' width={1000} height={1000} className='
w-full h-[70%]' />

{/* text */}
<div className='w-full text-1xl md:text-2xl flex justify-center text-[var(--font-color)]
 text-[17px] font-bold'>
 Lorem ipsum
 </div>

 {/* Button */}
<div className='flex justify-center'>
<button className='text-white bg-[var(--button-color)] text-1xl rounded-full 
text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
ease-in-out w-[110px] h-[30px] sm:w-[170px] md:w-[200px] md:h-[40px]'>
    <Link href="/">About Us</Link>
</button>
</div>

</div>

{/* Card 2 */}

<div className="w-[161px] h-[250px] rounded-2xl flex flex-col justify-between mt-[7rem]
md:w-[300px] md:h-[400px]">
{/* image */}
<Image src={CardImage8} alt='Moon Bread' width={1000} height={1000} className='
w-full h-[70%]' />

{/* text */}
<div className='w-full text-1xl md:text-2xl flex justify-center text-[var(--font-color)]
 text-[17px] font-bold'>
 Lorem ipsum
 </div>

 {/* Button */}
<div className='flex justify-center'>
<button className='text-white bg-[var(--button-color)] text-1xl rounded-full 
text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
ease-in-out w-[110px] h-[30px] sm:w-[170px] md:w-[200px] md:h-[40px]'>
    <Link href="/">About Us</Link>
</button>
</div>
</div>

{/* Card 3 */}
<div className="w-[161px] h-[250px] rounded-2xl flex flex-col justify-between mt-[7rem]
md:w-[300px] md:h-[400px]">

{/* image */}
<Image src={CardImage9} alt='Moon Bread' width={1000} height={1000} className='
w-full h-[70%]' />

{/* text */}
<div className='w-full text-1xl md:text-2xl flex justify-center text-[var(--font-color)]
text-[17px] font-bold'>
 Lorem ipsum
</div>

{/* Button */}
<div className='flex justify-center'>
<button className='text-white bg-[var(--button-color)] text-1xl rounded-full 
text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
ease-in-out w-[110px] h-[30px] sm:w-[170px] md:w-[200px] md:h-[40px]'>
 <Link href="/">About Us</Link>
</button>
</div>
</div>
</div>
             
                 {/* Cards end */}
             </div>
    </section>
  )
}

export default CardList