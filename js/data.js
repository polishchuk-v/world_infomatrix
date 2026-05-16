const T = {
  en: {
    eyebrow: 'Emergency travel help',
    hero_title: 'Something went wrong<br>abroad?',
    hero_sub: 'Pick your situation and get instant help. No login needed.',
    showing_for: 'Showing info for',
    emergency_title: 'General emergency number',
    emergency_sub: 'Works anywhere in Europe from any phone',
    what_need: 'What do you need help with?',
    cat_border: 'Border crossing',      cat_border_d: 'Documents, queue times, tips',
    cat_docs: 'Lost documents',         cat_docs_d: 'Embassy contacts, temp ID',
    cat_medical: 'Medical help',        cat_medical_d: 'Clinics, pharmacies, emergency',
    cat_scam: 'Scam recovery',          cat_scam_d: 'Block card, report fraud',
    cat_car: 'Car travel rules',        cat_car_d: 'Vignette, speed limits',
    cat_carrental: 'Car rental',          cat_carrental_d: 'Companies, conditions, age, deposit',
    home: 'Home', community: 'Community', housing: 'Housing',
    sign_in: 'Sign in', back: 'Back',
    rules: 'Rules', lifehacks: 'Lifehacks', live_queue: 'Live queue',
    docs_req: 'Documents required', driving_rules: 'Driving rules', vignette: 'Vignette',
    passport: 'Passport / ID card', passport_val: 'Required (EU ID valid)',
    vehicle_reg: 'Vehicle registration', original: 'Original required',
    green_card: 'Green card', required: 'Required', itp_val: 'Sticker on windshield',
    city_speed: 'City', out_city: 'Outside city', motorway: 'Motorway',
    alcohol: 'Alcohol limit', zero_tol: '0.0 g/L — zero',
    v7: '7-day', v30: '30-day', buy_online: 'Buy online',
    tips_desc: 'Tips from travellers who crossed recently.',
    tip1: 'Cross before 7am', tip2: 'Car lane faster than trucks',
    tip3: 'Check frontier.ro for live updates', tip4: 'Late night (11pm–2am) also quiet',
    tip5: 'All docs in one folder', tip6: 'Buy vignette online before arrival',
    submit: 'Submit', report: 'Report',
    queue_desc: 'Live wait times from travellers.',
    ask_ai_title: 'Have a specific question?',
    ask_ai_sub: 'Ask our AI — knows your country & situation',
    context: 'Context:',
    q1: 'Can I cross without a passport?', q2: 'Documents for car trip', q3: 'Where to buy vignette',
    auth_title: 'Join TravelSOS', auth_sub: 'Create an account to ask questions or volunteer',
    register: 'Register', email: 'Email', password: 'Password', full_name: 'Full name',
    i_am: 'I am a...', traveler_btn: '<span class="material-symbols-rounded gf-icon">luggage</span> Traveller', volunteer_btn: '<span class="material-symbols-rounded gf-icon">volunteer_activism</span> Volunteer',
    passport_upload: 'Passport scan (for verification)',
    click_upload: 'Click to upload passport photo',
    passport_note: 'Reviewed manually within 24h. Not shared with third parties.',
    create_account: 'Create account', no_account: "Don't have an account? Switch to Register.",
    new_post: '+ New post', all: 'All',
    find_housing: 'Find housing',
    find_housing_sub: 'Free NGO shelters and affordable hotels — AI finds the best options',
    search_options: 'Search options', city: 'City', nights: 'Nights', budget: 'Budget per night',
    free_only: 'Free only', under_30: 'Under 30€', under_60: 'Under 60€', any_budget: 'Any budget',
    search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Search with AI', post_reply: 'Post reply',
    footer: 'TravelSOS — built at a hackathon. For guidance only.',
  },
  ru: {
    eyebrow: 'Экстренная помощь путешественникам',
    hero_title: 'Что-то пошло не так<br>за рубежом?',
    hero_sub: 'Выберите ситуацию и получите мгновенную помощь. Без регистрации.',
    showing_for: 'Информация для', emergency_title: 'Общий номер экстренной службы',
    emergency_sub: 'Работает в любой точке Европы', what_need: 'Чем вам помочь?',
    cat_border: 'Пересечение границы', cat_border_d: 'Документы, очереди, советы',
    cat_docs: 'Утеря документов', cat_docs_d: 'Посольства, временный ID',
    cat_medical: 'Медицинская помощь', cat_medical_d: 'Бесплатные клиники, аптеки',
    cat_scam: 'Мошенничество', cat_scam_d: 'Заблокировать карту, заявление',
    cat_car: 'Правила вождения', cat_car_d: 'Виньетки, лимиты скорости',
    cat_carrental: 'Аренда авто', cat_carrental_d: 'Компании, условия, возраст, залог',
    home: 'Главная', community: 'Сообщество', housing: 'Жильё', sign_in: 'Войти', back: 'Назад',
    rules: 'Правила', lifehacks: 'Лайфхаки', live_queue: 'Очереди онлайн',
    docs_req: 'Необходимые документы', driving_rules: 'Правила вождения', vignette: 'Виньетка',
    passport: 'Паспорт / удостоверение', passport_val: 'Обязательно (EU ID действителен)',
    vehicle_reg: 'Регистрация ТС', original: 'Оригинал обязателен',
    green_card: 'Зелёная карта', required: 'Обязательно', itp_val: 'Наклейка на лобовом стекле',
    city_speed: 'В городе', out_city: 'За городом', motorway: 'Автомагистраль',
    alcohol: 'Лимит алкоголя', zero_tol: '0.0 г/л — нулевая терпимость',
    v7: '7 дней', v30: '30 дней', buy_online: 'Купить онлайн',
    tips_desc: 'Советы от путешественников.',
    tip1: 'Пересекайте до 7 утра', tip2: 'Полоса для авто быстрее фур',
    tip3: 'Проверяйте frontier.ro', tip4: 'Ночью (23:00–2:00) тоже тихо',
    tip5: 'Все документы в одной папке', tip6: 'Купите виньетку онлайн заранее',
    submit: 'Отправить', report: 'Сообщить', queue_desc: 'Актуальное время ожидания.',
    ask_ai_title: 'Остался конкретный вопрос?', ask_ai_sub: 'Спросите AI — знает вашу страну и ситуацию',
    context: 'Контекст:', q1: 'Можно ли пересечь без паспорта?',
    q2: 'Документы для поездки на авто', q3: 'Где купить виньетку',
    auth_title: 'Присоединитесь к TravelSOS', auth_sub: 'Создайте аккаунт чтобы задавать вопросы или стать волонтёром',
    register: 'Регистрация', email: 'Email', password: 'Пароль', full_name: 'Полное имя',
    i_am: 'Я...', traveler_btn: '<span class="material-symbols-rounded gf-icon">luggage</span> Путешественник', volunteer_btn: '<span class="material-symbols-rounded gf-icon">volunteer_activism</span> Волонтёр',
    passport_upload: 'Скан паспорта (для верификации)',
    click_upload: 'Нажмите чтобы загрузить фото паспорта',
    passport_note: 'Проверяется вручную в течение 24ч. Не передаётся третьим лицам.',
    create_account: 'Создать аккаунт', no_account: 'Нет аккаунта? Переключитесь на Регистрацию.',
    new_post: '+ Новый пост', all: 'Все',
    find_housing: 'Найти жильё',
    find_housing_sub: 'Бесплатные приюты NGO и доступные отели — AI находит лучшие варианты',
    search_options: 'Параметры поиска', city: 'Город', nights: 'Ночей', budget: 'Бюджет за ночь',
    free_only: 'Только бесплатно', under_30: 'До 30€', under_60: 'До 60€', any_budget: 'Любой бюджет',
    search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Найти через AI', post_reply: 'Ответить',
    footer: 'TravelSOS — создан на хакатоне. Носит рекомендательный характер.',
  },
  ro: {
    eyebrow: 'Ajutor de urgență pentru călători',
    hero_title: 'Ceva a mers prost<br>în străinătate?',
    hero_sub: 'Alege situația și primești ajutor instant.',
    showing_for: 'Informații pentru', emergency_title: 'Număr de urgență',
    emergency_sub: 'Funcționează oriunde în Europa', what_need: 'Cu ce ai nevoie de ajutor?',
    cat_border: 'Traversare frontieră', cat_border_d: 'Documente, cozi, sfaturi',
    cat_docs: 'Documente pierdute', cat_docs_d: 'Ambasade, ID temporar',
    cat_medical: 'Ajutor medical', cat_medical_d: 'Clinici gratuite, farmacii',
    cat_scam: 'Escrocherie', cat_scam_d: 'Blochează cardul, raportează',
    cat_car: 'Reguli auto', cat_car_d: 'Rovinietă, limite viteză',
    cat_carrental: 'Închiriere auto', cat_carrental_d: 'Companii, condiții, vârstă, depozit',
    home: 'Acasă', community: 'Comunitate', housing: 'Cazare',
    sign_in: 'Conectare', back: 'Înapoi',
    new_post: '+ Post nou', all: 'Toate',
    find_housing: 'Găsește cazare', search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Caută cu AI', post_reply: 'Postează',
    footer: 'TravelSOS — construit la un hackathon.',
  },
};

T.uk = {
  ...T.en,
  eyebrow: 'Екстрена допомога мандрівникам',
  hero_title: 'Щось пішло не так<br>за кордоном?',
  hero_sub: 'Оберіть ситуацію та отримайте миттєву допомогу. Без реєстрації.',
  showing_for: 'Інформація для',
  emergency_title: 'Загальний номер екстреної служби',
  emergency_sub: 'Працює по всій Європі',
  what_need: 'Чим можемо допомогти?',
  cat_border: 'Перетин кордону', cat_border_d: 'Документи, черги, поради',
  cat_docs: 'Втрата документів', cat_docs_d: 'Посольства, тимчасове ID',
  cat_medical: 'Медична допомога', cat_medical_d: 'Клініки, аптеки, швидка',
  cat_scam: 'Шахрайство', cat_scam_d: 'Заблокувати карту, заява',
  cat_car: 'Правила водіння', cat_car_d: 'Він\'єтки, ліміти швидкості',
  cat_carrental: 'Оренда авто', cat_carrental_d: 'Компанії, умови, вік, депозит',
  home: 'Головна', community: 'Спільнота', housing: 'Житло',
  sign_in: 'Увійти', back: 'Назад',
  rules: 'Правила', lifehacks: 'Лайфхаки', live_queue: 'Черги онлайн',
  docs_req: 'Необхідні документи', driving_rules: 'Правила водіння', vignette: 'Він\'єтка',
  passport: 'Паспорт / ID', passport_val: 'Обов\'язково', vehicle_reg: 'Реєстрація ТЗ',
  original: 'Оригінал обов\'язковий', green_card: 'Зелена карта', required: 'Обов\'язково',
  city_speed: 'Місто', out_city: 'Поза містом', motorway: 'Автомагістраль',
  alcohol: 'Ліміт алкоголю', zero_tol: '0.0 г/л — нуль',
  v7: '7 днів', v30: '30 днів', buy_online: 'Купити онлайн',
  tips_desc: 'Поради від мандрівників.',
  tip1: 'Перетинайте до 7 ранку', tip2: 'Смуга для авто швидша',
  tip3: 'Перевіряйте frontier.ro', tip4: 'Вночі (23:00–2:00) також тихо',
  tip5: 'Всі документи в одній папці', tip6: 'Купіть він\'єтку онлайн заздалегідь',
  submit: 'Надіслати', report: 'Повідомити', queue_desc: 'Актуальний час очікування.',
  ask_ai_title: 'Є конкретне питання?', ask_ai_sub: 'Запитайте AI — знає вашу країну та ситуацію',
  context: 'Контекст:', q1: 'Чи можна перетнути без паспорта?',
  q2: 'Документи для поїздки на авто', q3: 'Де купити він\'єтку',
  new_post: '+ Новий пост', all: 'Всі',
  find_housing: 'Знайти житло',
  find_housing_sub: 'Безкоштовні притулки NGO та готелі — AI знаходить найкращі варіанти',
  search_options: 'Параметри пошуку', city: 'Місто', nights: 'Ночей', budget: 'Бюджет за ніч',
  free_only: 'Лише безкоштовно', under_30: 'До 30€', under_60: 'До 60€', any_budget: 'Будь-який бюджет',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Шукати з AI', post_reply: 'Відповісти',
  footer: 'TravelSOS — створено на хакатоні. Лише для орієнтування.',
};

