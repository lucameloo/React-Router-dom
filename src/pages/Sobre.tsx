import { Outlet  } from 'react-router-dom';

import './style.css';
import { NotFound } from './notFound';
import { SobreIgor } from './SobreIgor';

export const Sobre = ()=> {
    return (
        <div>
            PAGINA Sobre
            <ul>
                <li>Igor</li>
                <li>Pietro</li>
            </ul>

            <div className='rota'>
             <Outlet/>
            </div>
        </div>
    )
}