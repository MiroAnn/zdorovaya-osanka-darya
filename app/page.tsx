import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Лендинг курса «Здоровая осанка»",
  description: "6 недель, после которых у вас вырастут крылья",
};

const fitItems = [
  "болят спина, поясница, шея или область между лопатками",
  "чувствуются скованность, перенапряжение или ограничение движения",
  "есть дискомфорт в тазобедренных или коленных суставах",
  "устают или болят ноги и стопы",
  "хочется работать с сутулостью, асимметрией или выраженным прогибом в пояснице",
  "ходите сгорблено",
];

const recognitionItems = [
  "Делаете упражнения, но не до конца уверены подходят ли они вам, чтобы прийти к результату",
  "Не знаете делаете ли упражнения правильно",
  "Вообще не начинали, потому что боитесь навредить себе и сделать хуже",
  "Собираете упражнения из разных источников, но вам не хватает системы и целостного подхода",
  "Не можете выбрать, чем заниматься сегодня: спиной, шеей, суставами или стопами",
  "Начинаете заниматься, но, как только становится легче, снова перестаёте и так по кругу",
  "Чувствуете, что вам не хватает дисциплины, наставника и доброго внешнего контроля",
];

const consequences = [
  "напряжением и болью в шее, плечах или между лопатками;",
  "дискомфортом в грудном или поясничном отделе;",
  "скованностью после сна или долгого сидения;",
  "выраженным прогибом в пояснице, сутулостью или асимметрией;",
  "дискомфортом в тазобедренных или коленных суставах;",
  "усталостью, болью или изменением нагрузки на стопы;",
  "ощущением, что спину тяжело долго держать ровно.",
];

const bodyZones = [
  ["Стопы и ноги", "Подвижность и работа стоп, распределение опоры, положение ног, координация коленных и тазобедренных суставов."],
  ["Таз и поясница", "Положение таза, подвижность пояснично-крестцового отдела, работа ягодичных мышц и мышц корпуса."],
  ["Грудной отдел и плечи", "Подвижность грудной клетки, положение лопаток и плеч, напряжение между лопатками и в верхней части спины."],
  ["Шея и положение головы", "Связь шеи с грудным отделом и плечевым поясом, контроль положения головы без постоянного напряжения."],
  ["Позвоночник и осанка целиком", "Дыхание, координация, симметрия движения и способность сохранять более устойчивое положение тела в обычной жизни."],
];

const processSteps = [
  ["Диагностика в начале", "В начале вы проходите диагностику и наша система подбирает для вас персонализированную программу, основанную на знаниях Дарьи.", "/program-diagnosis.png", "Диагностика осанки со специалистом"],
  ["Одна основная тренировка в неделю", "Всего на курсе — 6 персонализированных под вас тренировок для всего тела (по одной на каждую неделю). Нагрузка постепенно увеличивается. Работаем 6 дней, воскресенье – выходной.", "/program-workout.png", "Тренировка для всего тела с эластичной лентой"],
  ["Персональный комплекс на 5 минут", "Три–четыре упражнения дополняют общую программу и помогают уделить больше внимания тем зонам, которые вас беспокоят", "/program-personal.png", "Специалист помогает точно выполнить персональное упражнение"],
  ["Поддержка регулярности", "Каждый день участники отмечают выполнение упражнений. Короткий отчёт помогает не выпадать из процесса, когда стало легче или появились другие дела.", "/program-regularity.png", "Регулярное выполнение упражнений в течение недели"],
  ["Три эфира с разбором техники", "Раз в две недели проходит часовой эфир с ответами на вопросы и разбором выполнения упражнений, чтобы вы делали ровно то, что подходит вашему телу.", "/program-live-review.png", "Онлайн-занятие с разбором техники упражнения"],
  ["Финальная диагностика", "Фиксируем результат через анкету и фотографии (не обязательно) и замечаем крылья за спиной.", "/program-final-diagnosis.png", "Схематичное сравнение осанки до и после курса"],
];

const resultItems = [
  "оценить изменения боли, скованности и переносимости нагрузки",
  "понять связь между стопами, суставами, тазом, позвоночником и шеей",
  "выполнять упражнения точнее и увереннее",
  "знать, какие упражнения нужны именно вам",
  "получить план дальнейшей работы после курса (на тарифе VIP)",
];

