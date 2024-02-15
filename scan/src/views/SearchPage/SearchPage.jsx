import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import DocumentImage from "@assets/images/SearchPageImg3.svg";
import FolderImage from "@assets/images/SearchPageImg2.svg";
import GroupImage from "@assets/images/SearchPageImg1.svg";
import { useNavigate } from "react-router-dom";
import {Field} from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
// import { Container } from "react-bootstrap";


const SearchPage = (props) => {
 
  return (
    
    <main className={styles.search}>
      
      <div className={styles.searchPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            НАЙДИТЕ НЕОБХОДИМЫЕ
            <p>ДАННЫЕ В ПАРУ КЛИКОВ.</p>
          </h1>
          <p className={styles.text}>
            Задайте параметры поиска. Чем больше заполните, тем точнее поиск
          </p>
        <div className={styles.searchContent}>

        <form onSubmit={props.handleSubmit} className={styles.form}>
        <div className={styles.column}>
              <div className={styles.left}>
                <label htmlFor="inn" className={styles.left_label}>
                  ИНН Компании <span className={styles.star}>*</span>
                </label>

                <Field placeholder={"10 цифр"} name={"inn"}
                 validate={[required]}
                 component={Input}/>

                <label htmlFor="tonality" className={styles.label}>
                  Тональность
                </label>

                <Field name="tonality" component="select" className={styles.select}>
               <option></option>
               <option value="any">Любая</option>
               <option value="positive">Позитивная</option>
               <option value="negative">Негативная</option>
               </Field>

                
                <label htmlFor="documentCount" className={styles.left_label}>
                  Количество документов в выдаче <span className={styles.star}>*</span>
                </label>

                <Field placeholder={"1 до 1000"} name={"documentCount"}
                 validate={[required]}
                 component={Input}/>

               
                <h1>Диапозон поиска <span className={styles.star}>*</span></h1>

                <div className={styles.data}>
                  <label
                    className={styles.left_label}>

                  </label>
                 <Field placeholder={"Дата начала"} name={"startDate"}
                 validate={[required]}
                 component={Input} 
                 type="date"
                 className={styles.left_input}/>

                  
                <div className={styles.date_separator}></div>
                <label className={styles.left_label}></label>

                 <Field placeholder={"Дата конца"} name={"endDate"}
                 validate={[required]}
                 component={Input} 
                 type="date"
                 className={styles.left_input}/>
                  
                  </div>
                </div>
                </div>
               <div className={styles.column}>
                <div className={styles.right}>
                  <div className={styles.checkbox}>

                <Field 
                 name={"completeness"}
                 id="completeness" 
                 component={Input} 
                 type="checkbox"
                 className={styles.checkbox}/>

                  

                  <label htmlFor="completeness" className={styles.label}>
                    Признак максимальной полноты
                  </label>

                </div>
                <div className={styles.checkbox}>
                <Field 
                 name={"businessContext"}
                 id="businessContext" 
                 component={Input} 
                 type="checkbox"
                 className={styles.checkbox}/>

                
                  
                  <label htmlFor="businessContext" className={styles.label}>
                    Упоминания в бизнес-контексте
                  </label>
                </div>

                <div className={styles.checkbox}>
                <Field 
                 name={"mainRole"}
                 id="mainRole" 
                 component={Input} 
                 type="checkbox"
                 className={styles.checkbox}/>
                  
                  <label htmlFor="mainRole" className={styles.label}>
                    Главная роль в публикации
                  </label>
                </div>

                <div className={styles.checkbox}>
                <Field 
                 name={"riskFactors"}
                 id="riskFactors" 
                 component={Input} 
                 type="checkbox"
                 className={styles.checkbox}/>
                 
                  <label htmlFor="riskFactors" className={styles.label}>
                    В Публикации только c риск-факторами
                  </label>
                </div>

                <div className={styles.checkbox}>
                <Field 
                 name={"technicalNews"}
                 id="technicalNews" 
                 component={Input} 
                 type="checkbox"
                 className={styles.checkbox}/>
                  
                  <label htmlFor="technicalNews" className={styles.label}>
                    Включать технические новости рынков
                  </label>
                </div>

                <div className={styles.checkbox}>
                <Field 
                 name={"announcements"}
                 id="announcements" 
                 component={Input} 
                 type="checkbox" 
                 className={styles.checkbox}/>
                  
                  <label htmlFor="announcements" className={styles.label}>
                    Включать анонсы и календари
                  </label>
                </div>

                <div className={styles.checkbox}>
                <Field 
                 name={"newsDigests"}
                 id="newsDigests" 
                 component={Input} 
                 type="checkbox"
                 className={styles.checkbox}/>
                  

                  <label htmlFor="newsDigests" className={styles.label}>
                    Включать сводки новостей
                  </label>

                </div>

                <button
                 className={styles.submitButton}>
                 Поиск
                </button>

                <p className={styles.text2}>* Обязательные к заполнению поля</p>
                </div>
                </div>
                </form>
              </div>
              </div>
              </div>
             
              </main>
            );
          };   
           
  
export default SearchPage;