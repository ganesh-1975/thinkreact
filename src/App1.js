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
        const [inStockOnly, setInStockOnly] = useState(false);


    return (
      <div>
        <SearchBar  setFilterText={setFilterText} setInStockOnly = {setInStockOnly}/>
        <ProductTable  filterText={filterText} inStockOnly = {inStockOnly}/>
      </div>
    );
  }

  function SearchBar(props) {
    let {setInStockOnly, setFilterText} = props;

    return (
      <form>
        <input type="text" placeholder="Search..." onChange={(e) => {setFilterText(e.target.value)}} className='search'/>
        <br></br>
        <label>
          <input type="checkbox" onChange={(e) => {setInStockOnly(e.target.checked)}} />
          Only show products in stock
        </label>
      </form>
    );
  }



  function ProductTable(props) {
    const [products, setproducts] = useState(PRODUCTS);
    let {filterText, inStockOnly} = props;

    const filteredArr = products.filter(({name, stocked}) => {
      return filterText != '' && name.toLowerCase().includes(filterText.toLowerCase()) && (!inStockOnly || stocked) 
    })
    
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
            {/* <td>{ele.stocked ?ele.name :<span>*{ele.name}</span>}</td> */}
            {/* <td>{ele.stocked ? '':'*' }{ele.name}</td> */}
            <td>{!ele.stocked && '*' }{ele.name}</td>
            <td>{ele.price}</td>
        </tr>)}
        </tbody>
      </table>
    );
  }

  export default FilterableProductTable;
  
  
  
  
  
  
  
  