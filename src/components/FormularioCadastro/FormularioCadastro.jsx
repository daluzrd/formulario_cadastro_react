import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega.jsx";
import DadosPessoais from "./DadosPessoais.jsx";
import DadosUsuario from "./DadosUsuario.jsx";

function FormularioCadastro({ cadastrar }) {
	const [etapaAtual, setEtapaAtual] = useState(0);
	const [dadosUsuario, setDadosUsuario] = useState({});
	const [dadosPessoais, setDadosPessoais] = useState({});
	const [dadosEntrega, setDadosEntrega] = useState({});
	const formularios = [
		<DadosUsuario cadastrar={proximoForm} />,
		<DadosPessoais cadastrar={proximoForm} />,
		<DadosEntrega cadastrar={proximoForm} />,
		<Typography>Cadastro finalizado com sucesso!</Typography>,
		<Typography>Erro ao selecionar formulário</Typography>
	];

	useEffect(() => {
		if (etapaAtual === 3)
			cadastrar({ dadosUsuario, dadosPessoais, dadosEntrega });
	}, [etapaAtual]); //eslint-disable-line

	function proximoForm(dados) {
		if (etapaAtual === 0) setDadosUsuario(dados);
		else if (etapaAtual === 1) setDadosPessoais(dados);
		else if (etapaAtual === 2) setDadosEntrega(dados);
		setEtapaAtual(etapaAtual + 1);
	}

	return formularios[etapaAtual];
}

export default FormularioCadastro;
