import React from 'react';
import { Link } from 'react-router-dom';

// Quando da o connect, o dispatch fica disponível na props
const ExpenseListItem = ({ description, amount, createdAt, id}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;