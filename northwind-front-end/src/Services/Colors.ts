class Colors {
    public getRandomColor(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    public getColorByHour(): string {
        const now = new Date();
        let hour = now.getHours();
        if(hour > 12) hour = 24 - hour;
        const hue = Math.floor(hour * 255 / 12);
        const color = `rgb(${hue},${hue},${hue})`;
        return color;
    }

}

const colors = new Colors();

export default colors;