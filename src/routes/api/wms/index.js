async function queryStringObj(request) {
  /*
  let urlQuery = '' 
  const index = request.url.indexOf('?')+ 1
  if (index > 0)
    urlQuery = request.url.substring(index)
  let parameters = urlQuery.split('&')
  let obj: Object = {}
  parameters.forEach(kv => {
    let arr: string[] = kv.split('=')
    obj[arr[0]] = arr[1]
  })
  return obj
  */
}
export async function get({ request }) {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    //  console.log(request)
    //const item = await queryStringObj(request);
  const index = request.url.indexOf('=')+ 1
  let urlGetCapabilties 
  if (index > 0)
    urlGetCapabilties = request.url.substring(index).trim()
  
    let response = await getOnServer(urlGetCapabilties)
    if (response) {
    let res = await response.text()
    let headers = await response.headers
    let text_headers = ''
    return {
      status: 200,
      body: res
      
    };
  }
   
    return {
      status: 404
    };
  }
  async function getOnServer(urlServer, content_type="application/xml") {
    console.log(urlServer)
    let res = await fetch(urlServer, { method: "GET",
        headers: {"Content-type": content_type}}).then( 
                 async function(response) {
            
                    if(response.ok) {
                      
                        return  response
                        
                    } else {
                      console.log('Network response was not ok.');
                    }
                
                }
        ) .catch(function(error) {
          console.log('There has been another but with your proxy-server fetch , but operation: ' + error.message);
        });      
    return res 
  }