import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location);
    return (
        <div className='w-[90%] m-auto'>
            <Header></Header>
            <div className='flex gap-5'>
                <SideBar></SideBar>
                {
                    isNavigation && <span>Loading....</span>
                }
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;