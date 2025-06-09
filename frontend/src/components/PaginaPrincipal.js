import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PaginaPrincipal()
{
    const [valor, setValor] = useState(0);
    const [inputError, setInputError] = useState(false);
    const [porExtenso, setPorExtenso] = useState('');
    const navigate = useNavigate();
    const {valorUrl} = useParams();


    useEffect(() => {
        // Se houver um valor na URL ao carregar o componente, faça a requisição
        if (valorUrl) {
          fetchValorExtenso(valorUrl);
          setValor(valorUrl); 
        }
      }, [valorUrl]);

    const handleClick = async ()=> {
      navigate(`/${valor}`);
    }

    const fetchValorExtenso = async (valor) => {
        try {
          const response = await fetch(`http://localhost:5000/${valor}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setPorExtenso(data.extenso);
          setInputError(false);
        } catch (error) {
          console.error('Erro ao buscar extenso:', error);
          setPorExtenso('O valor deve ser um inteiro de -99999 a 99999! verifique se inseriu o valor correto!');
          setInputError(false);
        }
      };

    return(
        <Container maxWidth="sm" id="content" style={{display: 'flex', flexDirection:'column'}}>
        <img src="number_to_text.svg" alt=''/>
        <h1>Conversor de número para texto</h1>
        <h3>Recebe um valor inteiro de -9999 à 9999 e o transcreve por extenso.</h3>
        
        <TextField id="outlined-basic" label="Insira um número inteiro" value={valor} onChange={(event)=>{setValor(event.target.value)}} required variant="outlined" />
        <p>{porExtenso}</p>
        <Button variant="contained" onClick={handleClick}>Converter</Button>
        </Container>
    );
}

export default PaginaPrincipal;