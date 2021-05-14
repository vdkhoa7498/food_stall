import React from 'react';
import { AutoComplete  } from 'antd';
import './input.css'


const InputAutoCompleteGetId = (props) => {
  const onChangeValue = (value) =>{
    const getSelected = props.data.find(item => item.value==value)
    props.setValue(value)
    if (getSelected){
    props.setId(getSelected.id)
    }
    else {
      props.setId("")
    }
  }

    return (
      <AutoComplete
        onChange={onChangeValue}
        autoFocus={props.autoFocus}
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

export default  InputAutoCompleteGetId