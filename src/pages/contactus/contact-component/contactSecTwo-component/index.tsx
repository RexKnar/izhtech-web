import { Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
function ContactSecTwo() {
  const { register, handleSubmit } = useForm();
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value: any) => {
    setCaptchaValue(value);
  };
  const onSubmit = (data: any) => {
    console.log(data);
    data.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }
  };

  return (
    <main className="flex justify-center relative pt-16">
      <span className="hidden lg:block absolute left-0 top-[9vh] md:h-[65vh] md:w-[17vw]   sectwoBgleft"></span>
      <span className=" absolute right-0 top-0 h-[44vh] md:w-[46vw] lg:h-[33vh] lg:w-[17vw] w-[82vw] secTwoBgright"></span>
      <section className="container pb-20 z-20">
        <div className="grid lg:grid-flow-col p-4 sm:p-0 gap-16 lg:grid-cols-4  pb-16">
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
        <div className="grid lg:grid-cols-4 p-4 sm:p-0 sm:justify-start gap-16 justify-items-center">
          <div>
            <h1 className="font-bold text-3xl pb-4 text-center sm:text-start">Work inquiries</h1>
            <p>Fill in this form or send us an e-mail with your inquiry.</p>
          </div>

          <div className="lg:col-span-3 ">
            <form
              className="grid grid-flow-row gap-6 lg:grid-cols-2 "
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

              <div className="lg:col-span-2 ">
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

              <div className="lg :col-span-2 ">
                <ReCAPTCHA
                  sitekey="6LfWPDooAAAAAJkXVNA-qbkmGOY4S2qLKRyXZWVk"
                  onChange={handleCaptchaChange}
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
