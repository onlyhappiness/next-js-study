import React from "react";
import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaList.module.css";

function PizzaList() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        THE BEST PIZZA IN TOWN
      </div>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ipsa illum quam odit
        corrupti sapiente dolores nisi obcaecati
        incidunt tenetur vero distinctio,
        laboriosam vitae temporibus eaque minus
        modi, vel, ad expedita!
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList;
