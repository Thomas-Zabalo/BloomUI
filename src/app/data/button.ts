export interface ButtonGroup {
    label: string;
    prefix: string;
    variants: string[];
    html: string;
    scss: string;
}

export const buttonGroups: ButtonGroup[] = [
    {
        label: 'Default',
        prefix: 'btn',
        variants: ['Default'],
        html: '<div><button class="btn">Default</button></div>',
        scss: '.btn { /* ... */ }'
    },
    {
        label: 'Filled',
        prefix: 'btn--filled-',
        variants: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        html: '<div><button class="btn">Default</button></div>',
        scss: '.btn { /* ... */ }'
    },
    {
        label: 'Soft',
        prefix: 'btn--soft-',
        variants: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        html: '<div><button class="btn">Default</button></div>',
        scss: '.btn { /* ... */ }'
    },
    {
        label: 'Outline',
        prefix: 'btn--outline-',
        variants: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        html: '<div><button class="btn">Default</button></div>',
        scss: '.btn { /* ... */ }'
    },
    {
        label: 'Dashed',
        prefix: 'btn--dashed-',
        variants: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        html: '<div><button class="btn">Default</button></div>',
        scss: '.btn { /* ... */ }'
    }
];
