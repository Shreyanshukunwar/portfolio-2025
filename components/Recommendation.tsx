import React from 'react'

import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, recommendations } from '../data'


const Recommendation = () => {
  return (
    <section className='' id='recommendations'>
        <h1 className='heading'>
            Recommendations from {''}
            <span className='text-purple'>current and previous employers</span>
        </h1>

        <div className='lg:pt-10 pt-5 flex flex-col items-center'>
            <div className='h-[50vh] md:h-[27.5rem] sm:h-[15rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
                <InfiniteMovingCards 
                    items={recommendations}
                    direction='left'
                    speed='slow'
                />
            </div>

            {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
                <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2">
                    <img
                    src={company.img}
                    alt={company.name}
                    className="md:w-10 w-5"
                    />
                    <img
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20"
                    />
                </div>
                </React.Fragment>
            ))}
            </div> */}

        </div>
    </section>
  )
}

export default Recommendation