import { v4 as uuidv4 } from 'uuid';

import Ukraine1 from '../assets/myProjects/ukraine24/1.webp';
import Ukraine2 from '../assets/myProjects/ukraine24/2.webp';
import Ukraine3 from '../assets/myProjects/ukraine24/3.webp';
import Ukraine4 from '../assets/myProjects/ukraine24/4.webp';
import Ukraine5 from '../assets/myProjects/ukraine24/5.webp';
import Ukraine6 from '../assets/myProjects/ukraine24/6.webp';
import Ukraine7 from '../assets/myProjects/ukraine24/7.webp';
import Ukraine8 from '../assets/myProjects/ukraine24/8.webp';
import Ukraine9 from '../assets/myProjects/ukraine24/9.webp';

import Fresenius1 from '../assets/myProjects/fresenius/1.webp'
import Fresenius2 from '../assets/myProjects/fresenius/2.webp'
import Fresenius3 from '../assets/myProjects/fresenius/3.webp'
import Fresenius4 from '../assets/myProjects/fresenius/4.webp'
import Fresenius5 from '../assets/myProjects/fresenius/5.webp'
import Fresenius6 from '../assets/myProjects/fresenius/6.webp'
import Fresenius7 from '../assets/myProjects/fresenius/7.webp'
import Fresenius8 from '../assets/myProjects/fresenius/8.webp'
import Fresenius9 from '../assets/myProjects/fresenius/9.webp'

import LeverX1 from '../assets/myProjects/leverx/1.webp'
import LeverX2 from '../assets/myProjects/leverx/2.webp'
import LeverX3 from '../assets/myProjects/leverx/3.webp'
import LeverX4 from '../assets/myProjects/leverx/4.webp'

import Instagram1 from '../assets/myProjects/instagram/1.webp'
import Instagram2 from '../assets/myProjects/instagram/2.webp'
import Instagram3 from '../assets/myProjects/instagram/3.webp'
import Instagram4 from '../assets/myProjects/instagram/4.webp'

import YouTube1 from '../assets/myProjects/youtube/1.webp'
import YouTube2 from '../assets/myProjects/youtube/2.webp'
import YouTube3 from '../assets/myProjects/youtube/3.webp'
import YouTube4 from '../assets/myProjects/youtube/4.webp'

