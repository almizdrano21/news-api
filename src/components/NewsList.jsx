import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useNews from "../hooks/useNews";
import New from "./New";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const NewsList = () => {
  const { news, amount, handleChangePage } = useNews();
  const totalPages = Math.ceil(amount / 20);

  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Latest news
      </Typography>
      <Grid container spacing={2}>
        {news.map((x) => (
          <New key={x.url} info={x} />
        ))}
      </Grid>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        sx={{ marginY: 5 }}
      >
        <Pagination
          count={totalPages}
          color="primary"
          onChange={(e) => handleChangePage(e)}
        />
      </Stack>
    </>
  );
};

export default NewsList;
