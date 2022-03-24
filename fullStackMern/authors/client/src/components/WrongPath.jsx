import axios from "axios";
import { 
    useParams,
    Link
} from "react-router-dom";




const WrongPath = () => {

    const { _id } = useParams();




        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .catch(err => {
                console.log("err", err)
                
                
            })
    

    return (
        <div>
            <h1>Invalid ID</h1>
            <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
            <Link to="/authors">Add Author</Link>
        </div>
        );
    };

export default WrongPath;
