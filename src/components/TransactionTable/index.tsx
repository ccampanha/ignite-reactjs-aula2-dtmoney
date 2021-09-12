import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable () {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>26/08/2021</td>                        
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$2.000,00</td>
            <td>Desenvolvimento</td>
            <td>26/08/2021</td>            
          </tr>
          <tr>
            <td>Seguro</td>
            <td className="withdraw">-R$400,00</td>
            <td>Desenvolvimento</td>
            <td>26/08/2021</td>            
          </tr>
          <tr>
            <td>Manutenção de Website</td>
            <td className="deposit">R$500,00</td>
            <td>Desenvolvimento</td>
            <td>26/08/2021</td>    
          </tr>
        </tbody>
      </table>
    </Container>
  )
}