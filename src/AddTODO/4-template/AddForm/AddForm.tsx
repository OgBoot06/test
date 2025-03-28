//********** Imports **********//
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddFormProps } from "./AddForm.types";

//********** Component **********//
const AddForm = (props: AddFormProps) => {
  const { onSubmitClick } = props;
  const [todo, setTodo] = useState<string>();

  const handleClick = () => {
    if (onSubmitClick && todo && todo !== "") {
      onSubmitClick(todo);
      setTodo("");
    }
  };
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
      data-testid="AddTODOFormBox"
    >
      <div>
        <Typography variant="h6" marginLeft={1}>
          Ajouter une tâche
        </Typography>
        <TextField
          data-testid="AddTODOFormField"
          required
          id="outlined-required"
          label="Tâche"
          fullWidth
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
        />
      </div>
      <div style={{ marginLeft: 10 }}>
        <Button
          variant="contained"
          data-testid="AddTODOFormButton"
          onClick={handleClick}
        >
          Ajouter
        </Button>
      </div>
    </Box>
  );
};
AddForm.displayName = "AddForm";
export default AddForm;
