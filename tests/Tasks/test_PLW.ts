function buildPwBasicsTestName(feature: string, behavior: string): string {

    const normalize = (str: string): string =>
        str.trim().replace(/\s+/g, ' ');

    const suiteName = normalize(feature || '') || 'general';
    const testName = normalize(behavior || '') || 'general';

    return `pw-basics: ${suiteName} - ${testName}`;
}

console.log(
    buildPwBasicsTestName(" Login ", " opens dashboard ")
);