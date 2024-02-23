import {useState} from 'react';

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

function FilterableProductTable() {

        const [filterText, setFilterText] = useState('');

    return (
      <div>
        <SearchBar filterText={filterText} setFilterText={setFilterText} />
        <ProductTable  filterText={filterText}/>
      </div>
    );
  }

  function SearchBar(props) {
    // const [inStockOnly, setInStockOnly] = useState(false);
    let {filterText, setFilterText} = props;

    return (
      <form>
        <input type="text" placeholder="Search..." onChange={(e) => {setFilterText(e.target.value)}}/>
        <br></br>
        <label>
          <input type="checkbox" />
          Only show products in stock
        </label>
      </form>
    );
  }



  function ProductTable(props) {
    const [products, setproducts] = useState(PRODUCTS);
    let {filterText} = props;

    const filteredArr = products.filter(({name}) => filterText != '' && name.toLowerCase().includes(filterText.toLowerCase()))
    console.log(filteredArr)
    
    if(filteredArr.length == 0) return null;


      return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {filteredArr.map(ele => <tr>
            <td>{ele.name}</td>
            <td>{ele.price}</td>
        </tr>)}
        </tbody>
      </table>
    );
  }

  export default FilterableProductTable;
  
  
  
  
  
  
  
  