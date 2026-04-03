let transactions=JSON.parse(localStorage.getItem("transactions"))||[];

function updateUI(){
const list=document.getElementById("list");
const balance=document.getElementById("balance");
const incomeEl=document.getElementById("income");
const expenseEl=document.getElementById("expense");

list.innerHTML="";
let income=0,expense=0;

transactions.forEach((t,index)=>{
const li=document.createElement("li");
li.className=t.type;
li.innerHTML=`${t.desc} - ₹${t.amount} <button class="delete-btn" onclick="deleteTransaction(${index})">X</button>`;
list.appendChild(li);

if(t.type==="income") income+=+t.amount;
else expense+=+t.amount;
});

balance.innerText=income-expense;
incomeEl.innerText=income;
expenseEl.innerText=expense;

localStorage.setItem("transactions",JSON.stringify(transactions));
}

function addTransaction(){
const desc=document.getElementById("desc").value.trim();
const amount=document.getElementById("amount").value;
const type=document.getElementById("type").value;

if(!desc||!amount){alert("Fill all fields");return;}

transactions.push({desc,amount,type});
updateUI();

document.getElementById("desc").value="";
document.getElementById("amount").value="";
}

function deleteTransaction(index){
transactions.splice(index,1);
updateUI();
}

updateUI();
