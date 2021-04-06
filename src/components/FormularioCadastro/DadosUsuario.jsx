import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({ cadastrar }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				cadastrar({email, senha})
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
				value={email}
				onChange={(event) => { setEmail(event.target.value); }}
			/>
			<TextField
				id="senha"
				label="Senha"
				type="password"
				variant="outlined"
				margin="normal"
				fullWidth
				required
				onChange={(event) => { setSenha(event.target.value); }}
			/>
			<Button type="submit" variant="contained" color="primary">
				Cadastrar
			</Button>
		</form>
	);
}

export default DadosUsuario;
