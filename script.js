const suppliers = document.querySelector("#suppliers");
const loadData = () => {
  suppliers.innerHTML = "";
  axios
    .get("https://northwind.vercel.app/api/suppliers")
    .then((response) => {
      response.data.forEach((element) => {
        console.info(element);
        const tdElement = document.createElement("tr");
        tdElement.innerHTML += `<td>${element.id}</td>`;
        tdElement.innerHTML += `<td>${element.companyName}</td>`;
        tdElement.innerHTML += `<td>${element.contactName}</td>`;
        tdElement.innerHTML += `<td>${element.contactTitle}</td>`;
        suppliers.appendChild(tdElement);
      });
    })
    .catch(function (error) {
      console.warn(error);
    });
};

const addData = () => {
  const companyName = document.getElementById("companyName").value;
  const contactName = document.getElementById("contactName").value;
  const contactTitle = document.getElementById("contactTitle").value;

  axios
    .post("https://northwind.vercel.app/api/suppliers", {
      companyName,
      contactName,
      contactTitle,
    })
    .then((response) => {
      alert("Data added successfully");
      loadData();
    })
    .catch(function (error) {
      console.warn(error);
    });
};

const deleteData = () => {
  const id = document.getElementById("supplierId").value;
  console.log(id);
  axios
    .delete(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then((res) => {
      alert("the record id deleted!");
      console.log(res);
      loadData();
    });
};
