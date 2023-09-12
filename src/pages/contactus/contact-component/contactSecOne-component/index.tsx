function ContactSecOne() {
  return (
    <main className="flex justify-center relative">
      <span className=" absolute right-0 top-0 h-[306px] w-[21vw] z-20 secOneBg"></span>
      <section className=" container pt-24">
        <div className="flex flex-col pt-24 ">
          <h1 className="text-5xl font-bold pt-16  ">Contact Us</h1>
          <h3 className="pt-6 ">
            Leave us a little info,and we'll be in touch
          </h3>
          <div className="pt-4 pb-16 ">
            <button className="bg-black text-white rounded p-2">
              Send Us an Email
            </button>
          </div>
          <div className="flex justify-start t-4 pb-4">
            <a href="">
              <h1>
                <b>Home /</b>
              </h1>
            </a>
            <a href="">
              <h1>Contact Us</h1>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactSecOne;
