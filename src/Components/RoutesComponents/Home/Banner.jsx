import cover from '../../../assets/cover.jpg'

const Banner = () => {
    return (
        <div className="hero h-[45vh] md:min-h-screen rounded-xl mb-10" style={{ backgroundImage: `url(${cover})` }}>
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className=" text-center text-neutral-content">
            <div className="max-w-md">
                <h2 className='md:text-3xl lg:text-4xl text-xl font-bold tracking-wide leading-loose text-white'><span className="text-blue-500">"Unlock Limitless Opportunities"</span> <br /> "Book College Services and Embrace Your Future"</h2>
            </div>
        </div>
    </div>
    );
};

export default Banner;