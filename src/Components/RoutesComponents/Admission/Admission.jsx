import { useEffect, useState } from "react";
import AdmissionCard from "./AdmissionCard";


const Admission = () => {

    const [allCollege, setAllCollege] = useState([]);
    // console.log(allCollege)

    useEffect(() => {
        fetch('https://server-side-three-psi.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setAllCollege(data))
    }, [])


    return (
        <div>
            <h3 className="text-center text-3xl my-10">Admission</h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mx-auto my-10">
                {
                    allCollege?.map(data => <AdmissionCard
                    key={data}
                    data={data}
                    ></AdmissionCard>)
                }
            </div>
        </div>
    );
};

export default Admission;