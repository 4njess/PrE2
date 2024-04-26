export async function zapros1(){
   let items = [
];

    const src = document.getElementById("template").innerHTML;
    const template = Handlebars.compile(src);
    let url = 'http://demo.macroscop.com/configex?responsetype=json';
    let token = 'ZGVtb2xvZ2luOjc1NTgwNjU2YTM5NDI5MjQ2MGViYjRiMDM2ZWJlYWYx'

    let que = await fetch(url, {
    headers: {
        'Authorization': 'Basic '+ token
        }
    });
    if (que.ok){
        let jsontext = await que.json();
        
        console.log(jsontext);
        console.log(items);
        items.push(jsontext);
        const html = template({ items });
        document.getElementById("itemlist").innerHTML = html;
    }
    else{
        alert("Ошибка HTTP:" + que.status); 
    }

}
 


