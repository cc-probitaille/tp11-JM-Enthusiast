export const customClassFactory = (properties: string[]) => {
    return new Function(`
        return class ${process.env.CLASS_NAME ? process.env.CLASS_NAME : "AnonymousClass"} {
            constructor() {
                ${properties.map((prop) => `this.${prop} = null;`).join('\n')}
            }
        };
    `)();
}