T.tk = {
  ...T.en,
  eyebrow: 'Syýahatçylara kömek',
  hero_title: 'Daşary ýurtda bir zat<br>nädogry boldy?',
  hero_sub: 'Ýagdaýyňyzy saýlaň we derrew kömek alyň.',
  showing_for: 'Maglumat:', emergency_title: 'Adatdan daşary ýagdaý nomery',
  emergency_sub: 'Ýewropada islendik ýerden işleýär',
  what_need: 'Size nähili kömek gerek?',
  cat_border: 'Serhetden geçmek', cat_border_d: 'Resminamalar, nobatlar, maslahatlar',
  cat_docs: 'Ýitirilen resminamalar', cat_docs_d: 'Ilçihanalar, wagtlaýyn ID',
  cat_medical: 'Lukmançylyk kömegi', cat_medical_d: 'Klinikalar, dermanhana, tiz kömek',
  cat_scam: 'Galplyk', cat_scam_d: 'Karty ýapmak, arza bermek',
  cat_car: 'Awtoulag düzgünleri', cat_car_d: 'Winiýetka, tizlik çäkleri',
  home: 'Baş sahypa', community: 'Jemgyýet', housing: 'Ýaşaýyş jaý',
  sign_in: 'Giriş', back: 'Yzyna',
  new_post: '+ Täze ýazgy', all: 'Hemmesi',
  find_housing: 'Ýaşaýyş jaý tapmak',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> AI bilen gözleg', post_reply: 'Jogap',
  footer: 'TravelSOS — hakatonda guruldy.',
};

T.tr = {
  ...T.en,
  eyebrow: 'Seyahat acil yardımı',
  hero_title: 'Yurt dışında bir şeyler<br>mi ters gitti?',
  hero_sub: 'Durumunuzu seçin ve anında yardım alın. Giriş gerekmez.',
  showing_for: 'Bilgi gösteriliyor:',
  emergency_title: 'Genel acil durum numarası',
  emergency_sub: 'Avrupa\'nın her yerinde çalışır',
  what_need: 'Nasıl yardımcı olabiliriz?',
  cat_border: 'Sınır geçişi', cat_border_d: 'Belgeler, kuyruklar, ipuçları',
  cat_docs: 'Kayıp belgeler', cat_docs_d: 'Büyükelçilik, geçici kimlik',
  cat_medical: 'Tıbbi yardım', cat_medical_d: 'Klinikler, eczane, acil servis',
  cat_scam: 'Dolandırıcılık', cat_scam_d: 'Kartı bloke et, şikayet',
  cat_car: 'Araç kuralları', cat_car_d: 'Vinyetka, hız limitleri',
  home: 'Ana sayfa', community: 'Topluluk', housing: 'Konaklama',
  sign_in: 'Giriş yap', back: 'Geri',
  rules: 'Kurallar', lifehacks: 'İpuçları', live_queue: 'Canlı kuyruk',
  docs_req: 'Gerekli belgeler', driving_rules: 'Sürüş kuralları', vignette: 'Vinyetka',
  passport: 'Pasaport / Kimlik', original: 'Asıl gerekli',
  city_speed: 'Şehir', out_city: 'Şehir dışı', motorway: 'Otoyol',
  alcohol: 'Alkol limiti', zero_tol: '0.0 g/L — sıfır tolerans',
  v7: '7 günlük', v30: '30 günlük', buy_online: 'Online satın al',
  submit: 'Gönder', report: 'Bildir', queue_desc: 'Güncel bekleme süreleri.',
  ask_ai_title: 'Özel sorunuz var mı?', ask_ai_sub: 'AI\'ya sorun — ülkenizi ve durumunuzu biliyor',
  context: 'Bağlam:', q1: 'Pasaportsuz geçebilir miyim?',
  q2: 'Araba gezisi için belgeler', q3: 'Vinyetka nereden alınır',
  new_post: '+ Yeni gönderi', all: 'Tümü',
  find_housing: 'Konaklama bul',
  find_housing_sub: 'Ücretsiz NGO barınakları ve uygun oteller — AI en iyi seçenekleri bulur',
  search_options: 'Arama seçenekleri', city: 'Şehir', nights: 'Gece', budget: 'Gecelik bütçe',
  free_only: 'Yalnızca ücretsiz', under_30: '30€ altı', under_60: '60€ altı', any_budget: 'Herhangi bir bütçe',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> AI ile ara', post_reply: 'Yanıtla',
  footer: 'TravelSOS — bir hackathon\'da yapıldı. Yalnızca rehberlik amaçlıdır.',
};

T.th = {
  ...T.en,
  eyebrow: 'ความช่วยเหลือฉุกเฉินสำหรับนักเดินทาง',
  hero_title: 'มีปัญหาเกิดขึ้น<br>ระหว่างเดินทาง?',
  hero_sub: 'เลือกสถานการณ์และรับความช่วยเหลือทันที ไม่ต้องล็อกอิน',
  showing_for: 'ข้อมูลสำหรับ:', emergency_title: 'เบอร์ฉุกเฉินทั่วไป',
  emergency_sub: 'ใช้ได้ทุกที่ในยุโรป',
  what_need: 'ต้องการความช่วยเหลืออะไร?',
  cat_border: 'ผ่านด่านตรวจคนเข้าเมือง', cat_border_d: 'เอกสาร คิว เคล็ดลับ',
  cat_docs: 'เอกสารสูญหาย', cat_docs_d: 'สถานทูต บัตรประจำตัวชั่วคราว',
  cat_medical: 'ความช่วยเหลือทางการแพทย์', cat_medical_d: 'คลินิก ร้านขายยา ฉุกเฉิน',
  cat_scam: 'ถูกโกง', cat_scam_d: 'บล็อกบัตร แจ้งความ',
  cat_car: 'กฎการขับรถ', cat_car_d: 'วินิเยตก์ ขีดจำกัดความเร็ว',
  home: 'หน้าแรก', community: 'ชุมชน', housing: 'ที่พัก',
  sign_in: 'เข้าสู่ระบบ', back: 'กลับ',
  new_post: '+ โพสต์ใหม่', all: 'ทั้งหมด',
  find_housing: 'หาที่พัก',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> ค้นหาด้วย AI', post_reply: 'ตอบกลับ',
  footer: 'TravelSOS — สร้างในแฮกกาธอน เพื่อการแนะนำเท่านั้น',
};

T.ro_full = { ...T.ro };

T.mk = {
  ...T.en,
  eyebrow: 'Итна помош за патници',
  hero_title: 'Нешто тргна наопаку<br>во странство?',
  hero_sub: 'Изберете ситуација и добијте моментална помош. Без логирање.',
  showing_for: 'Информации за:', emergency_title: 'Општ итен број',
  emergency_sub: 'Работи насекаде во Европа',
  what_need: 'Со што можеме да помогнеме?',
  cat_border: 'Преминување граница', cat_border_d: 'Документи, редици, совети',
  cat_docs: 'Изгубени документи', cat_docs_d: 'Амбасади, привремена лична карта',
  cat_medical: 'Медицинска помош', cat_medical_d: 'Клиники, аптеки, итна помош',
  cat_scam: 'Измама', cat_scam_d: 'Блокирање картичка, пријава',
  cat_car: 'Правила за возење', cat_car_d: 'Виньета, ограничувања на брзина',
  home: 'Почетна', community: 'Заедница', housing: 'Сместување',
  sign_in: 'Најава', back: 'Назад',
  new_post: '+ Нова објава', all: 'Сите',
  find_housing: 'Најди сместување',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Пребарај со AI', post_reply: 'Одговори',
  footer: 'TravelSOS — направено на хакатон.',
};

T.nl = {
  ...T.en,
  eyebrow: 'Noodhulp voor reizigers',
  hero_title: 'Is er iets misgegaan<br>in het buitenland?',
  hero_sub: 'Kies je situatie en krijg direct hulp. Geen login nodig.',
  showing_for: 'Informatie voor:', emergency_title: 'Algemeen alarmnummer',
  emergency_sub: 'Werkt overal in Europa',
  what_need: 'Waarmee kunnen we je helpen?',
  cat_border: 'Grensovergang', cat_border_d: 'Documenten, wachtrijen, tips',
  cat_docs: 'Verloren documenten', cat_docs_d: 'Ambassades, tijdelijk ID',
  cat_medical: 'Medische hulp', cat_medical_d: 'Klinieken, apotheek, spoed',
  cat_scam: 'Oplichting', cat_scam_d: 'Kaart blokkeren, aangifte',
  cat_car: 'Verkeersregels', cat_car_d: 'Vignet, snelheidslimiet',
  home: 'Home', community: 'Gemeenschap', housing: 'Accommodatie',
  sign_in: 'Inloggen', back: 'Terug',
  new_post: '+ Nieuwe post', all: 'Alles',
  find_housing: 'Vind accommodatie',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Zoeken met AI', post_reply: 'Antwoorden',
  footer: 'TravelSOS — gebouwd tijdens een hackathon.',
};

