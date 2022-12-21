import { Container, Grid, Select, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import { NewsProvider } from "./context/NewsProvider";
const App = () => {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            News lookup
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent={"center"}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Formulario />
          </Grid>
        </Grid>
      </Container>
    </NewsProvider>
  );
};

export default App;
