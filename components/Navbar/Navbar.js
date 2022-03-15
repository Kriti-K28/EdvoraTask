import Image from 'next/image';
import styles from './Navbar.module.css';
import logoImg from '../../public/assets/logo.svg';
import profile from '../../public/assets/avatar.png'
import { useApi } from '../../Context/Apihandle';


export const NavBar = ({}) => {

    // style variables
    const { logo,uname,avatar,row,navbar } = styles;
    //const { user } = useStore();
    const { user } = useApi();
    return (
        <nav className = { navbar } >
            <div className = "container">
                <div className = { row }>
                    
                    <div className = {logo} >
                        <Image src = { logoImg} alt = "logo" />
                    </div>
                     {
                        <div className = { row }>
                        <p className = { uname } >{user.name}</p>

                        <div className = { avatar } >
                            <Image src ={profile}alt = "avatar" />
                        </div>
                       </div>
                    } 


                </div>
            </div>
        </nav>
    );
}
