import axios from 'axios'
import { useEffect } from 'react';

interface Props {
  URL: string;
}

const TableCar = (props:Props) => {

  useEffect(()=>{
    const GetAllItems = async () => {
      const res = await axios.get(`${props.URL}`);
      console.log(`${props.URL}`);
      const items = res.data;
      console.log(items);
    };
    GetAllItems()
  },[])


  return (
    <div>Table</div>
  )
}

export default TableCar