export function getDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const isToday = date.toDateString() === today.toDateString();
    const isTomorrow = date.toDateString() === tomorrow.toDateString();

    // Devolver el día de la semana en español
    // const dias = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // const dayOfWeek = dias[date.getDay()];

    const dayNumber = date.getDate();
    const monthName = date.toLocaleString('en-US', { month: 'short' });
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });

    return { isToday, isTomorrow, dayOfWeek, dayNumber, monthName }
}