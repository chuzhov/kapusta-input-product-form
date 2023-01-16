import { useState } from 'react';

export default function InputProductForm() {
  const initialFormData = {
    product: '',
    sum: '',
  };

  const [formData, setFormData] = useState('');
  const [date, setDate] = useState(new Date());

  return (
    <div className="input-product-form__wrapper">
      <form name="input-product-form">
        <DatePicker selected={date} onChange={date => setDate(date)} />
        <input
          type="text"
          value={formData.product}
          className="input-product-form__input"
          name="product"
          placeholder="Product description"
          onChange={e => setFormData((formData.product = e.target.value))}
        />
        <input
          type="number"
          value={formData.product}
          className="input-product-form__input"
          name="product"
          placeholder="0.00"
          onChange={e => setFormData((formData.product = e.target.value))}
        />
        <button type="submit">Input</button>
      </form>
    </div>
  );
}
