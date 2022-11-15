
export interface PropOptions {
    value: string,
    label: string
}

export interface Options {
   options: PropOptions;
}

export const options = [
    { value: 'UAN', label: 'UAN' },
    { value: 'EUR', label: 'EUR' },
    { value: 'USD', label: 'USD' }
  ]