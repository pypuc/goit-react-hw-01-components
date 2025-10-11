import React from "react";
import style from "./Statistics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.list}>
        {Array.isArray(stats) &&
          stats.map((item) => (
            <li className={style.item} key={item.id}>
              <span className={style.label}>{item.label}</span>
              <span className={style.percentage}>{item.percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Statistics;