T.es = {
  ...T.en,
  eyebrow: 'Ayuda de emergencia para viajeros',
  hero_title: '¿Algo salió mal<br>en el extranjero?',
  hero_sub: 'Elige tu situación y obtén ayuda al instante. Sin registro.',
  showing_for: 'Información para:', emergency_title: 'Número de emergencias',
  emergency_sub: 'Funciona en toda Europa',
  what_need: '¿En qué podemos ayudarte?',
  cat_border: 'Cruce de frontera', cat_border_d: 'Documentos, filas, consejos',
  cat_docs: 'Documentos perdidos', cat_docs_d: 'Embajadas, ID temporal',
  cat_medical: 'Ayuda médica', cat_medical_d: 'Clínicas, farmacias, emergencia',
  cat_scam: 'Estafa', cat_scam_d: 'Bloquear tarjeta, denunciar',
  cat_car: 'Reglas de tráfico', cat_car_d: 'Vignette, límites de velocidad',
  home: 'Inicio', community: 'Comunidad', housing: 'Alojamiento',
  sign_in: 'Iniciar sesión', back: 'Atrás',
  rules: 'Reglas', lifehacks: 'Consejos', live_queue: 'Cola en vivo',
  docs_req: 'Documentos requeridos', driving_rules: 'Reglas de conducción', vignette: 'Vignette',
  passport: 'Pasaporte / DNI', original: 'Original requerido',
  city_speed: 'Ciudad', out_city: 'Fuera de ciudad', motorway: 'Autopista',
  alcohol: 'Límite de alcohol', zero_tol: '0.0 g/L — cero tolerancia',
  v7: '7 días', v30: '30 días', buy_online: 'Comprar online',
  submit: 'Enviar', report: 'Denunciar', queue_desc: 'Tiempos de espera actuales.',
  ask_ai_title: '¿Tienes alguna pregunta?', ask_ai_sub: 'Pregunta a la IA — conoce tu país y situación',
  context: 'Contexto:', q1: '¿Puedo cruzar sin pasaporte?',
  q2: 'Documentos para viaje en auto', q3: 'Dónde comprar vignette',
  new_post: '+ Nuevo post', all: 'Todo',
  find_housing: 'Buscar alojamiento',
  find_housing_sub: 'Refugios NGO gratuitos y hoteles asequibles — la IA encuentra las mejores opciones',
  search_options: 'Opciones de búsqueda', city: 'Ciudad', nights: 'Noches', budget: 'Presupuesto por noche',
  free_only: 'Solo gratis', under_30: 'Menos de 30€', under_60: 'Menos de 60€', any_budget: 'Cualquier presupuesto',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Buscar con AI', post_reply: 'Responder',
  footer: 'TravelSOS — construido en un hackathon. Solo orientativo.',
};

T.ms = {
  ...T.en,
  eyebrow: 'Bantuan kecemasan untuk pelancong',
  hero_title: 'Ada masalah berlaku<br>di luar negara?',
  hero_sub: 'Pilih situasi anda dan dapatkan bantuan segera.',
  showing_for: 'Maklumat untuk:', emergency_title: 'Nombor kecemasan am',
  emergency_sub: 'Berfungsi di seluruh Eropah',
  what_need: 'Apa yang anda perlukan?',
  cat_border: 'Melepasi sempadan', cat_border_d: 'Dokumen, giliran, tips',
  cat_docs: 'Dokumen hilang', cat_docs_d: 'Kedutaan, ID sementara',
  cat_medical: 'Bantuan perubatan', cat_medical_d: 'Klinik, farmasi, kecemasan',
  cat_scam: 'Penipuan', cat_scam_d: 'Sekat kad, lapor penipuan',
  cat_car: 'Peraturan pemanduan', cat_car_d: 'Vignette, had laju',
  home: 'Utama', community: 'Komuniti', housing: 'Penginapan',
  sign_in: 'Log masuk', back: 'Kembali',
  new_post: '+ Post baharu', all: 'Semua',
  find_housing: 'Cari penginapan',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Cari dengan AI', post_reply: 'Balas',
  footer: 'TravelSOS — dibina dalam hackathon.',
};

T.kk = {
  ...T.en,
  eyebrow: 'Саяхатшыларға төтенше жәрдем',
  hero_title: 'Шетелде бірдеңе<br>дұрыс болмады ма?',
  hero_sub: 'Жағдайыңызды таңдаңыз және дереу көмек алыңыз.',
  showing_for: 'Ақпарат:', emergency_title: 'Жалпы төтенше нөмір',
  emergency_sub: 'Еуропаның кез келген жерінде жұмыс істейді',
  what_need: 'Қалай көмектесе аламыз?',
  cat_border: 'Шекара өту', cat_border_d: 'Құжаттар, кезек, кеңестер',
  cat_docs: 'Жоғалған құжаттар', cat_docs_d: 'Елшілік, уақытша ID',
  cat_medical: 'Медициналық көмек', cat_medical_d: 'Клиникалар, дәріхана, жедел жәрдем',
  cat_scam: 'Алдау', cat_scam_d: 'Картаны бұғаттау, арыз беру',
  cat_car: 'Жол ережелері', cat_car_d: 'Виньетка, жылдамдық шегі',
  home: 'Басты', community: 'Қоғам', housing: 'Тұрғын үй',
  sign_in: 'Кіру', back: 'Артқа',
  new_post: '+ Жаңа жазба', all: 'Барлығы',
  find_housing: 'Тұрғын үй табу',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> AI арқылы іздеу', post_reply: 'Жауап беру',
  footer: 'TravelSOS — хакатонда жасалды.',
};

T.ar = {
  ...T.en,
  eyebrow: 'مساعدة طارئة للمسافرين',
  hero_title: 'هل حدث شيء خاطئ<br>في الخارج؟',
  hero_sub: 'اختر وضعك واحصل على مساعدة فورية. لا تسجيل دخول مطلوب.',
  showing_for: 'معلومات عن:', emergency_title: 'رقم الطوارئ العام',
  emergency_sub: 'يعمل في كل أنحاء أوروبا',
  what_need: 'كيف يمكننا مساعدتك؟',
  cat_border: 'عبور الحدود', cat_border_d: 'الوثائق، الطوابير، النصائح',
  cat_docs: 'فقدان الوثائق', cat_docs_d: 'السفارات، بطاقة هوية مؤقتة',
  cat_medical: 'مساعدة طبية', cat_medical_d: 'عيادات، صيدلية، طوارئ',
  cat_scam: 'الاحتيال', cat_scam_d: 'تجميد البطاقة، الإبلاغ',
  cat_car: 'قواعد القيادة', cat_car_d: 'تذكرة الطريق، حدود السرعة',
  home: 'الرئيسية', community: 'المجتمع', housing: 'الإقامة',
  sign_in: 'تسجيل الدخول', back: 'رجوع',
  new_post: '+ منشور جديد', all: 'الكل',
  find_housing: 'البحث عن إقامة',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> البحث بالذكاء الاصطناعي', post_reply: 'رد',
  footer: 'TravelSOS — تم بناؤه في هاكاثون.',
};

T['zh-CN'] = {
  ...T.en,
  eyebrow: '旅行紧急援助',
  hero_title: '在国外出现问题了吗？',
  hero_sub: '选择您的情况，立即获得帮助。无需登录。',
  showing_for: '显示信息：', emergency_title: '通用紧急号码',
  emergency_sub: '在欧洲任何地方都有效',
  what_need: '需要什么帮助？',
  cat_border: '过境', cat_border_d: '文件、排队、建议',
  cat_docs: '证件丢失', cat_docs_d: '大使馆、临时身份证',
  cat_medical: '医疗援助', cat_medical_d: '诊所、药房、急救',
  cat_scam: '诈骗', cat_scam_d: '冻结银行卡、报警',
  cat_car: '驾车规则', cat_car_d: '通行证、限速',
  home: '首页', community: '社区', housing: '住宿',
  sign_in: '登录', back: '返回',
  new_post: '+ 新帖子', all: '全部',
  find_housing: '查找住宿',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> AI搜索', post_reply: '回复',
  footer: 'TravelSOS — 在黑客马拉松中构建，仅供参考。',
};

T.bg = {
  ...T.en,
  eyebrow: 'Спешна помощ за пътуващи',
  hero_title: 'Нещо се обърка<br>в чужбина?',
  hero_sub: 'Изберете ситуацията и получете незабавна помощ. Без вход.',
  showing_for: 'Информация за:', emergency_title: 'Общ спешен номер',
  emergency_sub: 'Работи навсякъде в Европа',
  what_need: 'С какво можем да помогнем?',
  cat_border: 'Преминаване на граница', cat_border_d: 'Документи, опашки, съвети',
  cat_docs: 'Изгубени документи', cat_docs_d: 'Посолства, временна лична карта',
  cat_medical: 'Медицинска помощ', cat_medical_d: 'Клиники, аптеки, спешна помощ',
  cat_scam: 'Измама', cat_scam_d: 'Блокиране на карта, сигнал',
  cat_car: 'Правила за шофиране', cat_car_d: 'Винетка, ограничения на скоростта',
  home: 'Начало', community: 'Общност', housing: 'Настаняване',
  sign_in: 'Вход', back: 'Назад',
  new_post: '+ Нова публикация', all: 'Всички',
  find_housing: 'Намери настаняване',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Търси с AI', post_reply: 'Отговори',
  footer: 'TravelSOS — създаден на хакатон.',
};

T.pt = {
  ...T.en,
  eyebrow: 'Ajuda de emergência para viajantes',
  hero_title: 'Algo deu errado<br>no exterior?',
  hero_sub: 'Escolha sua situação e receba ajuda imediata. Sem login.',
  showing_for: 'Informações para:', emergency_title: 'Número de emergência geral',
  emergency_sub: 'Funciona em toda a Europa',
  what_need: 'Como podemos ajudar?',
  cat_border: 'Travessia de fronteira', cat_border_d: 'Documentos, filas, dicas',
  cat_docs: 'Documentos perdidos', cat_docs_d: 'Embaixadas, ID temporário',
  cat_medical: 'Ajuda médica', cat_medical_d: 'Clínicas, farmácia, emergência',
  cat_scam: 'Golpe', cat_scam_d: 'Bloquear cartão, denunciar',
  cat_car: 'Regras de trânsito', cat_car_d: 'Vignette, limites de velocidade',
  home: 'Início', community: 'Comunidade', housing: 'Hospedagem',
  sign_in: 'Entrar', back: 'Voltar',
  rules: 'Regras', lifehacks: 'Dicas', live_queue: 'Fila ao vivo',
  docs_req: 'Documentos necessários', driving_rules: 'Regras de condução', vignette: 'Vignette',
  passport: 'Passaporte / ID', original: 'Original obrigatório',
  city_speed: 'Cidade', out_city: 'Fora da cidade', motorway: 'Autoestrada',
  alcohol: 'Limite de álcool', zero_tol: '0.0 g/L — tolerância zero',
  v7: '7 dias', v30: '30 dias', buy_online: 'Comprar online',
  submit: 'Enviar', report: 'Denunciar', queue_desc: 'Tempos de espera atuais.',
  ask_ai_title: 'Tem alguma pergunta específica?', ask_ai_sub: 'Pergunte à IA — conhece seu país e situação',
  context: 'Contexto:', q1: 'Posso cruzar sem passaporte?',
  q2: 'Documentos para viagem de carro', q3: 'Onde comprar vignette',
  new_post: '+ Nova postagem', all: 'Todos',
  find_housing: 'Encontrar hospedagem',
  find_housing_sub: 'Abrigos NGO gratuitos e hotéis acessíveis — a IA encontra as melhores opções',
  search_options: 'Opções de busca', city: 'Cidade', nights: 'Noites', budget: 'Orçamento por noite',
  free_only: 'Apenas grátis', under_30: 'Menos de 30€', under_60: 'Menos de 60€', any_budget: 'Qualquer orçamento',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Pesquisar com AI', post_reply: 'Responder',
  footer: 'TravelSOS — construído em um hackathon. Apenas orientativo.',
};

