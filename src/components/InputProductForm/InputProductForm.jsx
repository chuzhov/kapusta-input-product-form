import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InputProductForm.css';
import Select from 'react-select';

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
  }),

  control: defaultStyles => ({
    ...defaultStyles,
    marginTop: 'none',
    borderRadius: 'none',
    width: '169px',
    height: '44px',
    // backgroundColor: '#212529',
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

export default function InputProductForm() {
  const initialFormData = {
    product: '',
    sum: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('');

  return (
    <div className="input-product-form__wrapper">
      <form name="input-product-form">
        <ReactDatePicker
          className="date-picker__input"
          selected={date}
          onChange={date => setDate(date)}
          maxDate={date}
        />
        <div className="input-product-form__input-wrapper">
          <input
            type="text"
            value={formData.product}
            className="input-product-form__input product-description"
            name="product"
            placeholder="Product description"
            onChange={e => setFormData((formData.product = e.target.value))}
          />
          <Select
            placeholder="Product category"
            styles={multiSelectStyles}
            options={multiSelectOptions}
            onChange={selectedOption => setCategory(selectedOption)}
          />
          <input
            type="number"
            value={formData.product}
            className="input-product-form__input"
            name="product"
            placeholder="0.00"
            onChange={e => setFormData((formData.product = e.target.value))}
          />
        </div>
        <button type="submit">Input</button>
      </form>
    </div>
  );
}
