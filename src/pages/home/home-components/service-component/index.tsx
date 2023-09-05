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
      <span className="h-[73%] w-[17%] absolute bottom-1 right-0 blueround bg-no-repeat"></span>
      <section className="container bg-[#90919C26] rounded pt-24">
        <div className="text-center">
          <p className="font-bold ">#Our Service</p>
          <h1 className="text-4xl font-bold ">What to expect?</h1>
        </div>
        <div className="grid grid-flow-row grid-cols-4  p-10">
          <div className="p-6 ">
            <Tabs.Group
              aria-label="Tabs with icons"
              className="flex flex-col bg-transparent 
              text-black font-bold" 
            >
              <Tabs.Item
                active
                title="Web development"
              >
                <p></p>
              </Tabs.Item>
              <Tabs.Item title="Mobile app">
                <p></p>
              </Tabs.Item>
              <Tabs.Item title="Digital marketing">
                <p></p>
              </Tabs.Item>
              <Tabs.Item title="Branding">
                <p></p>
              </Tabs.Item>
            </Tabs.Group>
          </div>
          <div className=" p-4 ">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={serviceCardImg}
            >
              <div className="p-4">
                <h1 className="font-bold pb-3">Website & Mobile</h1>
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
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
                  Packed with API features you will love to collaborate with
                  issues and change business.
                </p>
              </div>
            </Card>
          </div>
          <div className=" col-span-2  pl-16">
            <div className="pr-24 ">
              <img src={fingerprintLOgo} alt="" />
              <h1 className="font-bold">1. Create a Free Account</h1>
              <p>
                Spaces of each debt in the digital world can help you with
                overall simplest authentic.{" "}
                <b>Go to Sign Up / Create an Account.</b>
              </p>
            </div>
            <div className="pr-24">
              <img src={shareLogo} alt="" />
              <h1 className="font-bold">2. Generate an API key for your app</h1>
              <p>
                To achieve best results in digital world can help you with
                overall сreate an API Key. <b>Spaces of each debt in the.</b>
              </p>
            </div>
            <div className="pr-24 ">
              <img src={collectionLogo} alt="" />
              <h1 className="font-bold">3. That’s it!</h1>
              <p>Now you can use the app and improve your scores.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceComponrnt;
