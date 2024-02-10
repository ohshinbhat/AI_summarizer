import React from 'react'
import '../index.css'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-row w-full mb-10 pt-3'>
            <div className='flex flex-row gap-2 items-center justify-center'>
                <div className='text-3xl font-secularone text-black'>
                    Summeriz
                </div>
                <img src='/src/assets/sumlogo.png' className='w-10 h-10'/>

            </div>
            
            <button type="button" onClick={() => window.open('http://github.com')} className='glow-on-hover font-secularone'>Github</button>
        </nav>
        <h1 className='headtxt font-inter text-white font-extrabold'>
            Summarize Lengthy Articles with <br className='max-md:hidden' />
            <span className='bg-clip-text bg-gradient-to-r text-transparent from-blue-500 to-pink-500 font-bold text-[5rem]'>OpenAI GPT-4
            </span>
        </h1>
        <h2 className='txtsummary text-white text-center text-xl'>
            An open-source AI summarizer that takes the hassle out of reading lengthy articles by seamlessly condensing them into concise and informative summaries.
            Unlock the power of AI-driven summarization with SummAIze, your go-to destination for concise, insightful article summaries. Say goodbye to information overload and hello to clarity and efficiency. Try now, use the input below.
        </h2>
    </header>
  )
}

export default Hero