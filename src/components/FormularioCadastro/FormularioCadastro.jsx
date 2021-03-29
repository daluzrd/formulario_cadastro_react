import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
import Switch from "@material-ui/core/Switch";
import { FormControlLabel, FormGroup } from "@material-ui/core";

function FormularioCadastro() {
	return (
		<form>
			<TextField type="text" label="Nome" variant="outlined" />
			<TextField type="text" label="Sobrenome" variant="outlined" />
			<TextField type="text" label="CPF" variant="outlined" />
			<FormGroup row>
				<FormControlLabel control={<Switch color="primary" />} />
				<label>Promoções</label>
				<FormControlLabel control={<Switch color="primary" />} />
				<label>Novidades</label>
			</FormGroup>
			<Button type="submit" variant="contained" color="primary">
				Cadastrar
			</Button>
		</form>
	);
}

export default FormularioCadastro;
