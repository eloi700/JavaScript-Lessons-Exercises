const purchaseBtn = document.getElementById('purchase-btn');
const errorMsg = document.getElementById('error');

purchaseBtn.addEventListener("click", () =>{
    errorMsg.textContent = "Something went wrong, please try again."
})