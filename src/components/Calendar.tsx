import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { onMount } from "solid-js";
import locale from "@fullcalendar/core/locales/fr";
import { events } from "~/store";
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
      events: events().map((e) => ({ ...e.fields, id: e.sys.id })),
      eventClassNames: ({ event }) => "id-" + event.id,
      eventClick: function ({ view, event }) {
        if (view.type === "listYear") return;
        calendar.changeView("listYear");
        const scroller = cal.querySelector(".fc-scroller");
        const eventTrs = [
          ...scroller.querySelectorAll(`.id-${event.id}`),
        ] as HTMLElement[];
        scroller.scrollTop = eventTrs[0].offsetTop - 41;
        eventTrs.forEach((tr) => tr.classList.add("highlight"));
        setTimeout(
          () => eventTrs.forEach((tr) => tr.classList.remove("highlight")),
          1200
        );
      },
    });
    calendar.render();
  });

  return <div ref={cal} style="margin: 1em auto; font-size:16px"></div>;
}
