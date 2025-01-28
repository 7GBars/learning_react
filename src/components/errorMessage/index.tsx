import { FC } from "react";

export const ErrorMsg: FC<{ message: string }> = ({message}) => {
  return (
    <div>
      {/* You can use your own styling and methods of handling error */}
      <p>Something went wrong!</p>
      <p>{message}</p>
    </div>
  );
};