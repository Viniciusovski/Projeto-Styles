import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import "./Contato.css";

function Contato() {
  return (
    <Grid container direction="column" alignContent="center">
      <Box className="contato">
        <Box>
          <h1>Nome:</h1>
          <p> email: </p>
          <input type="Mensagem" />
          <p>conteudo:</p>
          <input type="Mensagem" />
          <h2>Mensagem:</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            impedit, expedita quia maiores quod nam dolor ab beatae id,
            voluptatum veniam. Minus sit a ex pariatur. Odio nesciunt fugiat
            dolorem!
          </p>
          <Box>
            <input type="Mensagem" />
            <button>envio</button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Contato;