const projects = {
    ukraine: [
        {
            image: Ukraine1,
            subtitle: '16 грудня телеканалу "Україна 24" виповнюється один рік',
            link: 'https://www.dsnews.ua/ukr/society/16-dekabrya-telekanalu-ukraina-24-ispolnyaetsya-odin-god-16122020-409620',
        },
        {
            image: Ukraine2,
            subtitle: '«Україна 24» покаже незвичайний різдвяний концерт',
            link: 'https://broadcast.net.ua/ru/news-broadcast/3584-ukraina-24-pokazhe-nezvychainyi-rizdvianyi-kontsert',
        },
        {
            image: Ukraine3,
            subtitle: 'ТЕЛЕКАНАЛ "УКРАЇНА 24" ГОТУЄ СПЕЦЕФІР "ГРОШІ НА ЖИТТЯ" З ОЛЕКСІЄМ СУХАНОВИМ',
            link: 'https://www.depo.ua/ukr/life/telekanal-ukraina-24-gotue-spetsefir-groshi-na-zhittya-z-oleksiem-sukhanovim-202012101257186',
        },
        {
            image: Ukraine4,
            subtitle: 'Євгеній Кисельов в ефірі каналу "Україна 24" наживо висвітлюватиме інавгурацію Джо Байдена',
            link: 'https://www.depo.ua/ukr/life/evgeniy-kiselov-v-efiri-kanalu-ukraina-24-nazhivo-visvitlyuvatime-inavguratsiyu-dzho-baydena-202101191273383',
        },
        {
            image: Ukraine5,
            subtitle: 'Як українські зірки святкують Різдво: Alyosha, Олег Скрипка та The Alibi Sisters про сімейні традиції',
            link: 'https://lifestyle.segodnya.ua/ua/lifestyle/afisha/kak-ukrainskie-zvezdy-otmechayut-rozhdestvo-alyosha-oleg-skripka-i-the-alibi-sisters-o-semeynyh-tradiciyah-1499442.html',
        },
        {
            image: Ukraine6,
            subtitle: '"Новинна Група Україна" запустила нову інноваційну студію 360°',
            link: 'https://news.obozrevatel.com/ukr/show/afisha/novinna-grupa-ukraina-zapustila-novu-innovatsijnu-studiyu-360.htm',
        },
        {
            image: Ukraine7,
            subtitle: '«Україна 24» та польський канал TVP1 проведуть спільне інтерв’ю з президентами України й Польщі',
            link: 'https://detector.media/production/article/181509/2020-10-13-ukraina-24-ta-polskyy-kanal-tvp1-provedut-spilne-intervyu-z-prezydentamy-ukrainy-y-polshchi/',
        },
        {
            image: Ukraine8,
            subtitle: 'Новости "Сегодня" и канал "Украина" готовят рекордный праздничный спецэфир "Итоги года"',
            link: 'http://www.vsetv.com/tvevent_24461.html',
        },
        {
            image: Ukraine9,
            subtitle: 'Как рассказать о серьезном в игровом формате. Опыт «Сегодня»',
            link: 'https://mmr.ua/ru/show/kak-rasskazat-o-sereznom-v-igrovom-formate',
        },

    ],
    fresenius: [
        {
            image: Fresenius1,
            subtitle: 'У центральній лікарні Рівного безкоштовно проводитимуть гемодіаліз',
            link: 'https://rivne1.tv/news/126894-u-tsentralniy-likarni-rivnoho-bezkoshtovno-provoditimut-hemodializ',
        },
        {
            image: Fresenius2,
            subtitle: 'В Харькове открылся новый диализный центр Fresenius',
            link: 'https://izvestia.kharkov.ua/obshchestvo/v-harkove-otkrylsja-novyj-dializnyj-centr-fresenius/',
        },
        {
            image: Fresenius3,
            subtitle: 'Вакцинація проти коронавірусу людей з хворобами нирок: рекомендації провідного нефролога',
            link: 'https://health.24tv.ua/vaktsinatsiya-proti-koronavirusu-lyudey-hvorobami-nirok-rekomendatsiyi_n1801548',
        },
        {
            image: Fresenius4,
            subtitle: 'Как бесплатно получить гемодиализ по Программе медицинских гарантий',
            link: 'https://nakipelo.ua/ru/kak-besplatno-poluchit-gemodializ-po-programme-medicinskih-garantij',
        },
        {
            image: Fresenius5,
            subtitle: 'Директор "Фрезеніус медикал кер Україна" Роман Шурдук: Доступний діаліз, медична реформа та лібералізація економіки',
            link: 'https://www.epravda.com.ua/publications/2021/12/27/680978/',
        },
        {
            image: Fresenius6,
            subtitle: 'Медичний центр «Фрезеніус» у Черкасах проводить вакцинацію від COVID-19',
            link: 'https://www.freseniusmedicalcare.ua/uk/novini/medichnii-centr-frezenius-u-cherkasakh-provodit-vakcinaciju-vid-covid-19/',
        },
        {
            image: Fresenius7,
            subtitle: '"Фрезениус Медикал Кер Украина" обеспокоена возможным давлением на суд в делах о выплатах компенсации компании за оказанные услуги гемодиализа',
            link: 'https://interfax.com.ua/news/pharmacy/766941.html',
        },
        {
            image: Fresenius8,
            subtitle: 'У Харкові відкрився діалізний центр',
            link: 'https://allkharkov.ua/news/med/y-harkov-vdkrivsia-dalznii-centr.html',
        },
        {
            image: Fresenius9,
            subtitle: '"Фрезениус Медикал Кер Украина" открыла центр гемодиализа в Харькове',
            link: 'https://interfax.com.ua/news/pharmacy/774098.html',
        },

    ],
    leverx: [
        {
            image: LeverX1,
            subtitle: 'Компанія LeverX Group запускає безкоштовні IT-курси. Найкращих студентів візьмуть на роботу',
            link: 'https://mc.today/kompaniya-leverx-group-zapuskaye-bezkoshtovni-it-kursi-najkrashhih-studentiv-vizmut-na-robotu/',
        },
        {
            image: LeverX2,
            subtitle: 'Как использовать UX-UI-тренды в 2022 и надо ли',
            link: 'https://dou.ua/forums/topic/36265/',
        },
        {
            image: LeverX3,
            subtitle: 'Запрошуємо на безкоштовний онлайн-мітап «Створення застосунків SAP RAP» від LeverX Group.',
            link: 'https://ne-np.facebook.com/dna325/photos/%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%88%D1%83%D1%94%D0%BC%D0%BE-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%B7%D0%BA%D0%BE%D1%88%D1%82%D0%BE%D0%B2%D0%BD%D0%B8%D0%B9-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BC%D1%96%D1%82%D0%B0%D0%BF-%D1%81%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F-%D0%B7%D0%B0%D1%81%D1%82%D0%BE%D1%81%D1%83%D0%BD%D0%BA%D1%96%D0%B2-sap-rap-%D0%B2%D1%96%D0%B4-leverx/1614517515559617/',
        },
        {
            image: LeverX4,
            subtitle: ' Безкоштовний онлайн-мітап «ABAP Unit Tests Meetup» від LeverX Group!',
            link: 'https://uk.telegram-store.com/catalog/channels/zaichenkoteam/3323',
        },
    ],
    instagram: [
        {
            image: Instagram1,
            subtitle: 'Visit our online SAP RAP free meetup in Ukraine by LeverX Group at 7:00 p.m. (Kyiv time) on 27th of January 🔥',
            link: 'https://www.instagram.com/p/CZG7ppro_y3/?igshid=YmMyMTA2M2Y%3D',
        },
        {
            image: Instagram2,
            subtitle: 'Free abap unit tests online meetup by leverx group',
            link: 'https://www.instagram.com/p/CXQN_ChIkbn/?igshid=YmMyMTA2M2Y%3D',
        },
        {
            image: Instagram3,
            subtitle: 'The office is developing and becoming more comfortable',
            link: 'https://www.instagram.com/p/CY8pksjIrkN/?igshid=YmMyMTA2M2Y%3D',
        },
        {
            image: Instagram4,
            subtitle: 'Today, 2000 cats and dogs live in the shelter.',
            link: 'https://www.instagram.com/p/CZZbaJmoRZr/?igshid=YmMyMTA2M2Y%3D',
        },
    ],
    yuotube: [
        {
            image: YouTube1,
            subtitle: 'Рік в ефірі: в арсеналі каналу Україна24 – надсучасна студія',
            link: 'https://youtu.be/aywsixNDJ3o',
        },
        {
            image: YouTube2,
            subtitle: '"Новинна Група Україна" запускає нову інноваційну студію 360°',
            link: 'https://youtu.be/K1V8Mtf0qCA',
        },
        {
            image: YouTube3,
            subtitle: '«Тут — життя»: 15 років на гемодіалізі | Накипіло',
            link: 'https://youtu.be/xj2VpyHTJIw',
        },
        {
            image: YouTube4,
            subtitle: 'Данэлия Тулешова "Stone Cold" – выбор вслепую – Голос. Дети 4 сезон',
            link: 'https://youtu.be/jGUqIU6u8Ew',
        },
    ],
}

