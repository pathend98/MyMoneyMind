import type { Debit } from "../model/Debit";
import { useState } from "react";
import { useDebitStore } from "../store/debitStore";
import type { NewDebit } from "../model/NewDebit";
import { Form } from "@/ui/form/component";
import { FieldType } from "@/ui/form/model/FieldType";

export const DebitList = (): JSX.Element => {
  const debits = useDebitStore((store) => store.debits);
  const addDebitToStore = useDebitStore((store) => store.addAsync);

  const [newDebit, setNewDebit] = useState<NewDebit>({
    name: "",
    value: 0.0,
    category: "Groceries",
    date: new Date(),
  });

  const totalPrice: number = debits.reduce(
    (total: number, debit: Debit) => total + debit.value,
    0,
  );

  const setName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewDebit((currentDebit) => ({
      ...currentDebit,
      name: event.target.value,
    }));
  };

  const setValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewDebit((currentDebit) => ({
      ...currentDebit,
      value: +event.target.value,
    }));
  };

  const setCategory = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setNewDebit((currentDebit) => ({
      ...currentDebit,
      category: event.target.value,
    }));
  };

  const submitAddDebit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    addDebitToStore({ ...newDebit, date: new Date() });
  };

  return (
    <>
      <h1>Debit List</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Category</td>
          </tr>
        </thead>

        <tbody>
          {debits.map((debit) => (
            <tr key={debit.id}>
              <td>{debit.name}</td>
              <td>{debit.value.toFixed(2)}</td>
              <td>{debit.category}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={2}>Total:</td>
            <td>{totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      <Form
        onSubmit={submitAddDebit}
        submitText="Add"
        fields={[
          {
            name: "name",
            type: FieldType.TEXT,
            value: newDebit.name,
            onChange: setName,
          },
          {
            name: "value",
            type: FieldType.NUMBER,
            value: newDebit.value,
            onChange: setValue,
            min: "0",
            step: "0.01",
            pattern: "^\\d*(\\.\\d{0,2})?$",
          },
          {
            name: "category",
            type: FieldType.SELECT,
            value: newDebit.category,
            onChange: setCategory,
            options: [
              { label: "Groceries", value: "Groceries" },
              { label: "Food / Drink", value: "Food / Drink" },
              { label: "Health", value: "Health" },
            ],
          },
        ]}
      />
    </>
  );
};
