function toPes(value: number): number {
    return Math.round((value * 63) / 255);
}

export function convert(input: string): string {
    const text = input.trim();

    if (!/^\d+$/.test(text) || Number(text) > 255) {
        return "Invalid input. Please enter a whole number between 0 and 255:";
    }

    return `R: ${toPes(Number(text))}`;
}