import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

export default function SignUp() {
    return (
        <div className='min-h-screen mt-20'>
            <div className='p-3 max-w-3xl flex mx-auto flex-col sm:flex-row md:items-center gap-5'>
                {/* left */}
                <div className='flex-1 p-3'>
                    <Link to="/" className="text-4xl font-bold">
                        <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-red-500 rounded-lg text-white">Subhani </span>
                        Stark
                    </Link>
                    <p className='text-sm mt-5 font-semibold'>
                        This is my first project using MERN stack,I hope I'll finish this ASAP
                    </p>
                </div>
                {/* right */}
                <div className='flex flex-col gap-4 mt-5 flex-1 '>
                    <form className='flex flex-col gap-4'>
                        <div className=''>
                            <Label value='Your Username' />
                            <TextInput type='text' placeholder='Username' id='username' />
                        </div>
                        <div className=''>
                            <Label value='Your Email' />
                            <TextInput type='text' placeholder='name@company.com' id='email' />
                        </div>
                        <div className=''>
                            <Label value='Your pasword' />
                            <TextInput type='text' placeholder='Password' id='password' />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type='submit' >
                            Sign Up
                        </Button>
                    </form>
                    <div className='flex gap-2 text-sm'>
                        <span>Have an account?</span>
                        <Link to='/SignIn' className='text-blue-500'>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
