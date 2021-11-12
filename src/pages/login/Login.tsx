import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React, { ChangeEvent, useState, useEffect } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import { Link, useHistory } from 'react-router-dom';
import Userlogin from '../../models/UserLogin';
import { api } from '../../services/Service';
import './Login.css';

function Login() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<Userlogin>(
    {
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

        useEffect(() => {
            if(token != ''){
                history.push('/home')
            }

        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try{

            await login(`/usuarios/logar`, userLogin, setToken)
            

            alert('Usuario logado com sucesso!');

        } catch(error){
            alert('dados do usuario inconsistentes!!!')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid alignItems='center' xs={6}>
            <Box paddingX={20}>
                <form onSubmit={onSubmit}>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>

                    <TextField 
                    value={userLogin.usuario}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='usuario' 
                    label='usuario' 
                    variant='outlined' 
                    name='usuario' 
                    margin='normal' 
                    fullWidth />

                    <TextField 
                    value={userLogin.senha}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='senha' 
                    label='senha' 
                    variant='outlined' 
                    name='senha' 
                    margin='normal' 
                    type='password' 
                    fullWidth />

                    <Box marginTop={2} textAlign='center'>
                        
                        <Button type='submit' variant='contained' color='primary'>
                            Logar
                        </Button>
                        
                    </Box>
                </form>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                    </Box>
                    <Link to="/cadastro">
                    <Typography variant='subtitle1' gutterBottom align='center' className='textos1 text-decorator-none'>Cadastre-se</Typography>
                    </Link>
                </Box>
            </Box>
        </Grid>

    </Grid>
    )
}

export default Login
