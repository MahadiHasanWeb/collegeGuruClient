import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gallery1 from '../../../assets/gallery1.jpg'
import gallery2 from '../../../assets/gallery2.jpg'
import gallery3 from '../../../assets/gallery3.jpg'
import gallery4 from '../../../assets/gallery4.jpg'
import gallery5 from '../../../assets/gallery5.jpg'
import gallery6 from '../../../assets/gallery6.jpg'


const Gallery = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full md:mb-20 mb-10 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Welcome to the College Guru Gallery</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to College Guru, where success stories come to life! Immerse yourself in the achievements of college graduates through inspiring group pictures. Discover the power of education and envision your own future with College Guru.</p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src={gallery1} />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src={gallery2} />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src={gallery3} />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src={gallery4} />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src={gallery5} />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src={gallery6} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;