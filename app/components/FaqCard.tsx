'use client'
import React, {useState} from 'react'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"

type FaqCardType = {
    q: string
    answer: string
}

const FAQCard = ({q, answer} : FaqCardType) => {

    const [open, setOpen] = useState(false)


  return (
                    <div className='md:mx-[1rem] border-t-2 border-grey-1 border-b-1 w-[25rem] relative m-[1rem] md:my-[0] text-grey-1'>
                        <div onClick={() => setOpen(!open)}>
                        <div className='absolute top:[0] right-[-10] mt-[2rem]'>
                        { open? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle /> }
                        </div>
                        <h4 className='pl-[1.5rem] pt-[2rem] pb-[1rem] cursor-pointer hover:underline text-grey-1'> {q}</h4>
                        </div>
                        {open && (
                            <div className='answer'>
                            {answer}
                        </div>
                        )}
                        
                    </div>
            

  )
}

export default FAQCard