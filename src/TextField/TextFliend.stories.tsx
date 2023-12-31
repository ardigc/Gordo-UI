import { Meta, StoryObj } from '@storybook/react'
import { TextField, TextFieldProps } from './TextField'
import { Option } from '../option/Option'
const meta = {
  component: TextField,
  title: 'GordoUI/TextField',
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    label: 'hola',
  },
}
export const secondarys: Story = {
  args: {
    label: 'hola ramonchu',
    type: 'password',
    disabled: true,
    className: 'bg-red-500',
    classes: { inputClassName: 'pt-10' },
  },
}
export const sinFondo: Story = {
  args: {
    label: 'sin nada de fondo',
    className: 'bg-opacity-0',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const numeros: Story = {
  args: {
    type: 'number',
    disableUnderline: true,
    placeholder: 'hola',
    margin: 'dense',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const autoFocus: Story = {
  args: {
    type: 'text',
    autoFocus: true,
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const Error: Story = {
  args: {
    type: 'text',
    label: 'Error',
    color: 'error',
    size: 'small',

    helperText: 'craso error',
    // classes: { inputClassName: ' border border-black' },
    className: ' border border-black',

    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const success: Story = {
  args: {
    type: 'text',
    label: 'success',
    color: 'success',
    // classes: { inputClassName: 'rounded-xl border border-black' },
    className: 'rounded-t-xl border border-black',
    fullWidth: true,
    variant: 'outlined',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const secondary: Story = {
  args: {
    type: 'text',
    label: 'secondary',
    color: 'secondary',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
const options = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  'The Dark Knight',
  '12 Angry Men',
  "Schindler's List",
  'Pulp Fiction',
  'The Lord of the Rings: The Return of the King',
  'The Good, the Bad and the Ugly',
  'Fight Club',
  'The Lord of the Rings: The Fellowship of the Ring',
  'Star Wars: Episode V - The Empire Strikes Back',
  'Forrest Gump',
  'Inception',
  'The Lord of the Rings: The Two Towers',
  "One Flew Over the Cuckoo's Nest",
  'Goodfellas',
  'The Matrix',
  'Seven Samurai',
  'Star Wars: Episode IV - A New Hope',
  'City of God',
  'Se7en',
  'The Silence of the Lambs',
  "It's a Wonderful Life",
  'Life Is Beautiful',
  'The Usual Suspects',
  'Léon: The Professional',
  'Spirited Away',
  'Saving Private Ryan',
  'Once Upon a Time in the West',
  'American History X',
  'Interstellar',
  'Casablanca',
  'City Lights',
  'Psycho',
  'The Green Mile',
  'The Intouchables',
  'Modern Times',
  'Raiders of the Lost Ark',
  'Rear Window',
  'The Pianist',
  'The Departed',
  'Terminator 2: Judgment Day',
  'Back to the Future',
  'Whiplash',
  'Gladiator',
  'Memento',
  'The Prestige',
  'The Lion King',
  'Apocalypse Now',
  'Alien',
  'Sunset Boulevard',
  'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  'The Great Dictator',
  'Cinema Paradiso',
  'The Lives of Others',
  'Grave of the Fireflies',
  'Paths of Glory',
  'Django Unchained',
  'The Shining',
  'WALL·E',
  'American Beauty',
  'The Dark Knight Rises',
  'Princess Mononoke',
  'Aliens',
  'Oldboy',
  'Once Upon a Time in America',
  'Witness for the Prosecution',
  'Das Boot',
  'Citizen Kane',
  'North by Northwest',
  'Vertigo',
  'Star Wars: Episode VI - Return of the Jedi',
  'Reservoir Dogs',
  'Braveheart',
  'M',
  'Requiem for a Dream',
  'Amélie',
  'A Clockwork Orange',
  'Like Stars on Earth',
  'Taxi Driver',
  'Lawrence of Arabia',
  'Double Indemnity',
  'Eternal Sunshine of the Spotless Mind',
  'Amadeus',
  'To Kill a Mockingbird',
  'Toy Story 3',
  'Logan',
  'Full Metal Jacket',
  'Dangal',
  'The Sting',
  '2001: A Space Odyssey',
  'Singin in the Rain',
  'Toy Story',
  'Bicycle Thieves',
  'The Kid',
  'Inglourious Basterds',
  'Snatch',
  '3 Idiots',
  'Monty Python and the Holy Grail',
]
export const warning: Story = {
  args: {
    type: 'text',
    label: 'warning',
    color: 'warning',
    variant: 'outlined',

    select: true,
    children: options.map((option) => <Option value={option}>{option}</Option>),
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const search: Story = {
  args: {
    type: 'search',
    label: 'warning',
    color: 'warning',
    margin: 'normal',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const info: Story = {
  args: {
    type: 'text',
    label: 'info',
    color: 'info',
    variant: 'outlined',

    inputProps: { type: 'number' },
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const hiddenLabel: Story = {
  args: {
    type: 'text',
    label: 'info',
    hiddenLabel: true,
    color: 'info',

    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const helperText: Story = {
  args: {
    type: 'text',
    label: 'info',
    helperText: 'holiwi',
    variant: 'filled',
    color: 'info',
    inputProps: { startAdornment: <div>kg</div> },

    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const endadornment: Story = {
  args: {
    type: 'text',
    label: 'info',
    helperText: 'holiwi',
    color: 'info',
    inputProps: { endAdornment: <div>kg</div> },

    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}

export const TextArea: Story = {
  args: {
    type: 'text',
    label: 'info',
    helperText: 'holiwi',
    color: 'info',
    multiLine: true,

    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const TextArearows: Story = {
  args: {
    type: 'text',
    label: 'info',
    helperText: 'holiwi',
    color: 'info',
    rows: 3,
    multiLine: true,

    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}

const TestFunc = ({ args }: { args: TextFieldProps }) => {
  return (
    <nav className="flex justify-around top-0 sticky w-full items-center">
      <TextField {...args} />
    </nav>
  )
}
export const test: Story = {
  render: (args) => <TestFunc args={args} />,
  args: {
    label: 'fdakfasl',
  },
}
