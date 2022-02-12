class Service {
   async post()
   {
    const response = await fetch(url,{
        method:'POST',
        body: {
            
        },
        headers:{'Content-type':'application/json'}
    })

   }
}