var wrap = document.body.querySelector(".wrap"); var list = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
];                   
for (var i = 0; i < list.length; i++) {
  if (list[i].warrior && 
  list[i].damage >= 2 && 
  list[i].health >= 10) {
    
    
    var ele = document.createElement("div");
  var eleName = document.createElement("h1");
  var eleHealth = document.createElement("h2");
  var eleDamage = 
document.createElement("h3");
  
  
  eleName.innerHTML=list[i].name;
  eleHealth.innerHTML="Health: "+list[i].health;
  eleDamage.innerHTML="Damage: "+list[i].damage
    
    if(list[i].name.includes('a', 0)){
    ele.style.color='red'; 
    }

  ele.appendChild(eleName);
  ele.appendChild(eleHealth);
  ele.appendChild(eleDamage);
  wrap.appendChild(ele);
} 
  }