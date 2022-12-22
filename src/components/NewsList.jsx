import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useNews from "../hooks/useNews";
import New from "./New";
const NewsList = () => {
  const { news } = useNews();
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
    </>
  );
};

export default NewsList;
