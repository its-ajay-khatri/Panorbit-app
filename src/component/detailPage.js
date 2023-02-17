import React, {useState, useEffect} from "react";
import { Link  } from "react-router-dom";
import './detailPage.css'

const DetailPage = () => {

    const [data, setData] = useState([]);
    let [trueVal, setTrueVal] = useState(false);
    let [viewProfile, setViewProfile] = useState(false);
    let [showProfile, setShowProfile] = useState(true);
    let [comingSoon, setComingSoon] = useState(false);
    let [headingValue, fetchHeading] = useState("Profile");
    let [chatSection, openChatSection] = useState(false);

    const getUsersData = async () => {
        const res = await fetch("https://panorbit.in/api/users.json");
        const actualData = await res.json();
        setData(actualData.users)
        console.log(data);
    }

    useEffect(() => {
        getUsersData();
        //console.log(data);
    }, [])

    setTimeout(() => {
        setTrueVal(true);
    }, 500);

    const searchParams = new URLSearchParams(document.location.search);
    let userId = searchParams.get('id');

    let userData = data[userId-1];
    console.log(userData)
    return(
        <>
        {/* <h1>About</h1>
            <div>Tutorial: {searchParams.get('id')}</div>
            {userData.name} */}
            { trueVal && <div id="root">
                <div className="App">
                    <div>
                        <div className={ showProfile ? "homepage_HomeMain__KQaWS" : "comingsoonpage_mainDiv__XtAX1" }>
                                <div className="homepage_mainDiv__4-+S6">
                        <p className={ headingValue === "Profile" ? "homepage_active__i9ZWo" : "homepage_notActive__iaSM4" }  aria-current="page" onClick={() => {fetchHeading("Profile"); setShowProfile(true); setComingSoon(false);}}>
                            Profile
                        </p>
                        <br></br>
                    <p className={ headingValue === "Posts" ? "homepage_active__i9ZWo" : "homepage_notActive__iaSM4" }  onClick={() => { fetchHeading("Posts"); setComingSoon(true); setShowProfile(false);}}>
                        Posts
                    </p>
                    <br></br>
                    <p className={ headingValue === "Gallary" ? "homepage_active__i9ZWo" : "homepage_notActive__iaSM4" } onClick={() => {fetchHeading("Gallary"); setComingSoon(true); setShowProfile(false);}}>
                        Gallery
                    </p>
                    <br></br>
                    <p id="todo" className={ headingValue === "ToDo" ? "homepage_active__i9ZWo" : "homepage_notActive__iaSM4" } onClick={() => {fetchHeading("ToDo"); setComingSoon(true); setShowProfile(false);}}>
                        ToDo
                    </p>
                </div>
           <div className={ showProfile ? "homepage_profile_top__suYl9" : "comingsoonpage_topDiv__utPzz" } style={{width: "80%"}}>
              <div className={ showProfile ? "homepage_profile__jZqrd" : "comingsoonpage_profile__KuGTP" }>
                 <h2>{headingValue}</h2>
                 <div>
                    <div className="homepage_profile__jZqrd" id="profile-tab" onClick={() => setViewProfile(!viewProfile)}>
                       <img src={userData.profilepicture} alt="profile img" />
                       <p>{userData.name}</p>
                    </div>
                    { viewProfile && <div className="profiledetails_MainDiv__DnLgT" >
                       <div className="profiledetails_profile__FzSY+">
                          <img src={userData.profilepicture} alt="profile" />
                          <p>{userData.name}</p>
                          <p>{userData.username}</p>
                       </div>
                       <br></br>
                       <div className="profiledetails_getProfile__cxbj+">
                          <div className="getprofile_card_bottom__u87gN">
                             {
                                data.map((item, val) => {
                                    return(
                                        <>
                                        <div>
                                                <a className="" href={`/about?id=${item.id}`}>
                                                <div className="getprofile_maping_div__WFlYn">
                                                    <img src={item.profilepicture} alt="profile image" />
                                                    <p>{item.name}</p>
                                                </div>
                                                </a>
                                                <br></br>
                                            </div>
                                        </>
                                    )
                                })
                             }
                          </div>
                       </div>
                       {/* <a href="/"><button className="profiledetails_signout_button__uOS4F">Sign out</button></a> */}
                       <Link to="/"><button className="profiledetails_signout_button__uOS4F">Sign out</button></Link>
                    </div> }
                 </div>
              </div>
              <br></br>
              { showProfile && 
              <div>
                <div className="profilebottom_mainDiv__un7R7">
                    <div className="profilebottom_leftSide__I6ZjJ">
                       <img src={userData.profilepicture} alt="profile img" />
                       <p>{userData.name}</p>
                       <div className="profilebottom_userName__gfUU-">
                          <div>
                             <h2>Username :</h2>
                             <h2>e-mail :</h2>
                             <h2>Phone :</h2>
                             <h2>Website :</h2>
                          </div>
                          <div>
                             <h3>{userData.username}</h3>
                             <h3>{userData.email}</h3>
                             <h3>{userData.phone}</h3>
                             <h3>{userData.website}</h3>
                          </div>
                       </div>
                       <br></br>
                       <h2>Company</h2>
                       <div className="profilebottom_company__qJUV3">
                          <div>
                             <h2>Name :</h2>
                             <h2>catchphrase :</h2>
                             <h2>Bs :</h2>
                          </div>
                          <div>
                             <h3>{userData.company.name}</h3>
                             <h3>{userData.company.catchPhrase}</h3>
                             <h3>{userData.company.bs}</h3>
                          </div>
                       </div>
                    </div>
                    <p className="profilebottom_vl__DbYVk"></p>
                    <div className="profilebottom_rightSide__LAors">
                       <h2>Address:</h2>
                       <div className="profilebottom_address__I1AHb">
                          <div>
                             <h2>Street :</h2>
                             <h2>Suite :</h2>
                             <h2>City :</h2>
                             <h2>Zipcode :</h2>
                          </div>
                          <div>
                             <h3>{userData.address.street}</h3>
                             <h3>{userData.address.suite}</h3>
                             <h3>{userData.address.city}</h3>
                             <h3>{userData.address.zipcode}</h3>
                          </div>
                       </div>
                       <iframe width="100%" height="350" className="profilebottom_Map__zjey7" src="https://maps.google.com/maps?q=Norberto Crossing,t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                       <div className="profilebottom_geo__KhY5E">
                          <p>Lat : <span>{userData.address.geo.lat}</span></p>
                          <p>Lng : <span>{userData.address.geo.lng}</span></p>
                       </div>
                       <div>
                          <div className="chat_mainDiv__KRDr7">
                             {
                                <div class="chat_chat__ALjIa" onClick={() => openChatSection(!chatSection)}>
                                <div>
                                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"></path>
                                   </svg>
                                   <p>Chat</p>
                                </div>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                   <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                             </div>
                             }
                             { chatSection && <div class="chat_profiles__9J0Nq">
                            { data.map((item, val) => {
                                return(
                                    <>
                                    <div>
                                    <div class="chat_maping_div__rFmnd">
                                        <img src={item.profilepicture} alt="profile image" />
                                        <p>{item.name}</p>
                                    </div>
                                    <br />
                                </div>
                                    </>
                                );
                            }) }
                            </div> }
                          </div>
                       </div>
                    </div>
                 </div>
                 
              </div>
            } 
              { comingSoon && <div className="comingsoonpage_screen__WtEht">
      <h1 className="comingsoonpage_ComingSoon__hxxcP">Coming Soon</h1>
   </div>}
           </div>
           
        </div>
        <div className="chat_mainDiv__KRDr7">
                             {
                                <div className="chat_chat__ALjIa" onClick={() => openChatSection(!chatSection)}>
                                <div>
                                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"></path>
                                   </svg>
                                   <p>Chats</p>
                                </div>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                   <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                             </div>
                             }
                             { chatSection && <div className="chat_profiles__9J0Nq">
                            { data.map((item, val) => {
                                return(
                                    <>
                                    <div>
                                    <div className="chat_maping_div__rFmnd">
                                        <img src={item.profilepicture} alt="profile image" />
                                        <p>{item.name}</p>
                                    </div>
                                    <br />
                                </div>
                                    </>
                                );
                            }) }
                            </div> }
                          </div>
     </div>
  </div>
</div> }
        </>
    );
}

export default DetailPage;