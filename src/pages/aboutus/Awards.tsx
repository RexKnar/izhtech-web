function Awards() {

  return (

    <>
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 m-10 xl:grid-cols-3 gap-4">
        <div className="text-left pb-20 ">

          <h1 className="text-xs mt-10 "><b>AWARDS & HONORS</b></h1>
          <p className="text-3xl pt-4"><b>The awards won <br></br>by our works.</b></p>

        </div>
        <div className="text-sm text-left mt-10">
          <p>
            When our team provides design and <br/> digital marketing. Applied arts can <br/>include <b>industrial design, graphic</b><br/> <b>design, fashion design,</b> and the<br/>decorative arts which traditionally <br/>includes craft objects.</p></div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-2 text-sm  text-left pt-5 gap-4 mt-5">
          <div>
            <div className="text-left"><img src="src\assets\images\Vector (2).png" width="40px"></img>

              <p className="pt-4">5x Developer Award</p>
            </div>
            <div className="pt-10"><img src="src\assets\images\fwa.png" height="100px" width="70px"></img>


              <p className="pt-6">2x Best Website</p></div>
          </div>

          <div>
            <div><img src="src\assets\images\Vector (2).png" width="40px"></img>
              <p className="pt-4">3x Website of the Day</p></div>
            <div className="pt-10">
              <img src="src\assets\images\awards.png" height="20px" width="60px"></img>
              <p className="pt-3">2x Best Homepage</p></div>

          </div>
        </div>
      </div>

    </section>
    </>





  );

}
export default Awards