import React,{useState} from 'react';
import { LuDownload } from "react-icons/lu";
import { FaFileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";


function Card({data,reference}) {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative h-72 w-60 rounded-[45px] px-8 py-3  z-[4] bg-zinc-900/80 text-zinc-700 overflow-hidden'>
        <span className='border-none '>
            <FaFileAlt/>
        </span>
        <p className='text-sm leading-none tracking-tight font-semibold text-zinc-200 mt-4'>{data.desc}</p>
        <div className='footer absolute text-zinc-200 bottom-0 w-full  left-0'>
            <div className='flex items-center justify-between mb-3 px-4 '>
                <h5 className='font-semibold'>{data.filesize}</h5>
                <span className='w-8 h-8 rounded-[20px] bg-zinc-700 flex items-center justify-center mb-3 '>
                    {data.close?<IoMdClose/>:<LuDownload size='0.7em' />}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full flex items-center justify-center  bg-${data.tag.tagColor}-900 h-10`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                 )
            }
            
        </div>
        </motion.div>
    </>
  )
}

export default Card