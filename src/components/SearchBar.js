import { IconButton, InputAdornment, TextField } from "@mui/material";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
function SearchBarCmp() {
  return (
    <div>
      <TextField 
        style = {{width:700}}
        variant="outlined"
        placeholder="Search"
        className="inputRounded"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
export default SearchBarCmp;
