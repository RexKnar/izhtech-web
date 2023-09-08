import React from "react";
import { Label, TextInput, Select, Checkbox } from "flowbite-react";
function ContactSecTwo() {
  return (
    <main className="flex justify-center relative">
        <span className=' absolute left-0 top-0 h-[65vh] w-[17vw] z-20 sectwoBgleft'></span>
        <span className=' absolute right-0 top-0 h-[34vh] w-[17vw] z-20 secTwoBgright'></span>
   
      <section className="container">

      <div className="flex p-3 ">
      <div className=" pr-16">
          <h1 className="font-bold ">Our offices</h1>
          <p>Schedule your visit with us.</p>
        </div>
        <div className="pl-16">
          <h1 className="font-bold">Singapore</h1>
          <p>Flora Drive, Singapore s506889.</p>
          <h3 className="font-bold">Call us: +65 89269693</h3>
          <p>Monday - Friday</p>
        </div>
      </div>


        <div className="flex justify-start" >

          <div>
            <h1 className="font-bold">Work inquiries</h1>
            <p>Fill in this form or send us an e-mail with your inquiry.</p>
          </div>
          
          <div className="grid grid-flow-row   grid-cols-3">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Base input" />
              </div>
              <TextInput id="base" sizing="md" type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Base input" />
              </div>
              <TextInput id="base" sizing="md" type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Base input" />
              </div>
              <TextInput id="base" sizing="md" type="text" />
            </div>

            <div className="max-w-md" id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select your country" />
              </div>
              <Select id="countries" required>
                <option>United States</option>
              </Select>
            </div>

            <div className="max-w-md" id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select your country" />
              </div>
              <Select id="countries" required>
                <option>United States</option>
              </Select>
            </div>
          </div>
          
          <div className=" ">
              <div className="mb-2 block ">
                <Label htmlFor="large" value="Large input" />
              </div>
              <TextInput id="large" sizing="lg" type="text" />
            </div>

            <div className=" ">
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">I am 18 years or older</Label>
            </div>
            </div>

            <div>
              <button className="bg-black text-white p-3">Get a Quote</button>
            </div>
        </div>
      </section>
    </main>
  );
}

export default ContactSecTwo;
