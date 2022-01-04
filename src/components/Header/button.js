import React from 'react'

export default function Mybutton(props) {
    return (
        <div>
            <button className='  py-2 px-6  text-white bg-purple-900 rounded md:ml-8 hover:bg-green-500  font-semibold'>
                  {props.children}
            </button>
        </div>
    )
}

 