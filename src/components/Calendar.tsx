import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { onMount } from "solid-js";

export default function () {
  let cal;

  onMount(() => {
    new Calendar(cal, {
      plugins: [dayGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,listWeek",
      },
    }).render();
  });

  return <div ref={cal} style="margin: 1em auto; font-size:16px"></div>;
}
