# Calendar-App
Simpler Kalender mit *fullcalendar* und eigener API.<br>
<br>
![image](/calendar01.png)
![image](calendar02.png)
<br>
## Termin-API
Zur Verwaltung der Termine, wird eine simple Express-API in *server.js* verwendet.<br>
Darin können per GET-Request alle Termine in JSON Format angefragt werden, die daraufhin angezeigt werden können.<br>
Per POST-Request können neue Termine inklusive Bild hinzugefügt werden.

## index.html
Mit '*simplecalendar* wird der Kalender angezeigt.<br>
Beim Klick auf ein Termin wird ein Pop-Up Fenster geöffnet, dass alle Daten des Termins und Bild anzeigt.