T.bs = {
  ...T.en,
  eyebrow: 'Hitna pomoć za putnike',
  hero_title: 'Nešto pošlo po krivu<br>u inozemstvu?',
  hero_sub: 'Odaberite situaciju i dobijte trenutnu pomoć. Bez prijave.',
  showing_for: 'Informacije za:', emergency_title: 'Opšti broj hitne pomoći',
  emergency_sub: 'Radi svugdje u Europi',
  what_need: 'Čime možemo pomoći?',
  cat_border: 'Prelazak granice', cat_border_d: 'Dokumenti, redovi, savjeti',
  cat_docs: 'Izgubljeni dokumenti', cat_docs_d: 'Ambasade, privremena lična karta',
  cat_medical: 'Medicinska pomoć', cat_medical_d: 'Klinike, apoteka, hitna',
  cat_scam: 'Prevara', cat_scam_d: 'Blokiranje kartice, prijava',
  cat_car: 'Pravila vožnje', cat_car_d: 'Vinjeta, ograničenja brzine',
  home: 'Početna', community: 'Zajednica', housing: 'Smještaj',
  sign_in: 'Prijava', back: 'Nazad',
  new_post: '+ Nova objava', all: 'Sve',
  find_housing: 'Pronađi smještaj',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Pretraži s AI', post_reply: 'Odgovori',
  footer: 'TravelSOS — napravljen na hackathonu.',
};

T.az = {
  ...T.en,
  eyebrow: 'Səyahətçilər üçün təcili yardım',
  hero_title: 'Xarici ölkədə bir şey<br>səhv getdi?',
  hero_sub: 'Vəziyyətinizi seçin və dərhal kömək alın.',
  showing_for: 'Məlumat:', emergency_title: 'Ümumi fövqəladə nömrə',
  emergency_sub: 'Avropanın hər yerindən işləyir',
  what_need: 'Necə kömək edə bilərik?',
  cat_border: 'Sərhəddən keçmək', cat_border_d: 'Sənədlər, növbə, məsləhətlər',
  cat_docs: 'İtirilmiş sənədlər', cat_docs_d: 'Səfirliklər, müvəqqəti şəxsiyyət',
  cat_medical: 'Tibbi yardım', cat_medical_d: 'Klinikalar, aptek, təcili',
  cat_scam: 'Fırıldaqçılıq', cat_scam_d: 'Kartı bağla, şikayət et',
  cat_car: 'Sürücülük qaydaları', cat_car_d: 'Vinyet, sürət həddi',
  home: 'Ana səhifə', community: 'İcma', housing: 'Mənzil',
  sign_in: 'Daxil ol', back: 'Geri',
  new_post: '+ Yeni yazı', all: 'Hamısı',
  find_housing: 'Mənzil tap',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> AI ilə axtar', post_reply: 'Cavabla',
  footer: 'TravelSOS — hakatonda yaradıldı.',
};

T.sq = {
  ...T.en,
  eyebrow: 'Ndihmë urgjente për udhëtarët',
  hero_title: 'Diçka shkoi keq<br>jashtë vendit?',
  hero_sub: 'Zgjidhni situatën tuaj dhe merrni ndihmë menjëherë.',
  showing_for: 'Informacion për:', emergency_title: 'Numri i përgjithshëm i urgjencës',
  emergency_sub: 'Funksionon kudo në Evropë',
  what_need: 'Si mund t\'ju ndihmojmë?',
  cat_border: 'Kalimi i kufirit', cat_border_d: 'Dokumentet, rradhët, këshilla',
  cat_docs: 'Dokumentet e humbura', cat_docs_d: 'Ambasadat, ID e përkohshme',
  cat_medical: 'Ndihmë mjekësore', cat_medical_d: 'Klinika, farmaci, urgjencë',
  cat_scam: 'Mashtrim', cat_scam_d: 'Bloko kartën, raporto',
  cat_car: 'Rregullat e drejtimit', cat_car_d: 'Vinjetë, kufijtë e shpejtësisë',
  home: 'Kryefaqe', community: 'Komuniteti', housing: 'Akomodim',
  sign_in: 'Hyr', back: 'Kthehu',
  new_post: '+ Postim i ri', all: 'Të gjitha',
  find_housing: 'Gjej akomodim',
  search_btn: '<span class="material-symbols-rounded gf-icon">search</span> Kërko me AI', post_reply: 'Përgjigju',
  footer: 'TravelSOS — ndërtuar në një hackathon.',
};

const flags = {
  Ukraine: 'UA', Turkmenistan: 'TM', Turkey: 'TR', Thailand: 'TH',
  Romania: 'RO', 'North Macedonia': 'MK', Netherlands: 'NL', Moldova: 'MD',
  Mexico: 'MX', Malaysia: 'MY', Kazakhstan: 'KZ', 'Great Britain': 'GB',
  Egypt: 'EG', 'Costa Rica': 'CR', China: 'CN', Chile: 'CL',
  Bulgaria: 'BG', Brazil: 'BR', 'Bosnia and Herzegovina': 'BA',
  Azerbaijan: 'AZ', Albania: 'AL',
};
window.travelFlags = flags;
window.TRAVEL_COUNTRIES = Object.keys(flags);

const catData = {
  carrental: { title: 'Car rental',       sub: 'Rental companies and conditions',  chat: 'Car rental in Europe' },
  border:    { title: 'Border crossing',  sub: 'Entry rules and tips',              chat: 'Border crossing' },
  documents: { title: 'Lost documents',   sub: 'Embassy contacts and temp ID',      chat: 'Lost documents' },
  medical:   { title: 'Medical help',     sub: 'Clinics and emergency numbers',     chat: 'Medical help' },
  scam:      { title: 'Scam recovery',    sub: 'Card blocking and fraud',           chat: 'Scam recovery' },
  car:       { title: 'Car travel rules', sub: 'Vignette and requirements',         chat: 'Car travel rules' },
};

const catColors = {
  carrental: '#E1F5EE', border: '#FAEEDA', medical: '#FAECE7',
  scam: '#E6F1FB', documents: '#EEEDFE', car: '#FBEAF0', shelter: '#E1F5EE',
};
const catTextColors = {
  carrental: '#0F6E56', border: '#854F0B', medical: '#993C1D',
  scam: '#185FA5', documents: '#3C3489', car: '#993556', shelter: '#0F6E56',
};

const posts = [
  {
    id: 0, cat: 'shelter', country: 'Romania',
    title: 'Scammed by landlord — need room tonight in Bucharest',
    body: "We arrived in Bucharest and the apartment we paid for doesn't exist. We're 2 people with bags, it's 10pm. Any NGO shelters open now or cheap hostels? We have about 30€ total.",
    author: 'TravelerMK', time: '2h ago',
    replies: [
      { author: 'VolunteerAna', vol: true,  text: 'There is a shelter on Calea Rahovei 196 — Adăpostul Social nr. 1. Open 24/7. Also try Hostel Nord on Gara de Nord, about 15€/person.' },
      { author: 'LocalHelper',  vol: false, text: 'Booking.com has last-minute deals tonight from 18€. Show them the scam evidence, some hostels may help.' },
      { author: 'VolunteerDan', vol: true,  text: 'Call 021 9522 — Bucharest social emergency line. They can arrange emergency accommodation even at night.' },
    ],
  },
  {
    id: 1, cat: 'border', country: 'Poland',
    title: 'Family of 4 crossing Poland → Germany by car — what documents?',
    body: "We're driving from Warsaw to Berlin tomorrow with 2 kids. EU passports, green card, ITP. Anything else? What's the current queue at Świecko?",
    author: 'FamilyRoad', time: '5h ago',
    replies: [
      { author: 'VolunteerMarta', vol: true, text: 'EU citizens crossing into Germany: passport or ID card is fine. Vehicle registration, green card, valid ITP. No vignette needed in Germany.' },
      { author: 'BorderExpert',   vol: true, text: 'Świecko this morning was about 20 min. Avoid weekends 10am–2pm — can be 1–2 hours.' },
    ],
  },
  {
    id: 2, cat: 'medical', country: 'Hungary',
    title: 'Allergic reaction in Budapest — where to go without local insurance?',
    body: "My friend had an allergic reaction. We have EU EHIC cards. Which hospital accepts EHIC in Budapest centre?",
    author: 'BackpackerSP', time: '1d ago',
    replies: [
      { author: 'VolunteerKata', vol: true, text: 'With EHIC you can go to any public hospital in Hungary — treatment is free. Closest: Uzsoki Hospital (XIV district) or SOTE ER. Show EHIC at registration.' },
    ],
  },
  {
    id: 3, cat: 'scam', country: 'Romania',
    title: 'Fake taxi charged 400 RON for 3km from airport',
    body: "Just landed at Otopeni. Took a taxi outside arrivals — charged 400 RON for what should be 40 RON. Paid cash. Can I report this?",
    author: 'AngryTraveler', time: '3h ago',
    replies: [
      { author: 'VolunteerCristy', vol: true, text: 'Very common at OTP. Report to Politia Rutiera: call 112 or go to police desk inside terminal. Note the taxi plate. Next time use Bolt/Uber or official airport taxis from inside the building.' },
    ],
  },
];

const EMERGENCY = {
  'Albania':                { fire: '128', police: '129', ambulance: '127', general: '112' },
  'Azerbaijan':             { fire: '101', police: '102', ambulance: '103', general: '112' },
  'Bosnia and Herzegovina': { fire: '123', police: '122', ambulance: '124', general: '112' },
  'Bulgaria':               { fire: '160', police: '166', ambulance: '150', general: '112' },
  'China':                  { fire: '119', police: '110', ambulance: '120', general: '110' },
  'Egypt':                  { fire: '180', police: '122', ambulance: '123', general: '123' },
  'Great Britain':          { fire: '999', police: '999', ambulance: '999', general: '999' },
  'United Kingdom':         { fire: '999', police: '999', ambulance: '999', general: '999' },
  'Kazakhstan':             { fire: '101', police: '102', ambulance: '103', general: '112' },
  'Moldova':                { fire: '901', police: '902', ambulance: '903', general: '112' },
  'North Macedonia':        { fire: '193', police: '192', ambulance: '194', general: '112' },
  'Mexico':                 { fire: '068', police: '060', ambulance: '065', general: '911' },
  'Malaysia':               { fire: '994', police: '999', ambulance: '999', general: '999' },
  'Netherlands':            { fire: '112', police: '112', ambulance: '112', general: '112' },
  'Romania':                { fire: '981', police: '955', ambulance: '961', general: '112' },
  'Thailand':               { fire: '199', police: '191', ambulance: '1669', general: '191' },
  'Turkmenistan':           { fire: '01',  police: '02',  ambulance: '03',  general: '03'  },
  'Turkey':                 { fire: '110', police: '155', ambulance: '112', general: '112' },
  'Ukraine':                { fire: '101', police: '102', ambulance: '103', general: '112' },
};

