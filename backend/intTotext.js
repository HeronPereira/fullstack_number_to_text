function numeroParaTexto(value)
{
    if(typeof(value)=='number')
    {
        // é numérico
        if(value % 1 === 0)
        {
            // é inteiro
           
            let numeroPorExtenso = "";

            if (value == 0)
            {
                // se é zero já retorna zero
                return 'zero'
            }
            else
            {
                  // inicia com o valor absoluto
                const valor_absoluto = Math.abs(value);

                if ( valor_absoluto > 99999)
                {
                    return('must be between -99999 and 99999');
                }
                

                // separa a dezena de milhar
                const dezena_de_milhar = Math.trunc(valor_absoluto / 1000);

                // separa o valor na casa das centenas
                const centenas = valor_absoluto - (dezena_de_milhar*1000);


                if((dezena_de_milhar < 9) && (dezena_de_milhar > 0))
                {
                    // dezena de milhar menor que 10 adiciona apenas a unidade e aciona o flag
                    numeroPorExtenso += unidadeToText(dezena_de_milhar) + ' mil';
                    
                }
                else if (dezena_de_milhar > 9)
                {
                    // adiciona o valor de dezena de milhar do número
                    numeroPorExtenso += dezenaToText(dezena_de_milhar);
                    
                    //  verifica se há unidades dentro desta dezena
                    const unidade_de_milhar = dezena_de_milhar % 10;
                    
                    if(unidade_de_milhar > 0)
                    {
                        // se houver adiciona 'e' junto com seu correspondente de milhar
                        numeroPorExtenso += ' e ' + unidadeToText(unidade_de_milhar);
                    }

                    // completa a parte dos milhares adicionando mil
                    numeroPorExtenso += ' mil';
                }
                else
                {
                    // Não há informação nos milhares, não faz nada
                }

                // verifica se há valores nas centenas
                if (centenas >= 100)
                {
                    // se houver centenas e já tiver transcrição anteriores adiciona a centena com 'e'
                    if (numeroPorExtenso.length > 0)
                    {
                        numeroPorExtenso += ' e ' + centenaToText(centenas);
                    }
                    else
                    {
                        // caso contrário apenas as centenas
                        numeroPorExtenso += centenaToText(centenas);  
                    }
                }
                
                // separa as dezenas. Ex. (212 - (truncado(212/100) = 2 * 100 = 200) = 12
                const dezenas = centenas - (Math.trunc(centenas / 100)*100)

                // se houverem dezenas
                if(dezenas >= 10)
                {
                    // verifica se já tem texto e preenche com (ou sem) 'e' mais o valor de dezena
                    if(numeroPorExtenso.length > 0)
                    {
                        numeroPorExtenso += ' e ' + dezenaToText(dezenas);
                    }
                    else
                    {
                        numeroPorExtenso += dezenaToText(dezenas);
                    }
                }

                unidades = dezenas - (Math.trunc(dezenas/10)*10);

                // se houverem unidades restantes
                if((Math.trunc(dezenas / 10) != 1)&&(unidades > 0))
                {
                    // verifica se já tem texto e preenche com (ou sem) 'e' mais o valor de unidade
                    if(numeroPorExtenso.length > 0)
                    {
                        numeroPorExtenso += ' e ' + unidadeToText(unidades);
                    }
                    else
                    {
                        numeroPorExtenso += unidadeToText(unidades);
                    }
                }

                if (value < 0)
                {
                    // se menor que zero é negativo, adiciona menos no começo
                    numeroPorExtenso = 'menos ' + numeroPorExtenso;
                }

                return numeroPorExtenso;
            }
         
            
        }
        else
        {
            return 'must be an integer';
        }

    }
    else
    {
        return 'must be a number';
    }
}


function unidadeToText(unidade)
{
    const unidades_extenso = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    return unidades_extenso[unidade];
   
}

function dezenaToText(dezena)
{
    const entreDezeVinte_extenso = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    const dezenas_extenso = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    
    const pos_maior = Math.trunc(dezena / 10)
    
    if(dezena < 20)
    {
        const pos_menor = dezena - (pos_maior * 10);
        return entreDezeVinte_extenso[pos_menor];
        
    }
    else
    {
        
        return dezenas_extenso[pos_maior]
    }
}


function centenaToText(centena)
{
    const centenas_extenso = ['cem', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

    if (centena == 100)
    {
        return centenas_extenso[0];
    }
    else if (centena < 200)
    {
        return centenas_extenso[1];
    }
    else
    {
        const pos = Math.trunc(centena / 100);
        return centenas_extenso[pos];
    }
}


module.exports = {numeroParaTexto, unidadeToText, dezenaToText, centenaToText};