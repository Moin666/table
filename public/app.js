var inputData = document.querySelector("input");
var table = document.getElementById("table")
var tbody = document.getElementById("tbody")


var student = {
    Mohsan:{
        name:"Mohsan Khan",
        fatherName:"Tufail Ahmed Brohi",
        university:"FUUAST",
        semister:"8th",
        result:true,
        id:1
    },
    sherry:{
        name:"sherry",
        fatherName:"Muhammad Awais",
        university:"FUUAST",
        semister:"8th",
        result:true,
        id:2
    },
    moin:{
        name:"Moin Khan",
        fatherName:"Tufail Ahmed Brohi",
        university:"FUUAST",
        semister:"8th",
        result:false,
        id:3
    },
     srk:{
        name:"Shahrukh Khan",
        fatherName:"Tufail Ahmed Brohi",
        university:"FUUAST",
        semister:"8th",
        result:true,
        id:4
    },
    dani:{
        name:"Dani",
        fatherName:"Jamil Khan",
        university:"NED",
        semister:"8th",
        result:true,
        id:5
    }

}



    var a = {
        name:"Mohsan Khan",
        fatherName:"Tufail Ahmed Brohi",
        university:"FUUAST",
        semister:"8th",
        result:true,
        id:1
    }
    var b = {
        name:"sherry",
        fatherName:"Muhammad Awais",
        university:"FUUAST",
        semister:"8th",
        result:true,
        id:2
    }
    var c = {
        name:"Moin Khan",
        fatherName:"Tufail Ahmed Brohi",
        university:"FUUAST",
        semister:"8th",
        result:false,
        id:3
    }
    var d = {
        name:"Shahrukh Khan",
        fatherName:"Tufail Ahmed Brohi",
        university:"FUUAST",
        semister:"8th",
        result:true,
        id:4
    }
    var e = {
        name:"Dani",
        fatherName:"Jamil Khan",
        university:"NED",
        semister:"8th",
        result:true,
        id:5
    }

table.innerHTML = "<thead><tr class='bg-success'><th scope='col'>#</th><th scope='col'>Name</th><th scope='col'>Father Name</th><th scope='col'>University</th><th scope='col'>Semister</th><th scope='col'>Result</th></tr></thead> <tbody class = 'bg-light'> <tr><th scope='row'>" + student.Mohsan.id + "</th><td>" + student.Mohsan.name +"</td><td>"+student.Mohsan.fatherName+"</td><td>"+student.Mohsan.university+"</td> <td>"+student.Mohsan.semister +"</td> <td>"+student.Mohsan.result +"</td></tr> <tr><th scope='row'>" + student.sherry.id + "</th><td>" + student.sherry.name +"</td><td>"+student.sherry.fatherName+"</td><td>"+student.sherry.university+"</td> <td>"+student.sherry.semister +"</td> <td>"+student.sherry.result +"</td></tr><tr><th scope='row'>" + student.moin.id + "</th><td>" + student.moin.name +"</td><td>"+student.moin.fatherName+"</td><td>"+student.moin.university+"</td> <td>"+student.moin.semister +"</td> <td>"+student.moin.result +"</td></tr><tr><th scope='row'>" + student.srk.id + "</th><td>" + student.srk.name +"</td><td>"+student.srk.fatherName+"</td><td>"+student.srk.university+"</td> <td>"+student.srk.semister +"</td> <td>"+student.srk.result +"</td></tr></td></tr><tr><th scope='row'>" + student.dani.id + "</th><td>" + student.dani.name +"</td><td>"+student.dani.fatherName+"</td><td>"+student.dani.university+"</td> <td>"+student.dani.semister +"</td> <td>"+student.dani.result +"</td></tr>"

var arr = [a,b,c,d,e];
var flag = false;

function searchId(){
    for(var i=0 ; i < arr.length; i++){
        console.log(i)
            if(Number(inputData.value) == arr[i].id){
                    tbody.innerHTML += " <tbody class='bg-light'><tr><th scope='row'>" + arr[i].id + "</th><td>" + arr[i].name +"</td><td>"+arr[i].fatherName+"</td><td>"+arr[i].university+"</td> <td>"+arr[i].semister +"</td> <td>"+arr[i].result +"</td></tr> </tbody>"
                    console.log("find it ")
                    flag = true
                    break
            }
          else{
                   flag = false;
               }

    

}
if(flag == false){
    alert("Value Not Found")
}
else{
    console.log("Value FOun")
}}
