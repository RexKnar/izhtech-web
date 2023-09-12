import "../../../../App.css";
import { Button, TextInput } from "flowbite-react";

function DemoSection() {
  return (
    <main className="flex justify-center relative m-6">
      <span className="VectordemoSec absolute bottom-[5rem]  h-[456.27px] w-[456.27px]"></span>
      <section className="container flex item-center justify-center  ">
        <div className="w-1/3 bg-transparent columns-3xl text-center p-4 ">
          <h1 className="font-bold text-4xl  text-center p-4">
            We are{" "}
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 via-purple-500 to-pink-500  text-cente text-4xl">
              izh tech
            </span>
            ,<br />
            Innovation ahead
          </h1>
          <p>
            Helping SaaS teams to increase e-commerce conversions, reduce bounce
            rate, and <b>scale up fast</b>.
          </p>
          <form className="flex max-w-md flex-col p-6  text-sm font-semiboldtext-slate-50 items-center ">
            <div className="flex  rounded ">
              <TextInput
                id="email"
                placeholder="yoy@domain.com"
                required
                type="email"
              />
              <Button
                type="submit"
                color="dark"
                className="block border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 text-slate-50  focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500  text-sm rounded-lg"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default DemoSection;
