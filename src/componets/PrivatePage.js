import { useNavigate } from 'react-router-dom';
import{ Top, ContainerPrivatePage } from './common/index.js';

function renderError(navigate) {
  localStorage.clear('mywallet');
  setTimeout(()=> navigate('/'), 3000);
  return <h1>ACESSO NÂO AUTORIZADO! FAÇA LOGIN!</h1>;
}

export default function PrivatePage({ children }) {
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem('mywallet'));
    if (!auth) {
        return renderError(navigate);
    }
    
    return (
    <>
        <Top />
        <ContainerPrivatePage>
            {children}
        </ContainerPrivatePage>
    </>
    );
}