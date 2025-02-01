export async function getProductCots(newQuantity: number): Promise<number> {
  return new Promise((resolve, reject) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity);
    }, 2300);
  });
}