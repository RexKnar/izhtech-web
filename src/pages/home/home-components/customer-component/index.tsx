import { Carousel, Card, Tabs } from "flowbite-react";
import { useTheme } from "flowbite-react";
import customerpic from "../../../../../public/images/homeBackground/customer/Avatar.png";

function CustomerComponent() {
  const theme = useTheme().theme;
  theme.tab = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center justify-center ",
      styles: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline:
          "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
        pills:
          "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
        fullWidth:
          "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
      },
      tabitem: {
        base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
        styles: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
            },
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
          pills: {
            base: "",
            active: {
              on: "rounded-lg bg-cyan-600 text-white",
              off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
          fullWidth: {
            base: "ml-0 first:ml-0 w-full rounded-none flex",
            active: {
              on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
              off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabpanel: "py-3",
  };

  return (
    <main className="flex justify-center ">
      <section className="container relative">
        <span className="coustBg absolute top-0 left-0 w-[15vw] h-[17vh]"></span>
        <span className="coustBg absolute bottom-0 right-0 w-[15vw] h-[17vh]"></span>
        <section>
          <Card className="bg-[#925F8D17]">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold">Meet our customers.</h1>
            </div>
            <div className="p-6 ">
              <Tabs.Group aria-label="Tabs with icons" className=" ">
                <Tabs.Item active title="G2 Crowd " className="text-center">
                  <div>
                    <Carousel className="h-[400px] w-auto">
                      <div className="grid grid-flow-row  h-full text-center justify-center  dark:text-white w-[17vw] ">
                     
                          <div className="flex justify-center p-2 ">
                          <h5 className=" rounded w-fit h-fit bg-[#90919C26]">
                            Design Quality 
                          </h5>
                          </div>
                          <p>
                            “The app is a part of our team, helping to 
                            crystalize our vision and delivering incredible{" "}
                           results in a record time.”
                          </p>
                          <div className="flex justify-center">
                            <img
                              src={customerpic}
                              alt=""
                              className="h-[60px] w-[60px] rounded-full object-cover"
                            />
                          </div>
                          <h1 className="font-bold">Colin Lucido</h1>
                          <h3 className="text-[#5F5F6C]">
                            UI Designer · <b className="text-[#5F5F6C]">Interactive Media</b>
                          </h3>
                       
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 2
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 3
                      </div>
                    </Carousel>
                  </div>
                </Tabs.Item>

                <Tabs.Item title="TrustRadius">
                <div>
                    <Carousel className="h-[400px] w-auto">
                      <div className="grid grid-flow-row  h-full text-center justify-center  dark:text-white w-[17vw] ">
                     
                          <div className="flex justify-center p-2 ">
                          <h5 className=" rounded w-fit h-fit bg-[#90919C26]">
                            Design Quality 
                          </h5>
                          </div>
                          <p>
                            “The app is a part of our team, helping to 
                            crystalize our vision and delivering incredible{" "}
                           results in a record time.”
                          </p>
                          <div className="flex justify-center">
                            <img
                              src={customerpic}
                              alt=""
                              className="h-[60px] w-[60px] rounded-full object-cover"
                            />
                          </div>
                          <h1 className="font-bold">Colin Lucido</h1>
                          <h3 className="text-[#5F5F6C]">
                            UI Designer · <b className="text-[#5F5F6C]">Interactive Media</b>
                          </h3>
                       
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 2
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 3
                      </div>
                    </Carousel>
                  </div>
                </Tabs.Item>

                <Tabs.Item title="Capterra">
                   <div>
                    <Carousel className="h-[400px] w-auto">
                      <div className="grid grid-flow-row  h-full text-center justify-center  dark:text-white w-[17vw] ">
                     
                          <div className="flex justify-center p-2 ">
                          <h5 className=" rounded w-fit h-fit bg-[#90919C26]">
                            Design Quality 
                          </h5>
                          </div>
                          <p>
                            “The app is a part of our team, helping to 
                            crystalize our vision and delivering incredible{" "}
                           results in a record time.”
                          </p>
                          <div className="flex justify-center">
                            <img
                              src={customerpic}
                              alt=""
                              className="h-[60px] w-[60px] rounded-full object-cover"
                            />
                          </div>
                          <h1 className="font-bold">Colin Lucido</h1>
                          <h3 className="text-[#5F5F6C]">
                            UI Designer · <b className="text-[#5F5F6C]">Interactive Media</b>
                          </h3>
                       
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 2
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 3
                      </div>
                    </Carousel>
                  </div>
                </Tabs.Item>

                <Tabs.Item title="Google My Business">
                <div>
                    <Carousel className="h-[400px] w-auto">
                      <div className="grid grid-flow-row  h-full text-center justify-center  dark:text-white w-[17vw] ">
                     
                          <div className="flex justify-center p-2 ">
                          <h5 className=" rounded w-fit h-fit bg-[#90919C26]">
                            Design Quality 
                          </h5>
                          </div>
                          <p>
                            “The app is a part of our team, helping to 
                            crystalize our vision and delivering incredible{" "}
                           results in a record time.”
                          </p>
                          <div className="flex justify-center">
                            <img
                              src={customerpic}
                              alt=""
                              className="h-[60px] w-[60px] rounded-full object-cover"
                            />
                          </div>
                          <h1 className="font-bold">Colin Lucido</h1>
                          <h3 className="text-[#5F5F6C]">
                            UI Designer · <b className="text-[#5F5F6C]">Interactive Media</b>
                          </h3>
                       
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 2
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 3
                      </div>
                    </Carousel>
                  </div>
                </Tabs.Item>

                <Tabs.Item title="Yelp">
                <div>
                    <Carousel className="h-[400px] w-auto">
                      <div className="grid grid-flow-row  h-full text-center justify-center  dark:text-white w-[17vw] ">
                     
                          <div className="flex justify-center p-2 ">
                          <h5 className=" rounded w-fit h-fit bg-[#90919C26]">
                            Design Quality 
                          </h5>
                          </div>
                          <p>
                            “The app is a part of our team, helping to 
                            crystalize our vision and delivering incredible{" "}
                           results in a record time.”
                          </p>
                          <div className="flex justify-center">
                            <img
                              src={customerpic}
                              alt=""
                              className="h-[60px] w-[60px] rounded-full object-cover"
                            />
                          </div>
                          <h1 className="font-bold">Colin Lucido</h1>
                          <h3 className="text-[#5F5F6C]">
                            UI Designer · <b className="text-[#5F5F6C]">Interactive Media</b>
                          </h3>
                       
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 2
                      </div>

                      <div className="flex h-full items-center justify-center dark:text-white">
                        Slide 3
                      </div>
                    </Carousel>
                  </div>
                </Tabs.Item>
              </Tabs.Group>
            </div>
          </Card>
        </section>
      </section>
    </main>
  );
}

export default CustomerComponent;
