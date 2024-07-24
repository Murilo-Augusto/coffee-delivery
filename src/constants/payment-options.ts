export const paymentOptions = ['credit_card', 'debit_card', 'money'] as const

export type PaymentOptions = (typeof paymentOptions)[number]
