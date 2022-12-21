import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { CATEGORIES } from "../constants/index";
import useNews from "../hooks/useNews";
const Formulario = () => {
  const { category, handleChangeCategory } = useNews();
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select label="Category" onChange={(e) => handleChangeCategory(e)}>
          {CATEGORIES.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
        <Box sx={{ marginTop: 2 }}>
          <Button fullWidth variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default Formulario;
