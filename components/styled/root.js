import styled from 'styled-components';


export const Container = styled.main`
    max-width: 1300px;
    width: 100%;
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