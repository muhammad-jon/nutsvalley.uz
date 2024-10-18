export function phoneNumberControl(event) {
    const pattern = new RegExp(/[^0-9]/gi);
    const divisionPattern = new RegExp(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/gi);

    const value = event.target.value.replace(pattern, "");
    const firstValue = value.slice(0, 1);
    const secondValue = value.slice(1, value.lenght);
    event.target.value = `+${firstValue}${secondValue}`.replace(
        divisionPattern,
        "$1 ($2) $3-$4-$5"
    );
}
