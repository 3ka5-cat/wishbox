import React from "react";
import { Route, Switch } from "react-router-dom";

import Wish from "../components/Wish.js";
import SendButton from "../components/SendButton.js";


class App extends React.Component {
//<p>Дед Мороз уже получил <strong>{wishCount}</strong> желаний</p>
//<p>Вселенная позаботилась уже о <strong>{wishCount}</strong> запросах</p>
  render() {
    var wishCount = 111;
    const originalContext = {
        rootDivClassName: "container wish",
        topTitle: "Хочу, чтобы...",
        doneMessage: {
            done: "Запрос ушел Космосу, теперь осталось расслабиться и перестань об этом думать. Все будет хорошо!",
            again: "Но лучше загадать еще одно желание",
        },
        wishInputPlaceholder: "... формулируй, космос ждет",
        tip: {
            title: "Что здесь происходит?",
            text:  <span>
                "Хочу, хочу, хочу!". Мы постоянно загадываем желания.
                Трем носы и пальцы городским достопримечательностям, портим праздничное шампанское, ловим "22:22"
                на часах. А они, заветные, все не сбываются. Что делать и как с этим бороться? Очень просто.
                Перестать на них фокусироваться. Отправить запрос и заниматься своими делами.
                Он обязательно дойдет куда надо и запишется на исполнение. Для этого всего лишь нужно
                сформулировать его очень-очень конкретно, в позитивной формулировке (без всяких "не"),
                записать в окошко сверху, нажать кнопку <SendButton/> и <em>забыть</em>.
                Космос позаботится о Ваших желаниях. <span>Он уже начал.</span>
              </span>,
        },
        recipient: "Космос",
        social: {
            title: "Расскажите Космосу о своей мечте",
            text: "Как сделать так, чтобы заветное желание исполнилось? Попросить об этом Космос!",
        }
      };
    const newYearContext = {
        rootDivClassName: "container wish new-year",
        topTitle: "Дорогой Дедушка Мороз, ...",
        doneMessage: {
            done: "Желание ушло Деду Морозу. Продолжай хорошо себя вести и оно обязательно сбудется! А если ты весь год был хорошим мальчиком или девочкой, ",
            again: "можешь загадать еще одно.",
        },
        wishInputPlaceholder: "... формулируй, Дед Мороз ждет",
        tip: {
            title: "Как загадать желание на Новый год?",
            text: <span>
                Все очень просто. Под новый год нужно мечтать широко и загадывать самое заветное!
                А чтобы Дед Мороз не ошибся, сформулируй желание очень-очень конкретно, в позитивной формулировке
                (без всяких "не"), запиши в окошко вверху, и нажми кнопку <SendButton/>. Все!
                Дедушка Мороз позаботится о твоих желаниях.
              </span>,
        },
        recipient: "Дед Мороз",
        social: {
            title: "Расскажите Деду Морозу о своем желании",
            text: "Как исполнить желание на Новый год? Попросить об этом Деда Мороза!",
        }
      };

      console.log("Your process.env.PUBLIC_URL", process.env.PUBLIC_URL);

      return(
          <Switch>
            <Route path="/" exact key="original" render={() => <Wish {...originalContext} />} />
            <Route path="/ded_moroz" exact key="newYear" render={() => <Wish {...newYearContext} />} />
          </Switch>
      );
  }
}

export default App;
