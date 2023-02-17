import React, {useState, useEffect} from "react";
import '../App.css'

const Home = () => {

    const [data, setData] = useState([]);

    const getUsersData = async () => {
        const res = await fetch("https://panorbit.in/api/users.json");
        const actualData = await res.json();
        setData(actualData.users)
        //console.log(data);
    }

    useEffect(() => {
        getUsersData();
        //console.log(data);
    }, [])


    return(
        <>
           <div className="container">
                <div className="row">
                        <div className="home-heading">
                            Select an Account
                        </div>
                        <div className="home-listing">
                        <ul>
                            {
                                data.map((item, val) => {
                                    return (
                                                                                                 
                                        <li><a href={`/about?id=${item.id}`}><img src={item.profilepicture}/>{item.name}</a></li>
                                                                                     
                                            )
                                        })
                                    }
                        </ul>
                        </div> 
                </div>
           </div>
        </>
    );
};

export default Home;