export const projectsDataUa = [
    {
        id: uuidv4(),
        title: '«Україна 24», новини «Сьогодні» на каналі «Україна»',
        text: "Розробляла  стратегію просування проєктів і ведучих каналу «Україна 24», новин «Сьогодні» (канал «Україна). Генерувала інфоприводи, ініціювала згадування про ведучих, топменеджерів, спецефіри медіагрупи на внутрішніх офіційних ресурсах та в зовнішніх ЗМІ. Писала тексти для ЗМІ та соцмереж. Забезпечувала інформаційну підтримку партнерств каналу  (інформаційне партнерство фестивалю Docudays UA 2019, медіапартнерство проєкту Єлизавети Ясько «Як звучить Україна»).",
        projects: projects.ukraine,
        filter: 'ukraine'
    },
    {
        id: uuidv4(),
        title: '«Фрезеніус Медикал Кер Україна»',
        text: `Розробляла комунікаційну стратегію й окремі PR-кампанії, антикризовий піар; ініціювала участь у фахових виставках, організовувала заходи (вебінари для лікарів, фейсбук-трансляції з лікарями для пацієнтів, медіавідкриття медичного центру в Харкові).
        Створювала контент для соцмереж (для фейсбук-сторінки «Pro нирки») та сайту компанії. Комунікувала з пацієнтами, зі ЗМІ (написання колонок, коментарів, пресрелізів, статей, інтервʼю, подкастів).`,
        projects: projects.fresenius,
        filter: 'fresenius'
    },
    {
        id: uuidv4(),
        title: 'LeverX Group',
        text: 'Брала участь у розвитку HR-бренду компанії; створенні PR-стратегії. Ініціювала PR-кампанії для залучення співробітників; популяризувала ІТ-курси компанії, взаємодіяла з університетами, студентськими спільнотами; комунікувала зі ЗМІ (написання пресрелізів, статей, інтервю, анонсів, створення профільних сторінок компанії).<br/> Організовувала заходи (мітапи), супроводжувала проєкти з інформування співробітників (новинні розсилки, огляди, буклети корпоративних видань), внутрішній документообіг і звітність.',
        projects: projects.leverx,
        filter: 'leverx'
    },
    {
        id: uuidv4(),
        title: 'Instagram',
        text: 'Створювала контент (сторіз, пости, опитування) про життя українського офісу, колективу компанії, анонси про фахові заходи, які організовує команда в Україні. Брифувала дизайнера щодо графіки та СММ-менеджера — щодо дати публікації, налаштування таргетингової реклами.',
        projects: projects.instagram,
        filter: 'instagram'
    },
    {
        id: uuidv4(),
        title: 'YouTube',
        text: 'Продумувала слогани, ідеї, сценарій для роликів, координувала процес знімання та публікації готового ролика («Україна 24», «Фрезеніус Медикал Кер Україна»). Публікувала контент на ютуб- каналі, створювала субтитри, синопсиси до відео; відстежувала ефективність контенту, аналітику.',
        projects: projects.yuotube,
        filter: 'youtube'
    },
]