const curatorFeatures = [
  "стартовая оценка осанки по анкете",
  "6 тренировок с постепенным усложнением",
  "короткий персональный комплекс",
  "чат с куратором в Telegram или MAX",
  "3 прямых эфира по часу — один эфир каждые две недели",
  "ответы на вопросы и разбор техники на эфирах.",
];

const daryaFeatures = [
  "личный комментарий Дарьи по диагностике + диагностика по фото (если захотите)",
  "обсуждение реалистичных целей и ожидаемой динамики",
  "возможность задавать Дарье вопросы в личке",
  "корректировка упражнений в процессе, если это необходимо",
  "повторная оценка результата Дарьей в конце курса",
  "персональные рекомендации для дальнейших занятий",
];

const faq = [
  ["Осанка действительно может влиять на стопы и суставы?", "Тело передаёт нагрузку по всей двигательной цепочке. Положение стоп и ног влияет на работу таза и позвоночника. Изменения положения таза и корпуса, в свою очередь, могут менять походку и нагрузку на тазобедренные, коленные суставы и стопы. Именно поэтому на курсе мы оцениваем и тренируем всё тело."],
  ["Значит ли это, что любая боль связана с осанкой?", "Нет. У боли могут быть разные причины. Стартовая анкета нужна в том числе для того, чтобы понять, соответствует ли ваш запрос задачам курса и не требуется ли сначала очная консультация."],
  ["Подойдёт ли курс при грыже, протрузии или сколиозе?", "Само название диагноза не определяет программу. Важно учитывать симптомы, ограничения, текущее состояние и рекомендации лечащего врача. Перед стартом вы заполните анкету. Если онлайн-формат или предложенная нагрузка вам не подходят, мы сообщим об этом."],
  ["Я постоянно начинаю и бросаю. Есть смысл идти?", "Да, если вам помогает внешний ритм. В курсе есть постепенная программа, ежедневные короткие отчёты и поддержка. Не нужно резко менять всю жизнь. Нужно регулярно выполнять следующий шаг."],
  ["У меня мало времени. Смогу ли я заниматься?", "Основная тренировка открывается раз в неделю и занимает около 10-15 минут, а персональный комплекс занимает примерно 5 минут. Заниматься можно в любое время."],
  ["Что понадобится для занятий?", "Коврик, резинка и валик. Ссылки и рекомендации по выбору будут доступны во вводном блоке."],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function CheckList({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

const fitIconTypes = ["back", "movement", "joint", "feet", "posture", "stoop"];

function FitIcon({ index }: { index: number }) {
  return <span className={`fit-icon fit-icon--${fitIconTypes[index]}`} aria-hidden="true"><i/><b/></span>;
}

const zoneIconTypes = ["feet", "pelvis", "shoulders", "neck", "spine"];

function ZoneIcon({ index }: { index: number }) {
  return <span className={`zone-icon zone-icon--${zoneIconTypes[index]}`} aria-hidden="true"><i/><b/><em/></span>;
}

function Cta({ secondary = false }: { secondary?: boolean }) {
  return (
    <div className={secondary ? "cta-wrap cta-wrap--center" : "cta-wrap"}>
      <a className="button" href="#tariffs">Пройти диагностику <Arrow /></a>
      <span>{secondary ? "И узнать будет ли вам полезен курс" : "Чтобы узнать подойдет ли вам курс"}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top"><strong>Здоровая осанка</strong><span>Дарья Кавуненко</span></a>
        <nav aria-label="Основная навигация">
          <a href="#for-whom">Для кого</a><a href="#course">Что будет на курсе</a><a href="#results">Результат</a><a href="#tariffs">Тарифы</a>
        </nav>
        <a className="header-button" href="#tariffs">Пройти диагностику</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>Курс “Здоровая осанка” – 6 недель, после которых у вас вырастут крылья</h1>
          <Cta />
        </div>
        <div className="portrait">
          <picture>
            <source media="(max-width: 900px)" srcSet="/hero-motion-figures-mobile.png" />
            <img className="hero-motion-illustration" src="/hero-motion-figures.png" alt="" width="1774" height="887" aria-hidden="true" />
          </picture>
          <img className="hero-darya-photo" src="/darya-portrait-cutout-flipped.png" alt="Дарья Кавуненко" width="941" height="1672" fetchPriority="high" />
        </div>
        <p className="portrait-caption">Автор курса – врач-реабилитолог Дарья Кавуненко, которая помогла почти тысяче пациентов избавиться от болей в спине, шее, голове, ногах и суставах и почувствовать себя свободными <span className="caption-final-phrase">и полными жизни.</span></p>
      </section>

      <section className="fit-section">
        <div className="section-heading"><h2>Вам подойдет, если</h2></div>
        <div className="fit-content">
          <figure className="fit-visual">
            <img src="/back-pain-highlight.png" alt="Человек держится рукой за поясницу, зона боли подсвечена красным" width="1122" height="1402" loading="lazy" />
          </figure>
          <div className="fit-grid">{fitItems.map((item, index) => <article key={item}><FitIcon index={index}/><p>{item}</p></article>)}</div>
        </div>
        <Cta />
      </section>

      <section className="recognition" id="for-whom">
        <img className="recognition-person" src="/puzzled-person.png" alt="Человек с недоумевающим выражением лица" width="1536" height="1024" loading="lazy" />
        <div className="shape shape-two"/>
        <div className="section-heading"><h2>Для тех, кто не уверен</h2></div>
        <div className="recognition-grid">{recognitionItems.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div>
      </section>

      <section className="consequences">
        <div className="orbit-graphic" aria-hidden="true"><i/><i/><i/></div>
        <div className="section-heading wide"><h2>Плохая осанка может привести к множеству проблем</h2></div>
        <div className="two-columns">
          <div className="body-copy">
            <p>Осанка — это не только положение спины на фотографии. Это то, как работает все тело (таз, стопы, спина). Если система нарушается, тело начинает перераспределять нагрузку. Одни мышцы постоянно перенапрягаются, другие включаются недостаточно. Компенсация может проявляться в разных местах.</p>
            <p>Последствиями перенапряжения и плохой осанки могут быть:</p>
          </div>
        </div>
        <div className="body-diagram">
          <img className="body-diagram-person" src="/posture-problem-map.png" alt="Схема проблемных зон тела, связанных с осанкой" width="1122" height="1402" loading="lazy" />
          <ul className="diagram-callouts">{consequences.map((item, index) => <li className={`callout-${index + 1}`} key={item}><span>{item}</span></li>)}</ul>
        </div>
        <div className="note"><p>Не каждая боль вызвана осанкой. Но если проблема связана с тем, как тело двигается и распределяет нагрузку, работать только с местом боли часто недостаточно.</p></div>
      </section>

      <section className="course" id="course">
        <div className="section-heading"><h2>На курсе будем работать со всем телом</h2></div>
        <div className="facts"><article><strong>Программа</strong><p>персонализированная ровно для ваших задач</p></article><article><strong>Диагностика</strong><p>в начале и конце</p></article><article><strong>15-20 минут</strong><p>– упражнений в день</p></article><article><strong>Коврик и валик</strong><p>для упражнений (дадим ссылки на озон)</p></article></div>
        <p className="lead">Вы не будете делать упражнения на разные зоны отдельно — это будет единая согласованная система.</p>
        <div className="zones">{bodyZones.map(([title, text], index) => <article key={title}><ZoneIcon index={index}/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        <div className="course-outro"><div className="course-outro-copy"><Cta /></div><p className="course-warning">Курс не рассчитан на самостоятельную работу при остром состоянии, свежей травме, резком ухудшении самочувствия или симптомах, которые требуют очной медицинской оценки.</p></div>
      </section>

      <section className="process">
        <div className="section-heading wide"><h2>Как мы будем делать вас здоровее и стройнее</h2></div>
        <div className="process-list">{processSteps.map(([title, text, image, alt]) => <article key={title}><figure className="process-media"><img src={image} alt={alt} width="1536" height="1024" loading="lazy" /></figure><div className="process-card-copy"><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="results" id="results">
        <img className="results-family-art results-family-art--mobile" src="/results-family-sports.png" alt="" width="2007" height="783" loading="lazy" aria-hidden="true" />
        <div className="results-intro">
          <img className="results-tennis-woman" src="/results-tennis-woman.png" alt="" width="1423" height="1105" loading="lazy" aria-hidden="true" />
          <div className="section-heading"><p className="eyebrow">Результат</p><h2>Какого результата можно ожидать</h2></div>
          <p className="lead">Результат зависит от исходного состояния и запроса. Для одного человека главным изменением станет уменьшение напряжения после рабочего дня. Для другого — более свободное движение в пояснице, суставах или стопах.</p>
        </div>
        <div className="result-panel"><h3>К концу курса вы сможете:</h3><CheckList items={resultItems}/></div>
        <p className="disclaimer">Мы не обещаем, что за 6 недель исчезнет любая боль или полностью исправится осанка. На динамику влияют исходное состояние, регулярность занятий и индивидуальные ограничения. Задача курса — найти связанные с осанкой проблемы, начать их корректировать и дать вам систему для продолжения работы.</p>
        <h3 className="cases-title">Результаты Дашиных учеников за честные 6 недель занятий:</h3>
        <div className="cases" aria-label="Место для пяти кейсов с фотографиями до и после">{[1,2,3,4,5].map((item) => <article key={item}><div><span>до</span><span>после</span></div></article>)}</div>
      </section>

      <section className="tariffs" id="tariffs">
        <div className="section-heading"><h2>Тарифы</h2></div>
        <div className="tariff-grid">
          <article className="tariff-card"><p className="tariff-number">01</p><h3>С куратором</h3><p>Для тех, кому нужна последовательная программа, понятный ритм и регулярная обратная связь.</p><h4>В тариф входит:</h4><CheckList items={curatorFeatures}/><div className="price"><div className="price-row"><strong>16 900 ₽</strong><del>19 900 ₽</del></div><p className="price-note">— для первых 5 участников</p></div><a className="button" href="#final">Выбрать тариф с куратором <Arrow /></a></article>
          <article className="tariff-card tariff-card--accent"><p className="tariff-number">02</p><h3>С Дарьей</h3><p>Для тех, кому важны персональные комментарии врача и корректировка работы по ходу курса.</p><h4>Всё, что входит в тариф «С куратором», а также:</h4><CheckList items={daryaFeatures}/><div className="price"><div className="price-row"><strong>30 000 ₽</strong><del>34 900 ₽</del></div><p className="price-note">— для первых 5 участников</p></div><a className="button" href="#final">Выбрать сопровождение Дарьи <Arrow /></a></article>
        </div>
      </section>

      <section className="author">
        <div className="author-photo"><img src="/darya-original.png" alt="Дарья Кавуненко" width="877" height="1280" loading="lazy" /></div>
        <div><p className="eyebrow">Кто ведёт курс</p><h2>Дарья Кавуненко</h2><p>Врач-реабилитолог и специалист по двигательной терапии. Работает с нарушениями осанки, болью в спине и сколиозом, использует научно-доказательный подход.</p><p>Дарья рассматривает тело как связанную систему. Если меняется положение одного звена, нагрузка перераспределяется выше и ниже: между стопами, ногами, тазом, позвоночником, плечами и шеей.</p><p>Поэтому в её программах нет случайного набора упражнений и обещаний «выпрямить спину» одним движением. Есть оценка исходного состояния, комплексная работа со всем телом, постепенная нагрузка и наблюдение за результатом.</p></div>
      </section>

      <section className="faq">
        <div className="section-heading"><h2>Частые вопросы</h2></div>
        <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        <div className="four-parts"><h3>Почему недостаточно просто выпрямить спину?</h3><p>Попытка постоянно отводить плечи назад и контролировать себя усилием воли не формирует здоровую осанку.</p><p>Поэтому на курсе мы работаем сразу с четырьмя составляющими:</p><div>{[["Подвижность", "Возвращаем движение тем отделам позвоночника и суставам, которые двигаются недостаточно."], ["Сила", "Укрепляем мышцы корпуса, спины, таза и ног, которые помогают поддерживать тело в движении и в повседневных положениях."], ["Координация", "Учимся распределять нагрузку между отделами тела, а не перегружать постоянно одну и ту же зону."], ["Дыхание", "Работаем с движением грудной клетки и дыхательными паттернами, которые связаны с положением корпуса и контролем осанки."]].map(([title,text]) => <article key={title}><h4>{title}</h4><p>{text}</p></article>)}</div></div>
      </section>

      <section className="final-cta" id="final">
        <div className="final-wings" aria-hidden="true"/>
        <p className="eyebrow">Здоровая осанка</p>
        <h2>Получите диагностику, системный подход к телу, понятную и простую программу специально для вас и поддержку в течение 6 недель.</h2>
        <Cta secondary />
      </section>
      <footer><span>Здоровая осанка</span><span>Дарья Кавуненко</span></footer>
    </main>
  );
}
