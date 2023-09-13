
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
function Team() {
    return (

        <>

            <section>
                <div className="text-left pt-10 lg:ml-20 lg:pl-20">
                    <h1 className="text-xs mb-5">OUR TEAM</h1>
                    <h2 className="text-3xl mb-5"><b>Meet the team.</b></h2>
                </div>


                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4">
                        <div className="col-span-2 sm:col-span-1 text-left text-xs bg-black opacity-95 text-white py-4 p-4">
                            <div className="text-gray mt-[17rem]">
                                <h1 >Colin Lucido</h1></div>
                            <p className="mt-4">UI Designer · <b>Interactive Media</b></p>
                            <p className="mt-4 leading-6  pb-3">George is an architect and founding partner,<br />providing flexible digital services.</p>

                            <div className=" gap-2 flex">
                                <div className="rounded-full border border-gray-500 p-2">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </div>
                                <div className="rounded-full border border-gray-500 p-2">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </div>
                                <div className="rounded-full border border-gray-500 p-2">
                                    <FontAwesomeIcon icon={faBehance} size="2x" />
                                </div>
                            </div>


                        </div>




                        <div className="col-span-2 sm:col-span-1"><img src="src\assets\images\img1.jpg"></img></div>
                        <div className="col-span-2 sm:col-span-1"><img src="src\assets\images\img2.jpg"></img></div>
                        <div className="col-span-2 sm:col-span-1"><img src="src\assets\images\img3.jpg"></img></div>
                        <div className="col-span-2 sm:col-span-1"><img src="src\assets\images\img4.jpg"></img></div>
                        <div className="col-span-2 sm:col-span-1 text-left text-xs bg-black gap-2 opacity-95 text-white py-4 p-4">
                            <div className=" mt-[17rem]">
                                <h1>Colin Lucido</h1></div>
                            <p className="mt-4">UI Designer · <b>Interactive Media</b></p>
                            <p className="mt-4 leading-6 pb-3">George is an architect and founding partner,<br />providing flexible digital services.</p>

                            <div className=" flex">
                                <div className="rounded-full border border-gray-500 p-2">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </div>
                                <div className="rounded-full border border-gray-500 p-2">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </div>
                                <div className="rounded-full border border-gray-500 p-2">
                                    <FontAwesomeIcon icon={faBehance} size="2x" />
                                </div>
                            </div>


                        </div>

                        <div className="col-span-2 sm:col-span-1"><img src="src\assets\images\img5.jpg"></img></div>
                        <div className="col-span-2 sm:col-span-1"><img src="src\assets\images\img6.jpg"></img></div>
                    </div>
                </div>




            </section>
        </>


    )
}

export default Team