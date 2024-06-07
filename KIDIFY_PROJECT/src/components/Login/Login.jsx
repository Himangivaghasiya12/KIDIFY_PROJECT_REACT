import React from 'react'


const Login = () => {
    return (

        <section className='container m-auto'>
             <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 py-2 ">
                <img src="./src/assets/sign_in.png" className='relative bg-cover mb-20  mt-3 ' ></img>
                <svg className="max-sm:h-auto max-sm:w-auto max-sm:ml-60 max-sm:-mt-44  absolute  h-5 w-5 bg-white border border-1 border-white rounded-full  text-center z-5 line-clamp-5 -mt-52 ml-80" fill="#111111" stroke="#111111" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>
            <div className='  container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center '>
              <div className='-ml-44 -mt-5 '>    
                <a className='text-3xl hover:text-orange-400 font-serif ' >Login</a>           
                <a className='text-3xl  text-slate-500 hover:text-orange-400 font-serif ml-5' href='#'>Sign up</a>
             </div>   
                <input type="Email" placeholder="Email" className='block mt-7 border-2 border-gray-200 bg-transparent p-3 w-96 rounded-md text-gray-500 placeholder:text-gray-400 placeholder-slate-400 focus:ring-0 font-medium sm:text-sm sm:leading-6 m-auto' name="username" id="emai" autocomplete="username" value=""></input>
                <input type="Password" placeholder="Password" className='block border-2 border-gray-200 bg-transparent p-3  w-96 rounded-md text-gray-500 placeholder:text-gray-400 placeholder-slate-400 focus:ring-0 font-medium sm:text-sm sm:leading-6 m-auto' name="username" id="password" autocomplete="username" value=""></input>
                <p className='text-orange-300 w-96 mt-4'>Forgot your password?</p>
                <button className='bg-purple-400 mt-7 rounded-sm p-2 w-96 '>Login</button>
                <p className="mt-28 text-center hover:text-orange-400"><a class="font-sm" href="#">Privacy &amp; Terms</a></p>
            </div>

                    
        </section>



        

    )
}

export default Login