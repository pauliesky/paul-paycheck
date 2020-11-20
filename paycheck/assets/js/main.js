(function() {
    emailjs.init("user_YCPL5Lr2vGwzZSOTcooUf");
})();

const amount = document.querySelector("#amount");
var amountbal;
const email = document.querySelector("#email");

amount.addEventListener("keyup", (event) => {
    document.querySelector("#bal").innerHTML = event.target.value;
    amountbal = event.target.value
})


const paycash = () => {
    const template_param = {
        to_name: email.value,
        from_name: "akinleyepaul@paycheck",
        message:  "N" + amountbal + " paid succesfuly from paycheck for Donation"
    }
    emailjs.send("akinleye-paul", "template_y51iq4i", template_param).then(() => {
        alert("Payment succesful, Check email for reciept")
    }).catch(() => {
        alert("Payment failed")
    })
}