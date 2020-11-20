import styled from 'styled-components';

const NavBar = styled.nav`
    background-color: var(--white);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem;
    box-shadow: 0px 9px 10px -15px rgba(117,121,231,0.29);    
        
    .logo {
        display:flex;
        justify-content:space-between;
        align-items:center;
        img {
            width:5rem;
            animation: rotate 60s infinite;
        }
        h1 {
            margin-left:1rem;
            color:var(--primary);
            font-size: 2rem; 
        }
    }

    .social-media {
        display:flex;
        justify-content:space-between;
        align-items:center;
        h2 {
            margin:1rem;
            color:var(--primary);
            font-size: 2rem;
        }
    }
   
    @keyframes rotate {
        50% {
            transform: rotate(360deg);
        }
    }
`;

const Nav = () => {
    return (
        <NavBar>
            <div className='logo'>
                <img src='./no-virus.png' alt="Logo" />
                <h1>Bantay COVID</h1>
            </div>
            <div className='social-media'>
               <h2>Facebook</h2>
               <h2>Instagram</h2>
               <h2>Github</h2>
            </div>
        </NavBar>
    )
}

export default Nav