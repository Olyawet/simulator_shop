document.addEventListener('DOMContentLoaded', function() {
    // Элементы интерфейса - основные
    const openShopBtn = document.getElementById('open-shop');
    const closeShopBtn = document.getElementById('close-shop');
    const customerContainer = document.getElementById('customer-display');
    const inventoryContainer = document.getElementById('products-container');
    const moneyDisplay = document.getElementById('money');
    const taxRateDisplay = document.getElementById('tax-rate');
    const customersServedDisplay = document.getElementById('customers-served');
    const productsSoldDisplay = document.getElementById('products-sold');
    
    // Элементы игрового времени и рейтинга
    const dateDisplay = document.getElementById('game-date');
    const timeDisplay = document.getElementById('game-time-display');
    const ratingValue = document.getElementById('shop-rating');
    const ratingStars = document.getElementById('rating-stars');
    const sleepBtn = document.getElementById('sleep-button');
    
    // Элементы чистоты помещения
    const cleanlinessBar = document.getElementById('cleanliness-bar');
    const cleanlinessProgress = document.getElementById('cleanliness-progress');
    const cleanlinessValue = document.getElementById('cleanliness-value');
    const cleanBtn = document.getElementById('clean-shop');
    
    // Элементы поиска и пагинации инвентаря
    const searchInput = document.getElementById('product-search');
    const searchBtn = document.getElementById('filter-products');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    
    // Элементы вкладок
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Элементы диалога покупателя
    const customerDialog = document.getElementById('customer-dialog');
    const customerCart = document.getElementById('customer-cart');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTax = document.getElementById('cart-tax');
    const cartTotal = document.getElementById('cart-total');
    const taxPercent = document.getElementById('tax-percent');
    const completeSaleBtn = document.getElementById('complete-sale');
    const cancelSaleBtn = document.getElementById('cancel-sale');
    
    // Элементы управления магазином
    const saveGameBtn = document.getElementById('save-game');
    const resetGameBtn = document.getElementById('reset-game');
    const restockSelectedBtn = document.getElementById('selective-restock');
    const restockAllBtn = document.getElementById('restock-all');
    const editPricesBtn = document.getElementById('edit-prices');
    
    // Элементы управления сотрудниками
    const hireBtn = document.getElementById('hire-employee');
    const viewDirectorBtn = document.getElementById('view-director');
    const staffContainer = document.getElementById('employees-container');
    
    // Элементы управления рекламой
    const buyAdBtn = document.getElementById('buy-ads');
    const activeAdsContainer = document.getElementById('active-ads-container');
    
    // Элементы финансов
    const financeTabs = document.querySelectorAll('.finance-tab-button');
    const financeContents = document.querySelectorAll('.finance-tab-content');
    const incomeContainer = document.getElementById('income-history');
    const expensesContainer = document.getElementById('expenses-history');
    const taxesContainer = document.getElementById('tax-history');
    
    // Элементы отзывов
    const reviewsContainer = document.getElementById('reviews-container');
    const averageRating = document.getElementById('average-rating');
    const fiveStarBar = document.getElementById('five-star-bar');
    const fourStarBar = document.getElementById('four-star-bar');
    const threeStarBar = document.getElementById('three-star-bar');
    const twoStarBar = document.getElementById('two-star-bar');
    const oneStarBar = document.getElementById('one-star-bar');
    const fiveStarCount = document.getElementById('five-star-count');
    const fourStarCount = document.getElementById('four-star-count');
    const threeStarCount = document.getElementById('three-star-count');
    const twoStarCount = document.getElementById('two-star-count');
    const oneStarCount = document.getElementById('one-star-count');
    
    // Элементы диалога настроек
    const settingsDialog = document.getElementById('settings-dialog');
    const shopNameInput = document.getElementById('shop-name-input');
    const taxRateInput = document.getElementById('tax-rate-input');
    const headerColorInput = document.getElementById('header-color');
    const accentColorInput = document.getElementById('accent-color');
    const backgroundColorInput = document.getElementById('background-color');
    const saveSettingsBtn = document.getElementById('save-settings');
    const cancelSettingsBtn = document.getElementById('cancel-settings');
    
    // Элементы диалога пополнения товаров
    const restockDialog = document.getElementById('restock-dialog');
    const restockProductsList = document.getElementById('restock-products-list');
    const restockCostDisplay = document.getElementById('restock-cost');
    const confirmRestockBtn = document.getElementById('confirm-restock');
    const cancelRestockBtn = document.getElementById('cancel-restock');
    
    // Элементы диалога изменения цен
    const priceDialog = document.getElementById('price-dialog');
    const priceProductsList = document.getElementById('price-products-list');
    const confirmPricesBtn = document.getElementById('confirm-prices');
    const cancelPricesBtn = document.getElementById('cancel-prices');
    
    // Элементы диалога найма сотрудников
    const hireDialog = document.getElementById('hire-dialog');
    const candidatesList = document.getElementById('candidates-list');
    const refreshCandidatesBtn = document.getElementById('refresh-candidates');
    const cancelHireBtn = document.getElementById('cancel-hire');
    
    // Элементы диалога информации о сотруднике
    const employeeDialog = document.getElementById('employee-dialog');
    const employeeName = document.getElementById('employee-name');
    const employeeSalary = document.getElementById('employee-salary');
    const employeeHireDate = document.getElementById('employee-hire-date');
    const customerServiceSkill = document.getElementById('customer-service-skill');
    const cleaningSkill = document.getElementById('cleaning-skill');
    const inventorySkill = document.getElementById('inventory-skill');
    const customerServiceValue = document.getElementById('customer-service-value');
    const cleaningValue = document.getElementById('cleaning-value');
    const inventoryValue = document.getElementById('inventory-value');
    const employeeTraitsList = document.getElementById('employee-traits-list');
    const giveBonusBtn = document.getElementById('give-bonus');
    const praiseEmployeeBtn = document.getElementById('praise-employee');
    const reprimandEmployeeBtn = document.getElementById('reprimand-employee');
    const fireEmployeeBtn = document.getElementById('fire-employee');
    const closeEmployeeBtn = document.getElementById('close-employee-dialog');
    
    // Элементы диалога директора
    const directorDialog = document.getElementById('director-dialog');
    const directorName = document.getElementById('director-name');
    const directorSalary = document.getElementById('director-salary');
    const managementSkill = document.getElementById('management-skill');
    const motivationSkill = document.getElementById('motivation-skill');
    const managementValue = document.getElementById('management-value');
    const motivationValue = document.getElementById('motivation-value');
    const giveDirectorBonusBtn = document.getElementById('give-director-bonus');
    const fireDirectorBtn = document.getElementById('fire-director');
    const closeDirectorBtn = document.getElementById('close-director-dialog');
    
    // Элементы диалога покупки рекламы
    const adDialog = document.getElementById('ads-dialog');
    const adWeeks = document.getElementById('ad-weeks');
    const adTotalCost = document.getElementById('ad-total-cost');
    const confirmAdBtn = document.getElementById('confirm-ad');
    const cancelAdBtn = document.getElementById('cancel-ad');
    
    // Элементы диалога бонуса сотруднику
    const bonusDialog = document.getElementById('bonus-dialog');
    const bonusAmount = document.getElementById('bonus-amount');
    const confirmBonusBtn = document.getElementById('confirm-bonus');
    const cancelBonusBtn = document.getElementById('cancel-bonus');
    
    // Элементы диалога выбора начальной даты
    const startDateDialog = document.getElementById('start-date-dialog');
    const startDay = document.getElementById('start-day');
    const startMonth = document.getElementById('start-month');
    const startYear = document.getElementById('start-year');
    const confirmStartDateBtn = document.getElementById('confirm-start-date');
    
    // Элементы диалога категорий товаров
    const categoryDialog = document.getElementById('category-dialog');
    const categoryAll = document.getElementById('category-all');
    const categoryFood = document.getElementById('category-food');
    const categoryDrinks = document.getElementById('category-drinks');
    const categoryBakery = document.getElementById('category-bakery');
    const categoryDairy = document.getElementById('category-dairy');
    const categoryMeat = document.getElementById('category-meat');
    const categoryFruits = document.getElementById('category-fruits');
    const categorySweets = document.getElementById('category-sweets');
    const categoryHousehold = document.getElementById('category-household');
    const applyCategoriesBtn = document.getElementById('apply-categories');
    const cancelCategoriesBtn = document.getElementById('cancel-categories');

    // Переменные для пагинации и поиска
    let currentPage = 1;
    let productsPerPage = 10;
    let filteredProducts = [];
    
    // Состояние магазина
    let shopState = {
        isOpen: false,
        money: 1000,
        customersServed: 0,
        productsSold: 0,
        customerInterval: null,
        currentCustomer: null,
        taxRate: 20, // Ставка налога в процентах
        shopName: 'Магазин "Бабочка"',
        colors: {
            header: '#ff9800',
            accent: '#ff9800',
            background: '#f5f5f5'
        },
        selectedProducts: [],
        products: [
            // Продукты
            { id: 1, name: 'Хлеб белый', price: 50, originalPrice: 50, stock: 20, category: 'Продукты' },
            { id: 2, name: 'Хлеб ржаной', price: 55, originalPrice: 55, stock: 18, category: 'Продукты' },
            { id: 3, name: 'Батон нарезной', price: 45, originalPrice: 45, stock: 15, category: 'Продукты' },
            { id: 4, name: 'Молоко 2.5%', price: 80, originalPrice: 80, stock: 15, category: 'Продукты' },
            { id: 5, name: 'Молоко 3.2%', price: 85, originalPrice: 85, stock: 15, category: 'Продукты' },
            { id: 6, name: 'Кефир', price: 75, originalPrice: 75, stock: 12, category: 'Продукты' },
            { id: 7, name: 'Яйца 10 шт', price: 100, originalPrice: 100, stock: 10, category: 'Продукты' },
            { id: 8, name: 'Яйца 30 шт', price: 280, originalPrice: 280, stock: 5, category: 'Продукты' },
            { id: 9, name: 'Сыр Российский', price: 200, originalPrice: 200, stock: 8, category: 'Продукты' },
            { id: 10, name: 'Сыр Голландский', price: 220, originalPrice: 220, stock: 7, category: 'Продукты' },
            { id: 11, name: 'Сыр Пармезан', price: 350, originalPrice: 350, stock: 5, category: 'Продукты' },
            { id: 12, name: 'Колбаса вареная', price: 300, originalPrice: 300, stock: 5, category: 'Продукты' },
            { id: 13, name: 'Колбаса копченая', price: 350, originalPrice: 350, stock: 5, category: 'Продукты' },
            { id: 14, name: 'Сосиски', price: 250, originalPrice: 250, stock: 8, category: 'Продукты' },
            { id: 15, name: 'Сардельки', price: 270, originalPrice: 270, stock: 7, category: 'Продукты' },
            { id: 16, name: 'Масло сливочное', price: 150, originalPrice: 150, stock: 12, category: 'Продукты' },
            { id: 17, name: 'Масло растительное', price: 120, originalPrice: 120, stock: 15, category: 'Продукты' },
            { id: 18, name: 'Йогурт клубничный', price: 60, originalPrice: 60, stock: 18, category: 'Продукты' },
            { id: 19, name: 'Йогурт персиковый', price: 60, originalPrice: 60, stock: 18, category: 'Продукты' },
            { id: 20, name: 'Йогурт натуральный', price: 55, originalPrice: 55, stock: 15, category: 'Продукты' },
            { id: 21, name: 'Сметана 15%', price: 90, originalPrice: 90, stock: 14, category: 'Продукты' },
            { id: 22, name: 'Сметана 20%', price: 100, originalPrice: 100, stock: 12, category: 'Продукты' },
            { id: 23, name: 'Творог 5%', price: 120, originalPrice: 120, stock: 10, category: 'Продукты' },
            { id: 24, name: 'Творог 9%', price: 130, originalPrice: 130, stock: 10, category: 'Продукты' },
            { id: 25, name: 'Макароны спагетти', price: 70, originalPrice: 70, stock: 25, category: 'Продукты' },
            { id: 26, name: 'Макароны рожки', price: 65, originalPrice: 65, stock: 25, category: 'Продукты' },
            { id: 27, name: 'Макароны спираль', price: 68, originalPrice: 68, stock: 25, category: 'Продукты' },
            { id: 28, name: 'Сахар', price: 65, originalPrice: 65, stock: 30, category: 'Продукты' },
            { id: 29, name: 'Соль', price: 40, originalPrice: 40, stock: 35, category: 'Продукты' },
            { id: 30, name: 'Мука пшеничная', price: 60, originalPrice: 60, stock: 20, category: 'Продукты' },
            { id: 31, name: 'Рис длиннозерный', price: 85, originalPrice: 85, stock: 25, category: 'Продукты' },
            { id: 32, name: 'Рис круглый', price: 80, originalPrice: 80, stock: 25, category: 'Продукты' },
            { id: 33, name: 'Гречка', price: 75, originalPrice: 75, stock: 20, category: 'Продукты' },
            { id: 34, name: 'Овсянка', price: 65, originalPrice: 65, stock: 20, category: 'Продукты' },
            { id: 35, name: 'Пшено', price: 60, originalPrice: 60, stock: 15, category: 'Продукты' },
            { id: 36, name: 'Перловка', price: 55, originalPrice: 55, stock: 15, category: 'Продукты' },
            { id: 37, name: 'Чай черный', price: 120, originalPrice: 120, stock: 15, category: 'Продукты' },
            { id: 38, name: 'Чай зеленый', price: 130, originalPrice: 130, stock: 12, category: 'Продукты' },
            { id: 39, name: 'Кофе молотый', price: 250, originalPrice: 250, stock: 10, category: 'Продукты' },
            { id: 40, name: 'Кофе растворимый', price: 200, originalPrice: 200, stock: 12, category: 'Продукты' },
            
            // Напитки
            { id: 41, name: 'Вода минеральная', price: 40, originalPrice: 40, stock: 30, category: 'Напитки' },
            { id: 42, name: 'Вода газированная', price: 45, originalPrice: 45, stock: 30, category: 'Напитки' },
            { id: 43, name: 'Вода негазированная', price: 40, originalPrice: 40, stock: 30, category: 'Напитки' },
            { id: 44, name: 'Сок апельсиновый', price: 90, originalPrice: 90, stock: 20, category: 'Напитки' },
            { id: 45, name: 'Сок яблочный', price: 85, originalPrice: 85, stock: 20, category: 'Напитки' },
            { id: 46, name: 'Сок виноградный', price: 95, originalPrice: 95, stock: 18, category: 'Напитки' },
            { id: 47, name: 'Сок томатный', price: 80, originalPrice: 80, stock: 15, category: 'Напитки' },
            { id: 48, name: 'Лимонад', price: 70, originalPrice: 70, stock: 25, category: 'Напитки' },
            { id: 49, name: 'Кола', price: 75, originalPrice: 75, stock: 25, category: 'Напитки' },
            { id: 50, name: 'Квас', price: 65, originalPrice: 65, stock: 20, category: 'Напитки' },
            
            // Бытовая химия
            { id: 51, name: 'Стиральный порошок', price: 250, originalPrice: 250, stock: 15, category: 'Бытовая химия' },
            { id: 52, name: 'Гель для стирки', price: 280, originalPrice: 280, stock: 12, category: 'Бытовая химия' },
            { id: 53, name: 'Кондиционер для белья', price: 180, originalPrice: 180, stock: 15, category: 'Бытовая химия' },
            { id: 54, name: 'Средство для мытья посуды', price: 120, originalPrice: 120, stock: 20, category: 'Бытовая химия' },
            { id: 55, name: 'Чистящее средство', price: 150, originalPrice: 150, stock: 18, category: 'Бытовая химия' },
            { id: 56, name: 'Мыло туалетное', price: 50, originalPrice: 50, stock: 25, category: 'Бытовая химия' },
            { id: 57, name: 'Мыло хозяйственное', price: 45, originalPrice: 45, stock: 20, category: 'Бытовая химия' },
            { id: 58, name: 'Шампунь', price: 180, originalPrice: 180, stock: 15, category: 'Бытовая химия' },
            { id: 59, name: 'Гель для душа', price: 170, originalPrice: 170, stock: 15, category: 'Бытовая химия' },
            { id: 60, name: 'Зубная паста', price: 120, originalPrice: 120, stock: 20, category: 'Бытовая химия' },
            
            // Канцтовары
            { id: 61, name: 'Ручка шариковая', price: 30, originalPrice: 30, stock: 50, category: 'Канцтовары' },
            { id: 62, name: 'Карандаш простой', price: 20, originalPrice: 20, stock: 50, category: 'Канцтовары' },
            { id: 63, name: 'Тетрадь 12 листов', price: 25, originalPrice: 25, stock: 40, category: 'Канцтовары' },
            { id: 64, name: 'Тетрадь 48 листов', price: 45, originalPrice: 45, stock: 30, category: 'Канцтовары' },
            { id: 65, name: 'Тетрадь 96 листов', price: 70, originalPrice: 70, stock: 25, category: 'Канцтовары' },
            { id: 66, name: 'Блокнот', price: 90, originalPrice: 90, stock: 20, category: 'Канцтовары' },
            { id: 67, name: 'Ластик', price: 25, originalPrice: 25, stock: 40, category: 'Канцтовары' },
            { id: 68, name: 'Линейка', price: 35, originalPrice: 35, stock: 30, category: 'Канцтовары' },
            { id: 69, name: 'Степлер', price: 120, originalPrice: 120, stock: 15, category: 'Канцтовары' },
            { id: 70, name: 'Скрепки', price: 40, originalPrice: 40, stock: 30, category: 'Канцтовары' },
            
            // Электроника
            { id: 71, name: 'Батарейки AA', price: 150, originalPrice: 150, stock: 20, category: 'Электроника' },
            { id: 72, name: 'Батарейки AAA', price: 140, originalPrice: 140, stock: 20, category: 'Электроника' },
            { id: 73, name: 'Зарядное устройство', price: 450, originalPrice: 450, stock: 10, category: 'Электроника' },
            { id: 74, name: 'Наушники', price: 500, originalPrice: 500, stock: 8, category: 'Электроника' },
            { id: 75, name: 'Флеш-накопитель 16GB', price: 600, originalPrice: 600, stock: 12, category: 'Электроника' },
            { id: 76, name: 'Флеш-накопитель 32GB', price: 800, originalPrice: 800, stock: 10, category: 'Электроника' },
            { id: 77, name: 'Карта памяти 16GB', price: 550, originalPrice: 550, stock: 15, category: 'Электроника' },
            { id: 78, name: 'Карта памяти 32GB', price: 750, originalPrice: 750, stock: 12, category: 'Электроника' },
            { id: 79, name: 'Лампочка LED', price: 180, originalPrice: 180, stock: 20, category: 'Электроника' },
            { id: 80, name: 'Удлинитель', price: 350, originalPrice: 350, stock: 15, category: 'Электроника' },
            
            // Одежда
            { id: 81, name: 'Носки мужские', price: 120, originalPrice: 120, stock: 30, category: 'Одежда' },
            { id: 82, name: 'Носки женские', price: 120, originalPrice: 120, stock: 30, category: 'Одежда' },
            { id: 83, name: 'Перчатки', price: 250, originalPrice: 250, stock: 20, category: 'Одежда' },
            { id: 84, name: 'Шапка', price: 350, originalPrice: 350, stock: 15, category: 'Одежда' },
            { id: 85, name: 'Шарф', price: 300, originalPrice: 300, stock: 15, category: 'Одежда' },
            { id: 86, name: 'Футболка', price: 500, originalPrice: 500, stock: 20, category: 'Одежда' },
            { id: 87, name: 'Майка', price: 300, originalPrice: 300, stock: 25, category: 'Одежда' },

            { id: 88, name: 'Зонт', price: 400, originalPrice: 400, stock: 15, category: 'Одежда' },
            
            // Игрушки
            { id: 89, name: 'Мяч', price: 250, originalPrice: 250, stock: 15, category: 'Игрушки' },
            { id: 90, name: 'Кукла', price: 450, originalPrice: 450, stock: 10, category: 'Игрушки' },
            { id: 91, name: 'Машинка', price: 350, originalPrice: 350, stock: 12, category: 'Игрушки' },
            { id: 92, name: 'Конструктор', price: 550, originalPrice: 550, stock: 8, category: 'Игрушки' },
            { id: 93, name: 'Пазл', price: 300, originalPrice: 300, stock: 10, category: 'Игрушки' },
            
            // Косметика
            { id: 94, name: 'Помада', price: 280, originalPrice: 280, stock: 15, category: 'Косметика' },
            { id: 95, name: 'Тушь для ресниц', price: 320, originalPrice: 320, stock: 12, category: 'Косметика' },
            { id: 96, name: 'Крем для лица', price: 350, originalPrice: 350, stock: 10, category: 'Косметика' },
            { id: 97, name: 'Крем для рук', price: 180, originalPrice: 180, stock: 15, category: 'Косметика' },
            { id: 98, name: 'Дезодорант мужской', price: 220, originalPrice: 220, stock: 20, category: 'Косметика' },
            { id: 99, name: 'Дезодорант женский', price: 220, originalPrice: 220, stock: 20, category: 'Косметика' },
            
            // Лекарства
            { id: 100, name: 'Аспирин', price: 90, originalPrice: 90, stock: 30, category: 'Лекарства' },
            { id: 101, name: 'Парацетамол', price: 85, originalPrice: 85, stock: 30, category: 'Лекарства' },
            { id: 102, name: 'Бинт', price: 50, originalPrice: 50, stock: 25, category: 'Лекарства' },
            { id: 103, name: 'Пластырь', price: 70, originalPrice: 70, stock: 25, category: 'Лекарства' },
            { id: 104, name: 'Витамины', price: 350, originalPrice: 350, stock: 15, category: 'Лекарства' },
            
            // Прочее
            { id: 105, name: 'Спички', price: 15, originalPrice: 15, stock: 50, category: 'Прочее' },
            { id: 106, name: 'Зажигалка', price: 50, originalPrice: 50, stock: 30, category: 'Прочее' },
            { id: 107, name: 'Свечи', price: 120, originalPrice: 120, stock: 20, category: 'Прочее' },
            { id: 108, name: 'Газета', price: 30, originalPrice: 30, stock: 40, category: 'Прочее' },
            { id: 109, name: 'Журнал', price: 100, originalPrice: 100, stock: 25, category: 'Прочее' },
            { id: 110, name: 'Открытка', price: 60, originalPrice: 60, stock: 30, category: 'Прочее' }
        ],
        // Игровое время
        gameTime: {
            day: 1,
            month: 1,
            year: 2023,
            hour: 7,
            minute: 0,
            isOpen: false,
            lastPayday: null
        },
        // Рейтинг магазина
        rating: {
            value: 5.0,
            count: 0,
            breakdown: {
                5: 0,
                4: 0,
                3: 0,
                2: 0,
                1: 0
            },
            reviews: []
        },
        // Чистота помещения (в процентах)
        cleanliness: 100,
        // Сотрудники
        employees: [],
        director: null,
        // Активная реклама
        activeAds: [],
        // Финансы
        finances: {
            income: [],
            expenses: [],
            taxes: []
        },
        // Категории товаров
        categories: ['Продукты', 'Напитки', 'Бытовая химия', 'Канцтовары', 'Электроника', 'Одежда', 'Игрушки', 'Косметика', 'Лекарства', 'Прочее']
    };

    // Имена покупателей для случайной генерации
    const customerNames = [
        'Иван', 'Мария', 'Алексей', 'Елена', 'Дмитрий', 'Ольга', 'Сергей', 'Анна',
        'Николай', 'Татьяна', 'Андрей', 'Екатерина', 'Михаил', 'Наталья', 'Владимир',
        'Александр', 'Светлана', 'Павел', 'Юлия', 'Максим', 'Ирина', 'Артем', 'Виктория',
        'Евгений', 'Галина', 'Роман', 'Людмила', 'Денис', 'Валентина', 'Игорь', 'Вера',
        'Антон', 'Надежда', 'Георгий', 'Любовь', 'Виталий', 'Зинаида', 'Валерий', 'Кристина',
        'Станислав', 'Марина', 'Леонид', 'Алла', 'Константин', 'Нина'
    ];
    
    // Имена сотрудников для найма
    const employeeNames = [
        'Алексей Смирнов', 'Елена Иванова', 'Дмитрий Петров', 'Ольга Сидорова', 'Сергей Козлов',
        'Анна Морозова', 'Николай Волков', 'Татьяна Соколова', 'Андрей Новиков', 'Екатерина Семенова',
        'Михаил Кузнецов', 'Наталья Павлова', 'Владимир Федоров', 'Александр Михайлов', 'Светлана Васильева',
        'Павел Алексеев', 'Юлия Николаева', 'Максим Егоров', 'Ирина Степанова', 'Артем Орлов',
        'Виктория Белова', 'Евгений Киселев', 'Галина Макарова', 'Роман Андреев', 'Людмила Ковалева'
    ];
    
    // Черты характера сотрудников
    const employeeTraits = [
        { name: 'Трудолюбивый', effect: { customerService: 10, cleaning: 10, inventory: 5 } },
        { name: 'Ленивый', effect: { customerService: -10, cleaning: -10, inventory: -5 } },
        { name: 'Общительный', effect: { customerService: 15, cleaning: 0, inventory: 0 } },
        { name: 'Замкнутый', effect: { customerService: -5, cleaning: 0, inventory: 5 } },
        { name: 'Аккуратный', effect: { customerService: 5, cleaning: 15, inventory: 10 } },
        { name: 'Неряшливый', effect: { customerService: -5, cleaning: -15, inventory: -5 } },
        { name: 'Внимательный', effect: { customerService: 5, cleaning: 5, inventory: 15 } },
        { name: 'Рассеянный', effect: { customerService: -5, cleaning: -5, inventory: -15 } },
        { name: 'Пунктуальный', effect: { customerService: 5, cleaning: 5, inventory: 10 } },
        { name: 'Опаздывающий', effect: { customerService: -5, cleaning: -5, inventory: -5 } },
        { name: 'Честный', effect: { customerService: 10, cleaning: 5, inventory: 10 } },
        { name: 'Хитрый', effect: { customerService: -5, cleaning: 0, inventory: -5 } },
        { name: 'Креативный', effect: { customerService: 10, cleaning: 0, inventory: 5 } },
        { name: 'Консервативный', effect: { customerService: 0, cleaning: 5, inventory: 0 } }
    ];
    
    // Типы рекламы
    const adTypes = [
        {
            id: 1,
            name: 'Листовки',
            description: 'Раздача листовок около магазина',
            baseCost: 500,
            baseEffect: 0.05, // +5% к потоку клиентов
            minDuration: 1,
            maxDuration: 7
        },
        {
            id: 2,
            name: 'Местная газета',
            description: 'Объявление в местной газете',
            baseCost: 1500,
            baseEffect: 0.1, // +10% к потоку клиентов
            minDuration: 3,
            maxDuration: 14
        },
        {
            id: 3,
            name: 'Радио',
            description: 'Реклама на местной радиостанции',
            baseCost: 3000,
            baseEffect: 0.15, // +15% к потоку клиентов
            minDuration: 5,
            maxDuration: 21
        },
        {
            id: 4,
            name: 'Телевидение',
            description: 'Реклама на местном телеканале',
            baseCost: 10000,
            baseEffect: 0.25, // +25% к потоку клиентов
            minDuration: 7,
            maxDuration: 30
        }
    ];
    
    // Инициализация магазина
    function initShop() {
        // Проверяем наличие сохраненных данных
        loadGameState();
        
        updateMoneyDisplay();
        updateInventory();
        setupEventListeners();
        applyColorTheme();
    }

    // Настройка обработчиков событий
    function setupEventListeners() {
        // Основные кнопки управления магазином
        openShopBtn.addEventListener('click', openShop);
        closeShopBtn.addEventListener('click', closeShop);
        saveGameBtn.addEventListener('click', saveGameState);
        resetGameBtn.addEventListener('click', resetGameState);
        
        // Кнопки управления товарами
        restockSelectedBtn.addEventListener('click', openRestockDialog);
        restockAllBtn.addEventListener('click', restockAllProducts);
        editPricesBtn.addEventListener('click', openPriceDialog);
        
        // Кнопки диалога покупателя
        completeSaleBtn.addEventListener('click', completeSale);
        cancelSaleBtn.addEventListener('click', cancelSale);
        
        // Кнопки диалога настроек
        saveSettingsBtn.addEventListener('click', saveSettings);
        cancelSettingsBtn.addEventListener('click', closeSettings);
        
        // Кнопки диалога пополнения товаров
        confirmRestockBtn.addEventListener('click', confirmRestock);
        cancelRestockBtn.addEventListener('click', closeRestockDialog);
        
        // Кнопки диалога изменения цен
        confirmPricesBtn.addEventListener('click', confirmPrices);
        cancelPricesBtn.addEventListener('click', closePriceDialog);
        
        // Кнопки управления сотрудниками
        hireBtn.addEventListener('click', openHireDialog);
        viewDirectorBtn.addEventListener('click', openDirectorDialog);
        
        // Кнопки диалога найма сотрудников
        refreshCandidatesBtn.addEventListener('click', generateCandidates);
        cancelHireBtn.addEventListener('click', closeHireDialog);
        
        // Кнопки диалога информации о сотруднике
        closeEmployeeBtn.addEventListener('click', closeEmployeeDialog);
        giveBonusBtn.addEventListener('click', openBonusDialog);
        praiseEmployeeBtn.addEventListener('click', praiseEmployee);
        reprimandEmployeeBtn.addEventListener('click', reprimandEmployee);
        fireEmployeeBtn.addEventListener('click', fireEmployee);
        
        // Кнопки диалога директора
        closeDirectorBtn.addEventListener('click', closeDirectorDialog);
        giveDirectorBonusBtn.addEventListener('click', giveDirectorBonus);
        fireDirectorBtn.addEventListener('click', fireDirector);
        
        // Кнопки диалога бонуса
        confirmBonusBtn.addEventListener('click', giveBonus);
        cancelBonusBtn.addEventListener('click', closeBonusDialog);
        
        // Кнопки управления рекламой
        buyAdBtn.addEventListener('click', openAdsDialog);
        confirmAdBtn.addEventListener('click', buyAd);
        cancelAdBtn.addEventListener('click', closeAdsDialog);
        
        // Кнопки управления чистотой
        cleanBtn.addEventListener('click', cleanShop);
        
        // Кнопки диалога категорий товаров
        searchBtn.addEventListener('click', openCategoryDialog);
        applyCategoriesBtn.addEventListener('click', applyCategories);
        cancelCategoriesBtn.addEventListener('click', closeCategoryDialog);
        
        // Обработчик клика по товарам для выбора
        inventoryContainer.addEventListener('click', function(e) {
            const productElement = e.target.closest('.product');
            if (productElement) {
                toggleProductSelection(productElement);
            }
        });
        
        // Обработчики вкладок
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Убираем активный класс со всех кнопок и контента
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Добавляем активный класс к выбранной кнопке и контенту
                this.classList.add('active');
                document.getElementById(targetTab + '-tab').classList.add('active');
            });
        });
        
        // Обработчики финансовых вкладок
        financeTabs.forEach(button => {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-finance-tab');
                
                // Убираем активный класс со всех кнопок и контента
                financeTabs.forEach(btn => btn.classList.remove('active'));
                financeContents.forEach(content => content.classList.remove('active'));
                
                // Добавляем активный класс к выбранной кнопке и контенту
                this.classList.add('active');
                document.getElementById(targetTab + '-tab').classList.add('active');
            });
        });
        
        // Обработчики пагинации
        prevPageBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updateInventory();
            }
        });
        
        nextPageBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                updateInventory();
            }
        });
        
        // Обработчик поиска товаров
        searchInput.addEventListener('input', function() {
            currentPage = 1;
            updateInventory();
        });
        
        // Обработчик кнопки сна
        sleepBtn.addEventListener('click', function() {
            // Переход на следующий день
            shopState.gameTime.day++;
            
            // Проверяем, нужно ли перейти на следующий месяц
            const daysInMonth = new Date(shopState.gameTime.year, shopState.gameTime.month, 0).getDate();
            if (shopState.gameTime.day > daysInMonth) {
                shopState.gameTime.day = 1;
                shopState.gameTime.month++;
                
                // Проверяем, нужно ли перейти на следующий год
                if (shopState.gameTime.month > 12) {
                    shopState.gameTime.month = 1;
                    shopState.gameTime.year++;
                }
                
                // Выплачиваем зарплаты в начале месяца
                payMonthlySalaries();
            }
            
            // Обновляем чистоту магазина
            updateCleanliness();
            
            // Обновляем отображение времени
            updateGameTime();
            
            // Обновляем рейтинг магазина
            updateShopRating();
            
            // Обновляем активную рекламу
            updateActiveAds();
            
            alert('Доброе утро! Наступил новый день.');
        });
        
        // Обработчики для обновления стоимости рекламы
        const adTypeRadios = document.querySelectorAll('input[name="ad-type"]');
        adTypeRadios.forEach(radio => {
            radio.addEventListener('change', updateAdCost);
        });
        
        if (adWeeks) {
            adWeeks.addEventListener('input', updateAdCost);
        }
    }

    // Открытие магазина
    function openShop() {
        shopState.isOpen = true;
        openShopBtn.disabled = true;
        closeShopBtn.disabled = false;
        customerContainer.innerHTML = '';
        startCustomerFlow();
    }

    // Закрытие магазина
    function closeShop() {
        shopState.isOpen = false;
        openShopBtn.disabled = false;
        closeShopBtn.disabled = true;
        stopCustomerFlow();
        customerContainer.innerHTML = '<div class="empty-message">Магазин закрыт. Покупатели не приходят.</div>';
    }

    // Запуск потока покупателей
    function startCustomerFlow() {
        // Создаем первого покупателя сразу
        generateCustomer();
        
        // Затем генерируем новых покупателей с интервалом
        shopState.customerInterval = setInterval(() => {
            if (customerContainer.children.length < 5 && Math.random() > 0.3) {
                generateCustomer();
            }
        }, 5000); // Новый покупатель каждые 5 секунд (с вероятностью)
    }

    // Остановка потока покупателей
    function stopCustomerFlow() {
        clearInterval(shopState.customerInterval);
    }

    // Генерация случайного покупателя
    function generateCustomer() {
        const customerName = customerNames[Math.floor(Math.random() * customerNames.length)];
        // Покупатели редко берут много товаров (с большей вероятностью 1-5 товаров)
        const itemCount = Math.random() < 0.7 ? 
            Math.floor(Math.random() * 5) + 1 : // 70% вероятность 1-5 товаров
            Math.floor(Math.random() * 7) + 6; // 30% вероятность 6-12 товаров
        
        // Создаем элемент покупателя
        const customerElement = document.createElement('div');
        customerElement.className = 'customer';
        customerElement.innerHTML = `
            <div class="customer-icon">${customerName.charAt(0)}</div>
            <div class="customer-info">
                <div class="customer-name">${customerName}</div>
                <div class="customer-items">Хочет купить ${itemCount} товаров</div>
            </div>
        `;
        
        // Создаем корзину покупателя
        const availableProducts = shopState.products.filter(product => product.stock > 0);
        const customerCart = [];
        
        // Если нет доступных товаров, покупатель уходит
        if (availableProducts.length === 0) {
            customerElement.innerHTML += '<div class="customer-items" style="color: red;">Ушел из-за отсутствия товаров</div>';
            setTimeout(() => {
                customerElement.remove();
            }, 3000);
            customerContainer.appendChild(customerElement);
            return;
        }
        
        // Заполняем корзину случайными товарами
        const actualItemCount = Math.min(itemCount, availableProducts.length);
        for (let i = 0; i < actualItemCount; i++) {
            const randomIndex = Math.floor(Math.random() * availableProducts.length);
            const selectedProduct = {...availableProducts[randomIndex]};
            
            // Проверяем, есть ли уже такой товар в корзине
            const existingItem = customerCart.find(item => item.id === selectedProduct.id);
            if (existingItem) {
                // Если товар уже есть, увеличиваем количество (если есть в наличии)
                if (existingItem.quantity < availableProducts[randomIndex].stock) {
                    existingItem.quantity += 1;
                }
            } else {
                // Если товара еще нет, добавляем его с количеством 1
                selectedProduct.quantity = 1;
                customerCart.push(selectedProduct);
            }
        }
        
        // Сохраняем корзину в элементе покупателя
        customerElement.dataset.cart = JSON.stringify(customerCart);
        
        // Добавляем обработчик клика для обслуживания покупателя
        customerElement.addEventListener('click', () => serveCustomer(customerElement));
        
        // Добавляем покупателя в контейнер
        customerContainer.appendChild(customerElement);
    }

    // Обслуживание покупателя
    function serveCustomer(customerElement) {
        // Получаем корзину покупателя
        const customerCart = JSON.parse(customerElement.dataset.cart);
        shopState.currentCustomer = {
            element: customerElement,
            cart: customerCart
        };
        
        // Отображаем диалог с корзиной
        showCustomerCart(customerCart);
    }

    // Отображение корзины покупателя
    function showCustomerCart(cart) {
        // Очищаем предыдущую корзину
        customerCart.innerHTML = '';
        
        // Заполняем корзину товарами
        let subtotal = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div>${item.name} x ${item.quantity}</div>
                <div>${itemTotal} ₽</div>
            `;
            customerCart.appendChild(cartItemElement);
        });
        
        // Итоговая сумма без налога
        cartSubtotal.textContent = subtotal;
        cartTotal.textContent = subtotal;
        
        // Показываем диалог
        customerDialog.style.display = 'flex';
    }

    // Завершение продажи
    function completeSale() {
        if (!shopState.currentCustomer) return;
        
        const cart = shopState.currentCustomer.cart;
        let subtotal = 0;
        let itemsSold = 0;
        
        // Обрабатываем каждый товар в корзине
        cart.forEach(item => {
            const product = shopState.products.find(p => p.id === item.id);
            if (product && product.stock >= item.quantity) {
                // Уменьшаем запас товара
                product.stock -= item.quantity;
                // Увеличиваем счетчики
                subtotal += item.price * item.quantity;
                itemsSold += item.quantity;
            }
        });
        
        // Итоговая сумма без налога
        const total = subtotal;
        
        // Обновляем состояние магазина
        shopState.money += total;
        shopState.customersServed += 1;
        shopState.productsSold += itemsSold;
        
        // Обновляем отображение
        updateMoneyDisplay();
        updateInventory();
        
        // Удаляем покупателя
        shopState.currentCustomer.element.remove();
        shopState.currentCustomer = null;
        
        // Закрываем диалог
        customerDialog.style.display = 'none';
    }
    
    // Отмена продажи
    function cancelSale() {
        // Закрываем диалог без обработки продажи
        customerDialog.style.display = 'none';
        shopState.currentCustomer = null;
    }

    // Пополнение всех товаров
    function restockAllProducts() {
        // Проверяем, достаточно ли денег для пополнения
        const restockCost = 500;
        if (shopState.money < restockCost) {
            alert('Недостаточно денег для пополнения товаров!');
            return;
        }
        
        // Пополняем запасы всех товаров
        shopState.products.forEach(product => {
            product.stock += 10;
        });
        
        // Вычитаем стоимость пополнения
        shopState.money -= restockCost;
        
        // Обновляем отображение
        updateMoneyDisplay();
        updateInventory();
        
        alert('Все товары успешно пополнены!');
    }
    
    // Открытие диалога пополнения выбранных товаров
    function openRestockDialog() {
        // Проверяем, выбраны ли товары
        if (shopState.selectedProducts.length === 0) {
            alert('Выберите товары для пополнения, кликнув на них в списке товаров.');
            return;
        }
        
        // Заполняем список товаров для пополнения
        restockProductsList.innerHTML = '';
        let totalCost = 0;
        const costPerItem = 30; // Стоимость пополнения одного товара
        
        shopState.selectedProducts.forEach(productId => {
            const product = shopState.products.find(p => p.id === productId);
            if (product) {
                const restockItem = document.createElement('div');
                restockItem.className = 'restock-item';
                restockItem.innerHTML = `
                    <label>
                        <input type="checkbox" data-id="${product.id}" checked>
                        ${product.name} (текущий запас: ${product.stock})
                    </label>
                    <div class="quantity-control">
                        <input type="number" data-id="${product.id}" min="1" max="50" value="10" class="restock-quantity">
                        <span>шт.</span>
                    </div>
                `;
                restockProductsList.appendChild(restockItem);
                totalCost += costPerItem * 10; // По умолчанию 10 единиц товара
            }
        });
        
        // Добавляем обработчики событий для чекбоксов и полей ввода количества
        const checkboxes = restockProductsList.querySelectorAll('input[type="checkbox"]');
        const quantityInputs = restockProductsList.querySelectorAll('.restock-quantity');
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateRestockCost);
        });
        
        quantityInputs.forEach(input => {
            input.addEventListener('input', updateRestockCost);
        });
        
        // Обновляем отображение стоимости
        restockCostDisplay.textContent = totalCost;
        
        // Показываем диалог
        restockDialog.style.display = 'flex';
    }
    
    // Обновление стоимости пополнения
    function updateRestockCost() {
        const costPerItem = 30; // Стоимость пополнения одного товара
        let totalCost = 0;
        
        const checkboxes = restockProductsList.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            const productId = parseInt(checkbox.dataset.id);
            const quantityInput = restockProductsList.querySelector(`.restock-quantity[data-id="${productId}"]`);
            const quantity = parseInt(quantityInput.value) || 0;
            totalCost += costPerItem * quantity;
        });
        
        restockCostDisplay.textContent = totalCost;
    }
    
    // Подтверждение пополнения выбранных товаров
    function confirmRestock() {
        const costPerItem = 30; // Стоимость пополнения одного товара
        let totalCost = 0;
        let anyRestocked = false;
        
        // Собираем информацию о выбранных товарах и их количестве
        const checkboxes = restockProductsList.querySelectorAll('input[type="checkbox"]:checked');
        const restockItems = [];
        
        checkboxes.forEach(checkbox => {
            const productId = parseInt(checkbox.dataset.id);
            const quantityInput = restockProductsList.querySelector(`.restock-quantity[data-id="${productId}"]`);
            const quantity = parseInt(quantityInput.value) || 0;
            
            if (quantity > 0) {
                restockItems.push({ id: productId, quantity: quantity });
                totalCost += costPerItem * quantity;
            }
        });
        
        // Проверяем, достаточно ли денег
        if (totalCost > shopState.money) {
            alert('Недостаточно денег для пополнения выбранных товаров!');
            return;
        }
        
        // Пополняем запасы выбранных товаров
        restockItems.forEach(item => {
            const product = shopState.products.find(p => p.id === item.id);
            if (product) {
                product.stock += item.quantity;
                anyRestocked = true;
            }
        });
        
        if (anyRestocked) {
            // Вычитаем стоимость пополнения
            shopState.money -= totalCost;
            
            // Обновляем отображение
            updateMoneyDisplay();
            updateInventory();
            
            alert('Выбранные товары успешно пополнены!');
        }
        
        // Закрываем диалог
        closeRestockDialog();
    }
    
    // Закрытие диалога пополнения товаров
    function closeRestockDialog() {
        restockDialog.style.display = 'none';
    }
    
    // Открытие диалога изменения цен
    function openPriceDialog() {
        // Заполняем список товаров для изменения цен
        priceProductsList.innerHTML = '';
        
        shopState.products.forEach(product => {
            const priceItem = document.createElement('div');
            priceItem.className = 'price-item';
            
            // Максимальная цена - в 3 раза больше оригинальной
            const maxPrice = product.originalPrice * 3;
            
            priceItem.innerHTML = `
                <label>${product.name}</label>
                <div class="price-controls">
                    <input type="range" min="${product.originalPrice}" max="${maxPrice}" 
                           value="${product.price}" class="price-slider" data-id="${product.id}">
                    <input type="number" min="${product.originalPrice}" max="${maxPrice}" 
                           value="${product.price}" class="price-value" data-id="${product.id}"> ₽
                    ${product.price !== product.originalPrice ? 
                      `<span class="original-price">${product.originalPrice} ₽</span>` : ''}
                </div>
            `;
            
            priceProductsList.appendChild(priceItem);
        });
        
        // Добавляем обработчики событий для слайдеров и полей ввода
        const sliders = priceProductsList.querySelectorAll('.price-slider');
        const valueInputs = priceProductsList.querySelectorAll('.price-value');
        
        sliders.forEach(slider => {
            slider.addEventListener('input', function() {
                const productId = parseInt(this.dataset.id);
                const valueInput = priceProductsList.querySelector(`.price-value[data-id="${productId}"]`);
                valueInput.value = this.value;
            });
        });
        
        valueInputs.forEach(input => {
            input.addEventListener('input', function() {
                const productId = parseInt(this.dataset.id);
                const slider = priceProductsList.querySelector(`.price-slider[data-id="${productId}"]`);
                slider.value = this.value;
            });
        });
        
        // Показываем диалог
        priceDialog.style.display = 'flex';
    }
    
    // Подтверждение изменения цен
    function confirmPrices() {
        // Собираем информацию о новых ценах
        const valueInputs = priceProductsList.querySelectorAll('.price-value');
        
        valueInputs.forEach(input => {
            const productId = parseInt(input.dataset.id);
            const newPrice = parseInt(input.value);
            
            const product = shopState.products.find(p => p.id === productId);
            if (product && newPrice >= product.originalPrice && newPrice <= product.originalPrice * 3) {
                product.price = newPrice;
            }
        });
        
        // Обновляем отображение
        updateInventory();
        
        // Закрываем диалог
        closePriceDialog();
        
        alert('Цены успешно обновлены!');
    }
    
    // Закрытие диалога изменения цен
    function closePriceDialog() {
        priceDialog.style.display = 'none';
    }

    // Обновление отображения денег и статистики
    function updateMoneyDisplay() {
        moneyDisplay.textContent = shopState.money;
        taxRateDisplay.textContent = shopState.taxRate;
        customersServedDisplay.textContent = shopState.customersServed;
        productsSoldDisplay.textContent = shopState.productsSold;
    }

    // Обновление отображения инвентаря
    function updateInventory(categories = []) {
        inventoryContainer.innerHTML = '';
        
        // Получаем поисковый запрос
        const searchQuery = searchInput.value.toLowerCase().trim();
        
        // Фильтруем товары по категориям и поисковому запросу
        filteredProducts = shopState.products.filter(product => {
            const matchesCategory = categories.length === 0 || categories.includes(product.category);
            const matchesSearch = product.name.toLowerCase().includes(searchQuery) || 
                                 product.category.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });
        
        // Рассчитываем пагинацию
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);
        
        // Отображаем товары для текущей страницы
        productsToShow.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.dataset.id = product.id;
            
            // Добавляем классы в зависимости от наличия товара
            if (product.stock === 0) {
                productElement.classList.add('out-of-stock');
            } else if (product.stock < 5) {
                productElement.classList.add('low-stock');
            }
            
            // Добавляем класс selected, если товар выбран
            if (shopState.selectedProducts.includes(product.id)) {
                productElement.classList.add('selected');
            }
            
            let priceDisplay = `<div class="product-price">${product.price} ₽</div>`;
            if (product.price !== product.originalPrice) {
                priceDisplay = `
                    <div class="product-price">
                        ${product.price} ₽
                        <span class="original-price">${product.originalPrice} ₽</span>
                    </div>
                `;
            }
            
            productElement.innerHTML = `
                <div class="product-name">${product.name}</div>
                ${priceDisplay}
                <div class="product-stock">${product.stock}</div>
                <div class="product-category">${product.category}</div>
            `;
            
            inventoryContainer.appendChild(productElement);
        });
        
        // Обновляем информацию о страницах
        pageInfo.textContent = `Страница ${currentPage} из ${Math.max(1, totalPages)}`;
        
        // Управляем состоянием кнопок пагинации
        prevPageBtn.disabled = currentPage <= 1;
        nextPageBtn.disabled = currentPage >= totalPages;
        
        // Если нет товаров после фильтрации, показываем сообщение
        if (filteredProducts.length === 0) {
            inventoryContainer.innerHTML = '<div class="empty-message">Нет товаров, соответствующих критериям поиска.</div>';
            pageInfo.textContent = 'Страница 1 из 1';
            prevPageBtn.disabled = true;
            nextPageBtn.disabled = true;
        }
    }
    
    // Переключение выбора товара
    function toggleProductSelection(productElement) {
        const productId = parseInt(productElement.dataset.id);
        const index = shopState.selectedProducts.indexOf(productId);
        
        if (index === -1) {
            // Добавляем товар в выбранные
            shopState.selectedProducts.push(productId);
            productElement.classList.add('selected');
        } else {
            // Удаляем товар из выбранных
            shopState.selectedProducts.splice(index, 1);
            productElement.classList.remove('selected');
        }
    }
    
    // Открытие диалога настроек
    function openSettings() {
        // Заполняем поля текущими значениями
        shopNameInput.value = shopState.shopName;
        taxRateInput.value = shopState.taxRate;
        headerColorInput.value = shopState.colors.header;
        accentColorInput.value = shopState.colors.accent;
        backgroundColorInput.value = shopState.colors.background;
        
        // Показываем диалог
        settingsDialog.style.display = 'flex';
    }
    
    // Сохранение настроек
    function saveSettings() {
        // Получаем новые значения
        const newShopName = shopNameInput.value.trim();
        const newTaxRate = parseInt(taxRateInput.value);
        const newHeaderColor = headerColorInput.value;
        const newAccentColor = accentColorInput.value;
        const newBackgroundColor = backgroundColorInput.value;
        
        // Проверяем корректность значений
        if (newShopName === '') {
            alert('Название магазина не может быть пустым!');
            return;
        }
        
        if (isNaN(newTaxRate) || newTaxRate < 0 || newTaxRate > 50) {
            alert('Ставка налога должна быть числом от 0 до 50!');
            return;
        }
        
        // Обновляем состояние магазина
        shopState.shopName = newShopName;
        shopState.taxRate = newTaxRate;
        shopState.colors.header = newHeaderColor;
        shopState.colors.accent = newAccentColor;
        shopState.colors.background = newBackgroundColor;
        
        // Обновляем отображение
        const shopNameElement = document.getElementById('shop-name');
        if (shopNameElement) {
            shopNameElement.textContent = shopState.shopName;
        }
        updateMoneyDisplay();
        applyColorTheme();
        
        // Закрываем диалог
        closeSettings();
        
        alert('Настройки успешно сохранены!');
    }
    
    // Закрытие диалога настроек
    function closeSettings() {
        settingsDialog.style.display = 'none';
    }
    
    // Применение цветовой темы
    function applyColorTheme() {
        document.documentElement.style.setProperty('--header-color', shopState.colors.header);
        document.documentElement.style.setProperty('--accent-color', shopState.colors.accent);
        document.documentElement.style.setProperty('--hover-color', adjustColor(shopState.colors.accent, -20));
        document.documentElement.style.setProperty('--background-color', shopState.colors.background);
    }
    
    // Функция для затемнения/осветления цвета (для hover эффекта)
    function adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => {
            const value = Math.min(255, Math.max(0, parseInt(color, 16) + amount));
            return value.toString(16).padStart(2, '0');
        });
    }
    
    // Сохранение состояния игры
    function saveGameState() {
        try {
            const gameState = JSON.stringify(shopState);
            localStorage.setItem('shopSimulator', gameState);
            alert('Игра успешно сохранена!');
        } catch (error) {
            console.error('Ошибка сохранения:', error);
            alert('Не удалось сохранить игру. Ошибка: ' + error.message);
        }
    }
    
    // Загрузка состояния игры
    function loadGameState() {
        try {
            const savedState = localStorage.getItem('shopSimulator');
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                
                // Обновляем состояние магазина, сохраняя структуру
                shopState.isOpen = parsedState.isOpen || false;
                shopState.money = parsedState.money || 1000;
                shopState.customersServed = parsedState.customersServed || 0;
                shopState.productsSold = parsedState.productsSold || 0;
                shopState.taxRate = parsedState.taxRate || 20;
                shopState.shopName = parsedState.shopName || 'Магазин "Бабочка"';
                shopState.selectedProducts = parsedState.selectedProducts || [];
                
                // Обновляем цвета
                if (parsedState.colors) {
                    shopState.colors.header = parsedState.colors.header || '#ff9800';
                    shopState.colors.accent = parsedState.colors.accent || '#ff9800';
                    shopState.colors.background = parsedState.colors.background || '#f5f5f5';
                }
                
                // Обновляем товары, сохраняя оригинальные цены
                if (parsedState.products && Array.isArray(parsedState.products)) {
                    parsedState.products.forEach((savedProduct, index) => {
                        if (index < shopState.products.length) {
                            shopState.products[index].stock = savedProduct.stock || shopState.products[index].stock;
                            shopState.products[index].price = savedProduct.price || shopState.products[index].price;
                            // Если нет оригинальной цены, используем текущую цену как оригинальную
                            if (!savedProduct.originalPrice) {
                                shopState.products[index].originalPrice = shopState.products[index].price;
                            } else {
                                shopState.products[index].originalPrice = savedProduct.originalPrice;
                            }
                        }
                    });
                }
                
                // Обновляем название магазина в DOM
                const shopNameElement = document.getElementById('shop-name');
                if (shopNameElement) {
                    shopNameElement.textContent = shopState.shopName;
                }
                
                console.log('Игра успешно загружена!');
            }
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        }
    }
    
    // Сброс состояния игры
    function resetGameState() {
        if (confirm('Вы уверены, что хотите сбросить все данные? Это действие нельзя отменить.')) {
            // Удаляем сохраненное состояние
            localStorage.removeItem('shopSimulator');
            
            // Перезагружаем страницу для полного сброса
            location.reload();
        }
    }

    // Функции для управления сотрудниками
    
    // Открытие диалога найма сотрудников
    function openHireDialog() {
        // Генерируем случайных кандидатов
        generateCandidates();
        
        // Показываем диалог
        const hireDialog = document.getElementById('hire-dialog');
        if (hireDialog) {
            hireDialog.style.display = 'flex';
        }
    }
    
    // Генерация случайных кандидатов на работу
    function generateCandidates() {
        const candidatesList = document.getElementById('candidates-list');
        if (!candidatesList) {
            console.error('Элемент candidates-list не найден');
            return;
        }
        candidatesList.innerHTML = '';
        
        // Генерируем от 3 до 5 кандидатов
        const candidatesCount = Math.floor(Math.random() * 3) + 3;
        
        for (let i = 0; i < candidatesCount; i++) {
            // Выбираем случайное имя
            const name = employeeNames[Math.floor(Math.random() * employeeNames.length)];
            
            // Генерируем случайные навыки (от 1 до 10)
            const customerServiceSkill = Math.floor(Math.random() * 10) + 1;
            const cleaningSkill = Math.floor(Math.random() * 10) + 1;
            const inventorySkill = Math.floor(Math.random() * 10) + 1;
            
            // Генерируем случайную зарплату (от 20000 до 50000)
            const salary = Math.floor(Math.random() * 30000) + 20000;
            
            // Выбираем 1-2 случайные черты характера
            const traitsCount = Math.floor(Math.random() * 2) + 1;
            const traits = [];
            const usedTraitIndices = new Set();
            
            for (let j = 0; j < traitsCount; j++) {
                let traitIndex;
                do {
                    traitIndex = Math.floor(Math.random() * employeeTraits.length);
                } while (usedTraitIndices.has(traitIndex));
                
                usedTraitIndices.add(traitIndex);
                traits.push(employeeTraits[traitIndex]);
            }
            
            // Создаем элемент кандидата
            const candidateElement = document.createElement('div');
            candidateElement.className = 'candidate';
            
            // Формируем HTML для черт характера
            let traitsHTML = '';
            traits.forEach(trait => {
                traitsHTML += `<li>${trait.name}: ${trait.description}</li>`;
            });
            
            candidateElement.innerHTML = `
                <div class="candidate-header">
                    <h4>${name}</h4>
                    <div class="candidate-salary">${salary} ₽/мес</div>
                </div>
                <div class="candidate-skills">
                    <div class="skill-item">
                        <span>Обслуживание клиентов:</span>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: ${customerServiceSkill * 10}%;"></div>
                        </div>
                        <span>${customerServiceSkill}/10</span>
                    </div>
                    <div class="skill-item">
                        <span>Уборка:</span>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: ${cleaningSkill * 10}%;"></div>
                        </div>
                        <span>${cleaningSkill}/10</span>
                    </div>
                    <div class="skill-item">
                        <span>Работа с товаром:</span>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: ${inventorySkill * 10}%;"></div>
                        </div>
                        <span>${inventorySkill}/10</span>
                    </div>
                </div>
                <div class="candidate-traits">
                    <h5>Черты характера:</h5>
                    <ul>${traitsHTML}</ul>
                </div>
                <button class="hire-button">Нанять</button>
            `;
            
            // Сохраняем данные кандидата
            candidateElement.dataset.name = name;
            candidateElement.dataset.customerServiceSkill = customerServiceSkill;
            candidateElement.dataset.cleaningSkill = cleaningSkill;
            candidateElement.dataset.inventorySkill = inventorySkill;
            candidateElement.dataset.salary = salary;
            candidateElement.dataset.traits = JSON.stringify(traits);
            
            // Добавляем обработчик для кнопки найма
            const hireButton = candidateElement.querySelector('.hire-button');
            hireButton.addEventListener('click', () => hireEmployee(candidateElement));
            
            // Добавляем кандидата в список
            candidatesList.appendChild(candidateElement);
        }
    }
    
    // Найм сотрудника
    function hireEmployee(candidateElement) {
        // Получаем данные кандидата
        const name = candidateElement.dataset.name;
        const customerServiceSkill = parseInt(candidateElement.dataset.customerServiceSkill);
        const cleaningSkill = parseInt(candidateElement.dataset.cleaningSkill);
        const inventorySkill = parseInt(candidateElement.dataset.inventorySkill);
        const salary = parseInt(candidateElement.dataset.salary);
        const traits = JSON.parse(candidateElement.dataset.traits);
        
        // Проверяем, достаточно ли денег для найма
        if (shopState.money < salary) {
            alert('Недостаточно денег для найма этого сотрудника!');
            return;
        }
        
        // Создаем объект сотрудника
        const employee = {
            id: Date.now(), // Уникальный ID на основе времени
            name: name,
            skills: {
                customerService: customerServiceSkill,
                cleaning: cleaningSkill,
                inventory: inventorySkill
            },
            salary: salary,
            traits: traits,
            hireDate: new Date(shopState.gameTime.year, shopState.gameTime.month - 1, shopState.gameTime.day),
            happiness: 100, // Начальный уровень счастья
            lastPraise: null, // Дата последней похвалы
            lastReprimand: null, // Дата последнего выговора
            bonuses: [] // История премий
        };
        
        // Добавляем сотрудника в состояние магазина
        shopState.employees.push(employee);
        
        // Вычитаем зарплату из денег магазина (первый месяц)
        shopState.money -= salary;
        
        // Обновляем отображение
        updateMoneyDisplay();
        updateEmployeesList();
        
        // Закрываем диалог найма
        closeHireDialog();
        
        alert(`${name} успешно нанят(а) на работу!`);
    }
    
    // Закрытие диалога найма
    function closeHireDialog() {
        document.getElementById('hire-dialog').style.display = 'none';
    }
    
    // Обновление списка сотрудников
    function updateEmployeesList() {
        const employeesContainer = document.getElementById('employees-container');
        employeesContainer.innerHTML = '';
        
        if (shopState.employees.length === 0) {
            // Если нет сотрудников, показываем сообщение
            employeesContainer.innerHTML = '<div class="empty-staff-message">У вас пока нет сотрудников. Нажмите "Нанять сотрудника", чтобы начать.</div>';
            return;
        }
        
        // Добавляем каждого сотрудника в список
        shopState.employees.forEach(employee => {
            const employeeElement = document.createElement('div');
            employeeElement.className = 'employee-card';
            employeeElement.dataset.id = employee.id;
            
            // Рассчитываем среднее значение навыков
            const avgSkill = Math.round((employee.skills.customerService + employee.skills.cleaning + employee.skills.inventory) / 3);
            
            // Форматируем дату найма
            const hireDate = new Date(employee.hireDate);
            const formattedHireDate = `${hireDate.getDate().toString().padStart(2, '0')}.${(hireDate.getMonth() + 1).toString().padStart(2, '0')}.${hireDate.getFullYear()}`;
            
            employeeElement.innerHTML = `
                <div class="employee-card-header">
                    <h3>${employee.name}</h3>
                    <div class="employee-salary">${employee.salary} ₽/мес</div>
                </div>
                <div class="employee-card-body">
                    <div class="employee-hire-date">Работает с: ${formattedHireDate}</div>
                    <div class="employee-avg-skill">
                        <span>Средний навык:</span>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: ${avgSkill * 10}%;"></div>
                        </div>
                        <span>${avgSkill}/10</span>
                    </div>
                    <div class="employee-happiness">
                        <span>Счастье:</span>
                        <div class="happiness-bar">
                            <div class="happiness-progress" style="width: ${employee.happiness}%;"></div>
                        </div>
                        <span>${employee.happiness}%</span>
                    </div>
                </div>
            `;
            
            // Добавляем обработчик клика для просмотра информации о сотруднике
            employeeElement.addEventListener('click', () => openEmployeeDialog(employee.id));
            
            // Добавляем сотрудника в контейнер
            employeesContainer.appendChild(employeeElement);
        });
    }
    
    // Открытие диалога информации о сотруднике
    function openEmployeeDialog(employeeId) {
        // Находим сотрудника по ID
        const employee = shopState.employees.find(emp => emp.id === employeeId);
        if (!employee) return;
        
        // Заполняем диалог информацией о сотруднике
        document.getElementById('employee-name').textContent = employee.name;
        document.getElementById('employee-salary').textContent = employee.salary;
        
        // Форматируем дату найма
        const hireDate = new Date(employee.hireDate);
        const formattedHireDate = `${hireDate.getDate().toString().padStart(2, '0')}.${(hireDate.getMonth() + 1).toString().padStart(2, '0')}.${hireDate.getFullYear()}`;
        document.getElementById('employee-hire-date').textContent = formattedHireDate;
        
        // Обновляем навыки
        document.getElementById('customer-service-skill').style.width = `${employee.skills.customerService * 10}%`;
        document.getElementById('customer-service-value').textContent = `${employee.skills.customerService}/10`;
        
        document.getElementById('cleaning-skill').style.width = `${employee.skills.cleaning * 10}%`;
        document.getElementById('cleaning-value').textContent = `${employee.skills.cleaning}/10`;
        
        document.getElementById('inventory-skill').style.width = `${employee.skills.inventory * 10}%`;
        document.getElementById('inventory-value').textContent = `${employee.skills.inventory}/10`;
        
        // Обновляем черты характера
        const traitsListElement = document.getElementById('employee-traits-list');
        traitsListElement.innerHTML = '';
        
        employee.traits.forEach(trait => {
            const traitElement = document.createElement('li');
            traitElement.textContent = `${trait.name}: ${trait.description}`;
            traitsListElement.appendChild(traitElement);
        });
        
        // Сохраняем ID сотрудника в диалоге для дальнейших действий
        document.getElementById('employee-dialog').dataset.employeeId = employeeId;
        
        // Показываем диалог
        document.getElementById('employee-dialog').style.display = 'flex';
    }
    
    // Закрытие диалога информации о сотруднике
    function closeEmployeeDialog() {
        document.getElementById('employee-dialog').style.display = 'none';
    }
    
    // Открытие диалога выдачи премии
    function openBonusDialog() {
        // Получаем ID сотрудника из диалога информации
        const employeeId = parseInt(document.getElementById('employee-dialog').dataset.employeeId);
        if (!employeeId) return;
        
        // Сохраняем ID сотрудника в диалоге премии
        document.getElementById('bonus-dialog').dataset.employeeId = employeeId;
        
        // Показываем диалог премии
        document.getElementById('bonus-dialog').style.display = 'flex';
    }
    
    // Выдача премии сотруднику
    function giveBonus() {
        // Получаем ID сотрудника из диалога премии
        const employeeId = parseInt(document.getElementById('bonus-dialog').dataset.employeeId);
        if (!employeeId) return;
        
        // Находим сотрудника по ID
        const employeeIndex = shopState.employees.findIndex(emp => emp.id === employeeId);
        if (employeeIndex === -1) return;
        
        // Получаем сумму премии
        const bonusAmount = parseInt(document.getElementById('bonus-amount').value);
        if (isNaN(bonusAmount) || bonusAmount <= 0) {
            alert('Введите корректную сумму премии!');
            return;
        }
        
        // Проверяем, достаточно ли денег
        if (shopState.money < bonusAmount) {
            alert('Недостаточно денег для выдачи премии!');
            return;
        }
        
        // Выдаем премию
        shopState.employees[employeeIndex].bonuses.push({
            amount: bonusAmount,
            date: new Date(shopState.gameTime.year, shopState.gameTime.month - 1, shopState.gameTime.day)
        });
        
        // Увеличиваем счастье сотрудника (максимум 100)
        shopState.employees[employeeIndex].happiness = Math.min(100, shopState.employees[employeeIndex].happiness + 20);
        
        // Вычитаем сумму премии из денег магазина
        shopState.money -= bonusAmount;
        
        // Обновляем отображение
        updateMoneyDisplay();
        updateEmployeesList();
        
        // Закрываем диалоги
        closeBonusDialog();
        closeEmployeeDialog();
        
        alert(`Премия в размере ${bonusAmount} ₽ успешно выдана!`);
    }
    
    // Закрытие диалога выдачи премии
    function closeBonusDialog() {
        document.getElementById('bonus-dialog').style.display = 'none';
    }
    
    // Похвала сотрудника
    function praiseEmployee() {
        // Получаем ID сотрудника из диалога информации
        const employeeId = parseInt(document.getElementById('employee-dialog').dataset.employeeId);
        if (!employeeId) return;
        
        // Находим сотрудника по ID
        const employeeIndex = shopState.employees.findIndex(emp => emp.id === employeeId);
        if (employeeIndex === -1) return;
        
        // Проверяем, не хвалили ли мы сотрудника сегодня
        const today = new Date(shopState.gameTime.year, shopState.gameTime.month - 1, shopState.gameTime.day);
        const lastPraise = shopState.employees[employeeIndex].lastPraise;
        
        if (lastPraise && lastPraise.getTime() === today.getTime()) {
            alert('Вы уже хвалили этого сотрудника сегодня!');
            return;
        }
        
        // Хвалим сотрудника
        shopState.employees[employeeIndex].lastPraise = today;
        
        // Увеличиваем счастье сотрудника (максимум 100)
        shopState.employees[employeeIndex].happiness = Math.min(100, shopState.employees[employeeIndex].happiness + 10);
        
        // Обновляем отображение
        updateEmployeesList();
        
        // Закрываем диалог
        closeEmployeeDialog();
        
        alert(`Вы похвалили ${shopState.employees[employeeIndex].name}. Уровень счастья повышен!`);
    }
    
    // Выговор сотруднику
    function reprimandEmployee() {
        // Получаем ID сотрудника из диалога информации
        const employeeId = parseInt(document.getElementById('employee-dialog').dataset.employeeId);
        if (!employeeId) return;
        
        // Находим сотрудника по ID
        const employeeIndex = shopState.employees.findIndex(emp => emp.id === employeeId);
        if (employeeIndex === -1) return;
        
        // Проверяем, не делали ли мы выговор сотруднику сегодня
        const today = new Date(shopState.gameTime.year, shopState.gameTime.month - 1, shopState.gameTime.day);
        const lastReprimand = shopState.employees[employeeIndex].lastReprimand;
        
        if (lastReprimand && lastReprimand.getTime() === today.getTime()) {
            alert('Вы уже делали выговор этому сотруднику сегодня!');
            return;
        }
        
        // Делаем выговор сотруднику
        shopState.employees[employeeIndex].lastReprimand = today;
        
        // Уменьшаем счастье сотрудника (минимум 0)
        shopState.employees[employeeIndex].happiness = Math.max(0, shopState.employees[employeeIndex].happiness - 15);
        
        // Обновляем отображение
        updateEmployeesList();
        
        // Закрываем диалог
        closeEmployeeDialog();
        
        alert(`Вы сделали выговор ${shopState.employees[employeeIndex].name}. Уровень счастья понижен!`);
    }
    
    // Увольнение сотрудника
    function fireEmployee() {
        // Получаем ID сотрудника из диалога информации
        const employeeId = parseInt(document.getElementById('employee-dialog').dataset.employeeId);
        if (!employeeId) return;
        
        // Находим сотрудника по ID
        const employeeIndex = shopState.employees.findIndex(emp => emp.id === employeeId);
        if (employeeIndex === -1) return;
        
        // Подтверждение увольнения
        if (!confirm(`Вы уверены, что хотите уволить ${shopState.employees[employeeIndex].name}?`)) {
            return;
        }
        
        // Увольняем сотрудника
        const firedEmployee = shopState.employees.splice(employeeIndex, 1)[0];
        
        // Обновляем отображение
        updateEmployeesList();
        
        // Закрываем диалог
        closeEmployeeDialog();
        
        alert(`${firedEmployee.name} успешно уволен(а)!`);
    }
    
    // Открытие диалога директора
    function openDirectorDialog() {
        // Заполняем диалог информацией о директоре
        document.getElementById('director-name').textContent = shopState.director.name;
        document.getElementById('director-salary').textContent = shopState.director.salary;
        
        // Обновляем навыки
        document.getElementById('management-skill').style.width = `${shopState.director.skills.management * 10}%`;
        document.getElementById('management-value').textContent = `${shopState.director.skills.management}/10`;
        
        document.getElementById('motivation-skill').style.width = `${shopState.director.skills.motivation * 10}%`;
        document.getElementById('motivation-value').textContent = `${shopState.director.skills.motivation}/10`;
        
        // Показываем диалог
        document.getElementById('director-dialog').style.display = 'flex';
    }
    
    // Закрытие диалога директора
    function closeDirectorDialog() {
        document.getElementById('director-dialog').style.display = 'none';
    }
    
    // Выдача премии директору
    function giveDirectorBonus() {
        // Запрашиваем сумму премии
        const bonusAmount = parseInt(prompt('Введите сумму премии для директора:', '5000'));
        if (isNaN(bonusAmount) || bonusAmount <= 0) {
            alert('Введите корректную сумму премии!');
            return;
        }
        
        // Проверяем, достаточно ли денег
        if (shopState.money < bonusAmount) {
            alert('Недостаточно денег для выдачи премии!');
            return;
        }
        
        // Выдаем премию
        shopState.director.bonuses.push({
            amount: bonusAmount,
            date: new Date(shopState.gameTime.year, shopState.gameTime.month - 1, shopState.gameTime.day)
        });
        
        // Увеличиваем счастье директора (максимум 100)
        shopState.director.happiness = Math.min(100, shopState.director.happiness + 15);
        
        // Вычитаем сумму премии из денег магазина
        shopState.money -= bonusAmount;
        
        // Обновляем отображение
        updateMoneyDisplay();
        
        // Закрываем диалог
        closeDirectorDialog();
        
        alert(`Премия в размере ${bonusAmount} ₽ успешно выдана директору!`);
    }
    
    // Увольнение директора
    function fireDirector() {
        // Подтверждение увольнения
        if (!confirm(`Вы уверены, что хотите уволить директора ${shopState.director.name}?`)) {
            return;
        }
        
        // Запрашиваем имя нового директора
        const newDirectorName = prompt('Введите имя нового директора:', 'Иван Иванович');
        if (!newDirectorName || newDirectorName.trim() === '') {
            alert('Имя директора не может быть пустым!');
            return;
        }
        
        // Создаем нового директора
        shopState.director = {
            name: newDirectorName,
            salary: 50000,
            skills: {
                management: Math.floor(Math.random() * 5) + 5, // От 5 до 9
                motivation: Math.floor(Math.random() * 5) + 5  // От 5 до 9
            },
            happiness: 100,
            bonuses: []
        };
        
        // Закрываем диалог
        closeDirectorDialog();
        
        alert(`Директор уволен. ${newDirectorName} назначен новым директором!`);
    }
    
    // Функции для управления рекламой
    
    // Открытие диалога покупки рекламы
    function openAdsDialog() {
        // Сбрасываем выбор рекламы
        const radioButtons = document.querySelectorAll('input[name="ad-type"]');
        radioButtons.forEach(radio => radio.checked = false);
        
        // Сбрасываем продолжительность
        document.getElementById('ad-weeks').value = 1;
        
        // Сбрасываем стоимость
        document.getElementById('ad-total-cost').textContent = 0;
        
        // Показываем диалог
        document.getElementById('ads-dialog').style.display = 'flex';
    }
    
    // Закрытие диалога покупки рекламы
    function closeAdsDialog() {
        document.getElementById('ads-dialog').style.display = 'none';
    }
    
    // Открытие диалога категорий товаров
    function openCategoryDialog() {
        // Показываем диалог
        categoryDialog.style.display = 'flex';
    }
    
    // Закрытие диалога категорий товаров
    function closeCategoryDialog() {
        categoryDialog.style.display = 'none';
    }
    
    // Применение фильтра категорий
    function applyCategories() {
        // Получаем выбранные категории
        const selectedCategories = [];
        
        if (categoryAll.checked) {
            // Если выбраны все категории, не применяем фильтр
            updateInventory();
        } else {
            // Собираем выбранные категории
            if (categoryFood.checked) selectedCategories.push('Продукты');
            if (categoryDrinks.checked) selectedCategories.push('Напитки');
            if (categoryBakery.checked) selectedCategories.push('Хлебобулочные изделия');
            if (categoryDairy.checked) selectedCategories.push('Молочные продукты');
            if (categoryMeat.checked) selectedCategories.push('Мясные продукты');
            if (categoryFruits.checked) selectedCategories.push('Фрукты и овощи');
            if (categorySweets.checked) selectedCategories.push('Сладости');
            if (categoryHousehold.checked) selectedCategories.push('Бытовые товары');
            
            // Фильтруем товары по выбранным категориям
            updateInventory(selectedCategories);
        }
        
        // Закрываем диалог
        closeCategoryDialog();
    }
    
    // Обновление стоимости рекламы при изменении типа или продолжительности
    function updateAdCost() {
        // Получаем выбранный тип рекламы
        const selectedAdType = document.querySelector('input[name="ad-type"]:checked');
        if (!selectedAdType) {
            document.getElementById('ad-total-cost').textContent = 0;
            return;
        }
        
        // Находим информацию о выбранном типе рекламы
        const adType = adTypes.find(ad => ad.id === selectedAdType.value);
        if (!adType) {
            document.getElementById('ad-total-cost').textContent = 0;
            return;
        }
        
        // Получаем продолжительность
        const weeks = parseInt(document.getElementById('ad-weeks').value) || 1;
        
        // Рассчитываем общую стоимость
        const totalCost = adType.baseCost * weeks;
        
        // Обновляем отображение
        document.getElementById('ad-total-cost').textContent = totalCost;
    }
    
    // Покупка рекламы
    function buyAd() {
        // Получаем выбранный тип рекламы
        const selectedAdType = document.querySelector('input[name="ad-type"]:checked');
        if (!selectedAdType) {
            alert('Выберите тип рекламы!');
            return;
        }
        
        // Находим информацию о выбранном типе рекламы
        const adType = adTypes.find(ad => ad.id === selectedAdType.value);
        if (!adType) {
            alert('Выбран некорректный тип рекламы!');
            return;
        }
        
        // Получаем продолжительность
        const weeks = parseInt(document.getElementById('ad-weeks').value) || 1;
        if (weeks < 1 || weeks > 4) {
            alert('Продолжительность рекламы должна быть от 1 до 4 недель!');
            return;
        }
        
        // Рассчитываем общую стоимость
        const totalCost = adType.baseCost * weeks;
        
        // Проверяем, достаточно ли денег
        if (shopState.money < totalCost) {
            alert('Недостаточно денег для покупки рекламы!');
            return;
        }
        
        // Создаем объект рекламной кампании
        const endDate = new Date(shopState.gameTime.year, shopState.gameTime.month - 1, shopState.gameTime.day);
        endDate.setDate(endDate.getDate() + weeks * 7); // Добавляем нужное количество недель
        
        const adCampaign = {
            id: Date.now(), // Уникальный ID на основе времени
            type: adType.id,
            name: adType.name,
            startDate: new Date(shopState.gameTime.year, shopState.gameTime.month - 1, shopState.gameTime.day),
            endDate: endDate,
            effect: adType.baseEffect,
            cost: totalCost
        };
        
        // Добавляем рекламную кампанию в состояние магазина
        shopState.activeAds.push(adCampaign);
        
        // Вычитаем стоимость рекламы из денег магазина
        shopState.money -= totalCost;
        
        // Обновляем отображение
        updateMoneyDisplay();
        updateActiveAds();
        
        // Закрываем диалог
        closeAdsDialog();
        
        alert(`Рекламная кампания "${adType.name}" успешно запущена на ${weeks} ${weeks === 1 ? 'неделю' : 'недели'}!`);
    }
    
    // Обновление списка активных рекламных кампаний
    function updateActiveAds() {
        const activeAdsContainer = document.getElementById('active-ads-container');
        activeAdsContainer.innerHTML = '';
        
        // Проверяем, есть ли активные рекламные кампании
        if (shopState.activeAds.length === 0) {
            activeAdsContainer.innerHTML = '<div class="empty-ads-message">У вас нет активных рекламных кампаний.</div>';
            return;
        }
        
        // Добавляем каждую активную рекламную кампанию в список
        shopState.activeAds.forEach(ad => {
            // Форматируем даты
            const startDate = new Date(ad.startDate);
            const endDate = new Date(ad.endDate);
            
            const formattedStartDate = `${startDate.getDate().toString().padStart(2, '0')}.${(startDate.getMonth() + 1).toString().padStart(2, '0')}.${startDate.getFullYear()}`;
            const formattedEndDate = `${endDate.getDate().toString().padStart(2, '0')}.${(endDate.getMonth() + 1).toString().padStart(2, '0')}.${endDate.getFullYear()}`;
            
            // Находим информацию о типе рекламы
            const adType = adTypes.find(type => type.id === ad.type);
            
            const adElement = document.createElement('div');
            adElement.className = 'ad-campaign';
            adElement.innerHTML = `
                <div class="ad-campaign-header">
                    <h4>${ad.name}</h4>
                </div>
                <div class="ad-campaign-details">
                    <div>Период: ${formattedStartDate} - ${formattedEndDate}</div>
                    <div>Эффект: +${ad.effect}% к потоку клиентов</div>
                    <div>Стоимость: ${ad.cost} ₽</div>
                </div>
            `;
            
            activeAdsContainer.appendChild(adElement);
        });
    }
    
    // Расчет общего эффекта рекламы на поток клиентов
    function calculateAdEffect() {
        let totalEffect = 0;
        
        // Проверяем каждую активную рекламную кампанию
        const currentDate = new Date(shopState.gameTime.year, shopState.gameTime.month - 1, shopState.gameTime.day);
        
        shopState.activeAds = shopState.activeAds.filter(ad => {
            const endDate = new Date(ad.endDate);
            // Если кампания еще активна, учитываем ее эффект
            if (endDate >= currentDate) {
                totalEffect += ad.effect;
                return true;
            }
            // Если кампания закончилась, удаляем ее из списка
            return false;
        });
        
        return totalEffect;
    }
    
    // Обновление игрового времени
    function updateGameTime() {
        // Увеличиваем день
        shopState.gameTime.day++;
        
        // Проверяем, нужно ли перейти на следующий месяц
        const daysInMonth = new Date(shopState.gameTime.year, shopState.gameTime.month, 0).getDate();
        if (shopState.gameTime.day > daysInMonth) {
            shopState.gameTime.day = 1;
            shopState.gameTime.month++;
            
            // Проверяем, нужно ли перейти на следующий год
            if (shopState.gameTime.month > 12) {
                shopState.gameTime.month = 1;
                shopState.gameTime.year++;
            }
            
            // Выплачиваем зарплаты в начале месяца
            payMonthlySalaries();
        }
        
        // Обновляем отображение даты
        const dateElement = document.getElementById('game-date');
        if (dateElement) {
            const formattedDate = `${shopState.gameTime.day.toString().padStart(2, '0')}.${shopState.gameTime.month.toString().padStart(2, '0')}.${shopState.gameTime.year}`;
            dateElement.textContent = formattedDate;
        }
    }
    
    // Выплата ежемесячных зарплат
    function payMonthlySalaries() {
        let totalSalaries = 0;
        
        // Зарплата директора (если есть)
        if (shopState.director) {
            totalSalaries += shopState.director.salary;
        }
        
        // Зарплаты сотрудников
        shopState.employees.forEach(employee => {
            totalSalaries += employee.salary;
        });
        
        // Если нет сотрудников, не выплачиваем зарплаты
        if (totalSalaries === 0) {
            return;
        }
        
        // Проверяем, достаточно ли денег
        if (shopState.money < totalSalaries) {
            alert(`Внимание! У вас недостаточно денег для выплаты зарплат (${totalSalaries} ₽). Сотрудники недовольны!`);
            
            // Уменьшаем счастье всех сотрудников
            if (shopState.director) {
                shopState.director.happiness = Math.max(0, shopState.director.happiness - 30);
            }
            shopState.employees.forEach(employee => {
                employee.happiness = Math.max(0, employee.happiness - 30);
            });
            
            // Обновляем отображение
            updateEmployeesList();
            return;
        }
        
        // Вычитаем зарплаты из денег магазина
        shopState.money -= totalSalaries;
        
        // Добавляем запись в финансы
        shopState.finances.expenses.push({
            date: new Date(shopState.gameTime.year, shopState.gameTime.month - 1, shopState.gameTime.day),
            amount: totalSalaries,
            type: 'salaries',
            description: 'Выплата зарплат'
        });
        
        // Обновляем отображение
        updateMoneyDisplay();
        
        alert(`Зарплаты выплачены. Общая сумма: ${totalSalaries} ₽`);
    }
    
    // Обновление чистоты магазина
    function updateCleanliness() {
        // Уменьшаем чистоту каждый день, когда магазин открыт
        if (shopState.isOpen) {
            // Базовое уменьшение чистоты
            let cleanlinessDecrease = 5;
            
            // Уменьшаем скорость загрязнения, если есть сотрудники с навыком уборки
            const totalCleaningSkill = shopState.employees.reduce((total, employee) => {
                return total + (employee.skills ? employee.skills.cleaning : 0);
            }, 0);
            
            // Чем выше навык уборки, тем меньше уменьшается чистота
            cleanlinessDecrease = Math.max(1, cleanlinessDecrease - (totalCleaningSkill * 0.2));
            
            shopState.cleanliness = Math.max(0, shopState.cleanliness - cleanlinessDecrease);
            
            // Обновляем отображение
            updateCleanlinessDisplay();
        }
    }
    
    // Обновление отображения чистоты
    function updateCleanlinessDisplay() {
        const progressElement = document.getElementById('cleanliness-progress');
        const valueElement = document.getElementById('cleanliness-value');
        
        if (progressElement) {
            progressElement.style.width = `${shopState.cleanliness}%`;
        }
        
        if (valueElement) {
            valueElement.textContent = `${Math.round(shopState.cleanliness)}%`;
        }
    }
    
    // Уборка магазина
    function cleanShop() {
        // Стоимость уборки
        const cleaningCost = 200;
        
        // Проверяем, достаточно ли денег
        if (shopState.money < cleaningCost) {
            alert('Недостаточно денег для уборки магазина!');
            return;
        }
        
        // Увеличиваем чистоту до 100%
        shopState.cleanliness = 100;
        
        // Вычитаем стоимость уборки
        shopState.money -= cleaningCost;
        
        // Обновляем отображение
        updateMoneyDisplay();
        updateCleanlinessDisplay();
        
        alert('Магазин успешно убран!');
    }
    
    // Обновление рейтинга магазина
    function updateShopRating() {
        // Базовый рейтинг
        let baseRating = 3.0;
        
        // Факторы, влияющие на рейтинг
        
        // 1. Чистота (от -1.0 до +1.0)
        const cleanlinessEffect = (shopState.cleanliness / 50) - 1; // 0% = -1.0, 50% = 0, 100% = +1.0
        
        // 2. Навыки обслуживания клиентов (от 0 до +1.0)
        let customerServiceEffect = 0;
        if (shopState.employees.length > 0) {
            const avgCustomerService = shopState.employees.reduce((total, employee) => {
                return total + (employee.skills ? employee.skills.customerService : 0);
            }, 0) / shopState.employees.length;
            
            customerServiceEffect = avgCustomerService / 10;
        }
        
        // 3. Счастье сотрудников (от -0.5 до +0.5)
        let employeeHappinessEffect = 0;
        if (shopState.employees.length > 0) {
            const avgHappiness = shopState.employees.reduce((total, employee) => {
                return total + (employee.happiness || 0);
            }, 0) / shopState.employees.length;
            
            employeeHappinessEffect = (avgHappiness / 100) - 0.5; // 0% = -0.5, 50% = 0, 100% = +0.5
        }
        
        // 4. Наличие товаров (от -1.0 до 0)
        const outOfStockCount = shopState.products.filter(product => product.stock === 0).length;
        const outOfStockRatio = outOfStockCount / shopState.products.length;
        const stockEffect = -outOfStockRatio;
        
        // Рассчитываем итоговый рейтинг (от 1.0 до 5.0)
        let rating = baseRating + cleanlinessEffect + customerServiceEffect + employeeHappinessEffect + stockEffect;
        rating = Math.max(1.0, Math.min(5.0, rating));
        rating = Math.round(rating * 10) / 10; // Округляем до 1 знака после запятой
        
        // Обновляем рейтинг в состоянии магазина
        shopState.rating = rating;
        
        // Обновляем отображение рейтинга
        const ratingElement = document.getElementById('shop-rating');
        if (ratingElement) {
            ratingElement.textContent = rating.toFixed(1);
        }
        
        // Обновляем звезды рейтинга
        const starsElement = document.getElementById('rating-stars');
        if (starsElement) {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            let starsHTML = '';
            
            for (let i = 1; i <= 5; i++) {
                if (i <= fullStars) {
                    starsHTML += '★'; // Полная звезда
                } else if (i === fullStars + 1 && halfStar) {
                    starsHTML += '⯨'; // Половина звезды
                } else {
                    starsHTML += '☆'; // Пустая звезда
                }
            }
            
            starsElement.innerHTML = starsHTML;
        }
    }
    
    // Инициализация магазина при загрузке страницы
    initShop();
});