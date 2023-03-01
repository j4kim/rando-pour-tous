import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { onMount } from "solid-js";
import locale from "@fullcalendar/core/locales/fr";
import { events } from "~/store";
import dayjs from "dayjs";
import "./Calendar.css";

export default function () {
  let cal: HTMLDivElement;

  onMount(() => {
    const calendar = new Calendar(cal, {
      locale,
      plugins: [dayGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,listYear",
      },
      events: events().map((e) => e.fields),
      eventClick: function ({ view, event }) {
        if (view.type === "listYear") return;
        calendar.changeView("listYear");
        const date = dayjs(event.start).format("YYYY-MM-DD");
        const scroller = cal.querySelector(".fc-scroller");
        const tr: HTMLElement = scroller.querySelector(`[data-date="${date}"]`);
        scroller.scrollTop = tr.offsetTop;
        const eventTr = tr.nextElementSibling;
        eventTr.classList.add("highlight");
        setTimeout(() => eventTr.classList.remove("highlight"), 800);
      },
    });
    calendar.render();
  });

  return <div ref={cal} style="margin: 1em auto; font-size:16px"></div>;
}
