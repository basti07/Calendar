let calendar;
async function start(){
    const currentDate = new Date();
    const ym = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
    console.log(ym);

    const response = await fetch("/termine");
    const termine = await response.json();

    const calendarEl = document.getElementById("calendar");

    calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'de',
        headerToolbar: {
            start: 'title',
            end: 'today prev,next',
        },
        initialView: "dayGridMonth",
        events: termine,

        eventClick: function(info) {
            console.log(info.event.title + " ,Time: " + info.event.start.toLocaleString("de-DE") + " , Image: " + info.event.image + " Text: " +  info.event.extendedProps.text);

            document.getElementById("event-name").textContent = info.event.title;
            document.getElementById("event-date").textContent = info.event.start.toLocaleString("de-DE").split(",")[0];
            document.getElementById("event-info").textContent = info.event.extendedProps.text;
            document.getElementById("event-image").src = info.event.extendedProps.image;


            document.getElementById("event").showModal();
        }
    });
    calendar.render();
}
start();
//calendar.changeView('timeGridMonth', '2026-01-01');