const countryDB = {
  'Albania':               { supermarkets: 'Big Market, Spar, Conad, Eco Market, Extra Market', pharmacies: 'Farmaci, Farmacia', hospitals: 'American/German Hospital', volunteers: 'Caritas, RMSA, Red Cross, UNHCR, Tirana Legal Aid Society', transport: 'Uber, Bolt, FlixBus, BlaBlaCar', hostels: 'Casa Italia Apartments, Hotel Corner, Luander Hotel' },
  'Azerbaijan':            { supermarkets: 'Bravo, Araz, Bazarstore, SPAR, OBA Market, Megastore', pharmacies: 'Aptek (Аптека)', hospitals: 'Central Clinical Hospital, International SOS, Leyla Shikhlinskaya Clinic', volunteers: 'Caritas, ASAN Volunteer, Red Cross', transport: 'Uber, Bolt, FlixBus, BlaBlaCar', hostels: 'Panorama-Madinah-ZamZam Halal Hotels, Cheers Sahil Hotel, Aureline Hill' },
  'Bosnia and Herzegovina':{ supermarkets: 'Bingo, Mercator & FIS, Kaufland, ROBOT, Kort, Tropic Market', pharmacies: 'Apoteka (аптотека)', hospitals: 'Clinical Center University of Sarajevo, University Hospital Dr. Abdulah Nakaš', volunteers: 'Caritas, European Solidarity Corps, UNHCR, Red Cross', transport: 'Uber, Bolt, FlixBus, BlaBlaCar', hostels: 'LuxApart Bjelave City Centar, Happy Hill Rooms, Hotel Pilot' },
  'Bulgaria':              { supermarkets: 'Lidl, Kaufland, BILLA, Carrefour, T-Market, My Market, CBA, CBS 10', pharmacies: 'Vila, Remedium, Propolis, Medica 2004, Pro Pharma, Lekarna', hospitals: 'Lozenetz Hospital, City Hospital Dr. Georgi Stranski, Medical Center Varna, Naval Hospital', volunteers: 'Caritas Bulgaria, Synergy Bulgaria, European Solidarity Corps, UNHCR Bulgaria, Red Cross', transport: 'Uber, Bolt, FlixBus, BlaBlaCar', hostels: 'Hotel Kristal, Valeo Hotel, Hotel Poli' },
  'China':                 { supermarkets: 'Wangfujing Department Store, Carrefour, Walmart, Tesco Homeplus', pharmacies: 'CR Huaren, 7-Eleven, FamilyMart, Lawson (yàodiàn)', hospitals: 'Union Hospital, Jiaotong University Hospital, Peking Union Medical College Hospital', volunteers: 'Caritas, RMSA, Red Cross, UNHCR', transport: 'Uber, Bolt, FlixBus, subway', hostels: 'Doudou Meilan Fengqing Inn, Arthur Hotel' },
  'Egypt':                 { supermarkets: 'Metro, Carrefour, Spinneys, Abu Ashar, Hyper One, City Center', pharmacies: 'Pharmacy / Pharmacie', hospitals: 'Saudi German Hospital', volunteers: 'Caritas, RMSA, Red Cross, UNHCR', transport: 'Uber, Bolt, FlixBus', hostels: 'Turquoise Pyramids Palace, Tulip 6 of October Hotel, Hotel Comfort Giza' },
  'United Kingdom':        { supermarkets: 'Tesco, Sainsbury\'s, Asda, Morrisons, Aldi, Lidl, Waitrose', pharmacies: 'Boots, LloydsPharmacy, Superdrug, Asda Pharmacy', hospitals: 'NHS, St Thomas\' Hospital, Royal London Hospital, UCL Hospital', volunteers: 'Volunteer Scotland, Volunteer Wales, NCVO', transport: 'Uber, Bolt, FlixBus, BlaBlaCar, subway, buses', hostels: 'Travelodge, Premier Inn, Ibis, Holiday Inn, Hilton, Marriott' },
  'Kazakhstan':            { supermarkets: 'Sauran, Khan-Shatyr, MАrt, Sunkar, Dostyk Plaza, Mega Astana', pharmacies: 'Аптека / Pharmacy', hospitals: 'TBD (contact embassy)', volunteers: 'Caritas, RMSA, Red Cross, UNHCR', transport: 'Uber, Bolt, FlixBus, BlaBlaCar, subway, buses', hostels: 'Hantel, Rixos, Sheraton, Marriott' },
  'Moldova':               { supermarkets: 'Linella, Market Bravo, Bonus, Fourchette', pharmacies: 'Farmacia Familiei, Farmacia Felicia', hospitals: 'TBD (contact embassy)', volunteers: 'Caritas, RMSA, Red Cross, UNHCR', transport: 'Uber, Bolt, FlixBus, BlaBlaCar, buses', hostels: 'Ethno Hostel, Cabin HOSTEL City Center' },
  'North Macedonia':       { supermarkets: 'Con-cor, Indire, DELHAIZE, Kroš, Gallery Shopping Center', pharmacies: 'Apoteka (апотека)', hospitals: 'Hospital Re-Medika, Promedika Medikal Centar, Zan Mitrev Clinic', volunteers: 'Caritas, RMSA, Red Cross, UNHCR', transport: 'Uber, Bolt, FlixBus, BlaBlaCar, buses', hostels: 'GreenHill Apartments, Hotel Sharlota, Apartments Dan Dar' },
  'Mexico':                { supermarkets: 'Walmart, Bodega Aurrerá, Soriana, Chedraui, La Comer', pharmacies: 'Farmacias Similares, Farmacias Guadalajara, Farmacias del Ahorro, Farmacias Benavides', hospitals: 'IMSS, ISSSTE', volunteers: 'Caritas, RMSA, Red Cross, UNHCR', transport: 'Uber, Didi, Beat, InDriver, subway, buses', hostels: 'Hotel La Cascada Oaxaca, Hostel Humanity Puerto Morelos, Rossco Hostel & Hotel' },
  'Malaysia':              { supermarkets: 'Giant, Tesco, Jaya Grocer, Aeon, Mid Valley Megamall, Pavilion KL, Sunway Pyramid', pharmacies: 'Pharmacy / Pharmacie', hospitals: 'Parkway Pantai, Gleneagles, KPJ, Pantai', volunteers: 'Caritas, RMSA, Red Cross, UNHCR', transport: 'Uber, Bolt, LRT, MRT, KTM Komuter, monorail', hostels: 'Hilton, Marriott, Hyatt, Shangri-La, InterContinental, Pan Pacific' },
  'Netherlands':           { supermarkets: 'Albert Heijn, Jumbo, Lidl, Aldi, Plus, Coop', pharmacies: 'Apotheek / Pharmacy', hospitals: 'UMC Amsterdam, Academic Medical Center, Erasmus MC', volunteers: 'Amnesty International, Red Cross, SOS Children\'s Villages', transport: 'Uber, Bolt, FlixBus, BlaBlaCar, subway, buses', hostels: 'TBD (contact tourist office)' },
  'Romania':               { supermarkets: 'IKEA, Auchan, Kaufland, Lidl, PENNY', pharmacies: 'Farmacia Dr. Max, Catena, Spring (Farmacia la Preț Mic)', hospitals: 'Synevo Dristor, MedLife Ortopedie, Medic Line George Coșbuc, Medic Line Barbu Văcărescu', volunteers: 'Caritas, RMSA, European Solidarity Corps, UNHCR, Red Cross', transport: 'Uber, Bolt, FlixBus, BlaBlaCar, subway, buses, minibuses', hostels: 'Sleep Inn Hostel, Nest Boutique Hostel, Villa Zorb' },
  'Thailand':              { supermarkets: 'Big C, Tesco Lotus, Tops, Villa Market, Makro, Max Valu', pharmacies: 'Boots, Watsons, Feyphot', hospitals: 'Samitivej, Bangkok Hospital, Bumrungrad, Phuket International Hospital, Chiangmai Ram', volunteers: 'Caritas, RMSA, Red Cross, UNHCR', transport: 'Grab, BTS Skytrain, MRT, buses', hostels: 'Hilton, Marriott, Hyatt, Shangri-La, Pan Pacific, boutique hotels' },
  'Turkmenistan':          { supermarkets: 'Turkmenbazar, Deňiz, Merkezi', pharmacies: 'Аптека / Pharmacy', hospitals: 'Ambassador\'s Clinic', volunteers: 'Caritas, RMSA, Red Cross, UNHCR', transport: 'Uber, Bolt, FlixBus, BlaBlaCar, subway, buses, trains', hostels: 'TBD (contact embassy)' },
  'Turkey':                { supermarkets: 'Migros, BIM, Şok, A101, CarrefourSA', pharmacies: 'Eczane (green cross sign)', hospitals: 'Acıbadem International, Memorial Şişli, American Hospital Istanbul', volunteers: 'TİKA, Kızılay, AFAD, European Solidarity Corps', transport: 'Uber, Bolt, FlixBus, BlaBlaCar, subway, buses', hostels: 'Korkmaz Rezidans, Gurses Life Hotel, Lavender Inn Hotel' },
  'Ukraine':               { supermarkets: 'Silpo, ATB, Red Market, Fora', pharmacies: 'Apteka 911, ANC, Tabletki, Podorozhnyk', hospitals: 'TBD (contact embassy)', volunteers: 'Zaporuka, Ukrainian Volunteer Service, State Emergency Service, Red Cross', transport: 'Uber, Bolt, Uklon, subway, buses', hostels: 'TBD (contact volunteer orgs)' },
};

const drivingDB = {
  'United Kingdom':  { city: '48 km/h (30 mph)', outside: '96 km/h (60 mph)', motorway: '112 km/h (70 mph)', alcohol: '0.8 g/L (England/Wales) · 0.5 g/L (Scotland)', vignette: 'No vignette needed', vignette_detail: 'No road toll sticker. Some toll roads (M6 Toll, Dartford Crossing). Drive on the left.', vignette_link: null },
  'Romania':         { city: '50 km/h', outside: '90 km/h', motorway: '130 km/h', alcohol: '0.0 g/L — zero tolerance', vignette: 'Rovinieta required', vignette_detail: '7-day: 3 EUR · 30-day: 7 EUR · Annual: 28 EUR', vignette_link: 'https://www.roviniete.ro' },
  'Moldova':         { city: '60 km/h', outside: '90 km/h', motorway: '110 km/h', alcohol: '0.3 g/L', vignette: 'No vignette', vignette_detail: 'No motorway sticker required in Moldova.', vignette_link: null },
  'Ukraine':         { city: '60 km/h', outside: '90 km/h', motorway: '130 km/h', alcohol: '0.2 g/L', vignette: 'No vignette', vignette_detail: 'No motorway sticker required.', vignette_link: null },
  'Poland':          { city: '50 km/h', outside: '90 km/h', motorway: '140 km/h', alcohol: '0.2 g/L', vignette: 'No vignette', vignette_detail: 'No sticker — some tolled sections (e-TOLL system). Pay via app or cash at tolls.', vignette_link: 'https://etoll.gov.pl' },
  'Slovakia':        { city: '50 km/h', outside: '90 km/h', motorway: '130 km/h', alcohol: '0.0 g/L — zero tolerance', vignette: 'D1 e-vignette required', vignette_detail: 'Electronic only. 1-day: 7 EUR · 1-month: 14 EUR · 1-year: 50 EUR', vignette_link: 'https://eznamka.sk' },
  'Czechia':         { city: '50 km/h', outside: '90 km/h', motorway: '130 km/h', alcohol: '0.0 g/L — zero tolerance', vignette: 'E-vignette required', vignette_detail: '10-day: 310 CZK · 1-month: 440 CZK · Annual: 1 500 CZK', vignette_link: 'https://edalnice.cz' },
  'Hungary':         { city: '50 km/h', outside: '90 km/h', motorway: '130 km/h', alcohol: '0.0 g/L — zero tolerance', vignette: 'E-matrica required', vignette_detail: '10-day: ~12 EUR · Monthly · Annual', vignette_link: 'https://www.motorway.hu' },
  'Austria':         { city: '50 km/h', outside: '100 km/h', motorway: '130 km/h', alcohol: '0.5 g/L', vignette: 'Pickerl sticker required', vignette_detail: '10-day: 9.90 EUR · 2-month: 29 EUR · Annual: 96 EUR. Buy at gas stations/border.', vignette_link: 'https://www.asfinag.at' },
  'Germany':         { city: '50 km/h', outside: '100 km/h', motorway: 'No limit (advisory 130)', alcohol: '0.5 g/L', vignette: 'No vignette', vignette_detail: 'No motorway toll for private cars. Free autobahns.', vignette_link: null },
  'France':          { city: '50 km/h', outside: '80 km/h', motorway: '130 km/h', alcohol: '0.5 g/L', vignette: 'No vignette', vignette_detail: 'No sticker — tolled autoroutes (pay at booths or telepéage). Keep change.', vignette_link: null },
  'Italy':           { city: '50 km/h', outside: '90 km/h', motorway: '130 km/h', alcohol: '0.5 g/L', vignette: 'No vignette', vignette_detail: 'Autostrada tolls — pay at booths (cash/card) or Telepass. ZTL zones in city centres.', vignette_link: null },
  'Spain':           { city: '50 km/h', outside: '90 km/h', motorway: '120 km/h', alcohol: '0.5 g/L', vignette: 'No vignette', vignette_detail: 'Some toll motorways (autopistas de peaje). Many free autovías also available.', vignette_link: null },
  'Netherlands':     { city: '50 km/h', outside: '80 km/h', motorway: '100 km/h', alcohol: '0.5 g/L', vignette: 'No vignette', vignette_detail: 'No sticker required. Motorways free for most vehicles.', vignette_link: null },
  'Belgium':         { city: '50 km/h', outside: '90 km/h', motorway: '120 km/h', alcohol: '0.5 g/L', vignette: 'No vignette', vignette_detail: 'No sticker — tolls on some tunnels. Km charge for trucks only.', vignette_link: null },
  'Bulgaria':        { city: '50 km/h', outside: '90 km/h', motorway: '140 km/h', alcohol: '0.5 g/L', vignette: 'E-vignette required', vignette_detail: 'Weekend: 10 BGN · 1-week: 15 BGN · Monthly: 30 BGN · Annual: 97 BGN', vignette_link: 'https://www.bgtoll.bg' },
  'Turkey':          { city: '50 km/h', outside: '90 km/h', motorway: '120 km/h', alcohol: '0.5 g/L', vignette: 'HGS/OGS tag required', vignette_detail: 'Electronic tolling (HGS sticker or OGS transponder) on most motorways. Buy at PTT offices.', vignette_link: null },
};

