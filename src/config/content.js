// Header
export const headerContent = {
  headerTabs: [
    {
      id: 'about-me',
      value: 'Про мене',
    },
    {
      id: 'services',
      value: 'Послуги',
    },
    {
      id: 'prices',
      value: 'Ціни',
    },
    {
      id: 'contacts',
      value: 'Контакти',
    }
  ],
  buttonText: 'Безкоштовна консультація'
}

// Hero section

export const heroContent = {
  lid: 'Ваш персональний психолог,  який завжди поруч',
  title: 'Марія Янчук',
  description: 'Я буду супровождувати Вас на шляху до самопізнання та допомагатиму пережити складні періоди життя',
  buttonText: 'Записатися'
}

// About me section

export const aboutMeContent = {
  title: 'Про мене',
  paragraf1: 'Я працюю використовуючи метод Транзактного аналізу, який ще називають ОК-ейний метод в його основі лежить твердження, що від народження всі люди ОК і, приймаючи свою ОК-ейність і ОК-ейність інших, можна бути у гармонійних ваєминах з людьми та світом в цілому.',
  paragraf2: 'Для мене кожен клієнт - це новий всесвіт, наповнений власними переконаннями, емоціями, думками, власним баченням та ставленням до речей і обставин, які його оточують. Знайомство з людиною та внутрішнім світом особистості це шлях, і у кожного він свій, унікальний, тож для мене основне завдання - бути поруч на цьому шляху:',
  paragraf3: 'допомагати в процесі створення, становлення, розвитку нового, опираючись на аутентичний досвід кожного.',
}

// Services section

export const servicesContent = {
  title: 'Ситуації, з якими я можу Вам допомогти',
  servicesList: [
    {
      text: 'Пошук себе',
      alt: 'Дівчина в дзеркалі',
      imgPath: require('../images/girl-in-mirror.png')
    },
    {
      text: 'Проблеми у стосунках',
      alt: 'Пара',
      imgPath: require('../images/couple.png')
    },
    {
      text: 'Складнощі із прийняттям рішень',
      alt: 'Вибір',
      imgPath: require('../images/apple&donut.png')
    },
    {
      text: 'Невпевненість у собі',
      alt: 'Дівчина в светрі',
      imgPath: require('../images/girl-sweater.png')
    },
    {
      text: 'Допомога в кризових ситуаціях',
      alt: 'Сумна дівчина',
      imgPath: require('../images/sad-girl.png')
    },
    {
      text: 'Пошук сенсів',
      alt: 'Жінка',
      imgPath: require('../images/woman&oldman.png')
    },
    {
      text: 'Пошук внутрішніх опор',
      alt: 'медитуюча дівчина',
      imgPath: require('../images/meditating-girl.png')
    },
    {
      text: 'Тривога, страхи, переживання',
      alt: 'чоловік в окулярах',
      imgPath: require('../images/man-in-glasses.png')
    }
  ]
}

// Individual section

export const individualContent = {
  title: 'Індивідуальна консультація',
  description: 'Індивідуальна консультація - це можливість отримати час тільки для себе, де фокус психолога спрямований на клієнта, углиб внутрішнього світу людини. Кожен у процесі консультації може бути тут і тепер, собою, таким яким він є.'
}

// Prices section

export const pricesContent = {
  title: 'Вартість послуг',
  cards: [
    {
      title: 'Індивідуальні консультації',
      typeOfConsultation: 'Онлайн',
      price: '2 500 грн',
      quantityOfSessions: '3 сесії',
      durationOfSession: '50 хвилин / 1 сесія',
      descr: 'Для тих, хто цінує свій час та планує зустрічі заздалегідь',
      buttonText: 'Записатися',
      shouldOpenModal: true
    },
    {
      title: 'Індивідуальні консультації',
      typeOfConsultation: 'Онлайн',
      price: '1000 грн',
      quantityOfSessions: '1 сесія',
      durationOfSession: '50 хвилин',
      descr: 'Зручний спосіб отримати допомогу, незважаючи на ваше розташування',
      buttonText: 'Записатися',
      shouldOpenModal: true
    },
    {
      title: 'Індивідуальні консультації',
      typeOfConsultation: 'Онлайн',
      price: 'Безкоштовно',
      quantityOfSessions: '1 сесія',
      durationOfSession: 'Питання — Відповідь',
      descr: 'Опишіть вашу проблему та тримайте  швидку безкоштовну допомогу',
      buttonText: 'Записатися',
      shouldOpenModal: ''
    },
  ]
}

// Features section

export const featuresContent = {
  title: 'Особливості співпраці',
  features: [
    {
      image: require('../images/privacy-icon.png'),
      title: 'Конфіденційність'
    },
    {
      image: require('../images/empathy-icon.png'),
      title: 'Екологічні техніки'
    },
    {
      image: require('../images/techniques-icon.png'),
      title: 'Емпатія'
    },
    {
      image: require('../images/transanalysis-icon.png'),
      title: 'Транзактний аналіз (ОК-ейний метод)'
    }
  ]
}

// Consultation section

export const consultationContent = {
  title: '<span>Безкоштовна</span> консультація в месенджері',
  formTitle: 'Опишіть Ваше питання чи проблему, і я сконтактую з Вами',
  fieldName: "Ваше ім'я",
  fieldNameError: "Вкажіть ваше ім'я",
  fieldPhone: "Телефон",
  fieldPhoneError: "Вкажіть ваш номер телефону",
  fieldQuestion: "Опишіть вашу проблему",
  fieldQuestionError: "Опишіть вашу проблему",
  buttonText: "Відправити"
}

// Contacts section

export const contactsContent = {
  title: 'Контакти',
  description: "Буду рада бачити Вас на консультаціях",
  subtitle: 'Графік роботи',
  workTime: 'Пн-Пт: 10:00-19:00, Сб-Нд: вихідні',
  email: 'info@mariiayanchuk.com.ua',
  phoneNumber: '+38 (097) 69 452 50'
}

// Footer

export const footerContent = {
  text1: 'Персональний сайт психолога Марії Янчук',
  text2: '© Всі права захищені 2022',
  text3: 'Політика конфіденційності',
  subtitle1: 'Меню',
  item1: 'Про мене',
  item2: 'Послуги',
  item3: 'Ціни',
  subtitle2: 'Час роботи',
  subtitle3: 'Контакти',
  email: 'info@mariiayanchuk.com.ua',
  phoneNumber: '+38 (097) 69 452 50',
  workTime: 'Пн-Пт: 10:00-19:00, Сб-Нд: вихідні'
}

// Modal

export const modalContent = {
  title: 'Записятися на консультацію',
  description: 'Не любите чекати? Телефонуйте мені:',
  phoneNumber: '+38 (097) 69 452 50',
  fieldName: "Ваше ім'я",
  fieldNameError: "Вкажіть ваше ім'я",
  fieldPhone: "Телефон",
  fieldPhoneError: "Вкажіть ваш номер телефону",
  privacyPolicy: "Натискаючи на кнопку, Ви даєте згоду на обробку персональних даних та погоджуєтесь з ",
  buttonText: "Залишити заявку",
  thankYouTitle: 'Дякую',
  thankYouText: 'Ваша заявка успішно подана',
  thankYouButton: 'На Головну'
  
}
