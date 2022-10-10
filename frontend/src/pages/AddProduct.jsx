import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

function PostForm() {
  const url = "http://localhost:8000/products";
  const [data, setData] = useState({
    name: "",
    quantity: "",
    price: ""
  });

  function submit(e) {
    e.preventDefault();

    axios
      .post(url, {
        name: data.name,
        quantity: data.quantity,
        price: data.price
      })
      .then((res) => {
        console.log(res.data);
      });

    window.location = "/Products";
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div>
      <Link className="link" to="/">
        About
      </Link>
      <Link className="link" to="/Products">
        Products
      </Link>
      <form>
        <input
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          type="text"
          placeholder="Enter Product Name"
          required
        />
        <br />
        <input
          onChange={(e) => handle(e)}
          id="quantity"
          value={data.quantity}
          type="number"
          placeholder="Enter Quantity"
          required
        />
        <br />
        <input
          onChange={(e) => handle(e)}
          id="price"
          value={data.price}
          type="number"
          placeholder="Enter Price"
          required
        />
        <br />
        <button type="submit" onClick={submit}>
          submit
        </button>
      </form>
    </div>
  );
}

//   render() {
//     return (
//       <>
//
//

//         <form onSubmit={this.handleSubmit}>
//           <label>
//             {" "}
//             <input
//               type="text"
//               name="name"
//               onChange={this.handleChange}
//               placeholder="Enter Product Name"
//               required
//             />
//           </label>
//           <br />
//           <label>
//             {" "}
//             <input
//               type="number"
//               name="quantity"
//               onChange={this.handleChange}
//               placeholder="Enter Quantity "
//               required
//             />
//           </label>
//           <br />
//           <label>
//             {" "}
//             <input
//               type="number"
//               name="price"
//               onChange={this.handleChange}
//               placeholder="Enter Price "
//               required
//             />
//           </label>
//           <br />
//           <button type="submit"> Add </button>
//         </form>
//       </>
//     );
//   }
// }
//

export default PostForm;
