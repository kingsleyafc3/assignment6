var emp_num = [];
var net_pay = 0;
for(var i=0;i<50; i++){
    emp_num.push(prompt("Number of hours worked"));
    if(emp_num[0]==-1){
        alert("Invalid Entry");
        continue;
    }
    if(emp_num[i] == -1){
        break;
    }


}
emp_num.pop();

var pay_table= "<table><tr><td style='width: 15%; color: red;'> Employee number</td>";
pay_table+= "<td style='width: 15%; color: red; text-align: right;'> Hours worked </td>";
pay_table+="<td style='width: 15%; color: red; text-align: right;'> Net Pay</td></tr>";


for (var i=0; i<emp_num.length; i++) {
    pay_table+="<tr><td style='width: 15%;'>" + (i+1) + "</td>";
    //  myArray[i] = myArray[i].toFixed(3);
    pay_table+="<td style='width: 15%; text-align: right;'>" + emp_num[i] + "</td>";
    pay_table+="<td style='width: 15%; text-align: right;'>" + (weeklyPay(emp_num[i])) + "</td></tr>";
}
pay_table+="</table>";

document.write( pay_table);


function weeklyPay(total_hours) {
    var paycheck = 0;
    var hourly_pay = 15;
    var over_time = 0;
    if (total_hours > 40) {
        over_time = (total_hours - 40) * (hourly_pay * (1.5));
        return paycheck = (40*15) + over_time;

    }else {
        return paycheck = hourly_pay * total_hours;
    }
}


    for(var i=0;i<emp_num.length;i++){

       net_pay +=  weeklyPay(emp_num[i]);
    }

var su = "<p> Totaly pay for all employees:<strong>" + net_pay +"</strong></p>";
document.write(su);