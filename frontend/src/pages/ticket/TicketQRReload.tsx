import React, {useEffect, useState } from 'react'

interface Props {
  createQRCode: ()=> void;
}
function GetTime({createQRCode}: Props){
  const [count, setCount] = useState<number>(15);

  const reloadQR = () =>{
    setCount(15);
    createQRCode();
  }
  useEffect(()=>{
    const interval = setInterval(() => setCount(count-1), 1000);

    if(count <= 0){
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    }
  },[count])
  return (
    <div>
      <span className='flex justify-center'>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
      <span className="text-center text-gray-500">남은 시간 {count}초</span>
      </span>
      <p className="text-center mt-2" onClick={reloadQR}>
      <button className="w-32 h-9 bg-ttokGray rounded-xl text-white">
        <div className='flex mx-2 text-center'>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </span>
          <span className="ml-2">새로고침</span>
        </div>
      </button>
      </p>
    </div>
  )
}

export default GetTime;