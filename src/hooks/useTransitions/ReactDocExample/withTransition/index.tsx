import { useState, ChangeEvent, useTransition } from "react";

// Типы для пропсов компонентов
type ItemProps = {
  isPending: boolean;
  onUpdateQuantity: (newQuantity: number) => Promise<void>;
};

type TotalProps = {
  quantity: number;
  isPending: boolean;
};

// API функция
export async function updateQuantity(newQuantity: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newQuantity);
    }, 2000);
  });
}

// Компонент Item
function Item({ onUpdateQuantity, isPending }: ItemProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      onUpdateQuantity(value);
    }
  }

  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="quantity">Quantity: </label>
      <input

        id="quantity"
        type="number"
        onChange={handleChange}
        defaultValue={1}
        min={1}
      />
    </div>
  );
}

// Компонент Total
function Total({ quantity, isPending }: TotalProps) {
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return (
    <div className="total">
      <span>Total:</span>
      <span>
        {isPending ? "🌀 Updating..." : `${intl.format(quantity * 9999)}`}
      </span>
    </div>
  );
}

// Основной компонент App
export function ExampleWithTransition() {
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const updateQuantityAction = async newQuantity => {
    // To access the pending state of a transition,
    // call startTransition again.
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity);
      startTransition(() => {
        setQuantity(savedQuantity);
      });
    });
  };

  return (
    <div>
      <h1>With transition</h1>
      <Item onUpdateQuantity={updateQuantityAction} />
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  );
}