import { Label, TextInput, Select, Checkbox } from "flowbite-react";
function ContactSecTwo() {
  return (
    <main className="flex justify-center relative pt-16">
      <span className=" absolute left-0 top-0 h-[65vh] w-[17vw] z-20 sectwoBgleft"></span>
      <span className=" absolute right-0 top-0 h-[34vh] w-[17vw] z-20 secTwoBgright"></span>
      <section className="container pb-20">
        <div className="grid grid-flow-col gap-16 grid-cols-4 pb-16">
          <div className=" leading-7 ">
            <h1 className="font-bold text-3xl ">Our offices</h1>
            <p>Schedule your visit with us.</p>
          </div>
          <div className="leading-7">
            <h1 className="font-bold pb-4">Singapore</h1>
            <p className="">
              Flora Drive, Singapore <br /> 506889.
            </p>
            <h3 className="font-bold pb-5">Call us: +65 89269693</h3>
            <p>Monday - Friday</p>
          </div>
        </div>
        <div className="grid grid-cols-4  justify-start gap-16">
          <div>
            <h1 className="font-bold text-3xl">Work inquiries</h1>
            <p>Fill in this form or send us an e-mail with your inquiry.</p>
          </div>

          <div className="col-span-3">
            <div className="grid grid-flow-row gap-6 grid-cols-3">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="base"
                    value="Label (required)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="base"
                  sizing="md"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="base"
                    value="Company (optional)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="base"
                  sizing="md"
                  type="text"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="base"
                    value="Email (required)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="base"
                  sizing="md"
                  type="text"
                  placeholder="Your actual number"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="base"
                    value="Phone (optional)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="base"
                  sizing="md"
                  type="number"
                  placeholder="Your company name"
                />
              </div>
              <div className="max-w-md " id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="countries"
                    value="Subject (optional)"
                    className="font-bold"
                  />
                </div>
                <Select id="countries" required>
                  <option>Choose a subject</option>
                </Select>
              </div>
              <div className="max-w-md" id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="countries"
                    value="Choose a Budget (USD)"
                    className="font-bold"
                  />
                </div>
                <Select id="countries" required>
                  <option>Less than 5K</option>
                </Select>
              </div>
              <div className="col-span-3 ">
                <div className="mb-2 block ">
                  <Label
                    htmlFor="large"
                    value="Message (required)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="large"
                  sizing="lg"
                  type="text"
                  placeholder="Brief project details"
                />
              </div>
              <div className="col-span-3 ">
                <div className="flex items-center gap-2">
                  <Checkbox id="age" className="border-black" />
                  <Label htmlFor="age " className="">
                    I’m okay with getting emails and having that activity
                    tracked to improve my experience.
                  </Label>
                </div>
              </div>
              <div>
                <button className="bg-black text-white p-1 rounded">
                  <span className="p-3">Get a Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactSecTwo;
