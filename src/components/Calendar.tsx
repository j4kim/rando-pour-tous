import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { onMount } from "solid-js";
import locale from "@fullcalendar/core/locales/fr";
import { events } from "~/store";

export default function () {
  let cal;

  onMount(() => {
    new Calendar(cal, {
      locale,
      plugins: [dayGridPlugin, listPlugin],
      initialView: "listYear",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,listYear",
      },
      events: events().map((e) => e.fields),
    }).render();
  });

  return <div ref={cal} style="margin: 1em auto; font-size:16px"></div>;
}
