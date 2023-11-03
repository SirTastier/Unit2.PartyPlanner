const getData = async ()=> {
    try{
        console.log('getting data')
        let rawResponse = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-B/events')
        let {data} = await rawResponse.json()
        let htmlish = data.map( d=>{
            return `<p>${d.name}<p>`
        })
        console.log(htmlish)
    }catch(err){
        console.log(err)
        console.log('something went wrong what a surprise, let us handle it')
    }
}
console.log(getData())