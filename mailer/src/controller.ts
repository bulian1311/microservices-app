import nodemailer from "nodemailer";

import config from "./config";

export const sendCartMail = async (req: Request, res: Response) => {
  const { cart, user } = req.body;

  if (!cart || !user) {
    res.json({ error: "not have parameters" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport(config.mailer);

    let userText = `
    <h3>Заказчик:</h3>
    <p><b>Имя:</b> ${user.name || ""}</p>
    <p><b>Телефон:</b> ${user.phone || ""}</p>
    <p><b>Email:</b> ${user.email || ""}</p>
    <p><b>Хочет чтобы ему:</b> ${
      user.prefer && user.prefer === "phone" ? "Позвонили" : "Написали"
    }</p>
    <hr>
  `;

    let cartText = `
    <h3>Заказ: </h3>
    <p><b>Общая стоимость: </b>${cart.total || ""}</p>
    `;

    cart.cartList &&
      cart.cartList.forEach((item: any) => {
        cartText =
          cartText +
          `
            <p><b>${item.title || ""}</b></p>
            <p>Колличество: ${item.qty || ""}</p>
            <p>Цена: ${item.price || ""}</p>
          `;
      });

    await transporter.sendMail({
      from: "info@magmer.ru",
      to: user.email,
      subject: "Заказ принят",
      text: "Ваш заказ принят на обработку.",
    });

    await transporter.sendMail({
      from: "info@magmer.ru",
      to: "info@magmer.ru",
      subject: "Поступил новый заказ",
      html: "<h1>Поступил новый заказ!</h1><hr>" + userText + cartText,
    });

    res.status(200).json({ msg: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const sendMessageMail = async (req: Request, res: Response) => {
  const { user } = req.body;

  if (!user) {
    res.status(200).json({ error: "not have parameters" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport(config.mailer);

    let userText = `
      <h3>Заказчик:</h3>
      <p><b>Имя:</b> ${user.name || ""}</p>
      <p><b>Телефон:</b> ${user.phone || ""}</p>
      <p><b>Email:</b> ${user.email || ""}</p>
      <p><b>Хочет чтобы ему:</b> ${
        user.prefer && user.prefer === "phone" ? "Позвонили" : "Написали"
      }</p>
      <hr>
      <p><b>Сообщение:</b> ${user.message || ""}</p>
    `;

    await transporter.sendMail({
      from: "info@magmer.ru",
      to: user.email,
      subject: "Спасибо за обратную связь",
      text:
        "Спасибо за обратную связь. Ваше сообщение приято и отправлено на обработку.",
    });

    await transporter.sendMail({
      from: "info@magmer.ru",
      to: "info@magmer.ru",
      subject: "Поступило новое сообщение",
      html: "<h1>Поступило новое сообщение!</h1><hr>" + userText,
    });

    res.status(200).json({ msg: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
