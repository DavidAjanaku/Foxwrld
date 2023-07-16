import React, { useState } from "react";
import { Link } from "react-router-dom";
import coats from "../../assets/coats.jpeg";
import Pagination from "../Navigation/Pagination";

export default function Products() {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);

    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checked;
    });
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 bg-gray-200 h-[100vh]">
        <ul>
          <li>
            <div>
              <Link to="#" className="text-blue-500 hover:underline">
                Appearance
              </Link>
            </div>
            <div>
              <Link to="#" className="text-blue-500 hover:underline">
                Appearance
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-span-9 bg-white h-[100vh] overflow-scroll">
        <div className="p-4">
          <header>
            <div className="flex my-4 items-center">
              <h1 className="font-bold text-lg">Products</h1>
              <button className="bg-black text-white ml-4 p-2">Add New</button>
            </div>
            <div>
              <span>All (13)</span>
              <span className="ml-4">Published (13)</span>
            </div>
          </header>
          <form>
            <div className="flex flex-wrap mb-4 items-center">
              <div className="m-4">
                <select className="px-2 py-1 border border-gray-300 rounded">
                  <option>Bulk Actions</option>
                  <option>Trash</option>

                </select>
              </div>
              <div className="m-4">
                <select className="px-2 py-1 border border-gray-300 rounded">
                  <option>Select a Category</option>
                </select>
              </div>
              <div className="m-4">
                <select className="px-2 py-1 border border-gray-300 rounded">
                  <option>Filter by Stock Status</option>
                  <option>in stock</option>
                  <option>out of stock</option>
                </select>
              </div>
              <div>
                <select className="px-2 py-1 border border-gray-300 rounded">
                  <option>Filter by Product Type</option>
                </select>
              </div>
              <div className="m-4">
                <button className="px-4 py-2 text-white bg-black rounded" type="submit">
                  Apply
                </button>
              </div>
            </div>
          </form>
          <table className="w-full border border-gray-300">
            <thead>
              <tr>
                <th className="font-bold bg-slate-500 p-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th className="font-bold bg-slate-500 p-2">Image</th>
                <th className="font-bold bg-slate-500 p-2">Name</th>
                <th className="font-bold bg-slate-500 p-2">SKU</th>
                <th className="font-bold bg-slate-500 p-2">Stock</th>
                <th className="font-bold bg-slate-500 p-2">Price</th>
                <th className="font-bold bg-slate-500 p-2">Categories</th>
                <th className="font-bold bg-slate-500 p-2">Tags</th>
                <th className="font-bold bg-slate-500 p-2">Published</th>
              </tr>
            </thead>
            <tbody className="p-5 ">
              <tr className="p-5">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="text-center">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center">
                  <Link to="/">Louviena Gucci savaeleone</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center">SKU123</td>
                <td className="text-center">10</td>
                <td className="text-center">$19.99</td>
                <td className="text-center">Category A</td>
                <td className="text-center">Tag 1, Tag 2</td>
                <td className="text-center">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="text-center">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center">SKU123</td>
                <td className="text-center">10</td>
                <td className="text-center">$19.99</td>
                <td className="text-center">Category A</td>
                <td className="text-center">Tag 1, Tag 2</td>
                <td className="text-center">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="text-center">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center">SKU123</td>
                <td className="text-center">10</td>
                <td className="text-center">$19.99</td>
                <td className="text-center">Category A</td>
                <td className="text-center">Tag 1, Tag 2</td>
                <td className="text-center">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="text-center">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center">SKU123</td>
                <td className="text-center">10</td>
                <td className="text-center">$19.99</td>
                <td className="text-center">Category A</td>
                <td className="text-center">Tag 1, Tag 2</td>
                <td className="text-center">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="text-center">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center">SKU123</td>
                <td className="text-center">10</td>
                <td className="text-center">$19.99</td>
                <td className="text-center">Category A</td>
                <td className="text-center">Tag 1, Tag 2</td>
                <td className="text-center">2023/08/19 at 4:15pm</td>
              </tr>
              <tr className="p-5">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="text-center">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center">SKU123</td>
                <td className="text-center">10</td>
                <td className="text-center">$19.99</td>
                <td className="text-center">Category A</td>
                <td className="text-center">Tag 1, Tag 2</td>
                <td className="text-center">2023/08/19 at 4:15pm</td>
              </tr>
              
              <tr className="p-5">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="text-center">
                  <img src={coats} alt="Product" className="w-16 h-16 mx-auto my-3" />
                </td>
                <td className="text-center">
                  <Link to="/">Product 1</Link>
                  <div className="hover:visible">
                    <Link to="/" className="text-red-500 hover:underline">
                      Delete
                    </Link>
                    <Link to="/" className=" hover:underline ml-4">
                      View
                    </Link>
                  </div>
                </td>
                <td className="text-center">SKU123</td>
                <td className="text-center">10</td>
                <td className="text-center">$19.99</td>
                <td className="text-center">Category A</td>
                <td className="text-center">Tag 1, Tag 2</td>
                <td className="text-center">2023/08/19 at 4:15pm</td>
              </tr>
            </tbody>
          </table>
        </div>
         <div className="my-14">
         <Pagination/>
         </div>
      </div>
    </div>
  );
}
