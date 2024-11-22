import React, { useState } from "react";
import './profileCard.css';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const ProfileCard = (props) => {

    const [showAge, setShowAge] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

    return(
        <div className="profile-card">
            <img className="profile-image" src={props.image} alt="user's profile"/>
            <h2 className="profile-name">{props.name}</h2>
            <p className="profile-bio">{props.bio}</p>
            <div>
                <p><FaUser onClick={() => setShowAge(!showAge)} style={{ cursor: 'pointer', color:' #666', fontSize:'1rem' }}/>
                    {showAge && `age : ${props.age}`}
                </p>
                <p><FaEnvelope onClick={() => setShowEmail(!showEmail)} style={{ cursor: 'pointer', color:' #666', fontSize:'1rem' }}/>
                    {showEmail && `${props.email}`}
                </p>
                <p><FaPhone onClick={() => setShowPhone(!showPhone)} style={{ cursor: 'pointer', color:' #666', fontSize:'1rem' }}/>
                    {showPhone && `${props.phone}`}
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;

