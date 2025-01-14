const searchForm = document.querySelector("[form-search]");
if (searchForm) {
  searchForm.addEventListener("click", () => {
    const searchHeader = document.querySelector("[header-search]");
    searchHeader.classList.toggle("d-block");
  });
}

const cartNumber = document.querySelector("#cart_quantity");
if (cartNumber) {
  const number = cartNumber.textContent;
  if (number == 0) {
    cartNumber.classList.add("d-none");
  }
}

const productHover = document.querySelector(".spdd-hover");
if (productHover) {
  const productDD = document.querySelector(".productdd-container");
  productHover.addEventListener("mouseover", () => {
    productDD.classList.remove("hide");
    productDD.classList.add("show");
  });
  productHover.addEventListener("mouseout", () => {
    productDD.classList.remove("show");
    productDD.classList.add("hide");
  });
}

const collectionHover = document.querySelector(".bstdd-hover");
if (collectionHover) {
  const collectionDD = document.querySelector(".bstdd-container");
  collectionHover.addEventListener("mouseover", () => {
    collectionDD.classList.remove("hide");
    collectionDD.classList.add("show");
  });
  collectionHover.addEventListener("mouseout", () => {
    collectionDD.classList.remove("show");
    collectionDD.classList.add("hide");
  });
}

const cardNumber = document.querySelector("[card-number]");
if (cardNumber) {
  const buttonBuy = document.querySelector("[button-buy]");
  const paymentImg = document.querySelector("[payment-img]");
  buttonBuy.addEventListener("click", () => {
    paymentImg.classList.remove("d-none");
  });
} else {
  const formCash = document.querySelector("[form-cash]");
  const buttonBuy = document.querySelector("[button-buy]");
  if (buttonBuy) {
    buttonBuy.addEventListener("click", () => {
      formCash.submit();
    });
  }
}

const cancelPayment = document.querySelector(".x-icon-img");
if (cancelPayment) {
  const paymentImg = document.querySelector("[payment-img]");
  cancelPayment.addEventListener("click", () => {
    paymentImg.classList.add("d-none");
  });
}

const formPaymentSuccess = document.querySelector(".btn-payment-div");
if (formPaymentSuccess) {
  formPaymentSuccess.addEventListener("submit", (e) => {
    const confirmPayment = confirm("Mày Có Chắc Là Thanh Toán Rồi Không???");
    if (!confirmPayment) {
      e.preventDefault();
    }
  });
}

const imageProduct = document.querySelectorAll("[img-1]");
if (imageProduct.length > 0) {
  imageProduct.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.setAttribute("src", img.getAttribute("img-2"));
    });
    img.addEventListener("mouseout", () => {
      img.setAttribute("src", img.getAttribute("img-1"));
    });
  });
}

const sortByProduct = document.querySelector('[sort-by-product]')
if (sortByProduct) {
  sortByProduct.addEventListener('change', () => {
    const sortByForm = document.querySelector('[form-sort-by]')
    sortByForm.submit()
  })
}


// Show Alert
const showAlert = document.querySelector("[show-alert]")
if (showAlert) {
  const time = parseInt(showAlert.getAttribute("date-time"))
  const closeAlert = showAlert.querySelector(".close-alert")
  setTimeout (() => {
    showAlert.classList.add("alert-hidden")
  }, time)
  closeAlert.addEventListener('click', () => {
    showAlert.classList.add("alert-hidden")
  })
}
// End Show Alert