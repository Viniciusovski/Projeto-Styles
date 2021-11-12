import Tema from './Tema'

interface Postagem{
    id: number;
    nome: string;
    descricao: string;
    tema?: Tema| null
}

export default Postagem;