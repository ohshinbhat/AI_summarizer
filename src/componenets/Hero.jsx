import React from 'react'
import '../index.css'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-row w-full mb-10 pt-3'>
            <div className='text-3xl font-secularone text-white'>
                Summeriz
            </div>
            <button type="button" onClick={() => window.open('http://github.com')} className='glow-on-hover font-secularone'>Github</button>
        </nav>
        <h1 className='headtxt font-inter text-white'>
            Summarize Lengthy Articles with <br className='max-md:hidden' />
            <span className='grd'>OpenAI GPT-4
            </span>
        </h1>
        <h2 className='txtsummary text-white text-center text-xl'>
            An open-source AI summarizer that takes the hassle out of reading lengthy articles by seamlessly condensing them into concise and informative summaries
        </h2>
    </header>
  )
}

export default Hero