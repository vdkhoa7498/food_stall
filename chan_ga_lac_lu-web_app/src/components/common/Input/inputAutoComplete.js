import React, { useState, useEffect } from 'react';
import { AutoComplete  } from 'antd';
import './input.css'
import {useSelector} from 'react-redux'


const InputAutoComplete = (props) => {
    

    return (
      <AutoComplete
        onChange={(value)=>{props.onChange(value)}}
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