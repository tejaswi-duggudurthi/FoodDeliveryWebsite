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
    document.getElementById('restaurant_IMG').src = "../img/restaurants/royal_tiffins/"+data.restaurant_img
})

//Getting Biryani Data From MongoDB 
fetch('/restaurant/RoyalTiffinsIndian',{
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
    image1.src = "../img/restaurants/royal_tiffins/"+data[i].item_img
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
    document.getElementById('Indian').appendChild(newDiv);
        console.log(newDiv)
    }
})

//Getting Curries Items Data From MongoDB
fetch('/restaurant/RoyalTiffinsNorth',{
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
    image1.src = "../img/restaurants/royal_tiffins/"+data[i].item_img
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
    document.getElementById('North').appendChild(newDiv);
        console.log(newDiv)
    }
})



//Getting Fried Rices Items Data From MongoDB
fetch('/restaurant/RoyalTiffinsPunjabi',{
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
    image1.src = "../img/restaurants/royal_tiffins/"+data[i].item_img
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
    document.getElementById('Punjabi').appendChild(newDiv);
        console.log(newDiv)
    }
})



//Getting Soft Drinks Items Data From MongoDB
fetch('/restaurant/RoyalTiffinsChinese',{
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
    image1.src = "../img/restaurants/royal_tiffins/"+data[i].item_img
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
    document.getElementById('Chinese').appendChild(newDiv);
        console.log(newDiv)
    }
})
