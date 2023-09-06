import spotifyLogo from "../../../../assets/images/Home/webAppImg/Spotify-logo.png";
import airbnbLogo from "../../../../assets/images/Home/webAppImg/airbnb.png";
import amazonLogo from "../../../../assets/images/Home/webAppImg/amazon.png";
import linkedinLogo from "../../../../assets/images/Home/webAppImg/linkedin-logo.png";
import walmartLogo from "../../../../assets/images/Home/webAppImg/walmart-logo.png";
import inteltLogo from "../../../../assets/images/Home/webAppImg/Intel-logo.png";

function WepApp() {
  return (
    <main className=" flex justify-center">
      <section className="container min-w-screen p-10">
        <div className="flex justify-around item-center g-6 m-6">
          <div>
            <a href="">
              <img src={spotifyLogo} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={walmartLogo} alt="" />
            </a>
          </div>        
          <div>
            <a href="">
              <img src={amazonLogo} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={inteltLogo} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={airbnbLogo} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={linkedinLogo} alt="" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WepApp;
