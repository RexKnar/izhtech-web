import HeroComponent from '../home/home-components/hero-component/index'
import ContentComponent from '../home/home-components/content-component'
import WebAppComponent from '../home/home-components/webApp-component'
import VideoComponent from './home-components/video-component';
import DemoSection from './home-components/demoSection-component';
import Datatracking from './home-components/datatracking-component';
import GuideComponent from './home-components/Guide-Component';
import ServiceComponrnt from './home-components/service-component';
export function HomePage() {
  return (
    <main className=" ">
      <section className="">
        <div>

        </div>
      <HeroComponent/>
      <ContentComponent/>
      <WebAppComponent/>
      <VideoComponent/>
      <DemoSection/>
      <Datatracking/>
      <GuideComponent/>
      <ServiceComponrnt/>

      </section>
    </main>
  );
}
