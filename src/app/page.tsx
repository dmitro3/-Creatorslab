"use client"
// import dynamic from 'next/dynamic';
import React from 'react';
import NewTasks from './components/NewTask';
// import Link from 'next/link';
import TrendingTasks from './components/TrendingTask';
import moneyBag from '../../public/images/moneybag.svg';
import Image from 'next/image'
import TopCreators from './components/Creators';


// Dynamically import Solana wallet context provider
// const WalletContextProvider = dynamic(() => import('./components/WalletProvider'), { ssr: false });

const Home: React.FC = () => {
  return (
      <div className="w-[90%] m-auto">
        <main className="container mx-auto py-8">
          <section className=' flex items-center justify-between'>
            <div className='rounded-lg border border-solid border-[#3f3f3f] w-[35%]'>
              <div className=' flex justify-between m-2'>
                <p>Engage</p>
                {/* <Link href={'/tasks'} className='font-bold text-[#5D3FD1]'>Show All</Link> */}
              </div>
              <button className='p-3 rounded-lg bg-[url(/images/greenlemonbg.jpeg)] bg-no-repeat bg-cover font-bold m-2 w-[100px]'>Trending</button>
              <button className='p-3 rounded-lg bg-[url(/images/button-bg01.jpeg)] bg-no-repeat bg-cover font-bold m-2 w-[100px]'>Promoted</button>
              <button className='p-3 rounded-lg bg-[url(/images/button-bg02.jpeg)] bg-no-repeat bg-cover font-bold m-2 w-[100px]'>Projects</button>
              <button className='p-3 rounded-lg bg-[url(/images/button-bg03.jpeg)] bg-no-repeat bg-cover font-bold m-2 w-[100px]'>Articles</button>
              {/* <button className='p-3 rounded-lg bg-[url(/images/button-bg04.jpeg)] bg-no-repeat bg-cover font-bold m-2 w-[100px]'>Quest</button>
              <button className='p-3 rounded-lg bg-[url(/images/button-bg05.jpeg)] bg-no-repeat bg-cover font-bold m-2 w-[100px]'>All</button> */}
            </div>
            <div className='rounded-lg bg-[#3f3f3f] w-[25%]'>
              {/* <div className=' flex justify-between'>
                <p>Top Creators</p>
                <Link href={'/'} className='font-bold text-[#5D3FD1]'>View All</Link>
              </div> */}
              <TopCreators />
            </div>
          </section>

          <NewTasks />

          <section className="mt-8">
            {/* <h2 className="text-2xl font-bold mb-4">Purchase $CLS</h2> */}
            <div className="grid grid-cols-2 gap-6">
              <div className='flex items-center justify-between bg-[url(/images/banner-bg01.jpeg)] bg-no-repeat bg-cover p-6 rounded-lg'>
                <div className="">
                  <h3 className="text-xl font-semibold">Purchase $CLS</h3>
                  <p className='w-[400px]'>By staking or investing $CLS  in a project, users can show their support and potentially earn a share of the project’s future success, [Tokens, NFTs,  whitelist].</p>
                  <button className="bg-[#3f3f3f]/30 backdrop-filter backdrop-blur-sm text-white px-4 py-2 rounded-lg mt-4">Buy $CLS</button>
                </div>
                
                <Image src={moneyBag} alt='' width={100} height={100}/>

              </div>
              
              <div className='flex items-center justify-between bg-[url(/images/banner-bg02.jpeg)] bg-no-repeat bg-cover p-6 rounded-lg'>
                <div className="">
                  <h3 className="text-xl font-semibold">Earn SOL</h3>
                  <p>Burn CLS to earn SOL. (Coming Soon)</p>
                  <button className="bg-[#3f3f3f]/30 backdrop-filter backdrop-blur-sm text-white px-4 py-2 rounded-lg mt-4">Buy $CLS</button>
                </div>

                <Image src={moneyBag} alt='' width={100} height={100}/>

              </div>
             
            </div>
          </section>

          <TrendingTasks />

          <div className='bg-[url(/images/banner-bg03.jpeg)] bg-no-repeat bg-cover p-10 rounded-lg flex items-center justify-between '>
            <div className="w-[300px]">
              <h3 className="text-xl font-semibold">Earn, Engage and Expand with  Creatorslab.</h3>
              <p >Creating a long term relationship among builders and content creators, to a wider global web3 communities</p>
              <button className="bg-[#3f3f3f]/30 backdrop-filter backdrop-blur-sm text-white px-4 py-2 rounded-lg mt-4">Become a member</button>
            </div>

            <Image src={moneyBag} alt='' width={100} height={100}/>

          </div>
          
        </main>
      </div>
  );
};

export default Home;
