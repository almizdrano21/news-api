import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const New = ({ info }) => {
  const { urlToImage, url, title, description, source } = info;
  return (
    <Grid item md={6} lg={4} gap="small">
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`Image of ${title}`}
            image={urlToImage}
            height={"250"}
          />
        )}
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width="100%"
            textAlign={"center"}
            sx={{ textDecoration: "none" }}
          >
            Read
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default New;
