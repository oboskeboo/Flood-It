export type templateNames = 'basic' | 'pastel';

type UseColorTemplates = {
    templates: Record<templateNames, string[]>;
    getTemplate: (templateName: templateNames) => string[];
};

const useColorTemplates = (): UseColorTemplates => {
    const templates: Record<templateNames, string[]> = {
        basic: ['red', 'blue', 'orange', 'purple', 'yellow', 'brown', 'green'],
        pastel: ['#FC726D', '#2E4F6D', '#35AE57', '#F7931E', '#FFCE55', '#AF4175', '#29CCC0'],
    };

    const getTemplate = (templateName: templateNames) => templates[templateName];
    return { templates, getTemplate };
};

export default useColorTemplates;
