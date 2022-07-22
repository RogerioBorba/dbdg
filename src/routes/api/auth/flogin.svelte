<script>
    
    let email = '';
    let password = '';

    async  function  handleSubmit() {
        let res = null
        try {
            let body = JSON.stringify({email: email, password: password})
            let headers =  {"Accept": "application/json"}
            res = await fetch("/api/auth/login", {method: "POST", headers: headers, body: body })
            
            console.log(res.headers.get("Authorization"))
        } catch (error) {
            console.log(error)
        }
    }
</script>

<h1 class="my-2 text-2xl font-bold text-center text-gray-800 md:text-3xl ">Login</h1>
<form class="w-1/5 m-auto p-2 border rounded shadow" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold text-gray-800 mb-2" for="email">Email</label>
        <input class="shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" 
        name="email" 
        type="email" 
        placeholder="Your email"
        bind:value={email}>
        <label class="font-bold text-gray-800 mb-2" for="email">Senha</label>
        <input class="shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" 
        name="password" 
        type="password" 
        placeholder="Your email"
        bind:value={password}>
        <button class="mt-2 w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
        type="submit">Login</button>
    </div>

</form>