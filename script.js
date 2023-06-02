const suppliers = document.querySelector("#suppliers");
const todos = document.querySelector("#todos");

const loadSupplier = () => {
  suppliers.innerHTML = "";
  axios
    .get("https://northwind.vercel.app/api/suppliers")
    .then((response) => {
      response.data.forEach((element) => {
        const tdElement = document.createElement("tr");
        tdElement.innerHTML += `<td>${element.id}</td>`;
        tdElement.innerHTML += `<td>${element.companyName}</td>`;
        tdElement.innerHTML += `<td>${element.contactName}</td>`;
        tdElement.innerHTML += `<td>${element.contactTitle}</td>`;
        suppliers.appendChild(tdElement);
      });
      totalSuppliers();
    })
    .catch(function (error) {
      console.warn(error);
    });
};

const addSupplier = () => {
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
      loadSupplier();
      totalSuppliers();
    })
    .catch(function (error) {
      console.warn(error);
    });
};

const deleteSupplier = () => {
  const id = document.getElementById("supplierId").value;
  axios
    .delete(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then((res) => {
      alert("the record id deleted!");
      loadSupplier();
      totalSuppliers();
    });
};

const loadTodos = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      response.data.forEach((element) => {
        const tdElement = document.createElement("tr");
        tdElement.innerHTML += `<td>${element.id}</td>`;
        tdElement.innerHTML += `<td>${element.title}</td>`;
        tdElement.innerHTML += `<td>${
          element.completed == true ? "✅" : "❌"
        }</td>`;
        todos.appendChild(tdElement);
      });
      totalTodos();
    })
    .catch(function (error) {
      console.warn(error);
    });
};
const deleteTodo = () => {
  const id = document.getElementById("todoId").value;
  console.info(id);
  axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      alert("the record id deleted!");
      console.info(res);

      loadTodos();
    });
};

const addTodo = () => {
  const title = document.getElementById("todoTitle").value;
  const completed = document.getElementById("todoCompleted").value;
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed,
    })
    .then((response) => {
      alert("Data added successfully");
      console.info(response);
      loadTodos();
      totalTodos();
    })
    .catch(function (error) {
      console.warn(error);
    });
};

const totalTodos = () => {
  const totalTodo = document.getElementById("totalTodo");
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      totalTodo.innerHTML =
        "<p>Total Todo: <strong>" + response.data.length + "</stong></p>";
    })
    .catch(function (error) {
      console.warn(error);
    });
};

totalTodos();

const totalSuppliers = () => {
  const totalSupplier = document.getElementById("totalSupplier");
  axios
    .get("https://northwind.vercel.app/api/suppliers")
    .then((response) => {
      totalSupplier.innerHTML =
        "<p>Total Supplier: <strong>" + response.data.length + "</stong></p>";
    })
    .catch(function (error) {
      console.warn(error);
    });
};

totalSuppliers();
