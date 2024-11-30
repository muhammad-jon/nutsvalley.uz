function multipleTable(n) {
    let row = " " + "\t";
    for (let i = 1; i <= n; i++) {
        row += i + "\t";
    }
    console.log(row);
    row = "";

    for (let i = 1; i <= n; i++) {
        row += i + "\t";
        for (let j = 1; j <= n; j++) {
            row += i * j + "\t";
        }
        console.log(row);
        row = "";
    }
}
multipleTable(5);