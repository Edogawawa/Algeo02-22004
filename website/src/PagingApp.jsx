import { useState } from 'react';
import './App.css';
import { getLength, getUsers } from './api/users';
import Table from './components/table';
import Pagination from './components/pagination';


function PagingApp() {
  const [page, setpage ] = useState(1);
  const [limit ] = useState(10);

  let totalPage = Math.ceil(getLength() / limit)
  function handlePageChange(value) {
    if(value === "... "){
      setpage(1);
    } 
    else if (value === " ..."){
      setpage(totalPage);
    }
    else if (value === "<" ){
      if (page !== 1){
        setpage(page -1);
      }
    }
    else if (value === ">"){
      if (page !== totalPage){
        setpage(page + 1);
      }
    }
    else{
      setpage(value);
    }
  }

  return (
    <div className="container">
      <Table users={getUsers(page, limit)}/>
      <div className='pagination-container'>
          <Pagination totalPage={totalPage} page={page} support={1} onPageChange={handlePageChange}/>
      </div>
    </div>
  );
}

export default PagingApp;
