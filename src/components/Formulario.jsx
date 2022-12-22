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
        <Select
          label="Category"
          onChange={(e) => handleChangeCategory(e)}
          defaultValue="general"
        >
          {CATEGORIES.map((category, i) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Formulario;
