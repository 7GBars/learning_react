import { FC } from "react";

import './index.scss'

export const ErrorPageContent: FC<{ message: string }> = ({message}) => {
  return (
    <div className={'error_page-container'}>
      {/* You can use your own styling and methods of handling error */}
      <p className={'error_page-container__header'}>Пользовательская ошибка  / Ошибка UI</p>
      <p className={'error_page-container__content'}>{message}</p>
    </div>
  );
};