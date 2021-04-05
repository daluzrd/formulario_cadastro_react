import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosEntrega() {
	return (
		<form>
			<TextField
				id="cep"
				label="CEP"
				type="text"
				variant="outlined"
				margin="normal"
				required
			/>
            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
			<TextField
				id="numero"
				label="Número"
				type="text"
				variant="outlined"
				margin="normal"
				required
			/>
			<TextField
				id="bairro"
				label="Bairro"
				type="text"
				variant="outlined"
				margin="normal"
				required
			/>
			<TextField
				id="cidade"
				label="Cidade"
				type="text"
				variant="outlined"
				margin="normal"				
				required
			/>
			<Button type="submit" variant="contained" color="primary" fullWidth>
				Finalizar Cadastro
			</Button>
		</form>
	);
}

export default DadosEntrega;
