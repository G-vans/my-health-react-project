

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
                    <li><a href='./'>For Providers</a></li>
                    <li><a href='./'>Medications</a></li>
                    <li><a href='./'>Contact Doctors</a></li>
                    <li>
                        <button className="Btn-navbar" ><a href='./'>Sign Up</a></button>
                    </li>
                </ul>
            </div>
        </div>
    );
}