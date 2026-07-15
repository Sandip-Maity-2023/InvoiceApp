import {Resend} from "resend";

const resend=new Resend(process.env.AUTH_RESEND_KEY);


export async function sendEmail(to:string,subject:string,reactHtml:any) {

const {data,error}=await resend.emails.send({
    from:"AmitInvoice<info@resend.sandipmaity.co.in>",
    to:to,
    subject:subject,
    html: reactHtml
});

if(error){
    return error;
}
  return data;
}

