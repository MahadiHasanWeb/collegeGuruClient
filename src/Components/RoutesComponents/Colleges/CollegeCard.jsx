import { Link } from "react-router-dom";

const CollegeCard = ({ data }) => {
    // console.log(data)
    const { name, image, researchHistory, admissionDates, _id } = data;
    return (<>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold">Research History:</span> {researchHistory.length}</p>
                <p><span className="font-semibold">Admission Dates:</span> {admissionDates}</p>
                <div className="card-actions ">
                    <Link to={`college/${_id}`} className="button">Details</Link>
                </div>
            </div>
        </div>
    </>

    );
};

export default CollegeCard;