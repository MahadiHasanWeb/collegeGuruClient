import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";


const Colleges = () => {

    const [allCollege, setAllCollege] = useState([]);
    // console.log(allCollege)

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
        .then(res=> res.json())
        .then(data => setAllCollege(data))
    }, [])

    

    return (
        <div>
            <h3 className="text-center text-3xl my-10">All Colleges</h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mx-auto my-10">
                {
                    allCollege?.map(data => <CollegeCard
                    key={data._id}
                    data={data}
                    ></CollegeCard>)
                }
            </div>
        </div>
    );
};

export default Colleges;