import type { Metadata } from "next";
import "./tarifs.css";

export const metadata: Metadata = {
  title: "Тарифы курса «Здоровая спина»",
  description: "Выберите подходящий формат участия в курсе Дарьи Кавуненко.",
  openGraph: {
    title: "Тарифы курса «Здоровая спина»",
    description: "Групповой, индивидуальный и VIP-форматы участия.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Тарифы курса «Здоровая спина»",
    description: "Групповой, индивидуальный и VIP-форматы участия.",
    images: [],
  },
};

const memoUrl = "https://www.dropbox.com/scl/fo/xf7wvh261mcom27njhfid/ABLZ-Uui-dW3t19TsIxnNIA?rlkey=y3a0ppbdymj3xbxp8u7qc5q6s&dl=0";
const signupUrl = "https://daryakavunenko.tilda.ws/";

const groupFeatures = [
  "Стартовая оценка осанки по анкете",
  "6 тренировок с постепенным усложнением",
  "Короткий персональный комплекс",
  "Чат с куратором в Telegram или MAX",
  "3 прямых эфира по часу — один эфир каждые две недели",
  "Ответы на вопросы и разбор техники на эфирах",
];

const individualFeatures = [
  "Личный комментарий Дарьи по диагностике и диагностика по фото, если захотите",
  "Обсуждение реалистичных целей и ожидаемой динамики",
  "Возможность задавать Дарье вопросы в личных сообщениях",
  "Корректировка упражнений в процессе, если это необходимо",
  "Повторная оценка результата Дарьей в конце курса",
  "Персональные рекомендации для дальнейших занятий",
];

const vipFeatures = [
  "Диагностика онлайн или офлайн в клинике по всем имеющимся исследованиям — КТ, МРТ и другим; при необходимости возможно назначение дополнительных исследований",
  "Индивидуальный план тренировок на 6 недель",
  "6 часовых занятий с Дарьей — по одному каждую неделю с корректировкой программы",
  "Финальная оценка результатов на Zoom-созвоне и составление дальнейшей тренировочной программы",
];

function Features({ items }: { items: string[] }) {
  return <ul className="tarifs-features">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function TarifsPage() {
  return (
    <main className="tarifs-page">
      <section className="tarifs-shell">
        <div className="tarifs-intro">
          <span className="tarifs-kicker">Курс Дарьи Кавуненко</span>
          <h1>Вы можете идти на курс «Здоровая спина». Выберите подходящий тариф:</h1>
          <p>А <a href={memoUrl} target="_blank" rel="noopener noreferrer">вот обещанная памятка</a> по регулярности упражнений</p>
        </div>

        <div className="tarifs-grid">
          <article className="tarifs-card tarifs-card-dark">
            <span className="tarifs-number">01</span>
            <h2>Групповой</h2>
            <p className="tarifs-description">Для тех, кому нужна последовательная программа, понятный ритм и регулярная обратная связь.</p>
            <h3>В тариф входит:</h3>
            <Features items={groupFeatures}/>
            <div className="tarifs-price"><div><strong>16 900 ₽</strong><del>19 900 ₽</del></div><span>Для первых 5 участников</span></div>
            <a className="tarifs-button" href={signupUrl}>Выбрать групповой тариф <span>→</span></a>
          </article>

          <article className="tarifs-card tarifs-card-light">
            <span className="tarifs-number">02</span>
            <h2>Индивидуальный</h2>
            <p className="tarifs-description">Для тех, кому важны персональные комментарии врача и корректировка работы по ходу курса.</p>
            <h3>Всё, что входит в тариф «Групповой», а также:</h3>
            <Features items={individualFeatures}/>
            <div className="tarifs-price"><div><strong>30 000 ₽</strong><del>34 900 ₽</del></div><span>Для первых 5 участников</span></div>
            <a className="tarifs-button" href={signupUrl}>Выбрать индивидуальный тариф <span>→</span></a>
          </article>

          <article className="tarifs-card tarifs-card-blue">
            <span className="tarifs-number">03</span>
            <h2>VIP</h2>
            <p className="tarifs-description">Для тех, кому нужна максимальная персонализация и еженедельная работа с Дарьей.</p>
            <h3>Всё, что входит в тариф «Индивидуальный», а также:</h3>
            <Features items={vipFeatures}/>
            <div className="tarifs-price"><div><strong>150 000 ₽</strong></div></div>
            <a className="tarifs-button" href={signupUrl}>Выбрать VIP-тариф <span>→</span></a>
          </article>
        </div>
      </section>
      <footer className="tarifs-footer">
        <span>Здоровая спина</span>
        <nav aria-label="Юридическая информация">
          <a href="/user">Пользовательское соглашение</a>
          <a href="/policy">Политика обработки персональных данных</a>
        </nav>
        <span>Дарья Кавуненко</span>
      </footer>
    </main>
  );
}
