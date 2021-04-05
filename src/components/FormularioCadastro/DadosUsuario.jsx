import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario({ setEtapa }) {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				setEtapa(1);
			}}
		>
			<TextField
				id="email"
				type="email"
				label="E-mail"
				variant="outlined"
				margin="normal"
				fullWidth
				required
			/>
			<TextField
				id="senha"
				label="Senha"
				type="password"
				variant="outlined"
				margin="normal"
				fullWidth
				required
			/>
			<Button type="submit" variant="contained" color="primary">
				Cadastrar
			</Button>
		</form>
	);
}

export default DadosUsuario;
