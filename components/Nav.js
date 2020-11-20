import { NavBar } from './styled/root';


const Nav = () => {
    return (
        <NavBar>
            <div className='logo'>
                <img src='./no-virus.png' alt="Logo" />
                <h1>Bantay COVID</h1>
            </div>
            <div className='social-media'>
                <a href="https://disease.sh/docs/#/" target='_blank'>
                <img src="/disease.png" alt="Disease.sh" />
                </a>
                <a href="https://www.instagram.com/slowstupidlearner/" target='_blank'>
                <img src="/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/WarGodMarkey/" target='_blank'>
                <img src="/fb.png" alt="Facebook" />
                </a>
                <a href="https://www.facebook.com/WarGodMarkey/" target='_blank'>
                <img src="/Github.png" alt="Github" />
                </a>
            </div>
        </NavBar>
    )
}

export default Nav