export async function zapros3(){
    let items3 = [];
    const src3 = document.getElementById("template3").innerHTML;
    const template3 = Handlebars.compile(src3);
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
        console.log(items3);
        items3.push(jsontext);
        const html = template3({ items3 });
        document.getElementById("itemlist3").innerHTML = html;
        }
    else{
        alert("Ошибка HTTP:" + que.status); 
    }

}