export const projectsDataEn = [
    {
        id: uuidv4(),
        title: '«Ukraine 24», news program «Segodnya» on the TV channel «Ukraine»',
        text: 'Developed a strategy for promoting projects and hosts of the TV channel "Ukraine 24", news program "Segodnya"  (TV channel "Ukraine"). I wrote the texts for the media and social networks about the projects of the media group, special broadcasts, presenters, top managers; provided information support of channel partnerships.',
        projects: projects.ukraine,
        filter: 'ukraine'
    },
    {
        id: uuidv4(),
        title: 'Fresenius Medical Care Ukraine',
        text: "I developed a communication strategy and PR campaigns, anti-crisis PR; initiated participation in professional exhibitions, organized events (webinars for doctors, Facebook broadcasts with doctors for patients, media opening of the medical center in Kharkiv).I created content for social networks(for the Facebook page \"Pro нирки\") and the company's website.Communicated with patients, with the media (writing columns, comments, press releases, articles, interviews, podcasts).",
        projects: projects.fresenius,
        filter: 'fresenius'
    },
    {
        id: uuidv4(),
        title: 'LeverX',
        text: 'Designed, implemented the company’s HR brand; created the company’s PR strategy, developed a plan for conducting PR campaigns to attract employees. I popularized the company\'s IT courses, interacted with universities, student communities; communicated with the media and created different materials(columns, comments, press releases, articles, interviews, podcasts).Organized events(meetups).Supported of projects for informing employees(newsletters, reviews, brochures of corporate publications).',
        projects: projects.leverx,
        filter: 'leverx'
    },
    {
        id: uuidv4(),
        title: 'Instagram',
        text: 'I created the content (stories, posts, surveys) about the life of the Ukrainian office, the company\'s staff, announcements about professional events organized by the team in Ukraine. I briefed the designer about the graphics and the SMM manager about the date of publication, setting up targeted advertising.',
        projects: projects.instagram,
        filter: 'instagram'
    },
    {
        id: uuidv4(),
        title: 'YouTube',
        text: 'I created slogans, ideas, video description, coordinated the process of shooting and publishing the finished video ("Ukraine 24", Fresenius Medical Care Ukraine). I published content on a YouTube channel, created subtitles, synopsis for videos; tracked the effectiveness of content, analytics.',
        projects: projects.yuotube,
        filter: 'youtube'
    },
]