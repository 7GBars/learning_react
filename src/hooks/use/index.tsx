import React, {Suspense, use, useRef} from 'react';



// ============ МОК АСИНХРОННОГО API ============
function fetchUserProfile() {
  return new Promise<{ name: string; email: string; role: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Елена Петрова",
        email: "elena@example.com",
        role: "Senior Frontend Developer",
      });
    }, 2000); // Имитация задержки 2 сек
  });
}
const userProfilePromise = fetchUserProfile();
// ============ КОМПОНЕНТ, ИСПОЛЬЗУЮЩИЙ use() ============
const UserProfile = () => {


  // ✅ Теперь use() получает один и тот же промис
  const user = use(userProfilePromise);

  return (
    <div className="user-profile">
      <h2>👤 {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Роль:</strong> {user.role}</p>
    </div>
  );
}

// ============ ОСНОВНОЙ КОМПОНЕНТ С Suspense ============
export const UseWithPromise = () =>{
  return (
    <div className="app">
      <h1>Профиль пользователя</h1>
      <Suspense fallback={<div className="loading">⏳ Загружаем ваш профиль...</div>}>
        <UserProfile />
      </Suspense>
    </div>
  );
}
