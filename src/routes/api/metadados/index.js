let urlServerCSW = 'https://metadados.inde.gov.br/geonetwork/srv/por/csw'
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({request}) {
  const index = request.url.indexOf('=')+ 1
  if (index > 0)
    urlServerCSW = request.url.substring(index)
  
    //const data = await request.formData(); // or .json(), or .text(), etc
   await fetchOnServerPostCSW(urlServerCSW, await request.text() )
    
    return { status: 200 };
  }

  async function fetchOnServerPostCSW(urlServer, xml) {
   
    fetch(urlServer, { method: "POST",body: xml,
        headers: {"Content-type": "application/xml"}}).then( 
                 async function(response) {
            
                    if(response.ok) {
                        let res = await response.text()
                        console.log(res)
                    } else {
                      console.log('Network response was not ok.');
                    }
                
                }
        ) .catch(function(error) {
          console.log('There has been another but with your proxy-server fetch , but operation: ' + error.message);
        });       
  }