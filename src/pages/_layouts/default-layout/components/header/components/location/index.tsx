import { MapPin } from '@phosphor-icons/react'
import { LocationContainer } from './styles'

interface LocationProps {
  city: string | undefined
  state: string | undefined
}

export function Location({ city, state }: LocationProps) {
  return (
    <LocationContainer>
      <MapPin size={22} weight="fill" />
      <p>
        {city}, {state}
      </p>
    </LocationContainer>
  )
}
