'use client'
import Image from "next/image";
import './home.css'
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { checkbox } from "@nextui-org/theme";

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'], 
  weight: ["500"]
})
export default function Home() {
  const [result, setResult] = React.useState("");
  
  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4edd918-4a18-49fe-ac64-21548334edd5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message has been sent!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Something has gone wrong, please email choudhuryjishan@hotmail.co.uk with your details above.");
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  return (
    
    <div className={poppins.className}>
        <div id="screen" data-src="https://static.wixstatic.com/media/11062b_f68602886d71455a85a9705d586b75a0~mv2.jpg/v1/fill/w_980,h_901,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_f68602886d71455a85a9705d586b75a0~mv2.jpg">
            <h1 className='landingh1'><p className={poppins.className}><span className='font-bold'>Jishan&apos;s Online Tutoring</span></p></h1>
            <h2 className='desc'><p className={poppins.className}>Mathematics &amp; Science Tutoring</p></h2>
            <h2 onClick={() => scrolltoHash('contact')} className='contactbtn'><a className={poppins.className}>Contact Me</a></h2>
        </div>

        <div className="h-[85vh] bg-[#3b3b3b] text-white py-[2vh]" id="about">
          <div className="about-div translate-y-[25%]">
            <h1 className="header">About Me</h1>
            <div className="flex">
            <div className="relative w-[100vw]">
            <Image src={'/images/jishan.png'} alt="Jishan Choudhury" fill={true} objectFit={'contain'} />
            </div>
            <p className="about-me-text p-[2vw] bg-black text-[1.5vw] font-semibold">
              Hello, thank you for visiting my website!<br/><br/>
              I am a student doctor at Barts & The London Medical School; I have completed 4 years of MBBS and have an MSc in Regenerative Medicine.<br/><br/>
              I am also the former CEO of JC Tuition (2019-2022), a tutoring agency that has helped dozens of students achieve outstanding results around the country.<br/><br/>
              Prior to medical school, I have always been passionate about education. At GCSEs I achieved 2 A*s, 7As, 1B and during my A-Levels I achieved 3A*s (Biology, Chemistry, Maths).<br/><br/>
              My current passion is teaching and helping students around the UK achieve excellence in mathematics and science! I have 4+ years of tutoring experience in all age groups and have received extremely positive feedback.
            </p>
          </div>
          </div>
        </div>

        <div className="h-[85vh] bg-[#2b2b2b] text-white px-[4vw] text-center" id="services">
          <div className="services-div">
            <h1 className="header pt-[5vh] text-center">My Services</h1>
            <div className="row block mb-[50px]">
              <div className="column w-[100%]">
                <h1 className="text-[#9F95C4] font-black">Primary School (KS1/KS2)</h1>
                <p className="font-semibold"><br/>Extra support in literacy and numeracy for students preparing to sit their SATS.<br/><br/><br/>Rate: £20/hr</p>
              </div>
              <div className="column w-[100%]">
                <h1 className="text-[#9F95C4] font-black">Secondary School (KS3/KS4)</h1>
                <p className="font-semibold"><br/>Science and mathematics tutoring for students in their secondary school years including those preparing for their GCSEs.<br/><br/>Rate: £30/hr</p>
              </div>
              <div className="column w-[100%]">
                <h1 className="text-[#9F95C4] font-black">College (KS5)</h1>
                <p className="font-semibold"><br/>Science and mathematics tutoring for students sitting their A-Levels to help them achieve the grades they need for university or work.<br/><br/>Rate: £40/hr</p>
              </div>
            </div>
              <a onClick={() => scrolltoHash('faq')} className="bg-black text-[#9F95C4] text-[2vw] rounded-[50px] p-[10px] svb">Learn More</a>
          </div>
        </div>

        <div className="h-[85vh] bg-[#3b3b3b] text-[#9F95C4] font-medium px-[4vw]" id="faq">
          <div className="faq-div">
            <h1 className="faqheader pt-[5vh] pb-[2vh] text-left">Frequently Asked Questions</h1>
            <Accordion selectionMode="single" className="accordion bg-black text-[#9F95C4] font-medium opacity-100">
              <AccordionItem key="1" aria-label="What software do I tutor on?" title="What software do I tutor on?" className="accordionitem">
              <p className="faqtext">I use Zoom. Students are sent a link prior to their first lesson which we can reuse weekly. Zoom is a perfect application as we can share screens, and students can interact via a whiteboard. We can also send files over such as PowerPoint presentations and worksheets. </p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="What days do I tutor?" title="What days do I tutor?" className="accordionitem">
              <p className="faqtext">Due to a very booked up schedule, my services are currently only available on Sundays.</p>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Is tutoring 1-to-1 or in a group?" title="Is tutoring 1-to-1 or in a group?" className="accordionitem">
              <p className="faqtext">The prices quoted on the website are for 1-to-1 tutoring. Please contact me if you are interested in group tutoring and I can provide you with a quote.</p>
              </AccordionItem>
              <AccordionItem key="4" aria-label="Is the first lesson free?" title="Is the first lesson free?" className="accordionitem">
              <p className="faqtext">Yes! All new students get a one hour free of charge trial lesson with me before making any commitments. This is important so that students can experience my teaching style and methods.</p>
              </AccordionItem>
              <AccordionItem key="5" aria-label="Will the hourly rate I pay for lessons change?" title="Will the hourly rate I pay for lessons change?" className="accordionitem">
                <p className="text-xs">If you are already doing regular lessons with me, then no, the hourly rate will remain the same as your first lesson, even if the quoted prices on my website are updated. There is a slight exception to this if you are shifting from levels of study (e.g. if you are progressing from primary school to secondary school), then you will need to pay the new rate for your level of study.<br/><br/>The prices on the website may be updated regularly, this reflects my current demand and scheduling saturation. The prices quoted on my website also reflect the quality of my lessons and my preparation time.</p>
              </AccordionItem>
              <AccordionItem key="6" aria-label="What is my tutoring style?" title="What is my tutoring style?" className="accordionitem">
                <p className="text-xs faqtext">I follow scientific-based teaching strategies including active recall. This means students will have a lot exam practice questions from me, to help them apply their knowledge and learn exam technique.<br/><br/>I also teach topics through PowerPoint Presentations. All my lessons will be very interactive to keep students engaged and to promote thinking for an effective learning experience.<br/><br/>I teach based on the students exam board specification (e.g. AQA) and using exam board approved textbooks.</p>
              </AccordionItem>
              <AccordionItem key="7" aria-label="Do I set homework?" title="Do I set homework?" className="accordionitem">
              <p className="faqtext">At the student and parent/guardian discretion - yes I do! I believe setting worksheets is important to consolidate what we have covered in the lesson. </p>
              </AccordionItem>
              <AccordionItem key="8" aria-label="How does payment work?" title="How does payment work?" className="font-bold">
              <p className="faqtext">Lesson timings will be arranged before the weekend and communicated to you. Following this, payment will be expected to be made into my bank account at least 24 hours prior to the lesson to confirm the booking. If payment is failed to be made, the lesson may be cancelled. You may receive text messages as a prompt to remind you about lesson timings and payment.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="h-[120vh] bg-[#2b2b2b] text-white px-[4vw] text-center" id="free-resources">
          <div className="free-resources-div">
            <h1 className="fr-header pt-[5vh]">Free Resources</h1>
            <h1 className="fr-subheader py-[1vh]">eBooks</h1>
              <div className="flex ebooks-section">
                <div className="relative w-[50%]">
                  <img src="/ebooks/Getting into medical school guide cover.webp" className="block m-auto"/>
                  <a href={'/ebooks/Getting Into Medical School Guide.pdf'} target="_blank"  rel="noopener noreferrer" className="bg-[#9F95C4] p-2">Download</a>
                </div>
                <div className="relative w-[50%]">
                  <img src="/ebooks/Scientific based study strategies cover.webp" className="block m-auto"/>
                  <a href={'/ebooks/Scientific-based study strategies.pdf'} target="_blank"  rel="noopener noreferrer" className="bg-[#9F95C4] p-2">Download</a>
                </div>
            </div>
            
            <h1 className="fr-subheader py-[2vh]">Video Playlists</h1>
              <div className="flex resource-row pb-[2vh]"> 
                <div className="relative w-[30vw] resource-item block m-auto">
                  <Link href={'https://www.youtube.com/playlist?list=PLOFrvNNSdibalBRwryMTFboarKgPavFX0'} target="_blank"><img src="/images/playlist/1.webp" className="block m-auto w-[25vw] playlist-pic"/></Link>
                  <p className="text-[#9F95C4] text-center text-[1.75vw] font-semibold playlist-caption">Study Tips</p>
                </div>
                <div className="relative w-[30vw] resource-item block m-auto">
                  <Link href={'https://www.youtube.com/playlist?list=PLOFrvNNSdibalBRwryMTFboarKgPavFX0'} target="_blank"><img src="/images/playlist/2.webp" className="block m-auto w-[25vw] playlist-pic"/></Link>
                  <p className="text-[#9F95C4] text-center text-[1.75vw] font-semibold playlist-caption">Anki Masterclass</p>
                </div>
                <div className="relative w-[30vw] resource-item block m-auto">
                  <Link href={'https://www.youtube.com/playlist?list=PLOFrvNNSdibalBRwryMTFboarKgPavFX0'} target="_blank"><img src="/images/playlist/3.webp" className="block m-auto w-[25vw] playlist-pic"/></Link>
                  <p className="text-[#9F95C4] text-center text-[1.75vw] font-semibold playlist-caption">Biology</p>
                </div>
              </div>
              <div className="flex resource-row">
                <div className="relative w-[30vw] resource-item block m-auto">
                  <Link href={'https://www.youtube.com/playlist?list=PLOFrvNNSdibalBRwryMTFboarKgPavFX0'} target="_blank"><img src="/images/playlist/4.webp" className="block m-auto w-[25vw] playlist-pic"/></Link>
                  <p className="text-[#9F95C4] text-center text-[1.75vw] font-semibold playlist-caption">Chemistry</p>
                </div>
                <div className="relative w-[30vw] resource-item block m-auto">
                  <Link href={'https://www.youtube.com/playlist?list=PLOFrvNNSdibalBRwryMTFboarKgPavFX0'} target="_blank"><img src="/images/playlist/5.webp" className="block m-auto w-[25vw] playlist-pic"/></Link>
                  <p className="text-[#9F95C4] text-center text-[1.75vw] font-semibold playlist-caption ">Physics</p>
                </div>
                <div className="relative w-[30vw] resource-item block m-auto">
                  <Link href={'https://www.youtube.com/playlist?list=PLOFrvNNSdibalBRwryMTFboarKgPavFX0'} target="_blank"><img src="/images/playlist/6.webp" className="block m-auto w-[25vw] playlist-pic"/></Link>
                  <p className="text-[#9F95C4] text-center text-[1.75vw] font-semibold playlist-caption">Mathematics</p>
                </div>
              </div>

            </div>
          </div>


        <div className="h-[85vh] bg-[#3b3b3b] text-[#9F95C4] font-medium px-[4vw]" id="testimonials">
          <div className="testimonials-div">
            <h1 className="header pt-[5vh] pb-[2vh] text-left">My Testimonials</h1>
            <Slider {...settings} className="h-[60vh]">
              <div className="test-div relative">
                <h1>&quot;Jishan was my maths tutor and Rengoni was my physics. They both helped me so much in both subjects. They explained things nice and simply so I would understand even though physics is a complex subject to explain. Also made me do enough practice for me to fully understand the topic. Whenever I asked for help outside of tuition they would give quick detailed responses with videos which is great. 100% would recommend to anyone&quot;<p className="absolute bottom-[20px] font-light">- Anonymous (Student)</p></h1>
              </div>
              <div className="test-div">
                <h1>&quot;He is a great tutor, he is very patient with the students, I would highly recommend him as a teacher as he is very knowledgeable, he also strives on going an extra mile to make sure that the students understand the lessons and going over things in school they don&apos;t understand&quot;<p className="absolute bottom-[20px] font-light">- Farhanaz Ahmed (Parent)</p></h1>
              </div>
              <div className="test-div">
                <h1>&quot;I appreciate JC Tuition for helping me develop my knowledge of Maths and Science. I enjoy the lessons Jishan and Carl provide because it makes me feel positive that I could achieve the best grades I can.&quot;<p className="absolute bottom-[20px] font-light">- Suraya Islam (Student)</p></h1>
              </div>
              <div className="test-div">
                <h1>&quot;The explanation for my maths A level topics were very clear and understandable and I had seen an improvement with my grades.&quot;<p className="absolute bottom-[20px] font-light">- Anonymous (Student)</p></h1>
              </div>
              <div className="test-div">
                <h1>&quot;Simply amazing. These tutors have had a lot of experience and it&apos;s obvious from their résumés. Jishan in particular taught me the most efficient way of learning I have ever seen; am so happy with this service and would recommend it 110%.&quot;<p className="absolute bottom-[20px] font-light">- Anonymous (Student)</p></h1>
              </div>
              <div className="test-div">
                <h1>&quot;helps me understand maths a lot and also are very friendly&quot;<p className="absolute bottom-[20px] font-light">- Dani Trickett (Student)</p></h1>
              </div>
              <div className="test-div">
                <h1>&quot;Jishan and Carl at JC Tuition are providing excellent tuition for my daughter. They work hard to identify her strengths and weaknesses and help fill in any gaps in her in her knowledge. They maintain a professional and yet friendly manner, and this helps students feel comfortable and confident to learn. I have peace of mind knowing they are working hard to bring out the best of my child&apos;s abilities&quot;<p className="absolute bottom-[20px] font-light">- Shopna Islam (Parent)</p></h1>
              </div>
            </Slider>
          </div>
        </div>

        <div className="h-[85vh] bg-[#2b2b2b] text-[#fff] font-medium px-[4vw]" id="contact">
          <div className="contact-div">
            <h1 className="faqheader pt-[5vh] pb-[2vh] text-center">Book your <b className="underline">free</b> trial lesson</h1>
            <form onSubmit={onSubmit} className="form flex m-auto justify-center text-[2vw]">
              <div className="">
                <div className="flex">
                  <input type="text" name="First Name" required className="ol-input" placeholder="First Name"/>
                  <input type="text" name="Last Name" required className="ol-input" placeholder="Last Name"/>
                </div>
                <div className="flex">
                  <input type="email" name="Email" required className="ol-input" placeholder="Email"/>
                  <input type="tel" name="Phone Number" required className="ol-input" placeholder="Phone Number"/>
                </div>
                <textarea name="Message" required className="sl-input resize-none" placeholder="Message" rows={4}/>
              </div>
              <div className="text-md ml-10 second-col-form">
                <div className="">
                  <p className="los-head-label text-[2.5vw] mb-2"><b>Level of Study</b></p>
                  <div className="block">
                    <label className="checkbox-container">
                      <input type="checkbox" name="primary"/>
                      <span className="checkmark"></span>
                      <p className="pl-[5vw] mb-[1.5vh] pt-[1vh] los-label">Primary</p>
                    </label>
                    <label className="checkbox-container">
                      <input type="checkbox" name="secondary"/>
                      <span className="checkmark"></span>
                      <p className="pl-[5vw] mb-[1.5vh] pt-[1vh] los-label">Secondary</p>
                    </label>
                    <label className="checkbox-container">
                      <input type="checkbox" name="college"/>
                      <span className="checkmark"></span>
                      <p className="pl-[5vw] mb-[1.5vh] pt-[1vh] los-label">College</p>
                    </label>
                    <button type="submit" className="text-[#9F95C4] bg-black py-3 w-[100%] rounded-[50px] outline-none">Send</button>
                  </div>
                </div>
              </div>
            </form>
            <span className="text-center block">{result}</span>
          </div>
        </div>
        <div className="footer bg-[#1b1b1b] text-white p-5 w-full text-center">
          <Link href={'/license'} target="_blank" className="footer-1 text-[2vw] block m-auto mb-[.5vh]">© 2022-2024 by Jishan Choudhury</Link>
          <a href="https://jawwadchoudhury.co.uk" target="_blank" className="footer-2 text-[1.5vw] flex justify-center">Website by<p className={ibmPlexMono.className}><b className="pl-[5px]">Jawwad Choudhury</b></p></a>
        </div>
    </div>
  );
}
