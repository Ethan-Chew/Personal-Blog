export default function ConvertISOToLocale(isoString: string) {
    const date = new Date(isoString);

    const formattedDate = date.toLocaleDateString('en-SG', {
        day: '2-digit',
        month: 'long',
        year: 'numeric' 
    });

    return formattedDate;
}