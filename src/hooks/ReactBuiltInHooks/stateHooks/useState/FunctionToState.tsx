import React, { useState } from 'react';

type TFunctionToStateProps = {}

export const FunctionToState: React.FC<TFunctionToStateProps> = ({}) => {
  // 🎯 КЕЙС: Переключение между режимами работы
  const [fetcher, setFetcher] = useState(() => mockFetcher);

  return (
    <>
      <button
      onClick={(e) => {
        setFetcher(() => realFetcher);
      }}>Сменить тип запроса</button>
      <button
      onClick={(e) => {
        fetcher()
      }}>Запросить данные</button>
    </>
  );
}

// 📍 ДРУГИЕ КЕЙСЫ ИСПОЛЬЗОВАНИЯ:

// 🎯 1. СТРАТЕГИИ ОПЛАТЫ
// const [paymentMethod, setPaymentMethod] = useState(() => stripePayment)
// setPaymentMethod(() => paypalPayment)

// 🎯 2. ТЕМЫ/СКИНЫ
// const [themeApplier, setThemeApplier] = useState(() => applyDarkTheme)
// setThemeApplier(() => applyLightTheme)

// 🎯 3. МЕЖДУНАРОДИЗАЦИЯ
// const [translator, setTranslator] = useState(() => enTranslator)
// setTranslator(() => ruTranslator)

// 🎯 4. АЛГОРИТМЫ СОРТИРОВКИ
// const [sorter, setSorter] = useState(() => sortByDate)
// setSorter(() => sortByName)

// 🎯 5. ВАЛИДАЦИЯ ФОРМ
// const [validator, setValidator] = useState(() => basicValidator)
// setValidator(() => strictValidator)

// 🎯 6. КЭШИРОВАНИЕ ДАННЫХ
// const [cacheStrategy, setCacheStrategy] = useState(() => memoryCache)
// setCacheStrategy(() => localStorageCache)

const mockFetcher = () => {
  setTimeout(() => {
    console.log('Запрос прошел')
  }, 2000)
}
const realFetcher = async () => {
  debugger;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);
    debugger;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};