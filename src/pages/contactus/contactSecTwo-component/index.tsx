import React from 'react'
import { Label, TextInput,Select,Checkbox } from 'flowbite-react';
function ContactSecTwo() {
  return (
    <main>
        <section>
            <div>
                <h1>Our offices</h1>
                <p>Schedule your visit with us.</p>
            </div>
            <div>
            <h1>Singapore</h1>
                <p>Flora Drive, Singapore s506889.</p>
                <h3>Call us: +65 89269693</h3>
                <p>Monday - Friday</p>
            </div>
            <div>
<div>
    <h1>Work inquiries</h1>
    <p>Fill in this form or send us an e-mail with your inquiry.</p>
</div>
<div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="base"
            value="Base input"
          />
        </div>
        <TextInput
          id="base"
          sizing="md"
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="base"
            value="Base input"
          />
        </div>
        <TextInput
          id="base"
          sizing="md"
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="base"
            value="Base input"
          />
        </div>
        <TextInput
          id="base"
          sizing="md"
          type="text"
        />
      </div>

      <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Select your country"
        />
      </div>
      <Select
        id="countries"
        required
      >
        <option>
          United States
        </option>
      
      </Select>
    </div>

    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Select your country"
        />
      </div>
      <Select
        id="countries"
        required
      >
        <option>
          United States
        </option>
       
      </Select>
    </div>

      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="large"
            value="Large input"
          />
        </div>
        <TextInput
          id="large"
          sizing="lg"
          type="text"
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="age" />
        <Label htmlFor="age">
          I am 18 years or older
        </Label>
      </div>

      <div>
        <button className='bg-black text-white p-3'>Get a Quote</button>
      </div>
</div>
            </div>
        </section>
    </main>
  )
}

export default ContactSecTwo