const catTabs = {

  border: {
    label: '<span class="material-symbols-rounded gf-icon">flag</span> Border crossing',
    tabs: ['Rules', 'Lifehacks', 'Live queue'],
    render: {
      'Rules': (ctry) => `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--amber-light)"><span class="material-symbols-rounded gf-icon">description</span></div><span class="info-card-title">Documents required</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Passport / ID card</span><span class="info-row-val">Required (EU ID valid)</span></div>
            <div class="info-row"><span class="info-row-key">Vehicle registration</span><span class="info-row-val">Original required</span></div>
            <div class="info-row"><span class="info-row-key">Green card (insurance)</span><span class="info-row-val">Required</span></div>
            <div class="info-row"><span class="info-row-key">ITP / TÜV</span><span class="info-row-val">Sticker on windshield</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--blue-light)"><span class="material-symbols-rounded gf-icon">route</span></div><span class="info-card-title">Driving rules in Romania</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">City</span><span class="info-row-val">50 km/h</span></div>
            <div class="info-row"><span class="info-row-key">Outside city</span><span class="info-row-val">90 km/h</span></div>
            <div class="info-row"><span class="info-row-key">Motorway</span><span class="info-row-val">130 km/h</span></div>
            <div class="info-row"><span class="info-row-key">Alcohol limit</span><span class="info-row-val" style="color:#D85A30">0.0 g/L — zero tolerance</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--teal-light)"><span class="material-symbols-rounded gf-icon">confirmation_number</span></div><span class="info-card-title">Vignette (Rovinieta)</span></div>
            <span class="info-card-chev">▾</span>
          </div>
          <div class="info-card-body">
            <div class="info-row"><span class="info-row-key">7-day</span><span class="info-row-val">3 EUR</span></div>
            <div class="info-row"><span class="info-row-key">30-day</span><span class="info-row-val">7 EUR</span></div>
            <div class="info-row"><span class="info-row-key">Annual</span><span class="info-row-val">28 EUR</span></div>
            <div class="info-row"><span class="info-row-key">Buy online</span><span class="info-row-val"><a href="https://www.roviniete.ro" target="_blank">roviniete.ro ↗</a></span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#FEF3C7"><span class="material-symbols-rounded gf-icon">emergency_home</span></div><span class="info-card-title">Emergency numbers</span></div>
            <span class="info-card-chev">▾</span>
          </div>
          <div class="info-card-body">
            <div class="info-row"><span class="info-row-key">European emergency</span><span class="info-row-val" style="color:#D85A30;font-weight:600">112</span></div>
            ${(emergencyDB[ctry] || emergencyDB['Romania']) ? `
            <div class="info-row"><span class="info-row-key">Police</span><span class="info-row-val">${(emergencyDB[ctry] || emergencyDB['Romania']).police}</span></div>
            <div class="info-row"><span class="info-row-key">Ambulance</span><span class="info-row-val">${(emergencyDB[ctry] || emergencyDB['Romania']).ambulance}</span></div>
            <div class="info-row"><span class="info-row-key">Fire brigade</span><span class="info-row-val">${(emergencyDB[ctry] || emergencyDB['Romania']).fire}</span></div>
            ` : ''}
          </div>
        </div>`,

      'Lifehacks': (ctry) => `
        <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Tips from travellers who crossed recently.</p>
        <div class="tips-grid">
          <div class="tip-chip">⏰ Cross before 7am — queues are short</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">directions_car</span> Car lane moves faster than trucks</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">phone_iphone</span> Check frontier.ro for live queue times</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">dark_mode</span> Late night (11pm–2am) also quiet</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">folder</span> Keep all docs in one folder</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">credit_card</span> Buy vignette online before arrival</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">battery_full</span> Charge phone before crossing</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">euro</span> Have some cash (EUR/RON) handy</div>
        </div>
        <div class="tip-submit">
          <textarea rows="2" placeholder="Share a crossing tip…"></textarea>
          <button class="btn btn-accent">Submit</button>
        </div>`,

      'Live queue': (ctry) => `
        <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Live wait times reported by travellers.</p>
        <div class="queue-card" id="queue-list"><!-- rendered by renderQueues() --></div>
        <div class="tip-submit" style="margin-top:12px;flex-direction:column;gap:8px">
          <div style="font-size:12px;font-weight:500;color:var(--text)">Report current wait time</div>
          <select id="queue-crossing" style="font-family:'Inter',sans-serif;font-size:13px;padding:7px;border:1px solid var(--border);border-radius:7px;background:var(--surface);color:var(--text);outline:none">
            <option>Nădlac II (RO–HU)</option>
            <option>Borș II (RO–HU)</option>
            <option>Sculeni (RO–MD)</option>
            <option>Giurgiu (RO–BG)</option>
          </select>
          <div style="display:flex;gap:8px">
            <input id="queue-wait" type="number" placeholder="Wait time (min)" style="flex:1;font-family:'Inter',sans-serif;font-size:13px;padding:7px;border:1px solid var(--border);border-radius:7px;background:var(--surface);color:var(--text);outline:none">
            <input id="queue-note" type="text" placeholder="Note (optional)" style="flex:1.5;font-family:'Inter',sans-serif;font-size:13px;padding:7px;border:1px solid var(--border);border-radius:7px;background:var(--surface);color:var(--text);outline:none">
            <button class="btn btn-accent" onclick="submitQueueReport()">Report</button>
          </div>
          <div id="queue-error" style="font-size:12px;color:#D85A30;display:none"></div>
        </div>`
    }
  },

  medical: {
    label: '<span class="material-symbols-rounded gf-icon">local_hospital</span> Medical help',
    tabs: ['Find care', 'Pharmacies', 'Emergency'],
    render: {
      'Find care': (ctry) => {
        const db = countryDB[ctry] || countryDB['Romania'];
        const hospitals = db.hospitals.split(', ');
        const rows = hospitals.map(h => `<div class="info-row"><span class="info-row-key"><span class="material-symbols-rounded gf-icon">local_hospital</span></span><span class="info-row-val">${h}</span></div>`).join('');
        return `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#FFEAEA"><span class="material-symbols-rounded gf-icon">local_hospital</span></div><span class="info-card-title">Hospitals & Clinics in ${ctry}</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">${rows}</div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#E1F5EE"><span class="material-symbols-rounded gf-icon">credit_card</span></div><span class="info-card-title">EHIC / Insurance</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">EHIC card</span><span class="info-row-val">Valid in EU/EEA countries</span></div>
            <div class="info-row"><span class="info-row-key">Show it at</span><span class="info-row-val">Any public hospital reception</span></div>
            <div class="info-row"><span class="info-row-key">Covers</span><span class="info-row-val">Emergency & necessary care — free</span></div>
            <div class="info-row"><span class="info-row-key">Not covered</span><span class="info-row-val">Private clinics, repatriation</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#FEF3C7"><span class="material-symbols-rounded gf-icon">ambulance</span></div><span class="info-card-title">Ambulance & Emergency</span></div>
            <span class="info-card-chev">▾</span>
          </div>
          <div class="info-card-body">
            <div class="info-row"><span class="info-row-key">European emergency</span><span class="info-row-val" style="color:#D85A30;font-weight:600">112</span></div>
            <div class="info-row"><span class="info-row-key">Ambulance</span><span class="info-row-val">${(emergencyDB[ctry] || emergencyDB['Romania']).ambulance}</span></div>
            <div class="info-row"><span class="info-row-key">Police</span><span class="info-row-val">${(emergencyDB[ctry] || emergencyDB['Romania']).police}</span></div>
          </div>
        </div>`;
      },

      'Pharmacies': (ctry) => {
        const db = countryDB[ctry] || countryDB['Romania'];
        const chains = db.pharmacies.split(', ');
        const rows = chains.map(p => `<div class="info-row"><span class="info-row-key"><span class="material-symbols-rounded gf-icon">medication</span></span><span class="info-row-val">${p}</span></div>`).join('');
        return `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#E1F5EE"><span class="material-symbols-rounded gf-icon">medication</span></div><span class="info-card-title">Pharmacy chains in ${ctry}</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">${rows}</div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--amber-light)"><span class="material-symbols-rounded gf-icon">dark_mode</span></div><span class="info-card-title">24h pharmacy tips</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Night pharmacy</span><span class="info-row-val">Look for "non-stop" sign</span></div>
            <div class="info-row"><span class="info-row-key">Find nearest</span><span class="info-row-val">Ask hotel or call 112</span></div>
            <div class="info-row"><span class="info-row-key">Prescription</span><span class="info-row-val">EU prescriptions accepted in EU</span></div>
          </div>
        </div>
        <div class="tips-grid" style="margin-top:12px">
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">search</span> Google Maps: "farmacia non-stop"</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">checklist</span> Keep a list of your medications</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">medication</span> Bring extra supply for the trip</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">language</span> EU prescriptions valid across EU</div>
        </div>`;
      },

      'Emergency': (ctry) => {
        const em = EMERGENCY[ctry] || { fire: '112', police: '112', ambulance: '112', general: '112' };
        const isEU = em.general === '112';
        return `
        <div style="background:#FFEAEA;border-radius:12px;padding:16px;margin-bottom:14px;text-align:center">
          <div style="font-size:36px;font-weight:700;color:#D85A30">${em.general}</div>
          <div style="font-size:13px;color:#993C1D;margin-top:4px">${isEU ? 'European Emergency Number · Works everywhere' : 'General Emergency — ' + ctry}</div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#FFEAEA"><span class="material-symbols-rounded gf-icon">call</span></div><span class="info-card-title">Emergency contacts — ${ctry}</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Ambulance</span><span class="info-row-val" style="font-weight:600">${em.ambulance}</span></div>
            <div class="info-row"><span class="info-row-key">Police</span><span class="info-row-val" style="font-weight:600">${em.police}</span></div>
            <div class="info-row"><span class="info-row-key">Fire brigade</span><span class="info-row-val" style="font-weight:600">${em.fire}</span></div>
            ${isEU ? '<div class="info-row"><span class="info-row-key">EU emergency</span><span class="info-row-val" style="color:#D85A30;font-weight:600">112</span></div>' : ''}
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--blue-light)"><span class="material-symbols-rounded gf-icon">checklist</span></div><span class="info-card-title">What to say when calling</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">1️⃣ Location</span><span class="info-row-val">Street, city, landmark</span></div>
            <div class="info-row"><span class="info-row-key">2️⃣ Problem</span><span class="info-row-val">What happened, how many people</span></div>
            <div class="info-row"><span class="info-row-key">3️⃣ Language</span><span class="info-row-val">Say "English please" — operators are trained</span></div>
            <div class="info-row"><span class="info-row-key">4️⃣ Stay on line</span><span class="info-row-val">Don't hang up until told to</span></div>
          </div>
        </div>`; }
    }
  },

  documents: {
    label: '<span class="material-symbols-rounded gf-icon">badge</span> Lost documents',
    tabs: ['What to do', 'Embassy contacts', 'Prevention'],
    render: {
      'What to do': (ctry) => `
        <div style="background:#EEEDFE;border-radius:12px;padding:14px 16px;margin-bottom:14px">
          <div style="font-size:13px;font-weight:600;color:#3C3489;margin-bottom:6px"><span class="material-symbols-rounded gf-icon">bolt</span> First steps — do these immediately</div>
          <div style="font-size:13px;color:#5B51C7;line-height:1.8">
            1. File a police report (needed for embassy)<br>
            2. Contact your embassy<br>
            3. Inform your bank if cards missing<br>
            4. Call your travel insurance
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--blue-light)"><span class="material-symbols-rounded gf-icon">local_police</span></div><span class="info-card-title">File a police report</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Where to go</span><span class="info-row-val">Nearest police station</span></div>
            <div class="info-row"><span class="info-row-key">Emergency line</span><span class="info-row-val">112 (or 955 in Romania)</span></div>
            <div class="info-row"><span class="info-row-key">Ask for</span><span class="info-row-val">"Proces verbal de sesizare"</span></div>
            <div class="info-row"><span class="info-row-key">Keep</span><span class="info-row-val">A copy — embassy requires it</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--amber-light)"><span class="material-symbols-rounded gf-icon">badge</span></div><span class="info-card-title">Temporary travel document</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Issued by</span><span class="info-row-val">Your home country embassy</span></div>
            <div class="info-row"><span class="info-row-key">Valid for</span><span class="info-row-val">Single trip home only</span></div>
            <div class="info-row"><span class="info-row-key">Cost</span><span class="info-row-val">Varies — often 25–80 EUR</span></div>
            <div class="info-row"><span class="info-row-key">Time</span><span class="info-row-val">Same day in emergencies</span></div>
          </div>
        </div>`,

      'Embassy contacts': (ctry) => `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--teal-light)"><span class="material-symbols-rounded gf-icon">account_balance</span></div><span class="info-card-title">Embassies in Bucharest</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Ukraine</span><span class="info-row-val">+40 21 230 3660</span></div>
            <div class="info-row"><span class="info-row-key">Moldova</span><span class="info-row-val">+40 21 230 0474</span></div>
            <div class="info-row"><span class="info-row-key">United Kingdom</span><span class="info-row-val">+40 21 201 7200</span></div>
            <div class="info-row"><span class="info-row-key">Germany</span><span class="info-row-val">+40 21 202 9830</span></div>
            <div class="info-row"><span class="info-row-key">France</span><span class="info-row-val">+40 21 303 1000</span></div>
            <div class="info-row"><span class="info-row-key">United States</span><span class="info-row-val">+40 21 200 3300</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#EEEDFE"><span class="material-symbols-rounded gf-icon">volunteer_activism</span></div><span class="info-card-title">Volunteer / NGO support</span></div>
            <span class="info-card-chev">▾</span>
          </div>
          <div class="info-card-body">
            <div class="info-row"><span class="info-row-key">Caritas Romania</span><span class="info-row-val">+40 21 311 5134</span></div>
            <div class="info-row"><span class="info-row-key">Red Cross Romania</span><span class="info-row-val">+40 21 3 222 222</span></div>
            <div class="info-row"><span class="info-row-key">UNHCR Bucharest</span><span class="info-row-val">+40 21 201 3420</span></div>
          </div>
        </div>`,

      'Prevention': (ctry) => `
        <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Next time — protect yourself before you travel.</p>
        <div class="tips-grid">
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">photo_camera</span> Photo of passport on phone</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">cloud_upload</span> Upload copies to Google Drive</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">mail</span> Email yourself passport scan</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">wallet</span> Money belt for documents</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">key</span> Never keep all docs in one bag</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">hotel</span> Use hotel safe when available</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">checklist</span> Write down embassy phone number</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">shield</span> Travel insurance with doc cover</div>
        </div>`
    }
  },

  scam: {
    label: '<span class="material-symbols-rounded gf-icon">credit_card</span> Scam recovery',
    tabs: ['Immediate steps', 'Report fraud', 'Common scams'],
    render: {
      'Immediate steps': (ctry) => `
        <div style="background:#FFEAEA;border-radius:12px;padding:14px 16px;margin-bottom:14px">
          <div style="font-size:13px;font-weight:600;color:#D85A30;margin-bottom:6px"><span class="material-symbols-rounded gf-icon">emergency_home</span> Act fast — the first hour matters</div>
          <div style="font-size:13px;color:#993C1D;line-height:1.8">
            1. Block your card immediately<br>
            2. Screenshot / document evidence<br>
            3. File a police report<br>
            4. Call your bank's fraud line
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#FFEAEA"><span class="material-symbols-rounded gf-icon">credit_card</span></div><span class="info-card-title">Block your card right now</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Revolut</span><span class="info-row-val">Freeze in app instantly</span></div>
            <div class="info-row"><span class="info-row-key">Wise</span><span class="info-row-val">App → Card → Freeze</span></div>
            <div class="info-row"><span class="info-row-key">Mastercard emergency</span><span class="info-row-val">+1 636 722 7111 (global)</span></div>
            <div class="info-row"><span class="info-row-key">Visa emergency</span><span class="info-row-val">+1 303 967 1096 (global)</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--blue-light)"><span class="material-symbols-rounded gf-icon">photo_camera</span></div><span class="info-card-title">Document the scam</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Screenshot</span><span class="info-row-val">All messages, receipts, confirmations</span></div>
            <div class="info-row"><span class="info-row-key">Note down</span><span class="info-row-val">Time, location, description of scammer</span></div>
            <div class="info-row"><span class="info-row-key">Taxi scam?</span><span class="info-row-val">Plate number + driver photo</span></div>
            <div class="info-row"><span class="info-row-key">Online scam?</span><span class="info-row-val">URL, email address, screenshots</span></div>
          </div>
        </div>`,

      'Report fraud': (ctry) => `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--blue-light)"><span class="material-symbols-rounded gf-icon">local_police</span></div><span class="info-card-title">File a police report</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Call</span><span class="info-row-val">112 (emergency) or 955 (police)</span></div>
            <div class="info-row"><span class="info-row-key">In person</span><span class="info-row-val">Nearest police station</span></div>
            <div class="info-row"><span class="info-row-key">Online (RO)</span><span class="info-row-val"><a href="https://www.politiaromana.ro" target="_blank">politiaromana.ro ↗</a></span></div>
            <div class="info-row"><span class="info-row-key">Keep</span><span class="info-row-val">Report number for bank chargeback</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--amber-light)"><span class="material-symbols-rounded gf-icon">account_balance</span></div><span class="info-card-title">Bank chargeback</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Time limit</span><span class="info-row-val">Typically 60–120 days from transaction</span></div>
            <div class="info-row"><span class="info-row-key">Needed</span><span class="info-row-val">Police report number + evidence</span></div>
            <div class="info-row"><span class="info-row-key">Process</span><span class="info-row-val">Call bank → dispute → wait 5–30 days</span></div>
            <div class="info-row"><span class="info-row-key">Success rate</span><span class="info-row-val">Higher with police report</span></div>
          </div>
        </div>`,

      'Common scams': (ctry) => `
        <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Know these before they happen to you.</p>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#FEF3C7"><span class="material-symbols-rounded gf-icon">local_taxi</span></div><span class="info-card-title">Taxi overcharging</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Red flag</span><span class="info-row-val">No meter, waits outside airport</span></div>
            <div class="info-row"><span class="info-row-key">Fix</span><span class="info-row-val">Use Bolt or Uber — price upfront</span></div>
            <div class="info-row"><span class="info-row-key">At OTP (RO)</span><span class="info-row-val">Take official taxis from inside terminal</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#FFEAEA"><span class="material-symbols-rounded gf-icon">home</span></div><span class="info-card-title">Fake accommodation</span></div>
            <span class="info-card-chev">▾</span>
          </div>
          <div class="info-card-body">
            <div class="info-row"><span class="info-row-key">Red flag</span><span class="info-row-val">Wire transfer only, too cheap</span></div>
            <div class="info-row"><span class="info-row-key">Fix</span><span class="info-row-val">Book on Booking.com or Airbnb only</span></div>
            <div class="info-row"><span class="info-row-key">Always</span><span class="info-row-val">Pay by card for chargeback protection</span></div>
          </div>
        </div>
        <div class="tips-grid" style="margin-top:12px">
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">phone_iphone</span> Always use app-based taxis</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">credit_card</span> Pay by card when possible</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">photo_camera</span> Document everything suspicious</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">search</span> Reverse image search listings</div>
        </div>`
    }
  },

  car: {
    label: '<span class="material-symbols-rounded gf-icon">directions_car</span> Car travel rules',
    tabs: ['Speed & rules', 'Vignettes', 'Required docs'],
    render: {
      'Speed & rules': (ctry) => {
        const d = drivingDB[ctry] || drivingDB['United Kingdom'];
        const alcoholColor = d.alcohol.includes('0.0') ? 'color:#D85A30;font-weight:600' : '';
        return `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--blue-light)"><span class="material-symbols-rounded gf-icon">route</span></div><span class="info-card-title">Speed limits — ${ctry}</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">City / town</span><span class="info-row-val">${d.city}</span></div>
            <div class="info-row"><span class="info-row-key">Outside city</span><span class="info-row-val">${d.outside}</span></div>
            <div class="info-row"><span class="info-row-key">Motorway</span><span class="info-row-val">${d.motorway}</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#FFEAEA"><span class="material-symbols-rounded gf-icon">sports_bar</span></div><span class="info-card-title">Alcohol limit — ${ctry}</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">BAC limit</span><span class="info-row-val" style="${alcoholColor}">${d.alcohol}</span></div>
            <div class="info-row"><span class="info-row-key">Phone while driving</span><span class="info-row-val">Illegal — immediate fine</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--teal-light)"><span class="material-symbols-rounded gf-icon">lightbulb</span></div><span class="info-card-title">Mandatory equipment</span></div>
            <span class="info-card-chev">▾</span>
          </div>
          <div class="info-card-body">
            <div class="info-row"><span class="info-row-key">Reflective vest</span><span class="info-row-val">Required — must be in cabin</span></div>
            <div class="info-row"><span class="info-row-key">Warning triangle</span><span class="info-row-val">Required</span></div>
            <div class="info-row"><span class="info-row-key">First aid kit</span><span class="info-row-val">Required</span></div>
            <div class="info-row"><span class="info-row-key">Fire extinguisher</span><span class="info-row-val">Recommended</span></div>
          </div>
        </div>`; },

      'Vignettes': (ctry) => {
        const d = drivingDB[ctry] || drivingDB['United Kingdom'];
        const linkRow = d.vignette_link ? `<div class="info-row"><span class="info-row-key">Buy online</span><span class="info-row-val"><a href="${d.vignette_link}" target="_blank">${d.vignette_link.replace('https://','').replace('www.','')} ↗</a></span></div>` : '';
        return `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--teal-light)"><span class="material-symbols-rounded gf-icon">confirmation_number</span></div><span class="info-card-title">${ctry} — ${d.vignette}</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Details</span><span class="info-row-val">${d.vignette_detail}</span></div>
            ${linkRow}
            <div class="info-row"><span class="info-row-key">Or at</span><span class="info-row-val">Gas stations, border, post offices</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--amber-light)"><span class="material-symbols-rounded gf-icon">map</span></div><span class="info-card-title">Nearby countries</span></div>
            <span class="info-card-chev">▾</span>
          </div>
          <div class="info-card-body">
            <div class="info-row"><span class="info-row-key">Hungary</span><span class="info-row-val">E-matrica required — <a href="https://www.motorway.hu" target="_blank">motorway.hu ↗</a></span></div>
            <div class="info-row"><span class="info-row-key">Bulgaria</span><span class="info-row-val">E-vignette — <a href="https://www.bgtoll.bg" target="_blank">bgtoll.bg ↗</a></span></div>
            <div class="info-row"><span class="info-row-key">Austria</span><span class="info-row-val">Pickerl sticker — gas stations</span></div>
            <div class="info-row"><span class="info-row-key">Germany</span><span class="info-row-val">No vignette — free motorways</span></div>
          </div>
        </div>
        <div class="tips-grid" style="margin-top:12px">
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">check_circle</span> Buy before you enter the country</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">mail</span> Save the email confirmation</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">block</span> No vignette = big fine at exit</div>
        </div>`; },

      'Required docs': (ctry) => `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--amber-light)"><span class="material-symbols-rounded gf-icon">checklist</span></div><span class="info-card-title">Always carry in the car</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Passport / EU ID</span><span class="info-row-val"><span class="material-symbols-rounded gf-icon">check_circle</span> Required</span></div>
            <div class="info-row"><span class="info-row-key">Driving licence</span><span class="info-row-val"><span class="material-symbols-rounded gf-icon">check_circle</span> Required (EU licence valid)</span></div>
            <div class="info-row"><span class="info-row-key">Vehicle registration (CIV)</span><span class="info-row-val"><span class="material-symbols-rounded gf-icon">check_circle</span> Original required</span></div>
            <div class="info-row"><span class="info-row-key">Green card (insurance)</span><span class="info-row-val"><span class="material-symbols-rounded gf-icon">check_circle</span> Required</span></div>
            <div class="info-row"><span class="info-row-key">ITP / TÜV certificate</span><span class="info-row-val"><span class="material-symbols-rounded gf-icon">check_circle</span> Required (sticker valid)</span></div>
            <div class="info-row"><span class="info-row-key">Vignette</span><span class="info-row-val"><span class="material-symbols-rounded gf-icon">check_circle</span> Required on motorways</span></div>
          </div>
        </div>
        <div class="tips-grid" style="margin-top:12px">
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">folder</span> Keep docs in a single folder</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">photo_camera</span> Photograph all docs on your phone</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">directions_car</span> Original reg required — not a copy</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">language</span> EU licence valid across Europe</div>
        </div>`
    }
  },

  carrental: {
    label: '<span class="material-symbols-rounded gf-icon">key</span> Car rental',
    tabs: ['Top companies', 'Conditions', 'Tips'],
    render: {
      'Top companies': (ctry) => `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--teal-light)"><span class="material-symbols-rounded gf-icon">business</span></div><span class="info-card-title">International chains</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Europcar</span><span class="info-row-val">Largest network in EU · <a href="https://www.europcar.com" target="_blank">europcar.com ↗</a></span></div>
            <div class="info-row"><span class="info-row-key">Hertz</span><span class="info-row-val">Global presence · rewards program</span></div>
            <div class="info-row"><span class="info-row-key">Sixt</span><span class="info-row-val">Premium fleet · good app</span></div>
            <div class="info-row"><span class="info-row-key">Budget / Avis</span><span class="info-row-val">Budget option with wide coverage</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--amber-light)"><span class="material-symbols-rounded gf-icon">store</span></div><span class="info-card-title">Local companies in Romania</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Flota Total</span><span class="info-row-val">Competitive rates, multiple cities</span></div>
            <div class="info-row"><span class="info-row-key">AutoKlass</span><span class="info-row-val">Premium fleet, good service</span></div>
            <div class="info-row"><span class="info-row-key">Tip: compare</span><span class="info-row-val"><a href="https://www.rentalcars.com" target="_blank">rentalcars.com ↗</a> for best price</span></div>
          </div>
        </div>`,

      'Conditions': (ctry) => `
        <div class="info-card">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--blue-light)"><span class="material-symbols-rounded gf-icon">checklist</span></div><span class="info-card-title">Standard requirements</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Minimum age</span><span class="info-row-val">21 years (25 for premium)</span></div>
            <div class="info-row"><span class="info-row-key">Licence held</span><span class="info-row-val">Minimum 1–2 years</span></div>
            <div class="info-row"><span class="info-row-key">Credit card</span><span class="info-row-val">Required for deposit (debit often not OK)</span></div>
            <div class="info-row"><span class="info-row-key">Deposit</span><span class="info-row-val">200–1000 EUR blocked on card</span></div>
            <div class="info-row"><span class="info-row-key">International DL</span><span class="info-row-val">Needed outside EU</span></div>
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-head" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:#FFEAEA"><span class="material-symbols-rounded gf-icon">shield</span></div><span class="info-card-title">Insurance options</span></div>
            <span class="info-card-chev">▾</span>
          </div>
          <div class="info-card-body">
            <div class="info-row"><span class="info-row-key">CDW (basic)</span><span class="info-row-val">Reduces liability — usually included</span></div>
            <div class="info-row"><span class="info-row-key">Super CDW</span><span class="info-row-val">Removes excess completely</span></div>
            <div class="info-row"><span class="info-row-key">Credit card cover</span><span class="info-row-val">Some cards cover CDW — check yours</span></div>
            <div class="info-row"><span class="info-row-key">Third party</span><span class="info-row-val">Always included by law</span></div>
          </div>
        </div>`,

      'Tips': (ctry) => `
        <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Save money and avoid common mistakes.</p>
        <div class="tips-grid">
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">photo_camera</span> Film the car before driving off</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">local_gas_station</span> Return with full tank</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">credit_card</span> Use a credit card for deposit</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">calendar_month</span> Book early for best rates</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">language</span> Compare at rentalcars.com</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">checklist</span> Read excess/liability clauses</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">block</span> Check cross-border restrictions</div>
          <div class="tip-chip"><span class="material-symbols-rounded gf-icon">key</span> Keep rental agreement in car</div>
        </div>
        <div class="info-card" style="margin-top:12px">
          <div class="info-card-head open" onclick="toggleAcc(this)">
            <div class="info-card-head-left"><div class="info-card-head-icon" style="background:var(--amber-light)"><span class="material-symbols-rounded gf-icon">warning</span></div><span class="info-card-title">Watch out for</span></div>
            <span class="info-card-chev open">▾</span>
          </div>
          <div class="info-card-body open">
            <div class="info-row"><span class="info-row-key">Pre-existing damage</span><span class="info-row-val">Always document — or you pay</span></div>
            <div class="info-row"><span class="info-row-key">Cross-border fees</span><span class="info-row-val">Often charged — ask upfront</span></div>
            <div class="info-row"><span class="info-row-key">One-way fees</span><span class="info-row-val">Can be very expensive</span></div>
            <div class="info-row"><span class="info-row-key">Late return</span><span class="info-row-val">Charged per hour after deadline</span></div>
          </div>
        </div>`
    }
  }
};

