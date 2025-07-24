import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import{ ReactNode } from 'react';

const MainLayout = ({children} : {children: ReactNode}) => {
    return (
        <div>
            <Navbar/>
            {children}
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;