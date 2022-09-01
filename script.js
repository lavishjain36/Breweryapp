//Array of employee
let employees = [
  {
    id: 1,
    first_name: "Suresh",
    last_name: "Kumar",
    email: "suresh@gmail.com",
    gender: "male",
    ip_address: "160.192.178.23",
  },

  {
    id: 2,
    first_name: "Sourav",
    last_name: "Das",
    email: "sourav@gmail.com",
    gender: "male",
    ip_address: "160.192.168.23",
  },

  {
    id: 3,
    first_name: "Jhansi",
    last_name: "Das",
    email: "jhansi@gmail.com",
    gender: "female",
    ip_address: "160.192.128.23",
  },

  {
    id: 4,
    first_name: "John",
    last_name: "Paul",
    email: "john@gmail.com",
    gender: "male",
    ip_address: "160.192.198.23",
  },
  {
    id: 5,
    first_name: "Lavish",
    last_name: "paul",
    email: "lavish@gmail.com",
    gender: "male",
    ip_address: "160.192.148.23",
  },

  {
    id: 6,
    first_name: "Sourav",
    last_name: "Paul",
    email: "sourav@gmail.com",
    gender: "male",
    ip_address: "160.192.128.23",
  },
  {
    id: 7,
    first_name: "Sangeetha",
    last_name: "Paul",
    email: "sangeetha@gmail.com",
    gender: "female",
    ip_address: "160.193.178.23",
  },

  {
    id: 8,
    first_name: "Pavan",
    last_name: "Sai",
    email: "pavan@gmail.com",
    gender: "male",
    ip_address: "160.172.178.23",
  },
  {
    id: 9,
    first_name: "Pavni",
    last_name: "Das",
    email: "pavni@gmail.com",
    gender: "female",
    ip_address: "160.162.178.23",
  },
  {
    id: 10,
    first_name: "Jenny",
    last_name: "Paul",
    email: "jenny@gmail.com",
    gender: "female",
    ip_address: "160.182.178.23",
  },
];


//All Employee Data 
let allEmpButton=document.querySelector("#all-emp-btn")
allEmpButton.addEventListener("click",()=>{
  displayEmployees(employees) //calling a function
})

//Male employees
let maleEmpButton=document.querySelector("#male-emp-btn");
maleEmpButton.addEventListener("click",function(){
  //Logic to filter male data 
  let maleEmployeedata=employees.filter((emp)=>{
    return emp.gender==="male";
  })

  console.log(maleEmployeedata);

  displayEmployees(maleEmployeedata)//code reusability
})

//Female EMployees 
let femaleEmpButton=document.querySelector("#female-emp-btn")
femaleEmpButton.addEventListener("click",function(){
  //Logic to filter female data 
  let femaleEmployeedata=employees.filter((emp)=>{
    return emp.gender==="female";
  })

  console.log(femaleEmployeedata);

  displayEmployees(femaleEmployeedata)//code reusability
})


// /Logic to search the employee
//codekata 

let searchBox=document.querySelector("#search-box");
searchBox.addEventListener("keyup",function(){
  let textEntered=searchBox.value
  console.log(textEntered);

  //Logic to populate the data 
  let filteredEmployees=[]
  if(textEntered!=""){
    //Populate the data of the employee
    filteredEmployees=employees.filter((emp)=>{
      return emp.first_name.toLowerCase().includes(textEntered.toLowerCase)
      || emp.email.toLowerCase().includes(textEntered.toLowerCase());
    })
    
    displayEmployees(filteredEmployees)
  }else{
    alert("Please enter employee firstname or your email id");
  }
})

//Logic to display data in form table 
let displayEmployees=(employees)=>{
  //select the table body using table-body id
  let tableBody=document.querySelector("#table-body");
  
// create a row for each employee
let tableRow="";
for(let employee of employees){
  tableRow+=`
  <tr>
   <td>${employee.id}</td>
   <td>${employee.first_name}</td>
   <td>${employee.last_name}</td>
   <td>${employee.email}</td>
   <td>${employee.gender}</td>
   <td>${employee.ip_address}</td>
  </tr>
  `;
  tableBody.innerHTML=tableRow
}
}