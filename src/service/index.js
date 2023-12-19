
require('dotenv').config();
const { MailService } = require('@sendgrid/mail');
const LoanRequestEmail = require('../email-templates/loanRequestEmail');
const Loan2RequestEmail = require('../email-templates/loan2RequestEmail');
const ContactRequestEmail = require('../email-templates/contactRequestEmail');

class Service {

    constructor() {
        this.mailService = new MailService();
        this.mailService.setApiKey(process.env.SEND_GRID_API_KEY);
    }

    async loanRequest(data) {
        const html = LoanRequestEmail(data);

        const from = `${process.env.SEMD_GRID_COMPANY_MAIL}`;
        const to = `${process.env.RECIPIENT_MAIL}`;

        //convert the email and password to base64 format
        const message = {
            from,
            to,
            subject: `New Loan Request`,
            html,
        };

        const status = await this.mailService.send(message).then(res => {
            return 'success';
        }).catch(err => {
            console.log('^-^Error : ', err);
            return 'failed';
        })

        return status;
    }

    async loan2Request(data) {
        const html = Loan2RequestEmail(data);

        const from = `${process.env.SEMD_GRID_COMPANY_MAIL}`;
        const to = `${process.env.RECIPIENT_MAIL}`;

        //convert the email and password to base64 format
        const message = {
            from,
            to,
            subject: `New Loan Request`,
            html,
        };

        const status = await this.mailService.send(message).then(res => {
            return 'success';
        }).catch(err => {
            console.log('^-^Error : ', err);
            return 'failed';
        })

        return status;
    }

    async contactRequest(data) {
        const html = ContactRequestEmail(data);

        const from = `${process.env.SEMD_GRID_COMPANY_MAIL}`;
        const to = `${process.env.RECIPIENT_MAIL}`;

        //convert the email and password to base64 format
        const message = {
            from,
            to,
            subject: `Contact Request`,
            html,
        };

        const status = await this.mailService.send(message).then(res => {
            return 'success';
        }).catch(err => {
            console.log('^-^Error : ', err);
            return 'failed';
        })

        return status;
    }


}

module.exports = new Service();

