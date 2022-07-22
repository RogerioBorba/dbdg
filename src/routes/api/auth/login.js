import {generateToken} from './../../../lib/auth/authUtil'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request })  {
    try {
        
        let headers = {}
        let body = await request.json()
        
        const token = generateToken(body.email, body.password)
        if (token)
            headers['Authorization'] = 'Bearer ' + token
        else
        return {status: 201, headers: headers, body: false}
        console.log(token)
        return {status: 201, headers: headers, body: true}

    } catch (error) {

        console.log(error)
        return {status: 500, body:{'error': error.message}}
    }

}