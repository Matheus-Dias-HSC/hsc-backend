module.exports = (formObj, formulario) => {
  const formObjParsed = JSON.parse(formObj);
  let htmlFormData = "";

  switch (formulario) {
    case "Orçamento":
      htmlFormData += `
            <img data-imagetype="External" src="https://www.hospitalsaocamilosp.org.br/SiteAssets/hospital-sao-camilo.png">
            <div style="display: block; color: rgb(0, 0, 0);">
                <h1 style="color: rgb(195, 0, 10); margin-top: 20px; margin-bottom: 20px;">Solicitação de Orçamento</h1>
                <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Dados do(a) Paciente</h2>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Nome do Paciente: </b>${
                  formObjParsed.nomeCompleto ? formObjParsed.nomeCompleto : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Telefone do Paciente: </b>${
                  formObjParsed.telefone ? formObjParsed.telefone : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Email do Paciente: </b>${
                  formObjParsed.email ? formObjParsed.email : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Data de Nascimento: </b>${
                  formObjParsed.dataNascimento
                    ? formObjParsed.dataNascimento
                        .split("-")
                        .reverse()
                        .join("/")
                    : ""
                }</p>
                <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Dados do(a) Médico(a)</h2>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Nome do Médico(a): </b>${
                  formObjParsed.nomeMedico ? formObjParsed.nomeMedico : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>CRM: </b>${
                  formObjParsed.crm ? formObjParsed.crm : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Email do Médico(a): </b>${
                  formObjParsed.emailMedico ? formObjParsed.emailMedico : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Telefone do Médico(a): </b>${
                  formObjParsed.telefoneMedico
                    ? formObjParsed.telefoneMedico
                    : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Especialidade: </b>${
                  formObjParsed.especialidade ? formObjParsed.especialidade : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Celular do Médico(a): </b>${
                  formObjParsed.celularMedico ? formObjParsed.celularMedico : ""
                }</p>
                <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Informações do(s) Procedimento(s)</h2>
                <table style="border: 0px; margin-bottom: 25px;">
                    <tr style="background-color: rgb(105, 105, 105); color: #ffffff; border: 0px;">
                        <th style="text-align: center; padding: 5px;">Código TUSS</th>
                        <th style="text-align: center; padding: 5px;">Nome do Procedimento</th>
                        <th style="text-align: center; padding: 5px;">Cobertura</th>
                    </tr>
            `;
      if (formObjParsed.procedimentosLista.length > 0) {
        formObjParsed.procedimentosLista.forEach((el) => {
          htmlFormData += `
                    <tr>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.codTuss ? el.codTuss : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.nome ? el.nome : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.cobertura ? el.cobertura : ""
                        }</td>
                    </tr>`;
        });
      } else {
        htmlFormData += `
                    <tr>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                    </tr>`;
      }

      htmlFormData += `
                    </table>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Unidade: </b>${
                      formObjParsed.unidade ? formObjParsed.unidade : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Data da Cirurgia: </b>${
                      formObjParsed.dataProcedimento
                        ? formObjParsed.dataProcedimento
                            .split("-")
                            .reverse()
                            .join("/")
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Tipo de Anestesia: </b>${
                      formObjParsed.tipoAnestesia
                        ? formObjParsed.tipoAnestesia
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Tempo de Realização: </b>${
                      formObjParsed.tempoProcedimento
                        ? formObjParsed.tempoProcedimento + " horas"
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Quantidade: </b>${
                      formObjParsed.quantidadeProcedimento
                        ? formObjParsed.quantidadeProcedimento
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Tipos de Acomodação: </b>${
                      formObjParsed.tipoAcomodacao
                        ? formObjParsed.tipoAcomodacao
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Hemoterapia: </b>${
                      formObjParsed.hemoterapia ? formObjParsed.hemoterapia : ""
                    } ${
        formObjParsed.hemoterapia === "Sim"
          ? " (Tipo/Quantidade: " + formObjParsed.hemoterapiaQtd + ")"
          : ""
      }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Anatomia Patológica: </b>${
                      formObjParsed.anatomiaPatologica
                        ? formObjParsed.anatomiaPatologica
                        : ""
                    } ${
        formObjParsed.anatomiaPatologica === "Sim"
          ? " (Tipo/Quantidade: " + formObjParsed.anatomiaPatologicaTipo + ")"
          : ""
      }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Congelação: </b>${
                      formObjParsed.congelacao ? formObjParsed.congelacao : ""
                    } ${
        formObjParsed.congelacao === "Sim"
          ? " (Tipo/Quantidade: " + formObjParsed.congelacaoQtd + ")"
          : ""
      }</p>
                    <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Órteses, Próteses e Materiais Especiais - OPMES</h2>
                    <table style="border: 0px; margin-bottom: 25px;">
                    <tr style="background-color: rgb(105, 105, 105); color: #ffffff; border: 0px;">
                        <th style="text-align: center; padding: 5px;">Fornecedor</th>
                        <th style="text-align: center; padding: 5px;">Modelo</th>
                        <th style="text-align: center; padding: 5px;">Quantidade</th>
                        <th style="text-align: center; padding: 5px;">Descrição</th>
                    </tr>
                `;

      if (formObjParsed.opmesList.length > 0) {
        formObjParsed.opmesList.forEach((el) => {
          htmlFormData += `
                    <tr>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.fornecedor ? el.fornecedor : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.modelo ? el.modelo : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.quantidade ? el.quantidade : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.descricaoMaterial ? el.descricaoMaterial : ""
                        }</td>
                    </tr>`;
        });
      } else {
        htmlFormData += `
                    <tr>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                    </tr>`;
      }

      htmlFormData += `
                    </table>
                    <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Informações Adicionais</h2>
                    <p style="line-height: 20px; color: rgb(0, 0, 0); width: 50%;"><b>Observações: </b>${
                      formObjParsed.observacoes ? formObjParsed.observacoes : ""
                    }</p>
                </div>
            </div>
            `;
      break;
    case "Orcamento":
      htmlFormData += `
            <img data-imagetype="External" src="https://www.hospitalsaocamilosp.org.br/SiteAssets/hospital-sao-camilo.png">
            <div style="display: block; color: rgb(0, 0, 0);">
                <h1 style="color: rgb(195, 0, 10); margin-top: 20px; margin-bottom: 20px;">Solicitação de Orçamento</h1>
                <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Dados do(a) Paciente</h2>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Nome do Paciente: </b>${
                  formObjParsed.nomeCompleto ? formObjParsed.nomeCompleto : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Telefone do Paciente: </b>${
                  formObjParsed.telefone ? formObjParsed.telefone : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Email do Paciente: </b>${
                  formObjParsed.email ? formObjParsed.email : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Data de Nascimento: </b>${
                  formObjParsed.dataNascimento
                    ? formObjParsed.dataNascimento
                        .split("-")
                        .reverse()
                        .join("/")
                    : ""
                }</p>
                <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Dados do(a) Médico(a)</h2>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Nome do Médico(a): </b>${
                  formObjParsed.nomeMedico ? formObjParsed.nomeMedico : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>CRM: </b>${
                  formObjParsed.crm ? formObjParsed.crm : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Email do Médico(a): </b>${
                  formObjParsed.emailMedico ? formObjParsed.emailMedico : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Telefone do Médico(a): </b>${
                  formObjParsed.telefoneMedico
                    ? formObjParsed.telefoneMedico
                    : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Especialidade: </b>${
                  formObjParsed.especialidade ? formObjParsed.especialidade : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Celular do Médico(a): </b>${
                  formObjParsed.celularMedico ? formObjParsed.celularMedico : ""
                }</p>
                <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Informações do(s) Procedimento(s)</h2>
                <table style="border: 0px; margin-bottom: 25px;">
                    <tr style="background-color: rgb(105, 105, 105); color: #ffffff; border: 0px;">
                        <th style="text-align: center; padding: 5px;">Código TUSS</th>
                        <th style="text-align: center; padding: 5px;">Nome do Procedimento</th>
                        <th style="text-align: center; padding: 5px;">Cobertura</th>
                    </tr>
            `;
      if (formObjParsed.procedimentosLista.length > 0) {
        formObjParsed.procedimentosLista.forEach((el) => {
          htmlFormData += `
                    <tr>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.codTuss ? el.codTuss : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.nome ? el.nome : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.cobertura ? el.cobertura : ""
                        }</td>
                    </tr>`;
        });
      } else {
        htmlFormData += `
                    <tr>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                    </tr>`;
      }

      htmlFormData += `
                    </table>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Unidade: </b>${
                      formObjParsed.unidade ? formObjParsed.unidade : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Data da Cirurgia: </b>${
                      formObjParsed.dataProcedimento
                        ? formObjParsed.dataProcedimento
                            .split("-")
                            .reverse()
                            .join("/")
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Tipo de Anestesia: </b>${
                      formObjParsed.tipoAnestesia
                        ? formObjParsed.tipoAnestesia
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Tempo de Realização: </b>${
                      formObjParsed.tempoProcedimento
                        ? formObjParsed.tempoProcedimento + " hora(s)"
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Quantidade: </b>${
                      formObjParsed.quantidadeProcedimento
                        ? formObjParsed.quantidadeProcedimento
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Tipos de Acomodação: </b>${
                      formObjParsed.tipoAcomodacao
                        ? formObjParsed.tipoAcomodacao
                        : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Hemoterapia: </b>${
                      formObjParsed.hemoterapia ? formObjParsed.hemoterapia : ""
                    } ${
        formObjParsed.hemoterapia === "Sim"
          ? " (Tipo/Quantidade: " + formObjParsed.hemoterapiaQtd + ")"
          : ""
      }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Anatomia Patológica: </b>${
                      formObjParsed.anatomiaPatologica
                        ? formObjParsed.anatomiaPatologica
                        : ""
                    } ${
        formObjParsed.anatomiaPatologica === "Sim"
          ? " (Tipo/Quantidade: " + formObjParsed.anatomiaPatologicaTipo + ")"
          : ""
      }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Congelação: </b>${
                      formObjParsed.congelacao ? formObjParsed.congelacao : ""
                    } ${
        formObjParsed.congelacao === "Sim"
          ? " (Tipo/Quantidade: " + formObjParsed.congelacaoQtd + ")"
          : ""
      }</p>
                    <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Órteses, Próteses e Materiais Especiais - OPMES</h2>
                    <table style="border: 0px; margin-bottom: 25px;">
                    <tr style="background-color: rgb(105, 105, 105); color: #ffffff; border: 0px;">
                        <th style="text-align: center; padding: 5px;">Fornecedor</th>
                        <th style="text-align: center; padding: 5px;">Modelo</th>
                        <th style="text-align: center; padding: 5px;">Quantidade</th>
                        <th style="text-align: center; padding: 5px;">Descrição</th>
                    </tr>
                `;

      if (formObjParsed.opmesList.length > 0) {
        formObjParsed.opmesList.forEach((el) => {
          htmlFormData += `
                    <tr>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.fornecedor ? el.fornecedor : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.modelo ? el.modelo : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.quantidade ? el.quantidade : ""
                        }</td>
                        <td style="text-align: left; padding: 5px 30px;">${
                          el.descricaoMaterial ? el.descricaoMaterial : ""
                        }</td>
                    </tr>`;
        });
      } else {
        htmlFormData += `
                    <tr>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                        <td style="text-align: left; padding: 5px 30px;"> --- </td>
                    </tr>`;
      }

      htmlFormData += `
                    </table>
                    <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Informações Adicionais</h2>
                    <p style="line-height: 20px; color: rgb(0, 0, 0); width: 50%;"><b>Observações: </b>${
                      formObjParsed.observacoes ? formObjParsed.observacoes : ""
                    }</p>
                </div>
            </div>
            `;
      break;
    case "Visita Técnica":
      htmlFormData += `
            <img data-imagetype="External" src="https://www.hospitalsaocamilosp.org.br/SiteAssets/hospital-sao-camilo.png">
            <div style="display: block; color: rgb(0, 0, 0);">
                <h1 style="color: rgb(195, 0, 10); margin-top: 20px; margin-bottom: 20px;">Solicitação de Visita Técnica</h1>
                <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Dados do(a) Solicitante</h2>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Nome Completo: </b>${
                  formObjParsed.nomeCompleto ? formObjParsed.nomeCompleto : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Empresa: </b>${
                  formObjParsed.empresa ? formObjParsed.empresa : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>CNPJ: </b>${
                  formObjParsed.cnpj ? formObjParsed.cnpj : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Profissão: </b>${
                  formObjParsed.profissao ? formObjParsed.profissao : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Cargo: </b>${
                  formObjParsed.cargo ? formObjParsed.cargo : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Telefone: </b>${
                  formObjParsed.telefone ? formObjParsed.telefone : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Departamento: </b>${
                  formObjParsed.departamento ? formObjParsed.departamento : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Endereço Comercial: </b>${
                  formObjParsed.enderecoComercial
                    ? formObjParsed.enderecoComercial
                    : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Cidade: </b>${
                  formObjParsed.cidade ? formObjParsed.cidade : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>CEP: </b>${
                  formObjParsed.cep ? formObjParsed.cep : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Email Comercial: </b>${
                  formObjParsed.emailComercial
                    ? formObjParsed.emailComercial
                    : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Interesse da Visita: </b>${
                  formObjParsed.interesseVisita
                    ? formObjParsed.interesseVisita
                    : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Área(s) que deseja visitar: </b>${
                  formObjParsed.areasVisita ? formObjParsed.areasVisita : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Data que deseja visitar: </b>${
                  formObjParsed.dataVisita ? formObjParsed.dataVisita : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Hora que deseja visitar: </b>${
                  formObjParsed.horaVisita ? formObjParsed.horaVisita : ""
                }</p>
                <p style="line-height: 20px; color: rgb(0, 0, 0); width: 50%;"><b>Observações: </b>${
                  formObjParsed.observacoes ? formObjParsed.observacoes : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Quantidade de Visitantes: </b>${
                  formObjParsed.qtdVisitantes ? formObjParsed.qtdVisitantes : ""
                }</p>
                ${
                  formObjParsed.visitante1
                    ? '<p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Visitante 1: </b>' +
                      formObjParsed.visitante1 +
                      "</p>"
                    : ""
                }
                ${
                  formObjParsed.visitante2
                    ? '<p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Visitante 2: </b>' +
                      formObjParsed.visitante2 +
                      "</p>"
                    : ""
                }
                ${
                  formObjParsed.visitante3
                    ? '<p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Visitante 3: </b>' +
                      formObjParsed.visitante3 +
                      "</p>"
                    : ""
                }
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>UF: </b>${
                  formObjParsed.uf ? formObjParsed.uf : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Unidade: </b>${
                  formObjParsed.unidade ? formObjParsed.unidade : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Período da Visita: </b>${
                  formObjParsed.periodoVisita ? formObjParsed.periodoVisita : ""
                }</p>
            </div>
            `;
      break;

    case "Fale Conosco":
      htmlFormData += `
            <img data-imagetype="External" src="https://www.hospitalsaocamilosp.org.br/SiteAssets/hospital-sao-camilo.png">
            <div style="display: block; color: rgb(0, 0, 0);">
                <h1 style="color: rgb(195, 0, 10); margin-top: 20px; margin-bottom: 20px;">Formulário Fale Conosco</h1>
                <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Dados do(a) Solicitante</h2>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Nome Completo: </b>${
                  formObjParsed.nomeCompleto ? formObjParsed.nomeCompleto : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Email: </b>${
                  formObjParsed.email ? formObjParsed.email : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Telefone: </b>${
                  formObjParsed.telefone ? formObjParsed.telefone : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Assunto: </b>${
                  formObjParsed.assunto ? formObjParsed.assunto : ""
                }</p>
                <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Unidade: </b>${
                  formObjParsed.unidade ? formObjParsed.unidade : ""
                }</p>
                <p style="line-height: 20px; color: rgb(0, 0, 0); width: 50%;"><b>Mensagem: </b>${
                  formObjParsed.mensagem ? formObjParsed.mensagem : ""
                }</p>
            </div>
            `;
      break;
    case "FormGranja":
      htmlFormData += `
                <img data-imagetype="External" src="https://www.hospitalsaocamilosp.org.br/SiteAssets/hospital-sao-camilo.png">
                <div style="display: block; color: rgb(0, 0, 0);">
                    <h1 style="color: rgb(195, 0, 10); margin-top: 20px; margin-bottom: 20px;">Formulário de Contato Granja Viana</h1>
                    <h2 style="color: rgb(105, 105, 105); margin-top: 25px; margin-bottom: 25px;">Dados do(a) Contato</h2>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Nome: </b>${
                      formObjParsed.nome ? formObjParsed.nome : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Sobrenome: </b>${
                      formObjParsed.sobrenome ? formObjParsed.sobrenome : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Email: </b>${
                      formObjParsed.email ? formObjParsed.email : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Telefone: </b>${
                      formObjParsed.telefone ? formObjParsed.telefone : ""
                    }</p>
                    <p style="line-height: 10px; color: rgb(0, 0, 0);"><b>Assunto: </b>${
                      formObjParsed.assunto ? formObjParsed.assunto : ""
                    }</p>
                    <p style="line-height: 20px; color: rgb(0, 0, 0); width: 50%;"><b>Mensagem: </b>${
                      formObjParsed.mensagem ? formObjParsed.mensagem : ""
                    }</p>
                </div>
                `;
      break;
    default:
      for (let key in formObjParsed) {
        if (formObjParsed.hasOwnProperty(key)) {
          htmlFormData += `<p><b>${key}:</b> ${JSON.stringify(
            formObjParsed[key]
          )}</p>`;
        }
      }
      break;
  }

  return htmlFormData;
};
