//Getting Restaurant Data From MongoDB
fetch('/restaurant/getrestaurant',{
    method:'get',
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    document.getElementById('restaurant_name').innerHTML = data.restaurant_name
    document.getElementById('restaurant_tag').innerHTML = data.restaurant_tag
    document.getElementById('restaurant_address').innerHTML = data.restaurant_address
    document.getElementById('restaurant_IMG').src = "../img/restaurants/freezing_hub/"+data.restaurant_img
})

//Getting Lassis Data From MongoDB 
fetch('/restaurant/FreezingHubLassi',{
    method:'get',
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    for(var i=0; i < data.length; i++){
        console.log(i)
    var newDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newDiv.className = 'p-3 border-bottom menu-list';

    var span1 = document.createElement('span')
    span1.className = "float-right"
    
    var anchar1 = document.createElement('a')
    anchar1.className = "btn btn-outline-secondary btn-sm"
    anchar1.innerText = "ADD"
    
    
    span1.appendChild
    (anchar1)

    var newSubDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv.className = 'media';

    var image1 = document.createElement('img')
    image1.src = "../img/restaurants/freezing_hub/"+data[i].item_img
    image1.className = "mr-3 rounded-pill"

    var newSubDiv1 = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv1.className = 'media-body';

    var heading1 = document.createElement('h6');
    // newDiv.id = 'r'+i;
    heading1.className = 'media-body';
    heading1.innerHTML = data[i].item_name
    
//     var span2 = document.createElement('span');
//     // newDiv.id = 'r'+i;
//     span2.className = 'badge badge-success';
//    span2.innerHTML = data[i].item_tag

    var p1 = document.createElement('p')
    p1.className = "text-muted mb-0"
    p1.innerHTML = data[i].description
    
    var p2 = document.createElement('p')
    p2.className = "text-muted mb-0"
    p2.innerHTML = data[i].price

    newSubDiv1.appendChild(heading1)
    // heading1.appendChild(span2)
    newSubDiv1.appendChild(p1)
    newSubDiv1.appendChild(p2)

    newSubDiv.appendChild(image1)
    newSubDiv.appendChild(newSubDiv1)    
    newDiv.appendChild(span1)
    newDiv.appendChild(newSubDiv)
    document.getElementById('Lassi').appendChild(newDiv);
        console.log(newDiv)
    }
})

//Getting Ice Creams Data From MongoDB
fetch('/restaurant/FreezingHubIceCreams',{
    method:'get',
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    for(var i=0; i < data.length; i++){
        console.log(i)
    var newDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newDiv.className = 'p-3 border-bottom menu-list';

    var span1 = document.createElement('span')
    span1.className = "float-right"
    
    var anchar1 = document.createElement('a')
    anchar1.className = "btn btn-outline-secondary btn-sm"
    anchar1.innerText = "ADD"
    
    
    span1.appendChild
    (anchar1)

    var newSubDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv.className = 'media';

    var image1 = document.createElement('img')
    image1.src = "../img/restaurants/freezing_hub/"+data[i].item_img
    image1.className = "mr-3 rounded-pill"

    var newSubDiv1 = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv1.className = 'media-body';

    var heading1 = document.createElement('h6');
    // newDiv.id = 'r'+i;
    heading1.className = 'media-body';
    heading1.innerHTML = data[i].item_name

//     var span2 = document.createElement('span');
//     // newDiv.id = 'r'+i;
//     span2.className = 'badge badge-danger';
//    span2.innerHTML = data[i].item_tag

    var p1 = document.createElement('p')
    p1.className = "text-muted mb-0"
    p1.innerHTML = data[i].description
    
    var p2 = document.createElement('p')
    p2.className = "text-muted mb-0"
    p2.innerHTML = data[i].price

    newSubDiv1.appendChild(heading1)
    // heading1.appendChild(span2)
    newSubDiv1.appendChild(p1)
    newSubDiv1.appendChild(p2)

    newSubDiv.appendChild(image1)
    newSubDiv.appendChild(newSubDiv1)    
    newDiv.appendChild(span1)
    newDiv.appendChild(newSubDiv)
    document.getElementById('IceCreams').appendChild(newDiv);
        console.log(newDiv)
    }
})



//Getting Falooda Data From MongoDB
fetch('/restaurant/FreezingHubFalooda',{
    method:'get',
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    for(var i=0; i < data.length; i++){
        console.log(i)
    var newDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newDiv.className = 'p-3 border-bottom menu-list';

    var span1 = document.createElement('span')
    span1.className = "float-right"
    
    var anchar1 = document.createElement('a')
    anchar1.className = "btn btn-outline-secondary btn-sm"
    anchar1.innerText = "ADD"
    
    
    span1.appendChild
    (anchar1)

    var newSubDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv.className = 'media';

    var image1 = document.createElement('img')
    image1.src = "../img/restaurants/freezing_hub/"+data[i].item_img
    image1.className = "mr-3 rounded-pill"

    var newSubDiv1 = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv1.className = 'media-body';

    var heading1 = document.createElement('h6');
    // newDiv.id = 'r'+i;
    heading1.className = 'media-body';
    heading1.innerHTML = data[i].item_name

    var p1 = document.createElement('p')
    p1.className = "text-muted mb-0"
    p1.innerHTML = data[i].description
    
    var p2 = document.createElement('p')
    p2.className = "text-muted mb-0"
    p2.innerHTML = data[i].price

    newSubDiv1.appendChild(heading1)
    newSubDiv1.appendChild(p1)
    newSubDiv1.appendChild(p2)

    newSubDiv.appendChild(image1)
    newSubDiv.appendChild(newSubDiv1)    
    newDiv.appendChild(span1)
    newDiv.appendChild(newSubDiv)
    document.getElementById('Falooda').appendChild(newDiv);
        console.log(newDiv)
    }
})



//Getting Kids Special Data From MongoDB
fetch('/restaurant/FreezingHubKidsSpecial',{
    method:'get',
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    for(var i=0; i < data.length; i++){
        console.log(i)
    var newDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newDiv.className = 'p-3 border-bottom menu-list';

    var span1 = document.createElement('span')
    span1.className = "float-right"
    
    var anchar1 = document.createElement('a')
    anchar1.className = "btn btn-outline-secondary btn-sm"
    anchar1.innerText = "ADD"
    
    
    span1.appendChild
    (anchar1)

    var newSubDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv.className = 'media';

    var image1 = document.createElement('img')
    image1.src = "../img/restaurants/freezing_hub/"+data[i].item_img
    image1.className = "mr-3 rounded-pill"

    var newSubDiv1 = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv1.className = 'media-body';

    var heading1 = document.createElement('h6');
    // newDiv.id = 'r'+i;
    heading1.className = 'media-body';
    heading1.innerHTML = data[i].item_name

    var p1 = document.createElement('p')
    p1.className = "text-muted mb-0"
    p1.innerHTML = data[i].description
    
    var p2 = document.createElement('p')
    p2.className = "text-muted mb-0"
    p2.innerHTML = data[i].price

    newSubDiv1.appendChild(heading1)
    newSubDiv1.appendChild(p1)
    newSubDiv1.appendChild(p2)

    newSubDiv.appendChild(image1)
    newSubDiv.appendChild(newSubDiv1)    
    newDiv.appendChild(span1)
    newDiv.appendChild(newSubDiv)
    document.getElementById('KidsSpecial').appendChild(newDiv);
        console.log(newDiv)
    }
})
