import { Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import DadosEntrega from "./DadosEntrega.jsx";
import DadosPessoais from "./DadosPessoais.jsx";
import DadosUsuario from "./DadosUsuario.jsx";

function FormularioCadastro({ cadastrar }) {
	const [etapaAtual, setEtapaAtual] = useState(0);

	function formularioAtual(etapa) {
		switch (etapa) {
			case 0:
				return <DadosUsuario setEtapa={setEtapaAtual} />;
			case 1:
				return <DadosPessoais cadastrar={cadastrar} setEtapa={setEtapaAtual} />;
			case 2:
				return <DadosEntrega setEtapa={setEtapaAtual} />;
			default:
				return <Typography>Erro ao selecionar formulário</Typography>;
		}
	}

	return <Fragment>{formularioAtual(etapaAtual)}</Fragment>;
}

export default FormularioCadastro;
