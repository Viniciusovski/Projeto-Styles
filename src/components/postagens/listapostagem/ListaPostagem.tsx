import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(() => {
    if (token == "") {
      alert("VocÃª precisa estar logado")
      history.push("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} >
            <Card variant="outlined" className="card">
              <CardContent className="cardContent">
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>                
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>

                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>

                <Box className="texto">
                <Typography variant="body2" component="p">Local: </Typography>
                <Typography variant="body2" component="p">
                  {post.local}
                </Typography>                

                </Box>

                <Box className="texto">
                <Typography variant="body2" component="p">Tema: </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
                </Box>               
                
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;