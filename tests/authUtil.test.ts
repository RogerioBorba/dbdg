import { expect, it } from "vitest"
import {generateToken, verifyToken} from './../src/lib/auth/authUtil'
let email = 'rogerio.borba@yahoo.com.br'
let password = '12345'
let token = ''
it('Generate token', () => {
    token = generateToken(email, password)
    expect(token).toBeDefined()
})

it('Check generated token', () => {
    let bool = verifyToken(token)
    expect(bool).toBeTruthy()
})

