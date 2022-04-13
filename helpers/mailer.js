const nodemailer = require('nodemailer');
const formatMail = require('./formatMail');

module.exports = async (mailBody, formulario) => {
	try {
		let mailAddressToSent;
	
		if(formulario === 'Orcamento') mailAddressToSent = "orcamentoparticular@hospitalsaocamilosp.org.br"
		if(formulario === 'Visita Técnica') mailAddressToSent = "christiane.padovani@hospitalsaocamilosp.org.br"
		if(formulario === 'Fale Conosco') mailAddressToSent = "sac@hospitalsaocamilosp.org.br"
		if(formulario === 'Fornecedores') mailAddressToSent = "matheus.dias@hospitalsaocamilosp.org.br"
		if(formulario === 'FormGranja') mailAddressToSent = "atendimento.granjaviana@parceirodigital.com.br"
		if(formulario === "0f258527-7d14-44ee-ae27-3ce636f5f321") mailAddressToSent = "marcelobragalemos@gmail.com"
	
		 let transporter = nodemailer.createTransport({
			host: "smtp.office365.com",
			secureConnection: true, 
			port: 587, 
		   auth: {
			 user: process.env.HSC_MAIL,
			 pass: process.env.HSC_PASS,
		   },
		 });
	
		let info = await transporter.sendMail({
			from: process.env.HSC_MAIL,
			to: mailAddressToSent,
			subject: `Formulário [${formulario}]`,
			text: mailBody,
			html: formatMail(mailBody, formulario)
		});

		console.log(`[HSC - Backend ${formulario}] Email enviado para ${mailAddressToSent}.`)
		return true

	} catch (err) {
		console.log(`[HSC - Backend] Email não enviado.`)
		console.log(err)
		return err
	}
}