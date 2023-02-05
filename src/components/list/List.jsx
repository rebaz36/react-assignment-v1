import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./List.module.css";

import { Context } from "../../context/Provider";

import { REMOVE } from "../../context/actions";

import Card from "../card/Card";
import Form from "../modal/Form";
import Modal from "../modal/Modal";
import Container from "../container/Container";
import { highlightText } from "../../utils";

export default function List() {
  const [state, dispatch] = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  // REFACTOR: move the getColor function to the correct folder
  const getColor = (amount) => {
    if (amount >= 10 ** 6) return 40;
    if (amount < 10 ** 6 && amount >= 10 ** 5) return 50;
    if (amount < 10 ** 5 && amount >= 10 ** 4) return 60;
    if (amount < 10 ** 4 && amount >= 10 ** 3) return 70;
    if (amount < 10 ** 3 && amount >= 10 ** 2) return 80;
    if (amount < 10 ** 2 && amount >= 10 ** 1) return 90;
    else return 95;
  };

  const handleEdit = (data) => {
    setSelectedItem(data);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        {state.data.map((item) => (
          <Card key={item.id}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  backgroundColor: `hsl(183,100%,${getColor(item.amount)}%)`,
                  padding: ".5rem",
                  borderRadius: ".25rem",
                  fontSize: "21px",
                  fontWeight: 500,
                  width: "min-content",
                }}
              >{`${item.currency}${item.amount}`}</div>
              <div>
                {highlightText(state.searchText, item.description).map(
                  (letter) => letter
                )}
              </div>
              <div>{new Date(item.timestamp).toLocaleString()}</div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <button
                onClick={() => {
                  handleEdit(item);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: REMOVE, payload: item.id })}
              >
                Delete
              </button>
            </div>
          </Card>
        ))}
      </div>
      {!state.data.length && (
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
            fontSize: 21,
          }}
        >
          There is no data
        </div>
      )}
      {/* create a portal when modal is open and item is selected pass item data to the form of the modal */}
    </Container>
  );
}
