import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import {useEffect, useState} from "react"; // a plugin!

function formatDateInfo(data)
{
    if(data.datetime == undefined)
    {
        return " ";
    }
    return data.datetime.substring(data.datetime.indexOf('T') +1, data.datetime.indexOf('.'));
}
export default function CalendarContainer({user}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        apiGet("https://worldtimeapi.org/api/ip/41.13.204.188");
        console.log("loaded");
    }, []);

    const apiGet = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            });
    };


    return (
        <>
            <h1>{formatDateInfo(data)}</h1>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                initialDate={user.date}
            events={[
                    { title: 'Evento 1', date: '2022-06-12' },
                    { title: 'event 2', date: '2022-10-22' },
                    { title: 'event 3', date: '2022-10-13' }
                ]}
            />
        </>
    );
}