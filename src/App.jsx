import { Container, Select, Typography } from "@mui/material";
const App = () => {
  return (
    <Container>
      <header>
        <Typography align="center" marginY={5} component="h1" variant="h3">
          Buscador de noticias
        </Typography>
      </header>
      <Select>
        <option></option>
      </Select>
    </Container>
  );
};

export default App;
