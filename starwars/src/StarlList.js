import React, {
    useState,
    useEffect
} from "react";

import StarCard from "./StarCard";
import axios from "axios";

export default function PicList() {
    const [pics, setPics] = useState([]);
    useEffect(() => {
        axios.get(
            "https://swapi.co/api/people/"
        )
            .then(response => {
                console.log(response.data.results);
                setPics(response.data.results);
            })
            .catch(error => {
                console.log(
                    "the data was not returned",
                    error
                );
            });
    }, []);
    return (
        <div className="pic">
            {pics.map(el => {
                return (
                    <StarCard
                        picture={el}
                    />
                )
            })};
        </div>
    );
}

