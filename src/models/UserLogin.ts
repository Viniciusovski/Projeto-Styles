import { tokenToString } from "typescript";

interface Userlogin
{
    id: number;
    usuario: string;
    senha: string;
    token?: string| null; 
    
}

export default Userlogin;