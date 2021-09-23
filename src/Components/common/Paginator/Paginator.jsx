import React, {useState} from "react";
import styles from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesNumber = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesNumber / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftBorderPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightBorderPortionNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && <button onClick={ () => {setPortionNumber(portionNumber - 1)} }>Prev</button>}
            {pages
                .filter(p => p >= leftBorderPortionNumber && p <= rightBorderPortionNumber)
                .map(p => {
                return <span className={currentPage === p && styles.selected} key={p} onClick={() => {
                    onPageChanged(p)
                }}>{p}</span>
            })}
            {portionCount > portionNumber && <button onClick={ () => {setPortionNumber(portionNumber + 1)} }>Next</button>}
        </div>
    )
}

export default Paginator;