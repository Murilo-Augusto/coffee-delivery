import { ComponentProps } from 'react'
import { PaymentOptions } from '../../../../constants/payment-options'

import { PaymentOptionContainer } from './styles'

interface PaymentOptionProps extends ComponentProps<'button'> {
  setPaymentOption: (paymentOption: PaymentOptions) => void
  paymentOption: PaymentOptions
  isSelected: boolean
}

export function PaymentOption({
  paymentOption,
  isSelected,
  setPaymentOption,
  ...rest
}: PaymentOptionProps) {
  return (
    <PaymentOptionContainer
      $isSelected={isSelected}
      onClick={() => setPaymentOption(paymentOption)}
      {...rest}
    ></PaymentOptionContainer>
  )
}
