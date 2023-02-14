import { useContext } from 'react';
import { CREATE, UPDATE } from '../../context/actions';
import { Context } from '../../context/Provider';
import { formatDateTime } from '../../utils';

function Form({ data }) {
  const [state, dispatch] = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.elements['description'].value;
    const amount = e.target.elements['amount'].value;
    const currency = e.target.elements['currency'].value;
    const dateTime = e.target.elements['dateTime'].value;
    console.log(dateTime);

    dispatch({
      type: data?.description ? UPDATE : CREATE,
      payload: {
        amount,
        currency,
        description,
        id: data?.description ? data.id : state.data.length,
        timestamp: new Date(dateTime),
      },
    });
    e.target.reset();
    window.closeModal();
  };
  return (
    <form onSubmit={handleSubmit}>
      {data?.description && <h2>Update Cost</h2>}
      {!data?.description && <h2>Add New Cost</h2>}

      <input
        type="text"
        placeholder="Description"
        name="description"
        required
        defaultValue={data?.description}
      />
      <input
        type="number"
        placeholder="Amount of Money"
        name="amount"
        step={0.01}
        min={0}
        required
        defaultValue={data?.amount}
      />
      <select
        placeholder="Currency Type"
        required
        name="currency"
        defaultValue={data?.currency}
      >
        <option value="$">$</option>
        <option value="€">€</option>
        <option value="IQD">IQD</option>
      </select>
      <input
        type="datetime-local"
        placeholder="Date and Time"
        name="dateTime"
        required
        defaultValue={data?.timestamp && formatDateTime(data.timestamp)}
      />
      {data?.description && <input type="submit" value="Update" />}
      {!data?.description && <input type="submit" value="Add" />}
    </form>
  );
}

export default Form;
