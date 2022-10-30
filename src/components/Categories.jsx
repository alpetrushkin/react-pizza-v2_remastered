import React, {useState} from 'react';

const Categories = () => {
   const [activeCategories, setActiveCategories] = useState(0)

   const onClickActiveHandler = (value) => {
     setActiveCategories(value)
   }

   const categories = [
      'Все',
      'Мясные',
      'Вегетарианская',
      'Гриль',
      'Острые',
      'Закрытые',
   ]

   return (
      <div className="categories">
         <ul>
            {categories.map((el, index) => {
               return <li onClick={() => onClickActiveHandler(index)} className={ activeCategories === index ? "active" : ''}>{el}</li>
            })}
         </ul>
      </div>
   );
};

export default Categories;