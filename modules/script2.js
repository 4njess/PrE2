export async function zapros2(){
    let items2 = [];

    const src2 = document.getElementById("template2").innerHTML;
    const template2 = Handlebars.compile(src2);
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
        console.log(items2);
        items2.push(jsontext);
        const html = template2({ items2 });
        document.getElementById("itemlist2").innerHTML = html;
    }
    else{
        alert("Ошибка HTTP:" + que.status); 
    }

}



