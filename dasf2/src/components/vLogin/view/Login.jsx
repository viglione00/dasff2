import '../vLogin.css';
import React, {useState} from 'react';
import BoxLogin from '../component/BoxLogin';

function Login ({onChangeView}) {

    
    const [nextView, setNextView] = useState('');
    return (
    <div className='divView'>
        
        <BoxLogin onChangeView={ onChangeView } />
    </div>

    )
}
export default Login;