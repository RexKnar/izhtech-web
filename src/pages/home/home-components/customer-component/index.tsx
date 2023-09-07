import { Carousel, Card, Tabs } from "flowbite-react";

function CustomerComponent() {
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
              <Tabs.Group
                aria-label="Tabs with icons"
                className="grid grid-flow-col grid-cols-2 "
              >
                <Tabs.Item active title="G2 Crowd">
                  <div>
                  <Carousel className="h-40vh w-[50vw]">
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                <a href="" className="bg-[#90919C26] rounded">
                  Design Quality
                </a>
                <p>
                  “The app is a part of our team, helping to crystalize our
                  vision and delivering incredible results in a record time.”
                </p>
                <img
                  src=""
                  alt=""
                  className="h-[60px] w-[60px] rounded-full object-cover"
                />
                <h1>Colin Lucido</h1>
                <h3>
                  UI Designer · <b>Interactive Media</b>
                </h3>
              </div>
            </Carousel>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="TrustRadius">
                  <p></p>
                </Tabs.Item>
                <Tabs.Item title="Capterra">
                  <p></p>
                </Tabs.Item>
                <Tabs.Item title="Google My Business">
                  <p></p>
                </Tabs.Item>
                <Tabs.Item title="Yelp">
                  <p></p>
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
