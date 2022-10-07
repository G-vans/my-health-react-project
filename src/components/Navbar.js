import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="Nav">
            <div className='Logo'>
                <ul>
                    <li>
                        <h1><a href='./'>My-Health</a></h1>
                    </li>
                </ul>
            </div>
            <div className='Nav-right'>
                <ul>
                    <li><Link to=''>For Providers</Link></li>
                    <li><Link to='/'>Medications</Link></li>
                    <li><a href='/doctors'>Contact Doctors</a></li>
                    <li>
                        <button className="Btn-navbar" ><a href='./'>Sign Up</a></button>
                    </li>
                </ul>
            </div>
        </div>
    );
}