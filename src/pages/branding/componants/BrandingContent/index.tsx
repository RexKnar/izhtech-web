import { PiCirclesThreePlusLight, PiFigmaLogo, PiChartBar, PiChatDots, PiCommandLight } from 'react-icons/pi';
import { GoCpu } from 'react-icons/go'
import ContentImage2 from '../../../../assets/images/Branding-image/Intersect 2.png'
import ContentImage1 from'../../../../assets/images/Branding-image/Intersect1.png'
export default function BrandingContent() {
    return (
        <>
            <section className="relative ">
                <div className="absolute z-index   -mt-7 ">
                   <img src={ContentImage1} alt="" />
                </div>
                <div className="absolute right-0 bottom-0">
                   <img src={ContentImage2} alt="" className='h-[41rem]'/>
                </div>
                <section>
                    <div className="grid grid-cols-3 gap-10 text-white py-24 bg-black pr-32 pl-[160px]">
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                <PiFigmaLogo className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Logo Creation</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Your logo is the face of your brand.
                                Our expert designers are dedicated to crafting a logo that encapsulates your brand&#39;s essence.</p>
                        </div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                <  PiCirclesThreePlusLight className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Business Card Design</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">A memorable business card is a powerful
                                networking tool. We design cards that leave a lasting impression.</p></div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                < GoCpu className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Letterhead Design</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Professionalism starts with your
                                letterhead. We create designs that convey trust and credibility.</p>
                        </div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                <PiChartBar className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Banner Design</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Eye-catching banners for your website or marketing
                                campaigns to capture attention effectively.</p>
                        </div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                <  PiCommandLight className="w-14 h-14 stroke-white stroke-1" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">App Icons</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Your app’s icon is often the first thing users see.
                                We design icons that make a strong first impression.</p></div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                < PiChatDots className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Brand Typography</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Crafting the perfect font selection to align with
                                your brand’s voice and personality.</p>
                        </div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                <PiChartBar className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Brand Style Guide</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">A comprehensive guide that ensures consistency in
                                your brand’s visual identity across all platforms.</p>
                        </div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center ">
                                <  PiCommandLight className="w-14 h-14 stroke-1 stroke-white" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Color Palette</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Selecting a palette that evokes the right emotions
                                and resonates with your target audience.</p></div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                < PiChatDots className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Miscellaneous Assets</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Custom-designed graphics and assets tailored
                                to your specific needs.</p>
                        </div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                <PiChartBar className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Social Media Graphics</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Engaging visuals for your social media
                                profiles to enhance your online presence.</p>
                        </div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center ">
                                <  PiCommandLight className="w-14 h-14 stroke-1 stroke-white" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Ad Design Templates</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Templates for advertisements that
                                maintain your brand’s integrity.</p></div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                < PiChatDots className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Email Templates</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Professionally designed email templates to
                                elevate your communication.</p>
                        </div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                <PiChartBar className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Illustrations</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Unique and captivating illustrations to enhance
                                your brand storytelling.</p>
                        </div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center ">
                                <  PiCommandLight className="w-14 h-14 stroke-1 stroke-white" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Slide Deck Presentations</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">Engaging presentations that leave a lasting
                                impact on your audience.</p></div>
                        <div className="text-left">
                            <div className="bg-opacity-40 bg-blue-500 rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                < PiChatDots className="w-14 h-14" />
                            </div>
                            <p className="text-white font-semibold pt-4 pb-2">Video Creation and Editing</p>
                            <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">From conceptualization to editing, we
                                create compelling videos to promote your brand.</p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};
