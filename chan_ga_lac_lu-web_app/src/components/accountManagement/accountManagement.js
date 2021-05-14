import React,{useState} from 'react';
import { AutoComplete, Button } from 'antd';

const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];

const onClick = (data) =>{
    console.log(data)
}

const AccountManagement = () =>{

    const [value, setValue] = useState('okela')

    return(
        <div>
            <AutoComplete
                style={{
                width: 200,
                }}
                options={options}
                placeholder="try to type `b`"
                filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
            />
            <div>{value}</div>
            <Button onClick={()=>{onClick('Clicked')}} >Click Here</Button>
        </div>
    );
}

export default AccountManagement