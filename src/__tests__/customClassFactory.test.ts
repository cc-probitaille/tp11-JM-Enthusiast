import { customClassFactory } from "../customClassFactory";

beforeAll(() => {
    process.env.CLASS_NAME = "Auto";
})

describe('Tests de customClassFactory avec réflexion', () => {
    it(`devrait retourner une classe de type "Auto" (de la variable d'environnement CLASS_NAME)`, () => {
        const customClass = customClassFactory(["type", "marque"]);
        const instance = new customClass();
        expect(instance.constructor.name).toEqual("Auto");
        expect(Object.keys(instance).length).toBe(2);
    });
    
    it(`devrait retourner une classe de type "AnonymousClass"`, () => {
        delete process.env.CLASS_NAME;
        const customClass = customClassFactory(["V", "for", "Vendetta"]);
        const instance = new customClass();
        expect(instance.constructor.name).toEqual("AnonymousClass");
        expect(Object.keys(instance).length).toBe(3);
    });
});