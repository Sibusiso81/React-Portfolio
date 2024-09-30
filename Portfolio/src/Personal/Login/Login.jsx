import React, { useState } from 'react'
import supabase from '../../supabase';
import { Toaster,toast} from 'react-hot-toast';
import { Link } from 'react-router-dom'
function Login() {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('');
    async function handleSignUp(e){
        e.preventDefault()
            try {
               const {data,error} = await supabase.auth.signUp({
                    email:email,
                    password:password,
                },
                
            )
               toast.success('Sign  up successfull')
               toast.success('Check mail for link')
                console.log('user info:',email,password)
                
            } catch (error) {
                console.log(error)
                toast.error('Failed to sign In')
            }
    }

    /* Handle sign in */
    async function handleSignIn(){
        try{
            const {data:error} = await supabase.auth.signInWithPassword({
                email:email,
                password:password,
            },
            
        )
        toast.success('Sign  in successfull'),
        console.log('user info:',email,password)
            
        }catch(error){
            console.log(error)
            toast.error('Failed to sign In')
        }
       
    }
  return (
    <section className='flex flex-col w-screen h-screen  justify-center items-center text-white font-poppins space-y-2  p-4 '>
    <div className="flex flex-col max-w-1/2 max-h-1/2 mx-auto my-auto">
    <Link></Link>
        {/* Svg */}
        <dotlottie-player src="https://lottie.host/3281cd0e-b9f9-4a9e-844e-a8d943057b60/u2Xaztn1UF.json"    style={{width:150 , height:150,background:"transparent",speed:"1"}} loop autoplay></dotlottie-player>
        <h2 className='text-center text-xl font-bold font-manrope mb-2'>Sign In to your account</h2>
        {/* Form */}
        <div className='space-y-2 '>
            <label >Email address</label>
            <input type="text" className='w-full h-8 outline-none border border-neutral-400 bg-[#ececec] rounded-md text-black p-1' onChange={(e)=>setEmail(e.target.value)} />

        </div>
        <div className='space-y-2 mt-2 '>
            <label >Password</label>
            <input type="password" className='w-full h-8 outline-none border border-neutral-400 bg-[#ececec] rounded-md text-black p-1' onChange={(e)=>setPassword(e.target.value)}/>

        <p>Forgot your Password ?</p>
        </div>
       <div className='flex flex-row space-x-4'>
       <button className='w-1/2 h-8 bg-[#ececec] text-monrope font-semibold text-center text-black mt-4 rounded-md'
       onClick={handleSignIn}
       >Sign in</button>
       <button className='w-1/2 h-8 bg-[#ececec] text-monrope font-semibold text-center text-black mt-4 rounded-md'
       onClick={handleSignUp}
       >

        Sign up
       </button>
       </div>
    </div>
    <Toaster/>
</section>
  )
}


export default Login
