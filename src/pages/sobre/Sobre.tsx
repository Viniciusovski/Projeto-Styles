import { Grid, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import "./Sobre.css";

function Sobre() {
  return (
    <div>
      <Box className="image-top" display="flex" alignItems="flex-end">
        <h1 className="txtH1">
          Conectando a comunidade em prol de sanemaneto básico para todos.
        </h1>
      </Box>
      <Grid
        container
        direction="row"        
        display="flex" 
        justifyContent="space-between"       
        alignItems="center"
        className="caixa"
        margin-right={3}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h2"
              align="left"
              className="titulo"
            >
              Apoiando a comunidade e a inovação
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
          </Box>
        </Grid>
        <Grid item xs={6} className="about" display="flex" alignItems="center">
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="p"
            align="left"
            className="titulo"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Debitis
            dolorum quisquam modi quia. Tempore, quo temporibus eos iste ipsa
            suscipit voluptatum nulla commodi qui fuga, consequatur culpa a
            atque nostrum. 
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Suscipit voluptate eius commodi maiores repellat ipsa ipsam.
            Debitis animi dicta corporis aperiam veniam nemo molestiae, sed qui
            dignissimos labore autem voluptatum.
          </Typography>
        </Grid>
        <Grid xs={12} className="postagens"></Grid>
      </Grid>
    </div>
  );
}

export default Sobre;
