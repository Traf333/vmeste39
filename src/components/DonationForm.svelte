<script>
  const callbacks = {
    onSuccess: function (options, ...rest) {
      console.log("Success", { options, rest });
    },
    onFail: function (reason, options) {
      console.log("FAILS", { options, reason });
    },
    onComplete: function (paymentResult, options) {
      console.log("Complete", { options, paymentResult });
    },
  };

  const data = {
    //options
    publicId: import.meta.env.PUBLIC_CP_ID, //id из личного кабинета
    description: "Оплата товаров в  xample.com", //назначение
    amount: 100, //сумма
    currency: "RUB", //валюта
    accountId: "user@example.com", //идентификатор плательщика (необязательно)
    invoiceId: "1234567", //номер заказа  (необязательно)
    email: "user@example.com", //email плательщика (необязательно)
    skin: "mini", //дизайн виджета (необязательно)
    autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
    data: {
      myProp: "myProp value",
    },
    payer: {
      firstName: "Тест",
      lastName: "Тестов",
      middleName: "Тестович",
      birth: "1955-02-24",
      address: "тестовый проезд дом тест",
      street: "Lenina",
      city: "MO",
      country: "RU",
      phone: "123",
      postcode: "345",
    },
  };

  const handleSubmit = async () => {
    console.log("Submits");
    let widget = new cp.CloudPayments({ language: "ru-RU" });
    widget.pay("auth", data, callbacks);
  };
</script>

<button on:click={handleSubmit}>Submit</button>
