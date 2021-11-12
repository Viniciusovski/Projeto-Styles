import React from "react";
import "./Home.css";
import { Box, Container, Paper, Button, Typography, Grid } from "@material-ui/core";

function Home() {
    return (
        <> 
        <Box className="cor">
        <Grid container className="container">
            
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>
                </Box>
           
            <Grid item xs={12}>
               
                <Box className="image">

                   
                </Box>
            </Grid>
        </Grid>

        <Grid container className="container">
            <Grid item xs={6}>
                <Box paddingX={2} >
                    <Typography 
                    className="font"
                    variant="h5" 
                    component="h5" >
    
                    Somos oque somos para um futuro melhor 
                    
                    </Typography>
                        <Typography variant="h6"  component="h6" align="center" className='font'>Pokémon elétricos são um dos tipos mais fortes em Pokémon Go porque eles têm apenas uma fraqueza real (Pokémon terrestre). Seus ataques são potencializados pelo tempo chuvoso, então espere ver muitos outros treinadores usando-os se o tempo for previsível. </Typography>
    
                  

                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>

                </Box>
            </Grid>

            <Grid item xs={6} >
                <Box p={1}>
                    <img src="https://res.cloudinary.com/generation/image/upload/w_900,h_700,c_fill,q_auto:eco/brazil/2019/08/190603-GENERATION-469-1.jpg" alt="Eletric Pokemon" min-width='750px' height="450px" />
                </Box>
            </Grid>
        </Grid>

        <Grid container className="container">
            <Grid item xs={6}>
                <Box paddingX={2} >
                    <Typography 
                    className="font"
                    variant="h5" 
                    component="h5" >
    
                    Somos oque somos para um futuro melhor 
                    
                    </Typography>
                        <Typography variant="h6"  component="h6" align="center" className='font'>Pokémon elétricos são um dos tipos mais fortes em Pokémon Go porque eles têm apenas uma fraqueza real (Pokémon terrestre). Seus ataques são potencializados pelo tempo chuvoso, então espere ver muitos outros treinadores usando-os se o tempo for previsível. </Typography>
    
                  

                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>

                </Box>
            </Grid>

            <Grid item xs={6} >
                <Box p={1}>
                    <img src="https://res.cloudinary.com/generation/image/upload/w_900,h_700,c_fill,q_auto:eco/brazil/2019/08/190603-GENERATION-469-1.jpg" alt="Eletric Pokemon" min-width='750px' height="450px" />
                </Box>
            </Grid>
        </Grid>

        <Grid container className="container">
            <Grid item xs={6}>
                <Box paddingX={2} >
                    <Typography 
                    className="font"
                    variant="h5" 
                    component="h5" >
    
                    Somos oque somos para um futuro melhor 
                    
                    </Typography>
                        <Typography variant="h6"  component="h6" align="center" className='font'>Pokémon elétricos são um dos tipos mais fortes em Pokémon Go porque eles têm apenas uma fraqueza real (Pokémon terrestre). Seus ataques são potencializados pelo tempo chuvoso, então espere ver muitos outros treinadores usando-os se o tempo for previsível. </Typography>
    
                  

                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>

                </Box>
            </Grid>

            <Grid item xs={4} >
                <Box p={1}>
                    <img src="https://res.cloudinary.com/generation/image/upload/w_900,h_700,c_fill,q_auto:eco/brazil/2019/08/190603-GENERATION-469-1.jpg" alt="Eletric Pokemon" min-width='750px' height="450px" />
                </Box>
            </Grid>
        </Grid>

        <Grid container className="container">
            <Grid item xs={12}>
                <Box paddingX={2} >
                    <Typography 
                    className="font"
                    variant="h5" 
                    component="h5" >
    
                    Somos oque somos para um futuro melhor 
                    
                    </Typography>
                        <Typography variant="h6"  component="h6" align="center" className='font'>Pokémon elétricos são um dos tipos mais fortes em Pokémon Go porque eles têm apenas uma fraqueza real (Pokémon terrestre). Seus ataques são potencializados pelo tempo chuvoso, então espere ver muitos outros treinadores usando-os se o tempo for previsível. </Typography>
    
                  

                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>

                </Box>
            </Grid>

            <Grid item xs={6} >
                <Box p={1}>
                    <img src="https://res.cloudinary.com/generation/image/upload/w_900,h_700,c_fill,q_auto:eco/brazil/2019/08/190603-GENERATION-469-1.jpg" alt="Eletric Pokemon" min-width='750px' height="450px" />
                </Box>
            </Grid>
        </Grid>
        </Box>
       
        </>
    );

}

export default Home;