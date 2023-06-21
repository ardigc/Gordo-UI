import { Meta, StoryObj } from '@storybook/react'
import TextField from './TextField'
import Option from './Option'
const meta = {
  component: TextField,
  title: 'GordoUI/TextField',
  tags: ['autodogs'],
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    label: 'hola',
    classes: { labelClassName: 'bg-blue-200', inputClassName: 'bg-yellow-200' },
  },
}
export const secondary: Story = {
  args: {
    label: 'hola ramonchu',
    type: 'password',
    disabled: true,
    classes: { inputClassName: 'bg-red-500' },
  },
}
export const sinFondo: Story = {
  args: {
    label: 'sin nada de fondo',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const numeros: Story = {
  args: {
    type: 'number',
    disableUnderline: true,
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
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  },
}
export const secundary: Story = {
  args: {
    type: 'text',
    label: 'secundary',
    color: 'secundary',
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
    select: true,
    children: options.map((option) => <Option>{option}</Option>),
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
