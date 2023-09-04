import { Card } from "flowbite-react";
import "../../../../App.css";

function GuideComponent() {
  return (
    <main className='relative flex justify-center'>
        <span className='absolute top-1 left-0 h-[2vh] w-[2vw] '></span>
        <section className='container'>

            <div className='grid grid-flow-row grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <h5 className='font-bold '>FROM THE BLOG</h5>
                    <h1 className='text-5xl font-bold '>Quick and neat, 
just like your work.</h1>
<p className=''>Our app works for businesses of all sizes and shapes.
Starting at just <b>$5 for an agent</b>.</p>
<button className=' bg-transparent border-2 p-1 border-black rounded'><b>Read all Guides</b></button>
                </div>
                <Card className=" bg-[#F5F1F5]">

                </Card>
            </div>
        </section>
        
    </main>
  )
}

export default GuideComponent