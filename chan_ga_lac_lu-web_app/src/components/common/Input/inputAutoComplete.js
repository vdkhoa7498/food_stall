import React from 'react';
import { AutoComplete  } from 'antd';
import './input.css'


const InputAutoComplete = (props) => {
  const onChangeValue = (value) =>{
    props.setValue(value)
  }

    return (
      <AutoComplete
        onChange={onChangeValue}
        style={{
          width: 200,
          marginRight: 10
        }}
        options={props.data}
        placeholder={props.placeholder}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    );
};

export default  InputAutoComplete