import React from 'react'
import { Button, TextInput } from "flowbite-react";

function Ourservice() {
  return (
    <main className='flex justify-center'>
     <section className='container'>
     <div className="flex justify-between p-16 ">
          <div className="">
            <h1 className="text-5xl font-bold pb-6 ">
              Get started with <br />
              our service today.
            </h1>
            <h3 className="">
              The app helps teams create, track, and deliver faster.
            </h3>
          </div>
          <div>
            <form className="flex max-w-md flex-col p-4 text-sm font-semiboldtext-slate-50  ">
          
              <Button.Group className='rounded'>
                <TextInput
                  id="email"
                  placeholder="yoy@domain.com"
                  required
                  type="email"
                  className=' rounded-l-none'
                />
                <Button
                  type="submit"
                  color="dark"
                  className="block border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 text-slate-50  focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500  text-sm !rounded "
                >
                  Get a Demo
                </Button>
                </Button.Group>
            
            </form>
            <p className="p-6">
              Already using our service?{" "}
              <a href="">
                <span className="font-bold">Sign In</span>
              </a>
            </p>
          </div>
        </div>
     </section>
    </main>
  )
}

export default Ourservice