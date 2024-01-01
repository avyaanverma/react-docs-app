import React,{useRef} from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc:"Add any description here!!",
      // filesize, fileDownload, tag:{isOpen, tagTitle, tagColor}
      filesize: "0.9mb",
      close:false,
      tag:{
        isOpen: true,
        tagTitle:"Download Now",
        tagColor:"green"
      }

    },
    {
      desc:"What you see is what you get",
      // filesize, fileDownload, tag:{isOpen, tagTitle, tagColor}
      filesize: "0.9mb",
      close:true,
      tag:{
        isOpen: false,
        tagTitle:"Download Now",
        tagColor:"blue"
      }

    },
    {
      desc:"Add any description here!!",
      // filesize, fileDownload, tag:{isOpen, tagTitle, tagColor}
      filesize: "0.9mb",
      close:true,
      tag:{
        isOpen: true,
        tagTitle:"Download Now",
        tagColor:"green"
      }

    }
  ]
  return (
    <div ref={ref} className='absolute z-[3] w-full h-full p-5 flex gap-5 flex-wrap'>
     {data.map((item,index)=>(
        <Card data ={item} reference = {ref}/>
      ))}
    </div>
    )
}

export default Foreground