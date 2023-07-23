import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {

    const detailsData = useLoaderData();
    const { image, name, admissionDates, events , researchHistory, sports} = detailsData
    console.log(detailsData)
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 md:py-24 py-10 mx-auto text-gray-500">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">COLLEGE NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                            <p className="leading-relaxed">Admission Dates: {admissionDates}</p>
                            <p className="leading-relaxed text-xl text-gray-900">Events:</p>
                            <p className="leading-relaxed">Name: {events[0]?.name}</p>
                            <p className="leading-relaxed">Date: {events[0]?.date}</p>
                            <p className="leading-relaxed">{events[0]?.description}</p>
                            <p className="leading-relaxed mt-4">Name: {events[1]?.name}</p>
                            <p className="leading-relaxed">Date: {events[1]?.date}</p>
                            <p className="leading-relaxed">{events[1]?.description}</p>
                        </div>
                    </div>
                    <div className="lg:px-28">
                        <p className="leading-relaxed text-xl mt-5 text-gray-900">Research History:</p>
                        <p className="leading-relaxed">Title: {researchHistory[0]?.title}</p>
                        <p className="leading-relaxed">Date: {researchHistory[0]?.date}</p>
                        <p className="leading-relaxed">{researchHistory[0]?.description}</p>
                        <p className="leading-relaxed mt-3">Title: {researchHistory[1]?.title}</p>
                        <p className="leading-relaxed">Date: {researchHistory[1]?.date}</p>
                        <p className="leading-relaxed">{researchHistory[1]?.description}</p>
                        <p className="leading-relaxed text-xl mt-5 text-gray-900">Sports:</p>
                        <p className="leading-relaxed">Name: {sports[0]?.name}</p>
                        <p className="leading-relaxed">Facility: {sports[0]?.facility}</p>
                        <p className="leading-relaxed mt-4">Name: {sports[1]?.name}</p>
                        <p className="leading-relaxed">Facility: {sports[1]?.facility}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CollegeDetails;