const shiv = {
  name : "Shivansh",
  lastname : "Gupta",
  nationality : "Indian",
  presentation : function(style,time,age){
    console.log(time + " "+this.name + ", you are in  "+style + ". Your age is "+ age);
  }
}

const shiva = {
  name : "Shiva",
  lastname : "Agarwal",
  nationality : "Chinese"
}


const warner = {
  name : "David",
  lastname : "Warner",
  nationality : "Australian"
}

shiv.presentation.apply(shiva,['formal','Morning', 23]);
shiv.presentation.apply(shiva,['formal','Morning']);
shiv.presentation.apply(shiva,['formal','Morning', 23,'lol']);