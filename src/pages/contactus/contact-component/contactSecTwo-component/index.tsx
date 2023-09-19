import { Label, TextInput, Select, Checkbox } from "flowbite-react";
import { useForm } from "react-hook-form";
function ContactSecTwo() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) =>{
     console.log(data);
    }
 ;
  return (
    <main className="flex justify-center relative pt-16">
      <span className=" absolute left-0 top-[9vh] h-[65vh] w-[17vw] z-20 sectwoBgleft"></span>
      <span className=" absolute right-0 top-0 h-[34vh] w-[17vw] z-20 secTwoBgright"></span>
      <section className="container pb-20">
        <div className="grid grid-flow-col gap-16 grid-cols-4 pb-16">
          <div className=" leading-7 ">
            <h1 className="font-bold text-3xl pb-4">Our offices</h1>
            <p>Schedule your visit with us.</p>
          </div>
          <div className="leading-6 p-1">
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
            <h1 className="font-bold text-3xl pb-4">Work inquiries</h1>
            <p>Fill in this form or send us an e-mail with your inquiry.</p>
          </div>

          <div className="col-span-3">
            <form
              className="grid grid-flow-row gap-6 grid-cols-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Name"
                    value="Name (required)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="Name"
                  sizing="md"
                  type="text"
                  placeholder="Your name"
                  {...register("Name", { required: true })}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Company"
                    value="Company (optional)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="Company"
                  sizing="md"
                  type="text"
                  placeholder="Your company name"
                  {...register("Company", { required: true })}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Email"
                    value="Email (required)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="Email"
                  sizing="md"
                  type="text"
                  placeholder="Your actual number"
                  {...register("Email", { required: true })}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Phone"
                    value="Phone (optional)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="Phone"
                  sizing="md"
                  type="number"
                  placeholder="Your company name"
                  {...register("Phone", { required: true })}
                />
              </div>
  
              <div className="col-span-2 ">
                <div className="mb-2 block ">
                  <Label
                    htmlFor="Message"
                    value="Message (required)"
                    className="font-bold"
                  />
                </div>
                <TextInput
                  id="Message"
                  sizing="lg"
                  type="text"
                  placeholder="Brief project details"
                  className=""
                  {...register("Message", { required: true })}
                />
              </div>

             
              <div>
                <button
                  type="submit"
                  className="bg-black text-white p-1 rounded"
                >
                  <span className="p-3">Get a Quote</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactSecTwo;
