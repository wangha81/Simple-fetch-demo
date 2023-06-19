
async function main() {
    console.log("hello");
    const resp  = await fetch("https://celestrak.org/NORAD/elements/gp.php?GROUP=iridium&FORMAT=tle")
    const data = await resp.text()
    console.log(data)
}


await main()

export { };
