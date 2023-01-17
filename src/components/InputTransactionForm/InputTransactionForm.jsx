import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InputTransactionForm.css';
import Select from 'react-select';
import sprite from 'images/icons_sprite.svg';
import { Btn } from 'components/Buttons/Btn';
import { computeHeadingLevel } from '@testing-library/react';

export default function InputTransactionForm({ type = 'expence' }) {
  const TRANSACTION = {
    expence: {
      description: 'Product description',
      selectCategoryPlaceholder: 'Product category',
    },
    income: {
      description: 'Income description',
      selectCategoryPlaceholder: 'Income category',
    },
  };

  const multiSelectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const multiSelectStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? '#52555F' : '#C7CCDC',
      backgroundColor: state.isSelected ? '#a0a0a0' : '#ffffff',
      fontSize: '12px',
    }),
    control: defaultStyles => ({
      ...defaultStyles,

      width: '168px',
      height: '40px',
      fontSize: '12px',
      boxShadow: 'none',

      color: '#C7CCDC',
      border: 'none',
      borderLeft: '#F5F6FB 1px solid',
      borderRight: '#F5F6FB 1px solid',
    }),
    singleValue: defaultStyles => ({
      ...defaultStyles,
      fontSize: '12px',
      color: '#C7CCDC',
    }),
    placeholder: defaultStyles => ({
      ...defaultStyles,
      //  color: '#C7CCDC',
      fontSize: '12px',
    }),
  };

  const initialFormData = {
    product: '',
    sum: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('');

  const validateSumInput = value => {
    if (value === '') {
      setFormData(oldData => {
        return { ...oldData, sum: '' };
      });
      return null;
    }

    let num = parseFloat(value);

    if (isNaN(num)) num = formData.sum;

    setFormData(oldData => {
      return { ...oldData, sum: num };
    });
  };

  return (
    <div className="input-product-form__wrapper">
      <form className="input-product-form">
        <svg
          className="input-product-form--calendar-svg"
          width="20"
          height="20"
        >
          <use href={sprite + `#calendar`}></use>
        </svg>
        <ReactDatePicker
          className="date-picker__input"
          selected={date}
          onChange={date => setDate(date)}
          maxDate={date}
        />
        <div className="input-product-form__inputs-wrapper">
          <input
            type="text"
            value={formData.product}
            className="input-product-form__input product-description"
            name="product"
            placeholder={TRANSACTION[type].description}
            onChange={e =>
              setFormData(oldData => {
                return { ...oldData, product: e.target.value };
              })
            }
          />
          <Select
            placeholder={TRANSACTION[type].selectCategoryPlaceholder}
            styles={multiSelectStyles}
            options={multiSelectOptions}
            onChange={selectedOption => console.log(selectedOption)}
            // onChange={selectedOption => setCategory(selectedOption)}
          />
          <input
            type="text"
            value={formData.sum}
            className="input-product-form__input product-amount"
            name="product"
            placeholder="0.00"
            onChange={e => validateSumInput(e.target.value)}
            required
          />
          <svg className="input-product-form--calc-svg" width="20" height="20">
            <use href={sprite + `#calculator`}></use>
          </svg>
        </div>
        {/* <Btn text="INPUT" />
        <Btn text="CLEAR" /> */}
      </form>
    </div>
  );
}
