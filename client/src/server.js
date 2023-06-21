const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  // Валидация данных
  // ...

  // Создание новой записи пользователя в базе данных
  // ...

  // Отправка ответа клиенту
  res.status(200).json({ message: "Регистрация прошла успешно" });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
