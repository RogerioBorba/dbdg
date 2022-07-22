import PrismaClient from "./../../../lib/db/prisma";
const prisma = new PrismaClient();
const selectFields = {id: true, email: true, name: true}

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params  }) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id)}, select: selectFields
    })
    delete user?.password
    return {
      body: {res: user},  
      status: 200
    };
}

export async function del({ params }) {
   const deleteUser = await prisma.user.delete({ where: {id: parseInt(params.id)}})
    
    return {
      body: parseInt(params.id),
      status: 200
    };
}

export async function patch({ request, params }) {
  try {
    const data = await request.json()
    console.log(data)
    console.log(params.id)
    await prisma.user.update({where: { id: parseInt(params.id)}, data: data})
    return {
       body: parseInt(params.id),
       status: 200
     };

  } catch (error) {
    console.log(error)
    return {
      body: error.message,
      status: 400
    };
  }
  
}