import { Link, useRouteError } from 'react-router-dom'
import Lottie from "react-lottie";
import reader from '../../assets/error.json'

const Error = () => {

    const lottieAnimation = {
        loop: true,
        autoplay: true,
        animationData: reader,
    };
    const { error } = useRouteError()

    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>

                <div className='max-w-md text-center'>
                    <Lottie options={lottieAnimation} />
                    <p className='text-2xl font-semibold md:text-3xl text-[#393E46] mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='button button-primary'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error;