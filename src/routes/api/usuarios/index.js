import PrismaClient from "./../../../lib/db/prisma";
import {hashPassword} from './../../../lib/auth/authUtil';
const prisma = new PrismaClient();
export async function get({ request }) {
    try {
        return {
            status: 200,
            body: await prisma.user.findMany({select: {id: true, email: true, name: true}})          
       };     
    } catch (error) {
        console.log(error)
        return {
            status: 400,
            body: {erro: error.message}
        }
    }       
     
}    
export async function post({request}) {
    try {
        let js = await request.json();
        js['password'] = await hashPassword(js['password']);
        let obj = await prisma.user.create({ data: js });
        console.log(request);
        let headers = {};
        headers['Location'] = `${request.url}/${obj.id}`;
        return {
            status: 201,
            body: {},
            headers: headers
        }
        
    } catch (error) {
        console.log(error.code)
        return {
            status: 400,
            body: {erro: error.message},
        }    
    } 
}