function catTabLabel(label) {
  const map = {
    'Rules': 'rules',
    'Lifehacks': 'lifehacks',
    'Live queue': 'live_queue',
    'Find care': 'find_care',
    'Pharmacies': 'pharmacies',
    'Emergency': 'emergency',
    'What to do': 'what_to_do',
    'Embassy contacts': 'embassy_contacts',
    'Prevention': 'prevention',
    'First steps': 'first_steps',
    'Report': 'report',
    'Cards': 'cards',
    'Speed limits': 'speed_limits',
    'Vignette': 'vignette',
    'Checklist': 'checklist',
    'Companies': 'companies',
    'Requirements': 'requirements',
    'Deposit & insurance': 'deposit_insurance',
  };
  return map[label] ? t(map[label]) : label;
}
function renderCategoryTabs(cat, ctry) {
  const def = catTabs[cat];
  if (!def) return;

  // Render tab buttons
  const tabsEl = document.getElementById('cat-tabs');
  tabsEl.innerHTML = def.tabs.map((label, i) => {
    const id = 'dyn-tab-' + i;
    return `<button class="tab-btn${i===0?' active':''}" onclick="switchDynTab(this,'${id}')">${catTabLabel(label)}</button>`;
  }).join('');

  // Render tab panels
  const panelsEl = document.getElementById('cat-panels');
  panelsEl.innerHTML = def.tabs.map((label, i) => {
    const id = 'dyn-tab-' + i;
    const content = def.render[label] ? def.render[label](ctry) : '<p>Coming soon.</p>';
    return `<div id="${id}" class="tab-panel${i===0?' active':''}">${content}</div>`;
  }).join('');

  // Re-render queues if border category
  if (cat === 'border') {
    setTimeout(renderQueues, 50);
  }
}

function switchDynTab(btn, id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById(id);
  if (panel) panel.classList.add('active');
  // Re-render queues if border queue tab
  if (document.getElementById('queue-list')) renderQueues();
}
