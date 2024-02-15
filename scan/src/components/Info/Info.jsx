import css from './Info.module.css'
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Info = (props) => {

    return (
        <div className={css.info}>
        <div className={css.bg}></div>
        <table className={css.desktop}>
            <tbody>
            <tr>
                <td className={css.used}>
                    Использовано компаний
                </td>
                <td className={css.usedCount}>
                    {props.usedCompanyCount}
                </td>
            </tr>
            <tr>
                <td className={css.limit}>
                    Лимит по компаниям
                </td>
                <td className={css.limitCount}>
                   { props.companyLimit } 
                </td>

            </tr>
            </tbody>
        </table>
        <div className={css.mobile}>
            <div className={css.used}>
                Использовано компаний
            </div>
            <div className={css.usedCount}>
            {props.usedCompanyCount}
            </div>
            <div className={css.limit}>
                Лимит по компаниям
            </div>
            <div className={css.limitCount}>
            { props.companyLimit } 
            </div>
        </div>
    </div>  
 
    )
    }

export { Info }