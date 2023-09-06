import { Card, Tabs } from "flowbite-react";
import serviceCardImg from "../../../../assets/images/Home/service/Image.png";
import shareLogo from "../../../../assets/images/Home/service/share.png";
import fingerprintLOgo from "../../../../assets/images/Home/service/fingerprint.png";
import collectionLogo from "../../../../assets/images/Home/service/collection.png";
import progressLogo from "../../../../assets/images/Home/service/progress.png";

function ServiceComponrnt() {

  return (
    <main className="flex justify-center relative  ">
      <span className="h-[73%] w-[28%] absolute top-1 left-1 yellowround bg-no-repeat "></span>
      <span className="h-[65%] w-[17%] absolute bottom-0 right-0 blueround bg-no-repeat"></span>
      <section className="container bg-[#90919C26] rounded pt-24 z-40">
        <div className="text-center pb-16">
          <p className="font-bold ">#Our Service</p>
          <h1 className="text-4xl font-bold ">What to expect?</h1>
        </div>
        <div className="flex ">
          
            <Tabs.Group
              aria-label="Tabs with icons"
              style="underline"
              className="grid grid-cols-1 grid-cols-2 inline-grid  float-left"
            >
              <Tabs.Item
                active
                title="Branding "
                className="col-span-2"
              >
                <div className="flex" >
                  <div className=" object-contain">
                  <Card imgAlt="" imgSrc={serviceCardImg}>
                    <div className="">
                      <h1 className="font-bold pb-4">Website & Mobile</h1>
                      <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 p">
                        <div className=" bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full w-[50%] relative">
                          <div className=" absolute top-0 left-[93%]">
                            <div className="absolute bg-black h-8 w-12 rounded-full bottom-4 left-0">
                              <img
                                src={progressLogo}
                                alt=""
                                className="absolute bottom-[-13px] left-[15px] h-[14px] w-[16px]"
                              />
                              <h3 className="absolute bottom-[3px] left-[11px] text-white">
                                93%
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="pt-4">
                        Packed with API features you will love to collaborate
                        with issues and change business.
                      </p>
                    </div>
                  </Card>
                  </div>
                  <div className="">
                    <div className="pb-6 ">
                      <img src={fingerprintLOgo} alt="" />
                      <h1 className="font-bold pt-4">
                        1. Create a Free Account
                      </h1>
                      <p>
                        Spaces of each debt in the digital world can help you
                        with overall simplest authentic.{" "}
                        <b>Go to Sign Up / Create an Account.</b>
                      </p>
                    </div>
                    <div className="pb-6">
                      <img src={shareLogo} alt="" />
                      <h1 className="font-bold pt-4">
                        2. Generate an API key for your app
                      </h1>
                      <p>
                        To achieve best results in digital world can help you
                        with overall create an API Key.{" "}
                        <b>Spaces of each debt in the.</b>
                      </p>
                    </div>
                    <div className="pb-6 ">
                      <img src={collectionLogo} alt="" />
                      <h1 className="font-bold pt-4">3. That’s it!</h1>
                      <p>Now you can use the app and improve your scores.</p>
                    </div>
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Web development"></Tabs.Item>
              <Tabs.Item title="Mobile app"></Tabs.Item>
              <Tabs.Item title="Digital marketing"></Tabs.Item>
            </Tabs.Group>
         
        </div>
      </section>
    </main>
  );
}

export default ServiceComponrnt;
