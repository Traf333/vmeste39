export type TPaymentForm = {
  recurrent: boolean;
  otherAmount: number;
  amount: number;
  email: string;
  name: string;
};

type TPaymentData = TPaymentForm & {
  onSuccess: (options: object) => void;
  onFail: (reason: object, options: object) => void;
};

export const charge = (params: TPaymentData) => {
  params.recurrent ? chargeRecurrent(params) : chargeOnce(params);
};

const chargeOnce = (params: TPaymentData) => {
  const widget = new cp.CloudPayments({ language: "ru-RU" });

  widget.pay(
    "charge",
    {
      //options
      publicId: import.meta.env.PUBLIC_CP_ID, //id из личного кабинета
      description: "Пожертвование на помощь большим песикам", //назначение
      amount: params.amount || params.otherAmount, //сумма
      currency: "RUB", //валюта
      accountId: params.email, //идентификатор плательщика (необязательно)
      email: params.email, //email плательщика (необязательно)
      skin: "mini", //дизайн виджета (необязательно)
      autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
      payer: {
        firstName: params.name,
      },
    },
    { onSuccess: params.onSuccess, onFail: params.onFail }
  );
};

const chargeRecurrent = (params: TPaymentData) => {
  const widget = new cp.CloudPayments({ language: "ru-RU" });

  var receipt = {
    Items: [
      //товарные позиции
      {
        label: "Благотворительное пожертвование на помощь большим песикам", //наименование товара
        price: params.amount || params.otherAmount, //цена
        quantity: 1, //количество
        amount: params.amount || params.otherAmount, //сумма
      },
    ],
    email: params.email, //e-mail покупателя, если нужно отправить письмо с чеком
  };

  let data = {
    CloudPayments: {},
  };

  data.CloudPayments = {
    CustomerReceipt: receipt, //чек для первого платежа
    recurrent: {
      interval: "Month",
      period: 1,
      customerReceipt: receipt, //чек для регулярных платежей
    },
  }; //создание ежемесячной подписки

  widget.charge(
    {
      // options
      publicId: import.meta.env.PUBLIC_CP_ID, //id из личного кабинета
      description: "Пожертвование на помощь большим песикам", //назначение
      amount: params.amount || params.otherAmount, //сумма
      currency: "RUB", //валюта
      accountId: params.email, //идентификатор плательщика (обязательно для создания подписки)
      data,
    },
    params.onSuccess,
    params.onFail
  );
};
