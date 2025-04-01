import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const Search = ({ entries }) => {
  const [search, setSearch] = useState("");
  const filteredEntries = entries
    .filter((entry) => entry.task.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.task.toLowerCase().localeCompare(b.task.toLowerCase()));
  console.log(filteredEntries);

  return (
    <Autocomplete
      freeSolo
      options={filteredEntries}
      getOptionLabel={(option) => option.task}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Sort by name"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      onInputChange={(event, newValue) => setSearch(newValue)}
      sx={{ width: "70%" }}
    />
  );
};

export default Search;
