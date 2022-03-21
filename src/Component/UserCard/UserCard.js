import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UserCard = (props) => {
    const { picture, email, location, name, nat } = props?.user;
    return (
        <div>
            <Col className="shadow-sm">
                <div className='d-flex align-items-center'>
                    <div className='m-2'>
                        <img className='rounded-circle' src={picture?.medium} alt="" />
                    </div>
                    <div className=' d-flex '>
                        <div className='p-2 my-2'>
                            <h6>{name?.title} {name?.first} {name?.last}</h6>
                            <h6 className='text-wrap'>{email}</h6>
                            <p className='text-wrap'>{location?.street?.number} {location?.street?.name}, {location?.city}, {location?.state}, {location?.country}, {location?.postcode}</p>
                        </div>
                        <p>{nat}</p>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default UserCard;