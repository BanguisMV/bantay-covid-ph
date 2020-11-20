import styled from 'styled-components';


export const Summary = styled.div`
  margin:2rem 0;
  box-shadow: 0px 0px 2px 0px rgba(117,121,231,0.30);  
  background-color:white !important;
  width: 100%;
  padding: 1rem 2rem;
  border-radius:5px;

.mobileOnly {
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    box-shadow: 0px 0px 2px 0px rgba(117,121,231,0.50);  
    padding:1rem;
    border-radius:5px;
    span {
        align-self:center;
        font-size: 3rem; 
        margin-right:2rem;
        padding:1rem;
        background-color:var(--primary) !important;
        border-radius:5px;
        color:var(--white);
    }

    div {
        justify-self:center;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
    
            p {
            color:var(--blurr);
            font-size: 1.3rem; 
        }
    }
    

  
}
.Unstable {
    text-align:center;
    font-size: 1.1rem; 
    color:var(--light);
    text-transform:uppercase;
}
  h2 {
    color:var(--primary);
    font-weight:bold;
    font-size: 2rem; 
    text-align:center;
    margin:1rem 0;

  }

    div {
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size: 1.7rem; 
        margin:1rem 0;

        span {
            color:var(--blurr);
        }
        p {
            color:var(--primary);
            font-weight:bold;
        }
    }

`;
export const NavBar = styled.nav`
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
        img {
            margin:1rem;
            color:var(--primary);
            width:3rem; 
            
            @media screen and (max-width:300px) {
                width:2.2rem !important; 
                margin:.8rem !important;
            }
        }
    }
   
    @keyframes rotate {
        50% {
            transform: rotate(360deg);
        }
    }
`;

export const Container = styled.main`
    max-width: 1300px;
    width: 100%;
    height:100%;

    margin: 0 auto;
    @media screen and (max-width:800px) {
        max-width: 800px;
    }
`;

export const CardTitle = styled.h2`
       @media screen and (max-width:400px) { 
        font-size:1.7rem !important;
       }
        position:absolute;
        top:0;
        left:0;
        text-transform:uppercase;
        font-size:2rem;
        padding:.5rem 1.5rem;
        color: var(--white);
        border-bottom-right-radius: 4px;    
        background-color:${props => props.cases ? 'var(--light)' : props.death ? 'var(--danger)' : props.recover ? 'var(--success)' : null };
       
`;
export const Philippines = styled.section`
  
        display:flex;
        align-items:flex-start;
        flex-direction:column;
        margin:0 1rem;
        padding:1rem;

        @media screen and (max-width:400px) {
            h1 { font-size:2.5rem;  }
        }
        h1 {
        font-size:3.5rem;
        background-image:url('./ph.png');
        background-repeat: no-repeat;
        background-position: center; 
        background-clip:text;
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
        }

        h2 {
            text-transform:uppercase;
            font-size:1.5rem;
            color:var(--primary);
        }
`
export const Card = styled.div`
        position:relative;
        background-color:var(--white);
        color:black;
        padding:.5rem;
        margin:2rem .5rem;
        border-left:3px solid var(--primary);
        border-radius:5px;
        box-shadow: 0px 0px 2px 0px rgba(117,121,231,0.30);  
        display:flex;
        height:17rem;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        @media screen and (max-width:400px) {
            margin:1rem .5rem !important;
            height:14rem !important;
            h3 { 
                font-size:2rem !important; 
            }
        }

        border-right: 3px solid ${props => props.cases ? 'var(--light)' : props.death ? 'var(--danger)' : props.recover ? 'var(--success)' : null };
        border-left: 3px solid ${props => props.cases ? 'var(--light)' : props.death ? 'var(--danger)' : props.recover ? 'var(--success)' : null };
        h3 {
            font-size:4rem; 
            opacity:${props => props.loaded ? 1 : 0.3 };
            color:${props => props.cases ? 'var(--light)' : props.death ? 'var(--danger)' : props.recover ? 'var(--success)' : null };
        }
        h4 {
            font-size:1.5rem; 
            opacity:${props => props.loaded ? 1 : 0.2 };
            color:${props => props.cases ? 'var(--light)' : props.death ? 'var(--danger)' : props.recover ? 'var(--success)' : null };
        }
        p {
            border-top-left-radius: 4px;    
            background-color:${props => props.cases ? 'var(--light)' : props.death ? 'var(--danger)' : props.recover ? 'var(--success)' : null };
            position:absolute;
            bottom:0;
            right:0;
            text-transform:uppercase;
            padding:.8rem;
            font-size:1.3rem; 
            opacity:${props => props.loaded ? 1 : 0.2 };
            color:var(--white);
        }
`;
export const Spinner = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    height:80vh;
`;

export const Footer = styled.footer`
  background-color:white !important;
  text-align: center;
  padding: 1.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  a {
    color:var(--primary);
    font-size: 2rem;
  }
`;


export const Table = styled.table`
overflow-x:auto;
width:100%;
    color:var(--primary);
    thead {
        font-size:1.8rem;
    }
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color:var(--secondary);
        color: white;
        border: 1px solid #ddd;
        padding: 8px;
    }
    td {
        font-size:1.5rem;
        padding: 5px;
    }
tr:hover { background-color: #ddd;}
tr:nth-child(odd){background-color: #f2f2f2};
`;