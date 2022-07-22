import { catalogos_servicos } from "./../../../lib/inde/CatalogoINDE";
export async function get({ request }) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
       
     return {
          status: 200,
          body: catalogos_servicos          
     };
     
    return {
        status: 404
    };
}    