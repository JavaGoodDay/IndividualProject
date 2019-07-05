// const request = new XMLHttpRequest();
// request.onload = function(){
//    console.log(request.responseText);
//    console.log('loaded!');
// };


// console.log('sent!');



function fetch() {
    const request = new XMLHttpRequest();

    request.onload = () => {
        const parsedData = JSON.parse(request.responseText);
        console.log('DATA->', parsedData);
        console.log('name->', parsedData.data[1].item.name);
        console.log('description->', parsedData.data[1].item.description);
        console.log('length->', parsedData.data.length);


        for (let data1 of parsedData.data) {

            const itemContainer = document.createElement('div')

            const image = data1.item.images.icon

            const el = document.createElement('div');
            // el.innerHTML = "<h2>" + data1.item.name + "<h4>" + data1.item.description + "<br></br>" + new Image(data1.item.images.icon);
            el.innerHTML = "<h1>" + data1.item.name + "<h3>" + data1.item.type + "<h4>" + data1.item.description + "<br></br>" + '<img src="'+ image+'" title="'+"image"+'" alt="'+"image"+'" />';

            console.log(data1.item.name)
            itemContainer.appendChild(el);

            // for(let ............. of member.p...........){

            // const .............. = document.createElement('p1');
            // ................innerText = ...............;
            // memberContainer.append(.abilities..............);

            // }

            // const description = document.createElement('p');
            // description.innerText = ("Descrition" + member.description);
            // memberContainer.append(...........);

            // const identity = document.createElement('p');
            // identity.innerText = ("................ " + member............);
            // memberContainer.append(...............y);

            // const image = document.createElement('img');
            // image.src = imageMap[member.name];
            // memberContainer.append(image);




            document.getElementById('store').append(itemContainer);


            // document.getElementById('members').innerText += member.name + ' ';
        }

    };
    request.open('GET', 'https://fortnite-api.theapinetwork.com/upcoming/get', '');
    request.setRequestHeader('Authorization', '5db1ace6c5de388324981e80e4ce3cb8')
    request.send();

}


