import React, { useState } from 'react';
import logo from '../../logo.png';
import { Row, Spinner } from 'react-bootstrap';
import './Home.css'
import useUser from '../../Hooks/useUser';
import UserCard from '../UserCard/UserCard';
const Home = () => {
    const [users, isLoading] = useUser();
    const [searchValue, setSearchValue] = useState('')
    const [searchUsers, setSearchUsers] = useState([])
    const handleSearhValue = (e) => {
        setSearchValue(e.target.value);
    }
    const searchUser = (e) => {
        e.preventDefault();
        const search = searchValue.toLowerCase();
        const searchResult = users.filter(user => user.name.first.toLowerCase().includes(search))
        setSearchUsers(searchResult);
        const previous = document.getElementById('defult-result')
        previous.innerHTML = "";
    }
    if (isLoading) {
        return <div className='d-flex justify-content-center my-5'>
            <Spinner variant="info" animation="border" />
        </div>
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <img className='logo-size' src={logo} alt="" />
                <div>
                    <form action="">
                        <input id='search-field' onChange={handleSearhValue} className='me-3' type="text" placeholder='Search user by first Name' />
                        <button onClick={searchUser}>Search</button>
                    </form>
                </div>
            </div>
            <h1 className="text-center my-5 text-uppercase"> Random User </h1>
            <Row id="defult-result" className="g-4" xs={1} md={3} >
                {
                    users.map(user => <UserCard key={user.id} user={user}></UserCard>
                    )
                }
            </Row>

            <div className='search-result'>
                {
                    isLoading ?
                        <div className='d-flex justify-content-center my-5'>
                            <Spinner variant="info" animation="border" />
                        </div>
                        :
                        !searchUsers.length == 0 ?
                            <>
                                <Row className="g-4" xs={1} md={3} >
                                    {
                                        searchUsers.map(searchUser => <UserCard key={searchUser.id} user={searchUser}></UserCard>
                                        )
                                    }
                                </Row>

                            </>
                            :
                            <>
                                <h4 id='no-data' className='text-center mt-5'>No Data Found</h4>
                            </>
                }
            </div>
        </div>
    );
};
export default Home;