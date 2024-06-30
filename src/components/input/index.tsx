import { ComponentProps, forwardRef, useState } from 'react'
import { InputContainer, InputContainerOptional } from './styles'

interface InputProps extends ComponentProps<'input'> {
  id?: string
  optional?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, optional, ...props }, ref) => {
    const [hasValue, setHasValue] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
    }

    if (optional) {
      return (
        <InputContainerOptional id={id}>
          <input
            type="text"
            {...props}
            ref={ref}
            onChange={handleInputChange}
          />
          {!hasValue && <span>Opcional</span>}
        </InputContainerOptional>
      )
    }

    return (
      <InputContainer id={id}>
        <input id={id} type="text" {...props} ref={ref} />
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'
