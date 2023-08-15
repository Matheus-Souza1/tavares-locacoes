export interface Aluguel
{
  cliente:string,
  dataInicial: string,
  dataFinal: string,
  valorTotal: number,
  rua: string,
  numero: number,
  cidade: string,
  estado: string,
  complemento: string,
  bairro: string
  ferramentas: {
    descricao:string,
    quantidade: number,
    valorDiaria: number
  }
}



